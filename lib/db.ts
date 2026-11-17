import { openDB, type DBSchema, type IDBPDatabase } from 'idb';
import type {
  ExamAttempt,
  ExamEdition,
  Question,
  QuestionAnswerRecord,
  ScratchpadDocument,
  SharedText,
  StudyNotebook,
  TransferAttemptRecord,
  UserQuestionFlags,
} from './types';
import {
  OFFICIAL_UFRR_EXAMS,
  OFFICIAL_UFRR_QUESTIONS,
  OFFICIAL_UFRR_SHARED_TEXTS,
} from './data';
import { hasQuestionAnswerKey } from './engine';

interface UFRRStudyDB extends DBSchema {
  exams: {
    key: string;
    value: ExamEdition;
  };
  questions: {
    key: string;
    value: Question;
    indexes: { 'by-exam': string };
  };
  sharedTexts: {
    key: string;
    value: SharedText;
    indexes: { 'by-exam': string };
  };
  attempts: {
    key: string;
    value: ExamAttempt;
    indexes: { 'by-exam': string; 'by-status': string };
  };
  questionRecords: {
    key: string;
    value: QuestionAnswerRecord;
    indexes: { 'by-question': string };
  };
  userFlags: {
    key: string;
    value: UserQuestionFlags;
  };
  scratchpads: {
    key: string;
    value: ScratchpadDocument;
    indexes: { 'by-target': string };
  };
  notebooks: {
    key: string;
    value: StudyNotebook;
  };
  transferAttempts: {
    key: string;
    value: TransferAttemptRecord;
  };
  meta: {
    key: string;
    value: { key: string; value: unknown };
  };
}

const DB_NAME = 'ufrr-study-db';
const DB_VERSION = 2;
const CATALOG_VERSION_KEY = 'catalog_ufrr_v4_no_demo';

let dbPromise: Promise<IDBPDatabase<UFRRStudyDB>> | null = null;

export function getDB(): Promise<IDBPDatabase<UFRRStudyDB>> {
  if (typeof window === 'undefined') {
    throw new Error('IndexedDB is only available in browser environments.');
  }
  if (!dbPromise) {
    dbPromise = openDB<UFRRStudyDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('exams')) {
          db.createObjectStore('exams', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('questions')) {
          const qStore = db.createObjectStore('questions', { keyPath: 'id' });
          qStore.createIndex('by-exam', 'examId');
        }
        if (!db.objectStoreNames.contains('sharedTexts')) {
          const stStore = db.createObjectStore('sharedTexts', { keyPath: 'id' });
          stStore.createIndex('by-exam', 'examId');
        }
        if (!db.objectStoreNames.contains('attempts')) {
          const aStore = db.createObjectStore('attempts', { keyPath: 'id' });
          aStore.createIndex('by-exam', 'examId');
          aStore.createIndex('by-status', 'status');
        }
        if (!db.objectStoreNames.contains('questionRecords')) {
          const rStore = db.createObjectStore('questionRecords', { keyPath: 'id' });
          rStore.createIndex('by-question', 'questionId');
        }
        if (!db.objectStoreNames.contains('userFlags')) {
          db.createObjectStore('userFlags', { keyPath: 'questionId' });
        }
        if (!db.objectStoreNames.contains('scratchpads')) {
          const sStore = db.createObjectStore('scratchpads', { keyPath: 'id' });
          sStore.createIndex('by-target', 'targetId');
        }
        if (!db.objectStoreNames.contains('notebooks')) {
          db.createObjectStore('notebooks', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('transferAttempts')) {
          db.createObjectStore('transferAttempts', { keyPath: 'questionId' });
        }
        if (!db.objectStoreNames.contains('meta')) {
          db.createObjectStore('meta', { keyPath: 'key' });
        }
      },
    });
  }
  return dbPromise;
}

