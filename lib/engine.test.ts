import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateRemainingSeconds,
  canStartRealExam,
  evaluateAnswer,
  filterQuestions,
  formatDurationClock,
  getQuestionsForAttempt,
  getQuestionTopicParts,
  isAttemptExpired,
  scoreAttempt,
} from './engine';
import { computeDashboardMetrics } from './analytics';
import {
  applyOfficialAnswerKeysToData,
  materializeImportPackage,
  validateImportPackage,
} from './import-validator';
import { OFFICIAL_UFRR_EXAMS } from './catalog';
import { OFFICIAL_UFRR_QUESTIONS, UFRR_2026_EXAM, UFRR_2026_QUESTIONS } from './data';
import type {
  ExamAttempt,
  ImportPackageSchema,
  OfficialAnswerKeyPackage,
  QuestionAnswerRecord,
  QuestionFilters,
} from './types';

const DEFAULT_FILTERS: QuestionFilters = {
  subject: 'Todas',
  foreignLanguage: 'Todas',
  topic: 'Todos',
  subtopic: 'Todos',
  yearFrom: null,
  yearTo: null,
  edition: 'Todas',
  modality: 'Todas',
  examId: 'Todas',
  difficulty: 'Todas',
  status: 'Todas',
  onlyWithImages: false,
  keyword: '',
};

test('calculateRemainingSeconds computes remaining time from persisted endsAt', () => {
  const now = Date.UTC(2026, 10, 14, 12, 0, 0);
  const endsAt = new Date(now + 1800 * 1000).toISOString();
  assert.equal(calculateRemainingSeconds(endsAt, now), 1800);
  assert.equal(calculateRemainingSeconds(endsAt, now + 1850 * 1000), 0);
  assert.equal(calculateRemainingSeconds(null, now), 0);
});

test('isAttemptExpired detects expired real-mode attempts only', () => {
  const now = Date.UTC(2026, 10, 14, 12, 0, 0);
  const past = new Date(now - 5000).toISOString();
  const future = new Date(now + 60000).toISOString();

  assert.equal(
    isAttemptExpired({ mode: 'real', status: 'in_progress', endsAt: past }, now),
    true
  );
  assert.equal(
    isAttemptExpired({ mode: 'real', status: 'in_progress', endsAt: future }, now),
    false
  );
  assert.equal(
    isAttemptExpired({ mode: 'treino', status: 'in_progress', endsAt: past }, now),
    false
  );
  assert.equal(
    isAttemptExpired({ mode: 'real', status: 'completed', endsAt: past }, now),
    false
  );
});

test('canStartRealExam validates complete 72-question UFRR editions and blocks incomplete shells', () => {
  const esQuestions = getQuestionsForAttempt(
    OFFICIAL_UFRR_QUESTIONS,
    'ufrr-integral-2026',
    'Espanhol'
  );
  assert.equal(esQuestions.length, 72);

  const validCheck = canStartRealExam(UFRR_2026_EXAM, esQuestions.length);
  assert.equal(validCheck.allowed, true);

  const partialCheck = canStartRealExam(UFRR_2026_EXAM, 50);
  assert.equal(partialCheck.allowed, false);
  assert.match(partialCheck.reason ?? '', /incompleta/i);

  const unimportedShell = {
    ...UFRR_2026_EXAM,
    importStatus: 'awaiting_import' as const,
  };
  const blockedCheck = canStartRealExam(unimportedShell, 0);
  assert.equal(blockedCheck.allowed, false);
});

test('getQuestionsForAttempt selects 63 core + 9 chosen foreign language questions in order', () => {
  for (const lang of ['Espanhol', 'Inglês', 'Francês'] as const) {
    const sitting = getQuestionsForAttempt(
      UFRR_2026_QUESTIONS,
      'ufrr-integral-2026',
      lang
    );
    assert.equal(sitting.length, 72);
    assert.equal(sitting[0].originalNumber, 1);
    assert.equal(sitting[62].originalNumber, 63);
    assert.equal(sitting[63].originalNumber, 64);
    assert.equal(sitting[71].originalNumber, 72);
    for (let i = 63; i < 72; i++) {
      assert.equal(sitting[i].foreignLanguage, lang);
    }
  }
});

