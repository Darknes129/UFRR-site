'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  applyOfficialAnswerKeysToData,
  materializeImportPackage,
} from './import-validator';
import {
  OFFICIAL_UFRR_EXAMS,
  OFFICIAL_UFRR_QUESTIONS,
  OFFICIAL_UFRR_SHARED_TEXTS,
} from './data';
import { getQuestionsForAttempt, isAttemptExpired } from './engine';
import type {
  AlternativeLetter,
  ExamAttempt,
  ExamEdition,
  ForeignLanguageOption,
  ImportPackageSchema,
  OfficialAnswerKeyPackage,
  Question,
  QuestionAnswerRecord,
  ScratchpadDocument,
  SharedText,
  SimulationMode,
  StudyNotebook,
  TransferAttemptRecord,
  UserQuestionFlags,
  QuestionResolution,
  ResolutionCoverageSummary,
} from './types';
import {
  commitBatchAnswerKeyUpdate,
  commitImportedExamData,
  deleteNotebookById,
  exportFullBackup,
  loadAllStudyData,
  putAttempt,
  putNotebook,
  putQuestionRecord,
  putQuestionRecordsBatch,
  putScratchpad,
  putTransferAttempt,
  putUserFlags,
  restoreFullBackup,
  setMetaValue,
  type BackupPayload,
} from './db';
import { computeDashboardMetrics, type DashboardMetrics } from './analytics';
import {
  buildAdaptiveStudySummary,
  type AdaptiveStudySummary,
} from './adaptive-learning';
import {
  OFFICIAL_QUESTION_RESOLUTIONS,
  RESOLUTIONS_BY_QUESTION_ID,
  canAccessResolutionInContext,
  computeResolutionCoverage,
  evaluateQuestionWithResolution,
  mapVerificationStatusToBasis,
  scoreAttemptWithResolutions,
} from './resolutions';

export type AppSection =
  | 'inicio'
  | 'simulados'
  | 'questoes'
  | 'desempenho'
  | 'meu-estudo';

interface StudyContextValue {
  isReady: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: AppSection;
  setActiveSection: (s: AppSection) => void;
  exams: ExamEdition[];
  questions: Question[];
  sharedTexts: SharedText[];
  attempts: ExamAttempt[];
  activeAttempt: ExamAttempt | null;
  questionRecords: QuestionAnswerRecord[];
  userFlags: Record<string, UserQuestionFlags>;
  scratchpads: Record<string, ScratchpadDocument>;
  notebooks: StudyNotebook[];
  transferAttempts: Record<string, TransferAttemptRecord>;
  resolutionsById: Record<string, QuestionResolution>;
  resolutionCoverage: ResolutionCoverageSummary;
  adaptiveSummary: AdaptiveStudySummary;
  palmRejectionDefault: boolean;
  metrics: DashboardMetrics;
  // Actions
  recordBankAnswer: (
    question: Question,
    selectedLetter: AlternativeLetter,
    timeSpentMs: number,
    options?: { resolutionConsulted?: boolean }
  ) => Promise<QuestionAnswerRecord>;
  saveTransferAttempt: (record: TransferAttemptRecord) => Promise<void>;
  markAttemptResolutionConsulted: (
    attemptId: string,
    questionId: string
  ) => Promise<void>;
  toggleFavorite: (questionId: string) => Promise<void>;
  toggleReviewFlag: (questionId: string) => Promise<void>;
  saveScratchpad: (doc: ScratchpadDocument) => Promise<void>;
  setPalmRejectionDefault: (enabled: boolean) => Promise<void>;
  startExamAttempt: (
    exam: ExamEdition,
    mode: SimulationMode,
    customDurationMinutes?: number,
    selectedLanguage?: ForeignLanguageOption
  ) => Promise<ExamAttempt>;
  updateAttemptState: (attempt: ExamAttempt) => Promise<void>;
  finalizeAttempt: (
    attempt: ExamAttempt,
    expiredByTimer?: boolean
  ) => Promise<ExamAttempt>;
  resumeAttemptId: string | null;
  setResumeAttemptId: (id: string | null) => void;
  saveNotebook: (notebook: StudyNotebook) => Promise<void>;
  deleteNotebook: (id: string) => Promise<void>;
  importValidatedPackage: (pkg: ImportPackageSchema) => Promise<void>;
  applyOfficialAnswerKeys: (keyPkg: OfficialAnswerKeyPackage) => Promise<{
    matchedCount: number;
    updatedRecordsCount: number;
    updatedAttemptsCount: number;
  }>;
  exportBackup: () => Promise<BackupPayload>;
  importBackup: (payload: BackupPayload) => Promise<void>;
  // Deep-link helpers
  focusedQuestionId: string | null;
  setFocusedQuestionId: (id: string | null) => void;
  focusedNotebookId: string | null;
  setFocusedNotebookId: (id: string | null) => void;
}