export async function initializeDatabaseSeed(): Promise<void> {
  const db = await getDB();
  const [initialized, catalogMeta, existingExams, existingQuestions] = await Promise.all([
    db.get('meta', 'seeded_v1'),
    db.get('meta', CATALOG_VERSION_KEY),
    db.getAll('exams'),
    db.getAll('questions'),
  ]);

  const existingExamsById = new Map(existingExams.map((e) => [e.id, e]));
  const existingQuestionsById = new Map(existingQuestions.map((q) => [q.id, q]));
  const officialExamIds = new Set(OFFICIAL_UFRR_EXAMS.map((e) => e.id));
  const hasAnyDemoRecords =
    existingExams.some((e) => e.isDemoFixture || e.id.startsWith('demo-')) ||
    existingQuestions.some(
      (q) => q.provenance.isDemoFixture || q.id.startsWith('demo-') || q.examId.startsWith('demo-')
    );

  const needsCatalogSync =
    !catalogMeta?.value ||
    hasAnyDemoRecords ||
    OFFICIAL_UFRR_EXAMS.some((exam) => {
      const stored = existingExamsById.get(exam.id);
      return !stored || stored.importStatus === 'awaiting_import';
    }) ||
    existingQuestions.filter((q) => !q.provenance.isDemoFixture).length <
      OFFICIAL_UFRR_QUESTIONS.length;

  if (!initialized || needsCatalogSync) {
    const tx = db.transaction(
      [
        'exams',
        'questions',
        'sharedTexts',
        'attempts',
        'questionRecords',
        'userFlags',
        'scratchpads',
        'meta',
      ],
      'readwrite'
    );

    if (needsCatalogSync) {
      const ops: Promise<unknown>[] = [];

      // Purge any legacy demo exams, questions, shared texts, attempts, and records
      for (const oldExam of existingExams) {
        if (
          oldExam.isDemoFixture ||
          oldExam.id.startsWith('demo-') ||
          (oldExam.importStatus === 'awaiting_import' && !officialExamIds.has(oldExam.id))
        ) {
          ops.push(tx.objectStore('exams').delete(oldExam.id));
        }
      }

      for (const oldQ of existingQuestions) {
        if (
          oldQ.provenance.isDemoFixture ||
          oldQ.id.startsWith('demo-') ||
          oldQ.examId.startsWith('demo-')
        ) {
          ops.push(tx.objectStore('questions').delete(oldQ.id));
          ops.push(tx.objectStore('userFlags').delete(oldQ.id));
          ops.push(tx.objectStore('scratchpads').delete(`q-note-${oldQ.id}`));
        }
      }

      const [existingSharedTexts, existingAttempts, existingRecords] = await Promise.all([
        tx.objectStore('sharedTexts').getAll(),
        tx.objectStore('attempts').getAll(),
        tx.objectStore('questionRecords').getAll(),
      ]);

      for (const st of existingSharedTexts) {
        if (st.isDemoFixture || st.id.startsWith('demo-') || st.examId.startsWith('demo-')) {
          ops.push(tx.objectStore('sharedTexts').delete(st.id));
        }
      }

      for (const att of existingAttempts) {
        if (att.isDemoFixture || att.examId.startsWith('demo-')) {
          ops.push(tx.objectStore('attempts').delete(att.id));
        }
      }

      for (const rec of existingRecords) {
        if (
          rec.isDemoFixture ||
          rec.examId.startsWith('demo-') ||
          rec.questionId.startsWith('demo-')
        ) {
          ops.push(tx.objectStore('questionRecords').delete(rec.id));
        }
      }

      for (const exam of OFFICIAL_UFRR_EXAMS) {
        const existing = existingExamsById.get(exam.id);
        const preserveStatus =
          existing &&
          (existing.answerKeyStatus === 'complete' ||
            existing.answerKeyStatus === 'partial');
        ops.push(
          tx.objectStore('exams').put(
            preserveStatus
              ? {
                  ...exam,
                  answerKeyStatus: existing.answerKeyStatus,
                }
              : exam
          )
        );
      }

      for (const st of OFFICIAL_UFRR_SHARED_TEXTS) {
        ops.push(tx.objectStore('sharedTexts').put(st));
      }

      for (const q of OFFICIAL_UFRR_QUESTIONS) {
        const existingQ = existingQuestionsById.get(q.id);
        if (existingQ && hasQuestionAnswerKey(existingQ.answerKey)) {
          ops.push(
            tx.objectStore('questions').put({
              ...q,
              answerKey: existingQ.answerKey,
              provenance: {
                ...q.provenance,
                notes: existingQ.provenance?.notes ?? q.provenance.notes,
              },
            })
          );
        } else {
          ops.push(tx.objectStore('questions').put(q));
        }
      }

      ops.push(tx.objectStore('meta').put({ key: CATALOG_VERSION_KEY, value: true }));
      ops.push(tx.objectStore('meta').put({ key: 'demo_fixture_enabled', value: false }));
      await Promise.all(ops);
    }

    if (!initialized) {
      await Promise.all([
        tx.objectStore('meta').put({ key: 'seeded_v1', value: true }),
        tx.objectStore('meta').put({ key: 'demo_fixture_enabled', value: false }),
      ]);
    }

    await tx.done;
  }
}