test('scoreAttempt respects annulled questions, pending answer keys, and calculates subject breakdown', () => {
  const q1 = {
    ...UFRR_2026_QUESTIONS[1],
    answerKey: { questionId: UFRR_2026_QUESTIONS[1].id, correctLetter: 'C' as const },
  };
  const q2 = {
    ...UFRR_2026_QUESTIONS[2],
    answerKey: {
      questionId: UFRR_2026_QUESTIONS[2].id,
      correctLetter: 'B' as const,
      annulled: true,
    },
  };
  const q3 = {
    ...UFRR_2026_QUESTIONS[3],
    answerKey: { questionId: UFRR_2026_QUESTIONS[3].id, correctLetter: 'D' as const },
  };
  const qPending = UFRR_2026_QUESTIONS[0]; // correctLetter: null

  const summary = scoreAttempt(
    {
      [q1.id]: 'C',
      [q2.id]: 'A',
      [q3.id]: 'A',
      [qPending.id]: 'B',
    },
    [q1, q2, q3, qPending]
  );

  assert.equal(summary.totalQuestions, 4);
  assert.equal(summary.answeredCount, 4);
  assert.equal(summary.correctCount, 2);
  assert.equal(summary.incorrectCount, 1);
  assert.equal(summary.annulledCount, 1);
  assert.equal(summary.pendingKeyCount, 1);
  assert.equal(summary.gradedCount, 3);
  assert.equal(summary.accuracyPercent, 66.7);

  // Pure pending_gabarito exam should yield 0 graded and 0% without throwing
  const pendingOnly = scoreAttempt(
    { [qPending.id]: 'B' },
    [qPending]
  );
  assert.equal(pendingOnly.answeredCount, 1);
  assert.equal(pendingOnly.pendingKeyCount, 1);
  assert.equal(pendingOnly.gradedCount, 0);
  assert.equal(pendingOnly.accuracyPercent, 0);
});

test('evaluateAnswer distinguishes pending gabarito from wrong answer', () => {
  const pendingEv = evaluateAnswer('A', {
    questionId: 'ufrr-2026-q01',
    correctLetter: null,
  });
  assert.equal(pendingEv.hasOfficialKey, false);
  assert.equal(pendingEv.isCorrect, false);
  assert.equal(pendingEv.wasAnnulled, false);
});

test('filterQuestions combines subject, topic, year, wrong status, and ignores pending keys in Erradas', () => {
  const chemQ = UFRR_2026_QUESTIONS.find(
    (q) => q.classification.subject === 'Química' && q.graphics.length === 0
  )!;
  const physImgQ = UFRR_2026_QUESTIONS.find(
    (q) => q.graphics.length > 0 && q.id !== chemQ.id
  )!;
  const subset = [chemQ, physImgQ];

  const records: QuestionAnswerRecord[] = [
    {
      id: 'r1',
      questionId: chemQ.id,
      subject: chemQ.classification.subject,
      topic: chemQ.classification.topic,
      year: chemQ.year,
      examId: chemQ.examId,
      selectedLetter: 'A',
      isCorrect: false,
      wasAnnulled: false,
      hasOfficialKey: true,
      timeSpentMs: 42000,
      answeredAt: '2026-11-14T10:00:00.000Z',
      source: 'bank',
      isDemoFixture: false,
    },
    {
      id: 'r2',
      questionId: physImgQ.id,
      subject: physImgQ.classification.subject,
      topic: physImgQ.classification.topic,
      year: physImgQ.year,
      examId: physImgQ.examId,
      selectedLetter: 'B',
      isCorrect: false,
      wasAnnulled: false,
      hasOfficialKey: false,
      timeSpentMs: 30000,
      answeredAt: '2026-11-14T10:05:00.000Z',
      source: 'bank',
      isDemoFixture: false,
    },
  ];

  const filtered = filterQuestions(
    subset,
    {
      ...DEFAULT_FILTERS,
      subject: 'Química',
      topic: chemQ.classification.topic,
      yearFrom: 2020,
      yearTo: 2026,
      status: 'Erradas',
    },
    records,
    {}
  );

  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].id, chemQ.id);

  const allWrong = filterQuestions(
    subset,
    { ...DEFAULT_FILTERS, status: 'Erradas' },
    records,
    {}
  );
  // physImgQ had hasOfficialKey: false, so it must NOT show up under "Erradas"
  assert.deepEqual(
    allWrong.map((q) => q.id),
    [chemQ.id]
  );

  const withImages = filterQuestions(
    subset,
    { ...DEFAULT_FILTERS, onlyWithImages: true },
    records,
    {}
  );
  assert.equal(withImages.length, 1);
  assert.equal(withImages[0].id, physImgQ.id);
});

test('computeDashboardMetrics returns clean zeros with zero fake stats when empty', () => {
  const empty = computeDashboardMetrics([], [], [], {});
  assert.equal(empty.totalSolvedUnique, 0);
  assert.equal(empty.accuracyPercent, 0);
  assert.equal(empty.totalStudySeconds, 0);
  assert.equal(empty.subjectMetrics.length, 0);
  assert.equal(empty.recentActivity.length, 0);
});

