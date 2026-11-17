'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileEdit,
  Flag,
  Grid,
  Pause,
  PenLine,
  Play,
  Send,
  X,
} from 'lucide-react';
import { QuestionReader } from './QuestionReader';
import { PenCanvas } from './PenCanvas';
import { EssayModule } from './EssayModule';
import {
  calculateRemainingSeconds,
  formatDurationClock,
  formatStudyTimeHuman,
} from '@/lib/engine';
import {
  canAccessResolutionInContext,
  evaluateQuestionWithResolution,
  findRelatedBankQuestions,
  scoreAttemptWithResolutions,
} from '@/lib/resolutions';
import type {
  AlternativeLetter,
  EssaySubmission,
  ExamAttempt,
  ExamEdition,
  Question,
  QuestionAnswerRecord,
  QuestionResolution,
  ScratchpadDocument,
  SharedText,
  UserQuestionFlags,
} from '@/lib/types';

interface ExamRunnerProps {
  exam: ExamEdition;
  examQuestions: Question[];
  allQuestions?: Question[];
  sharedTexts: SharedText[];
  attempt: ExamAttempt;
  userFlags: Record<string, UserQuestionFlags>;
  scratchpads: Record<string, ScratchpadDocument>;
  resolutionsById?: Record<string, QuestionResolution>;
  userRecords?: QuestionAnswerRecord[];
  defaultPalmRejection: boolean;
  onPalmRejectionChange: (enabled: boolean) => void;
  onUpdateAttempt: (next: ExamAttempt) => Promise<void>;
  onFinalizeAttempt: (attempt: ExamAttempt, expiredByTimer?: boolean) => Promise<ExamAttempt>;
  onToggleFavorite: (questionId: string) => Promise<void>;
  onSaveScratchpad: (doc: ScratchpadDocument) => Promise<void>;
  onMarkResolutionConsulted?: (attemptId: string, questionId: string) => Promise<void>;
  onOpenBankQuestion?: (questionId: string) => void;
  onExitRunner: () => void;
}