export async function loadAllStudyData(): Promise<{
  exams: ExamEdition[];
  questions: Question[];
  sharedTexts: SharedText[];
  attempts: ExamAttempt[];
  questionRecords: QuestionAnswerRecord[];
  userFlags: Record<string, UserQuestionFlags>;
  scratchpads: Record<string, ScratchpadDocument>;
  notebooks: StudyNotebook[];
  transferAttempts: Record<string, TransferAttemptRecord>;
  palmRejectionDefault: boolean;
}> {
  await initializeDatabaseSeed();
  const db = await getDB();

  const [
    exams,
    questions,
    sharedTexts,
    attempts,
    questionRecords,
    flagsList,
    scratchpadList,
    notebooks,
    transferAttemptList,
    palmMeta,
  ] = await Promise.all([
    db.getAll('exams'),
    db.getAll('questions'),
    db.getAll('sharedTexts'),
    db.getAll('attempts'),
    db.getAll('questionRecords'),
    db.getAll('userFlags'),
    db.getAll('scratchpads'),
    db.getAll('notebooks'),
    db.getAll('transferAttempts'),
    db.get('meta', 'palm_rejection_default'),
  ]);

  const userFlags: Record<string, UserQuestionFlags> = {};
  for (const f of flagsList) {
    if (f.questionId.startsWith('demo-')) continue;
    userFlags[f.questionId] = f;
  }

  const scratchpads: Record<string, ScratchpadDocument> = {};
  for (const s of scratchpadList) {
    if (s.targetId.startsWith('demo-')) continue;
    scratchpads[s.id] = s;
  }

  const transferAttempts: Record<string, TransferAttemptRecord> = {};
  for (const ta of transferAttemptList) {
    transferAttempts[ta.questionId] = ta;
  }

  return {
    exams: exams
      .filter((e) => !e.isDemoFixture && !e.id.startsWith('demo-'))
      .sort((a, b) => b.year - a.year || a.name.localeCompare(b.name)),
    questions: questions
      .filter((q) => !q.provenance.isDemoFixture && !q.id.startsWith('demo-'))
      .sort((a, b) => b.year - a.year || a.originalNumber - b.originalNumber),
    sharedTexts: sharedTexts.filter(
      (st) => !st.isDemoFixture && !st.id.startsWith('demo-')
    ),
    attempts: attempts
      .filter((a) => !a.isDemoFixture && !a.examId.startsWith('demo-'))
      .sort((a, b) => b.startedAt.localeCompare(a.startedAt)),
    questionRecords: questionRecords
      .filter((r) => !r.isDemoFixture && !r.questionId.startsWith('demo-'))
      .sort((a, b) => b.answeredAt.localeCompare(a.answeredAt)),
    userFlags,
    scratchpads,
    notebooks: notebooks.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    transferAttempts,
    palmRejectionDefault: palmMeta ? Boolean(palmMeta.value) : true,
  };
}

export async function putAttempt(attempt: ExamAttempt): Promise<void> {
  const db = await getDB();
  await db.put('attempts', attempt);
}

export async function putQuestionRecord(record: QuestionAnswerRecord): Promise<void> {
  const db = await getDB();
  await db.put('questionRecords', record);
}

export async function putQuestionRecordsBatch(
  records: QuestionAnswerRecord[]
): Promise<void> {
  const db = await getDB();
  const tx = db.transaction('questionRecords', 'readwrite');
  for (const r of records) {
    await tx.store.put(r);
  }
  await tx.done;
}

export async function putUserFlags(flags: UserQuestionFlags): Promise<void> {
  const db = await getDB();
  await db.put('userFlags', flags);
}

export async function putScratchpad(doc: ScratchpadDocument): Promise<void> {
  const db = await getDB();
  await db.put('scratchpads', doc);
}

export async function putNotebook(notebook: StudyNotebook): Promise<void> {
  const db = await getDB();
  await db.put('notebooks', notebook);
}

export async function deleteNotebookById(id: string): Promise<void> {
  const db = await getDB();
  await db.delete('notebooks', id);
}

export async function putTransferAttempt(record: TransferAttemptRecord): Promise<void> {
  const db = await getDB();
  await db.put('transferAttempts', record);
}