test('applyOfficialAnswerKeysToData retroactively grades saved attempts and question records', () => {
  const q1 = UFRR_2026_QUESTIONS[0];
  const q2 = UFRR_2026_QUESTIONS[1];

  const priorAttempt: ExamAttempt = {
    id: 'att-2026-1',
    examId: 'ufrr-integral-2026',
    examName: UFRR_2026_EXAM.name,
    selectedLanguage: 'Inglês',
    mode: 'treino',
    status: 'completed',
    startedAt: '2026-11-14T10:00:00.000Z',
    endsAt: null,
    finishedAt: '2026-11-14T11:00:00.000Z',
    durationSecondsConfigured: 18000,
    elapsedSeconds: 3600,
    currentQuestionIndex: 0,
    answers: {
      [q1.id]: 'C',
      [q2.id]: 'A',
    },
    flaggedQuestionIds: [],
    questionTimeSpentMs: {},
    isDemoFixture: false,
  };

  const priorRecords: QuestionAnswerRecord[] = [
    {
      id: 'rec-1',
      questionId: q1.id,
      subject: q1.classification.subject,
      topic: q1.classification.topic,
      year: 2026,
      examId: 'ufrr-integral-2026',
      selectedLetter: 'C',
      isCorrect: false,
      wasAnnulled: false,
      hasOfficialKey: false,
      timeSpentMs: 15000,
      answeredAt: '2026-11-14T10:15:00.000Z',
      source: 'simulado',
      attemptId: priorAttempt.id,
      isDemoFixture: false,
    },
    {
      id: 'rec-2',
      questionId: q2.id,
      subject: q2.classification.subject,
      topic: q2.classification.topic,
      year: 2026,
      examId: 'ufrr-integral-2026',
      selectedLetter: 'A',
      isCorrect: false,
      wasAnnulled: false,
      hasOfficialKey: false,
      timeSpentMs: 15000,
      answeredAt: '2026-11-14T10:16:00.000Z',
      source: 'simulado',
      attemptId: priorAttempt.id,
      isDemoFixture: false,
    },
  ];

  const keyPkg: OfficialAnswerKeyPackage = {
    schemaVersion: '1.0',
    examId: 'ufrr-integral-2026',
    sourceDocumentName: 'gabarito-definitivo-2026.pdf',
    entries: [
      { questionId: q1.id, correctLetter: 'C' },
      { questionId: q2.id, correctLetter: 'B' },
    ],
  };

  const result = applyOfficialAnswerKeysToData(
    keyPkg,
    OFFICIAL_UFRR_EXAMS,
    UFRR_2026_QUESTIONS,
    [priorAttempt],
    priorRecords
  );

  assert.equal(result.matchedCount, 2);
  assert.equal(result.updatedExam?.answerKeyStatus, 'partial');
  assert.equal(result.updatedRecords.length, 2);
  assert.equal(result.updatedRecords[0].hasOfficialKey, true);
  assert.equal(result.updatedRecords[0].isCorrect, true);
  assert.equal(result.updatedRecords[1].hasOfficialKey, true);
  assert.equal(result.updatedRecords[1].isCorrect, false);
  assert.equal(result.updatedAttempts.length, 1);
  assert.equal(result.updatedAttempts[0].scoreSummary?.correctCount, 1);
  assert.equal(result.updatedAttempts[0].scoreSummary?.incorrectCount, 1);
});