const StudyContext = createContext<StudyContextValue | null>(null);

export function StudyProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState<AppSection>('inicio');

  const [exams, setExams] = useState<ExamEdition[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sharedTexts, setSharedTexts] = useState<SharedText[]>([]);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [questionRecords, setQuestionRecords] = useState<QuestionAnswerRecord[]>([]);
  const [userFlags, setUserFlags] = useState<Record<string, UserQuestionFlags>>({});
  const [scratchpads, setScratchpads] = useState<Record<string, ScratchpadDocument>>({});
  const [notebooks, setNotebooks] = useState<StudyNotebook[]>([]);
  const [transferAttempts, setTransferAttempts] = useState<
    Record<string, TransferAttemptRecord>
  >({});
  const [palmRejectionDefault, setPalmRejectionState] = useState(true);
  const attemptsRef = React.useRef<ExamAttempt[]>(attempts);
  useEffect(() => {
    attemptsRef.current = attempts;
  }, [attempts]);

  const [resumeAttemptId, setResumeAttemptId] = useState<string | null>(null);
  const [focusedQuestionId, setFocusedQuestionId] = useState<string | null>(null);
  const [focusedNotebookId, setFocusedNotebookId] = useState<string | null>(null);

  // Sync theme on mount & toggle
  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (!active) return;
      try {
        const saved = window.localStorage.getItem('ufrr-study-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial =
          saved === 'dark' || saved === 'light'
            ? saved
            : prefersDark
              ? 'dark'
              : 'light';
        setTheme(initial);
        document.documentElement.classList.toggle('dark', initial === 'dark');
      } catch {
        // Ignore storage errors
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        window.localStorage.setItem('ufrr-study-theme', next);
        document.documentElement.classList.toggle('dark', next === 'dark');
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const refreshFromDB = useCallback(async () => {
    try {
      const data = await loadAllStudyData();

      // Auto-finalize any real-mode attempt whose persisted endsAt expired while away
      const updatedAttempts: ExamAttempt[] = [];
      for (const attempt of data.attempts) {
        if (isAttemptExpired(attempt)) {
          const examQuestions = getQuestionsForAttempt(
            data.questions,
            attempt.examId,
            attempt.selectedLanguage ?? 'Inglês'
          );
          const summary = scoreAttemptWithResolutions(
            attempt.answers,
            examQuestions,
            RESOLUTIONS_BY_QUESTION_ID
          );
          const finished: ExamAttempt = {
            ...attempt,
            status: 'expired',
            finishedAt: attempt.endsAt ?? new Date().toISOString(),
            elapsedSeconds: attempt.durationSecondsConfigured,
            scoreSummary: summary,
          };
          await putAttempt(finished);

          // Log question answer records for answered items
          const nowIso = finished.finishedAt!;
          const recordsToLog: QuestionAnswerRecord[] = [];
          for (const q of examQuestions) {
            const sel = attempt.answers[q.id];
            if (!sel) continue;
            const res = RESOLUTIONS_BY_QUESTION_ID[q.id] ?? null;
            const ev = evaluateQuestionWithResolution(sel, q, res);
            recordsToLog.push({
              id: `rec-${attempt.id}-${q.id}`,
              questionId: q.id,
              subject: q.classification.subject,
              topic: q.classification.topic,
              subtopic: q.classification.subtopic,
              year: q.year,
              examId: q.examId,
              selectedLetter: sel,
              isCorrect: ev.isCorrect,
              wasAnnulled: ev.wasAnnulled,
              hasOfficialKey: ev.hasVerifiedKey,
              evaluationBasis: mapVerificationStatusToBasis(ev.verificationStatus),
              missingConcept: ev.missingConcept,
              questionType: res?.questionType,
              timeSpentMs: attempt.questionTimeSpentMs[q.id] ?? 0,
              answeredAt: nowIso,
              source: 'simulado',
              attemptId: attempt.id,
              resolutionConsulted: Boolean(attempt.consultedQuestionIds?.includes(q.id)),
              isDemoFixture: q.provenance.isDemoFixture,
            });
          }
          if (recordsToLog.length > 0) {
            await putQuestionRecordsBatch(recordsToLog);
            data.questionRecords.unshift(...recordsToLog);
          }
          updatedAttempts.push(finished);
        } else {
          updatedAttempts.push(attempt);
        }
      }

      setExams(data.exams.length > 0 ? data.exams : OFFICIAL_UFRR_EXAMS);
      setQuestions(
        data.questions.length > 0 ? data.questions : OFFICIAL_UFRR_QUESTIONS
      );
      setSharedTexts(
        data.sharedTexts.length > 0 ? data.sharedTexts : OFFICIAL_UFRR_SHARED_TEXTS
      );
      setAttempts(updatedAttempts);
      setQuestionRecords(data.questionRecords);
      setUserFlags(data.userFlags);
      setScratchpads(data.scratchpads);
      setNotebooks(data.notebooks);
      setTransferAttempts(data.transferAttempts);
      setPalmRejectionState(data.palmRejectionDefault);

      const inProgress = updatedAttempts.find((a) => a.status === 'in_progress');
      if (inProgress) {
        setResumeAttemptId(inProgress.id);
      }
    } catch (err) {
      console.error('Falha ao carregar IndexedDB; usando catálogo em memória:', err);
      setExams(OFFICIAL_UFRR_EXAMS);
      setQuestions(OFFICIAL_UFRR_QUESTIONS);
      setSharedTexts(OFFICIAL_UFRR_SHARED_TEXTS);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    Promise.resolve().then(() => {
      if (!cancelled) void refreshFromDB();
    });
    return () => {
      cancelled = true;
    };
  }, [refreshFromDB]);

  const activeAttempt = useMemo(
    () =>
      attempts.find((a) => a.id === resumeAttemptId && a.status === 'in_progress') ??
      attempts.find((a) => a.status === 'in_progress') ??
      null,
    [attempts, resumeAttemptId]
  );

  const resolutionCoverage = useMemo(
    () => computeResolutionCoverage(questions, OFFICIAL_QUESTION_RESOLUTIONS),
    [questions]
  );

  const metrics = useMemo(
    () => computeDashboardMetrics(questionRecords, attempts, questions, userFlags),
    [questionRecords, attempts, questions, userFlags]
  );

  const adaptiveSummary = useMemo(
    () =>
      buildAdaptiveStudySummary(
        questions,
        questionRecords,
        RESOLUTIONS_BY_QUESTION_ID
      ),
    [questions, questionRecords]
  );

  const recordBankAnswer = useCallback(
    async (
      question: Question,
      selectedLetter: AlternativeLetter,
      timeSpentMs: number,
      options?: { resolutionConsulted?: boolean }
    ) => {
      const resolution = RESOLUTIONS_BY_QUESTION_ID[question.id] ?? null;
      const ev = evaluateQuestionWithResolution(
        selectedLetter,
        question,
        resolution
      );
      const record: QuestionAnswerRecord = {
        id: `rec-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        questionId: question.id,
        subject: question.classification.subject,
        topic: question.classification.topic,
        subtopic: question.classification.subtopic,
        year: question.year,
        examId: question.examId,
        selectedLetter,
        isCorrect: ev.isCorrect,
        wasAnnulled: ev.wasAnnulled,
        hasOfficialKey: ev.hasVerifiedKey,
        evaluationBasis: mapVerificationStatusToBasis(ev.verificationStatus),
        missingConcept: ev.missingConcept,
        questionType: resolution?.questionType,
        resolutionConsulted: Boolean(options?.resolutionConsulted),
        timeSpentMs: Math.max(1000, Math.round(timeSpentMs)),
        answeredAt: new Date().toISOString(),
        source: 'bank',
        isDemoFixture: question.provenance.isDemoFixture,
      };
      await putQuestionRecord(record);
      setQuestionRecords((prev) => [record, ...prev]);
      return record;
    },
    []
  );

  const saveTransferAttempt = useCallback(async (record: TransferAttemptRecord) => {
    await putTransferAttempt(record);
    setTransferAttempts((prev) => ({ ...prev, [record.questionId]: record }));
  }, []);

  const markAttemptResolutionConsulted = useCallback(
    async (attemptId: string, questionId: string) => {
      const target = attemptsRef.current.find((a) => a.id === attemptId);
      if (!target) return;
      const access = canAccessResolutionInContext({
        mode: 'exam',
        attemptMode: target.mode,
        attemptStatus: target.status,
      });
      if (!access.allowed) return;
      const existing = target.consultedQuestionIds ?? [];
      if (existing.includes(questionId)) return;
      const updated: ExamAttempt = {
        ...target,
        consultedQuestionIds: [...existing, questionId],
      };
      setAttempts((prev) =>
        prev.map((att) => (att.id === attemptId ? updated : att))
      );
      await putAttempt(updated);
    },
    []
  );

  const toggleFavorite = useCallback(
    async (questionId: string) => {
      const existing = userFlags[questionId] ?? {
        questionId,
        isFavorite: false,
        isFlaggedForReview: false,
        updatedAt: new Date().toISOString(),
      };
      const updated: UserQuestionFlags = {
        ...existing,
        isFavorite: !existing.isFavorite,
        updatedAt: new Date().toISOString(),
      };
      await putUserFlags(updated);
      setUserFlags((prev) => ({ ...prev, [questionId]: updated }));
    },
    [userFlags]
  );

  const toggleReviewFlag = useCallback(
    async (questionId: string) => {
      const existing = userFlags[questionId] ?? {
        questionId,
        isFavorite: false,
        isFlaggedForReview: false,
        updatedAt: new Date().toISOString(),
      };
      const updated: UserQuestionFlags = {
        ...existing,
        isFlaggedForReview: !existing.isFlaggedForReview,
        updatedAt: new Date().toISOString(),
      };
      await putUserFlags(updated);
      setUserFlags((prev) => ({ ...prev, [questionId]: updated }));
    },
    [userFlags]
  );

  const saveScratchpad = useCallback(async (doc: ScratchpadDocument) => {
    await putScratchpad(doc);
    setScratchpads((prev) => ({ ...prev, [doc.id]: doc }));
  }, []);

  const setPalmRejectionDefault = useCallback(async (enabled: boolean) => {
    await setMetaValue('palm_rejection_default', enabled);
    setPalmRejectionState(enabled);
  }, []);

  const startExamAttempt = useCallback(
    async (
      exam: ExamEdition,
      mode: SimulationMode,
      customDurationMinutes?: number,
      selectedLanguage: ForeignLanguageOption = 'Inglês'
    ) => {
      const nowMs = Date.now();
      const durationSec =
        mode === 'real'
          ? exam.officialDurationSeconds
          : (customDurationMinutes ?? Math.round(exam.officialDurationSeconds / 60)) * 60;

      const endsAt =
        mode === 'real'
          ? new Date(nowMs + durationSec * 1000).toISOString()
          : null;

      const defaultThemeId = exam.essayPrompt?.themes?.[0]?.id;

      const attempt: ExamAttempt = {
        id: `att-${nowMs}-${Math.random().toString(36).slice(2, 6)}`,
        examId: exam.id,
        examName: exam.name,
        selectedLanguage,
        mode,
        status: 'in_progress',
        startedAt: new Date(nowMs).toISOString(),
        endsAt,
        durationSecondsConfigured: durationSec,
        elapsedSeconds: 0,
        currentQuestionIndex: 0,
        answers: {},
        flaggedQuestionIds: [],
        questionTimeSpentMs: {},
        essaySubmission: exam.hasEssay
          ? {
              mode: 'typed',
              selectedThemeId: defaultThemeId,
              typedText: '',
              handwrittenPageIds: [`essay-${nowMs}-p1`],
              updatedAt: new Date(nowMs).toISOString(),
              aiEstimateSlot: {
                available: false,
                disclaimer:
                  'Recurso futuro opcional de estimativa assistida por IA. Não substitui nem equivale à avaliação oficial da banca UFRR.',
              },
            }
          : undefined,
        isDemoFixture: exam.isDemoFixture,
      };

      await putAttempt(attempt);
      setAttempts((prev) => [attempt, ...prev]);
      setResumeAttemptId(attempt.id);
      return attempt;
    },
    []
  );

  const updateAttemptState = useCallback(async (attempt: ExamAttempt) => {
    await putAttempt(attempt);
    setAttempts((prev) => prev.map((a) => (a.id === attempt.id ? attempt : a)));
  }, []);

  const finalizeAttempt = useCallback(
    async (attempt: ExamAttempt, expiredByTimer = false) => {
      const examQuestions = getQuestionsForAttempt(
        questions,
        attempt.examId,
        attempt.selectedLanguage ?? 'Inglês'
      );

      const summary = scoreAttemptWithResolutions(
        attempt.answers,
        examQuestions,
        RESOLUTIONS_BY_QUESTION_ID
      );
      const nowIso = new Date().toISOString();

      let finalElapsed = attempt.elapsedSeconds;
      if (attempt.mode === 'real') {
        const startMs = Date.parse(attempt.startedAt);
        const diffSec = Math.max(1, Math.round((Date.now() - startMs) / 1000));
        finalElapsed = Math.min(attempt.durationSecondsConfigured, diffSec);
      }

      const finished: ExamAttempt = {
        ...attempt,
        status: expiredByTimer ? 'expired' : 'completed',
        finishedAt: nowIso,
        elapsedSeconds: finalElapsed,
        scoreSummary: summary,
      };

      await putAttempt(finished);

      const recordsToLog: QuestionAnswerRecord[] = [];
      for (const q of examQuestions) {
        const sel = attempt.answers[q.id];
        if (!sel) continue;
        const res = RESOLUTIONS_BY_QUESTION_ID[q.id] ?? null;
        const ev = evaluateQuestionWithResolution(sel, q, res);
        recordsToLog.push({
          id: `rec-${attempt.id}-${q.id}`,
          questionId: q.id,
          subject: q.classification.subject,
          topic: q.classification.topic,
          subtopic: q.classification.subtopic,
          year: q.year,
          examId: q.examId,
          selectedLetter: sel,
          isCorrect: ev.isCorrect,
          wasAnnulled: ev.wasAnnulled,
          hasOfficialKey: ev.hasVerifiedKey,
          evaluationBasis: mapVerificationStatusToBasis(ev.verificationStatus),
          missingConcept: ev.missingConcept,
          questionType: res?.questionType,
          timeSpentMs: attempt.questionTimeSpentMs[q.id] ?? 0,
          answeredAt: nowIso,
          source: 'simulado',
          attemptId: attempt.id,
          resolutionConsulted: Boolean(attempt.consultedQuestionIds?.includes(q.id)),
          isDemoFixture: q.provenance.isDemoFixture,
        });
      }

      if (recordsToLog.length > 0) {
        await putQuestionRecordsBatch(recordsToLog);
        setQuestionRecords((prev) => [...recordsToLog, ...prev]);
      }

      setAttempts((prev) => prev.map((a) => (a.id === finished.id ? finished : a)));
      return finished;
    },
    [questions]
  );

  const saveNotebook = useCallback(async (notebook: StudyNotebook) => {
    await putNotebook(notebook);
    setNotebooks((prev) => {
      const exists = prev.some((n) => n.id === notebook.id);
      if (exists) {
        return prev.map((n) => (n.id === notebook.id ? notebook : n));
      }
      return [notebook, ...prev];
    });
  }, []);

  const deleteNotebook = useCallback(async (id: string) => {
    await deleteNotebookById(id);
    setNotebooks((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const importValidatedPackage = useCallback(
    async (pkg: ImportPackageSchema) => {
      const materialized = materializeImportPackage(pkg);
      await commitImportedExamData(materialized);
      await refreshFromDB();
    },
    [refreshFromDB]
  );

  const applyOfficialAnswerKeys = useCallback(
    async (keyPkg: OfficialAnswerKeyPackage) => {
      const result = applyOfficialAnswerKeysToData(
        keyPkg,
        exams,
        questions,
        attempts,
        questionRecords
      );
      await commitBatchAnswerKeyUpdate({
        exam: result.updatedExam,
        questions: result.updatedQuestions,
        attempts: result.updatedAttempts,
        records: result.updatedRecords,
      });
      await refreshFromDB();
      return {
        matchedCount: result.matchedCount,
        updatedRecordsCount: result.updatedRecords.length,
        updatedAttemptsCount: result.updatedAttempts.length,
      };
    },
    [attempts, exams, questionRecords, questions, refreshFromDB]
  );

  const exportBackup = useCallback(async () => {
    return exportFullBackup();
  }, []);

  const importBackup = useCallback(
    async (payload: BackupPayload) => {
      await restoreFullBackup(payload);
      await refreshFromDB();
    },
    [refreshFromDB]
  );

  return (
    <StudyContext.Provider
      value={{
        isReady,
        theme,
        toggleTheme,
        activeSection,
        setActiveSection,
        exams,
        questions,
        sharedTexts,
        attempts,
        activeAttempt,
        questionRecords,
        userFlags,
        scratchpads,
        notebooks,
        transferAttempts,
        resolutionsById: RESOLUTIONS_BY_QUESTION_ID,
        resolutionCoverage,
        adaptiveSummary,
        palmRejectionDefault,
        metrics,
        recordBankAnswer,
        saveTransferAttempt,
        markAttemptResolutionConsulted,
        toggleFavorite,
        toggleReviewFlag,
        saveScratchpad,
        setPalmRejectionDefault,
        startExamAttempt,
        updateAttemptState,
        finalizeAttempt,
        resumeAttemptId,
        setResumeAttemptId,
        saveNotebook,
        deleteNotebook,
        importValidatedPackage,
        applyOfficialAnswerKeys,
        exportBackup,
        importBackup,
        focusedQuestionId,
        setFocusedQuestionId,
        focusedNotebookId,
        setFocusedNotebookId,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy(): StudyContextValue {
  const ctx = useContext(StudyContext);
  if (!ctx) {
    throw new Error('useStudy must be used inside StudyProvider.');
  }
  return ctx;
}