export async function setMetaValue(key: string, value: unknown): Promise<void> {
  const db = await getDB();
  await db.put('meta', { key, value });
}



export async function commitImportedExamData(payload: {
  exam: ExamEdition;
  sharedTexts: SharedText[];
  questions: Question[];
}): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(['exams', 'sharedTexts', 'questions'], 'readwrite');
  await tx.objectStore('exams').put(payload.exam);
  for (const st of payload.sharedTexts) {
    await tx.objectStore('sharedTexts').put(st);
  }
  for (const q of payload.questions) {
    await tx.objectStore('questions').put(q);
  }
  await tx.done;
}

export async function commitBatchAnswerKeyUpdate(payload: {
  exam: ExamEdition | null;
  questions: Question[];
  attempts: ExamAttempt[];
  records: QuestionAnswerRecord[];
}): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(
    ['exams', 'questions', 'attempts', 'questionRecords'],
    'readwrite'
  );
  if (payload.exam) {
    await tx.objectStore('exams').put(payload.exam);
  }
  for (const q of payload.questions) {
    await tx.objectStore('questions').put(q);
  }
  for (const att of payload.attempts) {
    await tx.objectStore('attempts').put(att);
  }
  for (const rec of payload.records) {
    await tx.objectStore('questionRecords').put(rec);
  }
  await tx.done;
}

export interface BackupPayload {
  backupVersion: '1.0';
  exportedAt: string;
  app: 'UFRR Study';
  data: {
    exams: ExamEdition[];
    questions: Question[];
    sharedTexts: SharedText[];
    attempts: ExamAttempt[];
    questionRecords: QuestionAnswerRecord[];
    userFlags: UserQuestionFlags[];
    scratchpads: ScratchpadDocument[];
    notebooks: StudyNotebook[];
    transferAttempts?: TransferAttemptRecord[];
  };
}

export async function exportFullBackup(): Promise<BackupPayload> {
  const db = await getDB();
  const [
    exams,
    questions,
    sharedTexts,
    attempts,
    questionRecords,
    userFlags,
    scratchpads,
    notebooks,
    transferAttempts,
  ] = await Promise.all([
    db.getAll('exams'),
    db.getAll('questions'),
    db.getAll('sharedTexts'),
    db.getAll('attempts'),
    db.getAll('questionRecords'),
    db.getAll('userFlags'),
    db.getAll('scratchpads'),
    db.getAll('notebooks'),
    db.getAll('transferAttempts'),
  ]);

  return {
    backupVersion: '1.0',
    exportedAt: new Date().toISOString(),
    app: 'UFRR Study',
    data: {
      exams,
      questions,
      sharedTexts,
      attempts,
      questionRecords,
      userFlags,
      scratchpads,
      notebooks,
      transferAttempts,
    },
  };
}

export async function restoreFullBackup(payload: BackupPayload): Promise<void> {
  if (
    !payload ||
    payload.backupVersion !== '1.0' ||
    payload.app !== 'UFRR Study' ||
    !payload.data
  ) {
    throw new Error('Arquivo de backup inválido ou incompatível com UFRR Study.');
  }
  const db = await getDB();
  const stores = [
    'exams',
    'questions',
    'sharedTexts',
    'attempts',
    'questionRecords',
    'userFlags',
    'scratchpads',
    'notebooks',
    'transferAttempts',
  ] as const;

  const tx = db.transaction(stores, 'readwrite');
  for (const storeName of stores) {
    await tx.objectStore(storeName).clear();
  }
  for (const item of payload.data.exams ?? []) await tx.objectStore('exams').put(item);
  for (const item of payload.data.questions ?? []) await tx.objectStore('questions').put(item);
  for (const item of payload.data.sharedTexts ?? []) await tx.objectStore('sharedTexts').put(item);
  for (const item of payload.data.attempts ?? []) await tx.objectStore('attempts').put(item);
  for (const item of payload.data.questionRecords ?? []) await tx.objectStore('questionRecords').put(item);
  for (const item of payload.data.userFlags ?? []) await tx.objectStore('userFlags').put(item);
  for (const item of payload.data.scratchpads ?? []) await tx.objectStore('scratchpads').put(item);
  for (const item of payload.data.notebooks ?? []) await tx.objectStore('notebooks').put(item);
  for (const item of payload.data.transferAttempts ?? []) await tx.objectStore('transferAttempts').put(item);
  await tx.done;
}