test('validateImportPackage detects incomplete questions, duplicates, and validates complete packages', () => {
  const validPkg: ImportPackageSchema = {
    schemaVersion: '1.0',
    exam: {
      id: 'ufrr-test-pkg',
      name: 'UFRR Teste Validado',
      year: 2025,
      edition: 'UFRR 2025',
      modality: 'Prova Integral',
      totalQuestions: 1,
      officialDurationSeconds: 18000,
      hasEssay: false,
      subjectBreakdown: [{ subject: 'Biologia', questionCount: 1 }],
    },
    provenance: {
      institution: 'UFRR / CPV',
      documentName: 'caderno-2025.pdf',
      isDemoFixture: false,
    },
    questions: [
      {
        originalNumber: 1,
        subject: 'Biologia',
        topic: 'Citologia',
        stem: 'Sobre a organização das membranas biológicas em células eucarióticas, assinale a alternativa correta:',
        alternatives: [
          { letter: 'A', text: 'Bicamada fosfolipídica fluida com proteínas integradas.' },
          { letter: 'B', text: 'Parede exclusiva de quitina.' },
          { letter: 'C', text: 'Ausência de colesterol em células animais.' },
          { letter: 'D', text: 'Estrutura rígida cristalina impermeável.' },
          { letter: 'E', text: 'Composição puramente glicídica.' },
        ],
        correctLetter: 'A',
      },
    ],
  };

  const report = validateImportPackage(validPkg, UFRR_2026_QUESTIONS, OFFICIAL_UFRR_EXAMS);
  assert.equal(report.validForRealSimulation, true);
  assert.equal(report.errors.length, 0);

  const materialized = materializeImportPackage(validPkg);
  assert.equal(materialized.exam.importStatus, 'validated');
  assert.equal(materialized.questions.length, 1);

  const brokenPkg: ImportPackageSchema = {
    ...validPkg,
    questions: [
      {
        ...validPkg.questions[0],
        id: UFRR_2026_QUESTIONS[0].id,
        correctLetter: null,
        sharedTextIds: ['missing-text'],
      },
    ],
  };
  const brokenReport = validateImportPackage(brokenPkg, UFRR_2026_QUESTIONS, OFFICIAL_UFRR_EXAMS);
  assert.equal(brokenReport.validForRealSimulation, false);
  assert.equal(brokenReport.duplicates.length, 1);
  assert.ok(brokenReport.errors.some((e) => e.code === 'BROKEN_SHARED_TEXT_REF'));
});

test('formatDurationClock formats HH:MM:SS cleanly', () => {
  assert.equal(formatDurationClock(18000), '05:00:00');
  assert.equal(formatDurationClock(65), '00:01:05');
});

test('getQuestionTopicParts extracts explicit subtopics and em-dash topic hierarchies', () => {
  assert.deepEqual(
    getQuestionTopicParts({
      classification: {
        subject: 'Física',
        topic: 'Mecânica — Cinemática escalar',
      },
    }),
    { topic: 'Mecânica', subtopic: 'Cinemática escalar' }
  );

  assert.deepEqual(
    getQuestionTopicParts({
      classification: {
        subject: 'Química',
        topic: 'Físico-Química',
        subtopic: 'Termoquímica',
      },
    }),
    { topic: 'Físico-Química', subtopic: 'Termoquímica' }
  );

  assert.deepEqual(
    getQuestionTopicParts({
      classification: {
        subject: 'História',
        topic: 'História do Brasil',
      },
    }),
    { topic: 'História do Brasil' }
  );
});

test('filterQuestions spans all 450 UFRR questions (2022-2026) and filters by derived topic, subtopic, edition, modality, year range, and foreign language', () => {
  assert.equal(OFFICIAL_UFRR_QUESTIONS.length, 450);

  const all = filterQuestions(OFFICIAL_UFRR_QUESTIONS, DEFAULT_FILTERS, [], {});
  assert.equal(all.length, 450);

  const ufrr2022 = filterQuestions(
    OFFICIAL_UFRR_QUESTIONS,
    { ...DEFAULT_FILTERS, edition: 'UFRR 2022', modality: 'Prova Integral' },
    [],
    {}
  );
  assert.equal(ufrr2022.length, 90);
  assert.ok(ufrr2022.every((q) => q.year === 2022));

  const yearRange = filterQuestions(
    OFFICIAL_UFRR_QUESTIONS,
    { ...DEFAULT_FILTERS, yearFrom: 2023, yearTo: 2024 },
    [],
    {}
  );
  assert.equal(yearRange.length, 180);

  const spanish = filterQuestions(
    OFFICIAL_UFRR_QUESTIONS,
    { ...DEFAULT_FILTERS, foreignLanguage: 'Espanhol' },
    [],
    {}
  );
  assert.equal(spanish.length, 45);
  assert.ok(spanish.every((q) => q.foreignLanguage === 'Espanhol'));

  const sampleWithSubtopic = OFFICIAL_UFRR_QUESTIONS.find(
    (q) => Boolean(getQuestionTopicParts(q).subtopic)
  )!;
  const parts = getQuestionTopicParts(sampleWithSubtopic);
  const byTopicAndSubtopic = filterQuestions(
    OFFICIAL_UFRR_QUESTIONS,
    {
      ...DEFAULT_FILTERS,
      subject: sampleWithSubtopic.classification.subject,
      topic: parts.topic,
      subtopic: parts.subtopic!,
    },
    [],
    {}
  );
  assert.ok(byTopicAndSubtopic.length >= 1);
  assert.ok(byTopicAndSubtopic.some((q) => q.id === sampleWithSubtopic.id));
});