type RunnerTab = 'questoes' | 'redacao' | 'rascunho-geral';

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  exam,
  examQuestions,
  allQuestions,
  sharedTexts,
  attempt,
  userFlags,
  scratchpads,
  resolutionsById = {},
  userRecords = [],
  defaultPalmRejection,
  onPalmRejectionChange,
  onUpdateAttempt,
  onFinalizeAttempt,
  onToggleFavorite,
  onSaveScratchpad,
  onMarkResolutionConsulted,
  onOpenBankQuestion,
  onExitRunner,
}) => {
  const [activeTab, setActiveTab] = useState<RunnerTab>('questoes');
  const [showAnswerSheetModal, setShowAnswerSheetModal] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [treinoPaused, setTreinoPaused] = useState(false);
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState<number | null>(null);

  const [remainingSeconds, setRemainingSeconds] = useState<number>(() =>
    attempt.mode === 'real'
      ? calculateRemainingSeconds(attempt.endsAt)
      : Math.max(0, attempt.durationSecondsConfigured - attempt.elapsedSeconds)
  );
  const [treinoElapsed, setTreinoElapsed] = useState<number>(attempt.elapsedSeconds);

  const attemptRef = useRef<ExamAttempt>(attempt);
  useEffect(() => {
    attemptRef.current = attempt;
  }, [attempt]);

  const isCompleted =
    attempt.status === 'completed' || attempt.status === 'expired';

  const currentIndex = Math.min(
    Math.max(0, attempt.currentQuestionIndex),
    Math.max(0, examQuestions.length - 1)
  );
  const currentQuestion = examQuestions[currentIndex];

  // Track time spent per question
  const questionEnterRef = useRef<number>(0);
  useEffect(() => {
    questionEnterRef.current = Date.now();
  }, [currentQuestion?.id]);

  // Real-mode persisted countdown ticker & auto-finalization
  useEffect(() => {
    if (isCompleted) return;

    const interval = setInterval(() => {
      const latest = attemptRef.current;
      if (latest.mode === 'real') {
        const rem = calculateRemainingSeconds(latest.endsAt, Date.now());
        setRemainingSeconds(rem);
        if (rem <= 0) {
          clearInterval(interval);
          void onFinalizeAttempt(latest, true);
        }
      } else if (!treinoPaused) {
        setTreinoElapsed((prev) => {
          const next = prev + 1;
          if (next % 10 === 0) {
            void onUpdateAttempt({ ...latest, elapsedSeconds: next });
          }
          return next;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCompleted, onFinalizeAttempt, onUpdateAttempt, treinoPaused]);

  const flushQuestionTime = useCallback(
    (baseAttempt: ExamAttempt, questionId?: string): ExamAttempt => {
      if (!questionId) return baseAttempt;
      const deltaMs = Math.max(0, Date.now() - questionEnterRef.current);
      questionEnterRef.current = Date.now();
      return {
        ...baseAttempt,
        questionTimeSpentMs: {
          ...baseAttempt.questionTimeSpentMs,
          [questionId]: (baseAttempt.questionTimeSpentMs[questionId] ?? 0) + deltaMs,
        },
      };
    },
    []
  );

  const handleSelectAnswer = async (letter: AlternativeLetter) => {
    if (isCompleted || !currentQuestion) return;
    const withTime = flushQuestionTime(attempt, currentQuestion.id);
    await onUpdateAttempt({
      ...withTime,
      answers: {
        ...withTime.answers,
        [currentQuestion.id]: letter,
      },
    });
  };

  const handleToggleExamFlag = async (questionId: string) => {
    if (isCompleted) return;
    const exists = attempt.flaggedQuestionIds.includes(questionId);
    const nextFlags = exists
      ? attempt.flaggedQuestionIds.filter((id) => id !== questionId)
      : [...attempt.flaggedQuestionIds, questionId];
    await onUpdateAttempt({
      ...attempt,
      flaggedQuestionIds: nextFlags,
    });
  };

  const goToQuestion = async (index: number) => {
    if (index < 0 || index >= examQuestions.length) return;
    const withTime = flushQuestionTime(attempt, currentQuestion?.id);
    await onUpdateAttempt({
      ...withTime,
      currentQuestionIndex: index,
    });
    setActiveTab('questoes');
    setShowAnswerSheetModal(false);
    setShowNavDrawer(false);
  };

  const handleUpdateEssay = async (nextSubmission: EssaySubmission) => {
    await onUpdateAttempt({
      ...attempt,
      essaySubmission: nextSubmission,
    });
  };

  const handleConfirmFinalize = async () => {
    const withTime = flushQuestionTime(attempt, currentQuestion?.id);
    const updated = {
      ...withTime,
      elapsedSeconds:
        attempt.mode === 'treino' ? treinoElapsed : attempt.elapsedSeconds,
    };
    setShowConfirmFinish(false);
    await onFinalizeAttempt(updated, false);
  };

  const answeredCount = useMemo(
    () => examQuestions.filter((q) => Boolean(attempt.answers[q.id])).length,
    [attempt.answers, examQuestions]
  );

  const flaggedSet = useMemo(
    () => new Set(attempt.flaggedQuestionIds),
    [attempt.flaggedQuestionIds]
  );

  const bankCatalogQuestions = allQuestions ?? examQuestions;
  const resolutionsMap = useMemo(
    () => new Map(Object.entries(resolutionsById)),
    [resolutionsById]
  );

  const resolutionAccess = canAccessResolutionInContext({
    mode: 'exam',
    attemptMode: attempt.mode,
    attemptStatus: attempt.status,
  });

  const reviewedQuestion =
    isCompleted && reviewQuestionIndex !== null
      ? examQuestions[reviewQuestionIndex] ?? null
      : null;

  const reviewedRelatedMatches = useMemo(() => {
    if (!reviewedQuestion) return [];
    return findRelatedBankQuestions(
      reviewedQuestion,
      bankCatalogQuestions,
      resolutionsMap,
      5,
      userRecords
    );
  }, [bankCatalogQuestions, resolutionsMap, reviewedQuestion, userRecords]);

  const liveSummary = useMemo(
    () =>
      scoreAttemptWithResolutions(
        attempt.answers,
        examQuestions,
        resolutionsById
      ),
    [attempt.answers, examQuestions, resolutionsById]
  );

  // Completed / Expired Result Screen
  if (isCompleted) {
    const summary = liveSummary;
    const isAllPending =
      summary.gradedCount === 0 && summary.pendingKeyCount === summary.totalQuestions;

    if (reviewedQuestion && reviewQuestionIndex !== null) {
      return (
        <div className="mx-auto max-w-5xl space-y-5 pb-12">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setReviewQuestionIndex(null)}
                className="min-h-[42px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao resumo do simulado</span>
              </button>
              <span className="text-xs font-mono tabular-nums text-neutral-500">
                Revisando {reviewQuestionIndex + 1}/{examQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={reviewQuestionIndex <= 0}
                onClick={() => setReviewQuestionIndex((i) => Math.max(0, (i ?? 0) - 1))}
                className="min-h-[42px] px-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium disabled:opacity-35"
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={reviewQuestionIndex >= examQuestions.length - 1}
                onClick={() =>
                  setReviewQuestionIndex((i) =>
                    Math.min(examQuestions.length - 1, (i ?? 0) + 1)
                  )
                }
                className="min-h-[42px] px-3 rounded-xl bg-neutral-900 dark:bg-blue-600 text-white text-xs font-medium disabled:opacity-35"
              >
                Próxima
              </button>
            </div>
          </div>

          <QuestionReader
            question={reviewedQuestion}
            sharedTexts={sharedTexts}
            mode="study"
            selectedLetter={attempt.answers[reviewedQuestion.id]}
            isChecked={Boolean(attempt.answers[reviewedQuestion.id])}
            isFavorite={Boolean(userFlags[reviewedQuestion.id]?.isFavorite)}
            isFlaggedForReview={flaggedSet.has(reviewedQuestion.id)}
            scratchpadDoc={scratchpads[`q-note-${reviewedQuestion.id}`]}
            overlayDoc={scratchpads[`q-overlay-${reviewedQuestion.id}`]}
            defaultPalmRejection={defaultPalmRejection}
            onPalmRejectionChange={onPalmRejectionChange}
            onSelectAlternative={() => {}}
            onToggleFavorite={() => void onToggleFavorite(reviewedQuestion.id)}
            onToggleReviewFlag={() => {}}
            onSaveScratchpad={onSaveScratchpad}
            allowResolution={true}
            attemptMode={attempt.mode}
            attemptStatus={attempt.status}
            resolution={resolutionsById[reviewedQuestion.id] ?? null}
            relatedMatches={reviewedRelatedMatches}
            onConsultResolution={(qId) =>
              void onMarkResolutionConsulted?.(attempt.id, qId)
            }
            onNavigateToQuestion={onOpenBankQuestion}
          />
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-5xl space-y-6 pb-12">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-5">
            <div>
              <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                {attempt.status === 'expired'
                  ? 'Finalizado automaticamente ao término do tempo'
                  : 'Simulado concluído'}
                {' · '}
                {attempt.mode === 'real' ? 'Modo Realista' : 'Modo Treino'}
                {attempt.selectedLanguage ? ` · ${attempt.selectedLanguage}` : ''}
              </p>
              <h1 className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mt-1">
                {exam.name}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {examQuestions.length > 0 && (
                <button
                  type="button"
                  onClick={() => setReviewQuestionIndex(0)}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium whitespace-nowrap"
                >
                  Revisar questões e resoluções
                </button>
              )}
              <button
                type="button"
                onClick={onExitRunner}
                className="min-h-[44px] px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 whitespace-nowrap"
              >
                Voltar aos simulados
              </button>
            </div>
          </div>

          {!isAllPending && (
            <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] px-4 py-3 text-xs text-neutral-600 dark:text-neutral-300 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-medium text-neutral-800 dark:text-neutral-200">
                Base da correção:
              </span>
              <span>Oficial / preliminar: {summary.officialGradedCount}</span>
              <span>·</span>
              <span>Resolução independente verificada: {summary.independentGradedCount}</span>
              {summary.pendingKeyCount > 0 && (
                <>
                  <span>·</span>
                  <span>Em verificação: {summary.pendingKeyCount}</span>
                </>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] p-4 border border-neutral-200/70 dark:border-neutral-800">
              <p className="text-xs text-neutral-500">Pontuação</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
                {isAllPending
                  ? 'Pendente'
                  : `${summary.correctCount}/${summary.gradedCount}`}
              </p>
            </div>
            <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] p-4 border border-neutral-200/70 dark:border-neutral-800">
              <p className="text-xs text-neutral-500">Aproveitamento</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-blue-700 dark:text-blue-400 tabular-nums">
                {isAllPending ? '—' : `${summary.accuracyPercent}%`}
              </p>
            </div>
            <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] p-4 border border-neutral-200/70 dark:border-neutral-800">
              <p className="text-xs text-neutral-500">Respondidas</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
                {summary.answeredCount}/{summary.totalQuestions}
              </p>
            </div>
            <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] p-4 border border-neutral-200/70 dark:border-neutral-800">
              <p className="text-xs text-neutral-500">Tempo decorrido</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
                {formatStudyTimeHuman(attempt.elapsedSeconds)}
              </p>
            </div>
          </div>

          {/* Subject Breakdown */}
          {summary && summary.bySubject.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {isAllPending ? 'Resumo de preenchimento por disciplina' : 'Desempenho por disciplina'}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-neutral-50 dark:bg-[#11161D] text-xs text-neutral-500">
                      <th className="px-4 py-2.5 text-left font-medium">Disciplina</th>
                      <th className="px-4 py-2.5 text-right font-medium">
                        {isAllPending ? 'Respondidas' : 'Acertos'}
                      </th>
                      <th className="px-4 py-2.5 text-right font-medium">Total</th>
                      <th className="px-4 py-2.5 text-right font-medium">Taxa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {summary.bySubject.map((row) => {
                      const subjPending = (row.pendingKeyCount ?? 0) === row.total;
                      return (
                        <tr key={row.subject}>
                          <td className="px-4 py-2.5 font-medium text-neutral-800 dark:text-neutral-200">
                            {row.subject}
                          </td>
                          <td className="px-4 py-2.5 text-right font-mono tabular-nums">
                            {subjPending ? row.answered : row.correct}
                          </td>
                          <td className="px-4 py-2.5 text-right font-mono tabular-nums text-neutral-500">
                            {row.total}
                          </td>
                          <td className="px-4 py-2.5 text-right font-mono tabular-nums font-medium">
                            {subjPending ? 'Pendente' : `${row.accuracyPercent}%`}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Gabarito Detalhado (clique para revisar questão e resolução) */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Conferência do cartão de respostas
              </h2>
              <span className="text-xs text-neutral-500">
                Clique em qualquer questão para abrir o gabarito comentado e macetes
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {examQuestions.map((q, idx) => {
                const chosen = attempt.answers[q.id];
                const res = resolutionsById[q.id] ?? null;
                const probe = evaluateQuestionWithResolution(
                  chosen ?? 'A',
                  q,
                  res
                );
                const hasKey = probe.hasVerifiedKey;
                const isRight = Boolean(chosen) && probe.isCorrect;
                const hasStructuredResolution = Boolean(res);
                const keyText = probe.wasAnnulled
                  ? 'Anulada'
                  : probe.expectedLetter ?? 'Em verificação';
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setReviewQuestionIndex(idx)}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3 flex items-center justify-between text-left text-xs hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                        Q{String(q.originalNumber).padStart(2, '0')} · {q.classification.subject}
                      </p>
                      <p className="text-neutral-500 mt-0.5 tabular-nums">
                        Sua: {chosen ?? '—'} · Gabarito: {keyText}
                      </p>
                      {hasStructuredResolution && (
                        <p className="text-[11px] font-medium text-blue-700 dark:text-blue-400 mt-0.5">
                          Revisar resolução →
                        </p>
                      )}
                    </div>
                    <span
                      className={`font-medium shrink-0 ${
                        probe.wasAnnulled
                          ? 'text-amber-600 dark:text-amber-400'
                          : !chosen
                            ? 'text-neutral-400'
                            : !hasKey
                              ? 'text-blue-600 dark:text-blue-400'
                              : isRight
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {probe.wasAnnulled
                        ? 'Anulada'
                        : !chosen
                          ? 'Em branco'
                          : !hasKey
                            ? 'Registrada'
                            : isRight
                              ? 'Acerto'
                              : 'Erro'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100dvh-5rem)] flex flex-col gap-4 pb-12">
      {/* Sticky Exam Top Bar (Distraction-Free, clear of global Fullscreen bar) */}
      <header className="sticky top-[calc(52px+env(safe-area-inset-top)+0.25rem)] md:top-[calc(48px+env(safe-area-inset-top)+0.5rem)] z-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#151B23]/95 backdrop-blur-md px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onExitRunner}
            aria-label="Sair temporariamente da tela do simulado"
            className="min-h-[42px] min-w-[42px] rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 truncate">
              {exam.shortName}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
              {attempt.mode === 'real' ? 'Modo Realista' : 'Modo Treino'}
              {attempt.selectedLanguage ? ` · ${attempt.selectedLanguage}` : ''} ·{' '}
              {answeredCount}/{examQuestions.length} respondidas
            </p>
          </div>
        </div>

        {/* Workspace Mode Tabs */}
        <div className="flex items-center gap-1 bg-neutral-100 dark:bg-[#10151C] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab('questoes')}
            className={`min-h-[38px] px-3 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeTab === 'questoes'
                ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400'
            }`}
          >
            Questões
          </button>
          {exam.hasEssay && (
            <button
              type="button"
              onClick={() => setActiveTab('redacao')}
              className={`min-h-[38px] px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                activeTab === 'redacao'
                  ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              <FileEdit className="w-3.5 h-3.5" />
              Redação
            </button>
          )}
          <button
            type="button"
            onClick={() => setActiveTab('rascunho-geral')}
            className={`min-h-[38px] px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'rascunho-geral'
                ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400'
            }`}
          >
            <PenLine className="w-3.5 h-3.5" />
            Rascunho geral
          </button>
        </div>

        {/* Timer & Answer Sheet / Finish */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            data-testid="exam-timer"
            className={`min-h-[42px] px-3.5 rounded-xl border flex items-center gap-2 font-mono text-sm font-semibold tabular-nums ${
              attempt.mode === 'real' && remainingSeconds <= 600
                ? 'border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300'
                : 'border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#11161D] text-neutral-900 dark:text-neutral-100'
            }`}
          >
            <Clock className="w-4 h-4 text-neutral-500" />
            <span>
              {attempt.mode === 'real'
                ? formatDurationClock(remainingSeconds)
                : formatDurationClock(treinoElapsed)}
            </span>
          </div>

          {attempt.mode === 'treino' && (
            <button
              type="button"
              onClick={() => setTreinoPaused((p) => !p)}
              aria-label={treinoPaused ? 'Retomar cronômetro treino' : 'Pausar cronômetro treino'}
              className="min-h-[42px] min-w-[42px] rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {treinoPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowAnswerSheetModal(true)}
            className="min-h-[42px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1.5 whitespace-nowrap"
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">Cartão</span>
          </button>

          <button
            type="button"
            onClick={() => setShowConfirmFinish(true)}
            className="min-h-[42px] px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center gap-1.5 whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            Finalizar
          </button>
        </div>
      </header>

      {/* Main Content by Tab */}
      {activeTab === 'questoes' && currentQuestion && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Tablet Landscape Question Grid Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-4 space-y-4 sticky top-[calc(48px+env(safe-area-inset-top)+8.75rem)] max-h-[calc(100dvh-48px-env(safe-area-inset-top)-9.5rem)] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Navegação rápida
              </h2>
              <span className="text-xs font-mono tabular-nums text-neutral-500">
                {currentIndex + 1}/{examQuestions.length}
              </span>
            </div>

            <div className="grid grid-cols-4 xl:grid-cols-5 gap-2">
              {examQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = Boolean(attempt.answers[q.id]);
                const isFlagged = flaggedSet.has(q.id);
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => void goToQuestion(idx)}
                    aria-label={`Ir para questão ${q.originalNumber}${isAnswered ? ', respondida' : ''}${isFlagged ? ', marcada para revisão' : ''}`}
                    className={`relative min-h-[42px] rounded-xl font-mono text-xs font-semibold tabular-nums border transition-colors flex items-center justify-center ${
                      isCurrent
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : isAnswered
                          ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {String(q.originalNumber).padStart(2, '0')}
                    {isFlagged && (
                      <Flag className="w-2.5 h-2.5 text-amber-500 fill-amber-500 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-1.5 text-[11px] text-neutral-500">
              <p>Verde: respondida ({answeredCount})</p>
              <p>Bandeira: marcada para revisão ({attempt.flaggedQuestionIds.length})</p>
              <p>Neutra: em branco ({examQuestions.length - answeredCount})</p>
            </div>
          </aside>

          {/* Active Question Area */}
          <div className="lg:col-span-9 space-y-4">
            {/* Portrait/Mobile Question Strip Trigger */}
            <div className="lg:hidden flex items-center justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-2.5">
              <span className="text-xs font-mono font-semibold tabular-nums text-neutral-800 dark:text-neutral-200">
                Questão {currentIndex + 1} de {examQuestions.length}
              </span>
              <button
                type="button"
                onClick={() => setShowNavDrawer((v) => !v)}
                className="min-h-[38px] px-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-100"
              >
                {showNavDrawer ? 'Ocultar grade' : 'Ver todas as questões'}
              </button>
            </div>

            {showNavDrawer && (
              <div className="lg:hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-4 grid grid-cols-5 sm:grid-cols-8 gap-2">
                {examQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = Boolean(attempt.answers[q.id]);
                  const isFlagged = flaggedSet.has(q.id);
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => void goToQuestion(idx)}
                      className={`relative min-h-[42px] rounded-xl font-mono text-xs font-semibold tabular-nums border flex items-center justify-center ${
                        isCurrent
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : isAnswered
                            ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                            : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {String(q.originalNumber).padStart(2, '0')}
                      {isFlagged && (
                        <Flag className="w-2.5 h-2.5 text-amber-500 fill-amber-500 absolute top-1 right-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            <QuestionReader
              question={currentQuestion}
              sharedTexts={sharedTexts}
              mode="exam"
              selectedLetter={attempt.answers[currentQuestion.id]}
              isFavorite={Boolean(userFlags[currentQuestion.id]?.isFavorite)}
              isFlaggedForReview={flaggedSet.has(currentQuestion.id)}
              scratchpadDoc={scratchpads[`q-note-${currentQuestion.id}`]}
              overlayDoc={scratchpads[`q-overlay-${currentQuestion.id}`]}
              defaultPalmRejection={defaultPalmRejection}
              onPalmRejectionChange={onPalmRejectionChange}
              onSelectAlternative={handleSelectAnswer}
              onToggleFavorite={() => void onToggleFavorite(currentQuestion.id)}
              onToggleReviewFlag={() => void handleToggleExamFlag(currentQuestion.id)}
              onSaveScratchpad={onSaveScratchpad}
              allowResolution={resolutionAccess.allowed}
              attemptMode={attempt.mode}
              attemptStatus={attempt.status}
              resolution={null}
              relatedMatches={[]}
            />

            {/* Previous / Skip / Next Footer */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => void goToQuestion(currentIndex - 1)}
                className="min-h-[46px] px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-sm font-medium text-neutral-800 dark:text-neutral-100 disabled:opacity-40 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </button>

              <button
                type="button"
                disabled={currentIndex >= examQuestions.length - 1}
                onClick={() => void goToQuestion(currentIndex + 1)}
                className="min-h-[46px] px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-blue-600 text-white text-sm font-medium disabled:opacity-40 flex items-center gap-2"
              >
                <span>{attempt.answers[currentQuestion.id] ? 'Próxima' : 'Pular / Próxima'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'redacao' && exam.hasEssay && attempt.essaySubmission && (
        <EssayModule
          attemptId={attempt.id}
          prompt={exam.essayPrompt}
          submission={attempt.essaySubmission}
          scratchpads={scratchpads}
          defaultPalmRejection={defaultPalmRejection}
          onPalmRejectionChange={onPalmRejectionChange}
          onUpdateSubmission={(next) => void handleUpdateEssay(next)}
          onSaveScratchpad={onSaveScratchpad}
        />
      )}

      {activeTab === 'rascunho-geral' && (
        <div className="max-w-5xl w-full mx-auto">
          <PenCanvas
            docId={`exam-note-${attempt.id}`}
            scope="exam"
            targetId={attempt.id}
            title={`Rascunho Geral · ${exam.shortName}`}
            initialDoc={scratchpads[`exam-note-${attempt.id}`]}
            defaultPalmRejection={defaultPalmRejection}
            onPalmRejectionChange={onPalmRejectionChange}
            onSave={onSaveScratchpad}
            minHeightClass="h-[580px]"
            testId="exam-general-scratchpad"
          />
        </div>
      )}

      {/* Answer Card Review Modal */}
      {showAnswerSheetModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Revisar cartão de respostas"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-50">
                  Cartão de Respostas
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5 tabular-nums">
                  {answeredCount} respondidas · {examQuestions.length - answeredCount} em branco ·{' '}
                  {attempt.flaggedQuestionIds.length} marcadas para revisão
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAnswerSheetModal(false)}
                aria-label="Fechar cartão de respostas"
                className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
              {examQuestions.map((q, idx) => {
                const chosen = attempt.answers[q.id];
                const flagged = flaggedSet.has(q.id);
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => void goToQuestion(idx)}
                    className={`min-h-[54px] p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                      chosen
                        ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30'
                        : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <div>
                      <p className="font-mono text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                        Q{String(q.originalNumber).padStart(2, '0')}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate max-w-[90px]">
                        {q.classification.subject}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {flagged && (
                        <Flag className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      )}
                      <span className="font-mono text-sm font-bold text-neutral-900 dark:text-neutral-100">
                        {chosen ?? '—'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowAnswerSheetModal(false)}
                className="min-h-[42px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium"
              >
                Continuar prova
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAnswerSheetModal(false);
                  setShowConfirmFinish(true);
                }}
                className="min-h-[42px] px-4 rounded-xl bg-blue-600 text-white text-xs font-medium"
              >
                Finalizar simulado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Early Finalization Confirmation Modal */}
      {showConfirmFinish && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirmar finalização do simulado"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 shadow-xl space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-50">
                  Finalizar simulado agora?
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Você respondeu {answeredCount} de {examQuestions.length} questões.
                  {examQuestions.length - answeredCount > 0 &&
                    ` Ainda há ${examQuestions.length - answeredCount} em branco.`}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmFinish(false)}
                className="min-h-[44px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                Voltar à prova
              </button>
              <button
                type="button"
                onClick={() => void handleConfirmFinalize()}
                className="min-h-[44px] px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Confirmar entrega
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
