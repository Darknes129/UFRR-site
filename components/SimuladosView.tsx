'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Lock,
  Play,
  SlidersHorizontal,
} from 'lucide-react';
import { ExamRunner } from './ExamRunner';
import {
  canStartRealExam,
  formatStudyTimeHuman,
  getQuestionsForAttempt,
} from '@/lib/engine';
import { scoreAttemptWithResolutions } from '@/lib/resolutions';
import { useStudy } from '@/lib/study-store';
import type {
  ExamEdition,
  ForeignLanguageOption,
  SimulationMode,
} from '@/lib/types';

const LANGUAGE_OPTIONS: ForeignLanguageOption[] = [
  'Inglês',
  'Espanhol',
  'Francês',
];

export const SimuladosView: React.FC = () => {
  const {
    exams,
    questions,
    sharedTexts,
    attempts,
    activeAttempt,
    resumeAttemptId,
    setResumeAttemptId,
    userFlags,
    scratchpads,
    palmRejectionDefault,
    setPalmRejectionDefault,
    startExamAttempt,
    updateAttemptState,
    finalizeAttempt,
    toggleFavorite,
    saveScratchpad,
    resolutionsById,
    questionRecords,
    markAttemptResolutionConsulted,
    setFocusedQuestionId,
    setActiveSection,
  } = useStudy();

  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<SimulationMode>('real');
  const [selectedLanguage, setSelectedLanguage] =
    useState<ForeignLanguageOption>('Inglês');
  const [treinoMinutes, setTreinoMinutes] = useState<number>(60);
  const [yearFilter, setYearFilter] = useState<string>('Todos');
  const [modalityFilter, setModalityFilter] = useState<string>('Todas');
  const [runnerAttemptId, setRunnerAttemptId] = useState<string | null>(null);

  const activeOrFocusedAttempt = useMemo(() => {
    const targetId = runnerAttemptId ?? resumeAttemptId;
    if (!targetId) return null;
    return attempts.find((a) => a.id === targetId) ?? null;
  }, [attempts, resumeAttemptId, runnerAttemptId]);

  const years = useMemo(() => {
    const set = new Set(exams.map((e) => e.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [exams]);

  const modalities = useMemo(() => {
    const set = new Set(exams.map((e) => e.modality));
    return Array.from(set);
  }, [exams]);

  const filteredExams = useMemo(() => {
    return exams.filter((e) => {
      if (yearFilter !== 'Todos' && String(e.year) !== yearFilter) return false;
      if (modalityFilter !== 'Todas' && e.modality !== modalityFilter) return false;
      return true;
    });
  }, [exams, modalityFilter, yearFilter]);

  const selectedExam = useMemo(
    () => exams.find((e) => e.id === selectedExamId) ?? null,
    [exams, selectedExamId]
  );

  // If an attempt is currently open in the runner, render ExamRunner exclusively
  if (activeOrFocusedAttempt) {
    const runnerExam = exams.find((e) => e.id === activeOrFocusedAttempt.examId);
    if (runnerExam) {
      const examQuestions = getQuestionsForAttempt(
        questions,
        runnerExam.id,
        activeOrFocusedAttempt.selectedLanguage ?? 'Inglês'
      );
      return (
        <ExamRunner
          exam={runnerExam}
          examQuestions={examQuestions}
          allQuestions={questions}
          sharedTexts={sharedTexts}
          attempt={activeOrFocusedAttempt}
          userFlags={userFlags}
          scratchpads={scratchpads}
          resolutionsById={resolutionsById}
          userRecords={questionRecords}
          defaultPalmRejection={palmRejectionDefault}
          onPalmRejectionChange={(enabled) => void setPalmRejectionDefault(enabled)}
          onUpdateAttempt={updateAttemptState}
          onFinalizeAttempt={finalizeAttempt}
          onToggleFavorite={toggleFavorite}
          onSaveScratchpad={saveScratchpad}
          onMarkResolutionConsulted={markAttemptResolutionConsulted}
          onOpenBankQuestion={(questionId) => {
            setRunnerAttemptId(null);
            setResumeAttemptId(null);
            setFocusedQuestionId(questionId);
            setActiveSection('questoes');
          }}
          onExitRunner={() => {
            setRunnerAttemptId(null);
            setResumeAttemptId(null);
          }}
        />
      );
    }
  }

  const getExamStats = (exam: ExamEdition) => {
    const examAttempts = attempts.filter((a) => a.examId === exam.id);
    const completed = examAttempts.filter(
      (a) => a.status === 'completed' || a.status === 'expired'
    );
    const inProgress = examAttempts.find((a) => a.status === 'in_progress');
    const best = completed.reduce<number | null>((max, a) => {
      const attQuestions = getQuestionsForAttempt(
        questions,
        exam.id,
        a.selectedLanguage ?? 'Inglês'
      );
      const live = scoreAttemptWithResolutions(
        a.answers,
        attQuestions,
        resolutionsById
      );
      if (live.gradedCount === 0) return max;
      return max === null ? live.accuracyPercent : Math.max(max, live.accuracyPercent);
    }, null);
    const lastAttempt = examAttempts[0];
    return {
      statusLabel: inProgress
        ? 'Em andamento'
        : completed.length > 0
          ? `Realizado (${completed.length}×)`
          : 'Não iniciado',
      bestScore: best,
      lastDate: lastAttempt
        ? new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }).format(new Date(lastAttempt.startedAt))
        : null,
      inProgress,
      completed,
    };
  };

  // Exam Detail Screen
  if (selectedExam) {
    const hasLanguageTracks = questions.some(
      (q) => q.examId === selectedExam.id && Boolean(q.foreignLanguage)
    );
    const examQuestionsCount = getQuestionsForAttempt(
      questions,
      selectedExam.id,
      selectedLanguage
    ).length;
    const realEligibility = canStartRealExam(selectedExam, examQuestionsCount);
    const stats = getExamStats(selectedExam);
    const canStartTreino = examQuestionsCount > 0;
    const isPendingGabarito = selectedExam.answerKeyStatus === 'pending_gabarito';

    const handleLaunch = async () => {
      if (selectedMode === 'real' && !realEligibility.allowed) return;
      if (selectedMode === 'treino' && !canStartTreino) return;
      const created = await startExamAttempt(
        selectedExam,
        selectedMode,
        selectedMode === 'treino' ? treinoMinutes : undefined,
        selectedLanguage
      );
      setRunnerAttemptId(created.id);
    };

    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <button
          type="button"
          onClick={() => setSelectedExamId(null)}
          className="min-h-[42px] px-3 rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao catálogo de simulados
        </button>

        <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b border-neutral-100 dark:border-neutral-800 pb-5">
            <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
              {selectedExam.edition} · {selectedExam.modality}
              {selectedExam.isDemoFixture && ' · Fixture de Demonstração (não oficial)'}
            </p>
            <h1 className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              {selectedExam.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
              <span>{selectedExam.totalQuestions} questões objetivas na prova</span>
              <span aria-hidden="true">·</span>
              <span>Duração oficial: {formatStudyTimeHuman(selectedExam.officialDurationSeconds)}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedExam.hasEssay ? 'Inclui Redação (Tema 1 e Tema 2)' : 'Sem redação'}</span>
            </div>
          </div>

          {/* Official vs Import Status Notice */}
          {!realEligibility.allowed ? (
            <div className="rounded-xl border border-amber-200 dark:border-amber-800/70 bg-amber-50/70 dark:bg-amber-950/30 p-4 flex items-start gap-3">
              <Lock className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-100">
                  Prova oficial aguardando importação
                </p>
                <p className="text-xs text-amber-800 dark:text-amber-200/90 leading-relaxed">
                  {realEligibility.reason}
                </p>
              </div>
            </div>
          ) : isPendingGabarito ? (
            <div className="rounded-xl border border-blue-200 dark:border-blue-800/70 bg-blue-50/60 dark:bg-blue-950/30 p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Caderno oficial completo carregado · Gabarito oficial pendente de vínculo
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Você já pode realizar o simulado completo com cronômetro, cartão de respostas, redação e caneta. Suas respostas ficarão salvas e serão corrigidas automaticamente caso você importe o arquivo de gabarito oficial em Meu Estudo.
                </p>
              </div>
            </div>
          ) : null}

          {/* Rules & Subject Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Regras da edição
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {selectedExam.rulesSummary.map((rule, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {idx + 1}. {rule}
                  </li>
                ))}
              </ul>
              {selectedExam.scoringRulesNote && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-1">
                  {selectedExam.scoringRulesNote}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Distribuição por disciplina
              </h2>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800">
                {selectedExam.subjectBreakdown.map((sb) => (
                  <div
                    key={sb.subject}
                    className="px-3.5 py-2 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {sb.subject}
                    </span>
                    <span className="font-mono tabular-nums text-neutral-500">
                      {sb.questionCount} {sb.questionCount === 1 ? 'questão' : 'questões'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foreign Language Track Selector (Q64-Q72) */}
          {hasLanguageTracks && (
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Opção de Língua Estrangeira (Questões 64 a 72)
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Escolha o idioma correspondente à sua inscrição na prova integral.
                  </p>
                </div>
              </div>

              <div
                role="radiogroup"
                aria-label="Selecionar idioma da prova de Língua Estrangeira"
                className="flex items-center gap-1 bg-neutral-100 dark:bg-[#10151C] p-1 rounded-xl"
              >
                {LANGUAGE_OPTIONS.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    role="radio"
                    aria-checked={selectedLanguage === lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`min-h-[38px] px-3.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                      selectedLanguage === lang
                        ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mode Selector & Primary Start Action */}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1 bg-neutral-100 dark:bg-[#10151C] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setSelectedMode('real')}
                  className={`min-h-[40px] px-4 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedMode === 'real'
                      ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  Simulado Realista
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMode('treino')}
                  className={`min-h-[40px] px-4 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedMode === 'treino'
                      ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  Modo Treino (flexível)
                </button>
              </div>

              {selectedMode === 'treino' && (
                <label className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                  <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
                  <span>Tempo referência (min):</span>
                  <input
                    type="number"
                    min={10}
                    max={360}
                    value={treinoMinutes}
                    onChange={(e) => setTreinoMinutes(Math.max(10, Number(e.target.value) || 60))}
                    className="w-20 min-h-[38px] rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent px-2.5 font-mono tabular-nums text-neutral-900 dark:text-neutral-100"
                  />
                </label>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {selectedMode === 'real'
                  ? 'Cronômetro regressivo sem pausa e término persistido. Ao encerrar o prazo, a prova é finalizada.'
                  : 'Permite pausar o cronômetro e ajustar o ritmo de resolução.'}
              </p>

              <div className="flex items-center gap-3">
                {stats.inProgress && (
                  <button
                    type="button"
                    onClick={() => setRunnerAttemptId(stats.inProgress!.id)}
                    className="min-h-[48px] px-5 py-3 rounded-xl border border-blue-600 text-blue-700 dark:text-blue-400 text-sm font-medium whitespace-nowrap"
                  >
                    Retomar tentativa em curso
                  </button>
                )}

                <button
                  type="button"
                  disabled={
                    selectedMode === 'real' ? !realEligibility.allowed : !canStartTreino
                  }
                  onClick={() => void handleLaunch()}
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none text-white text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Play className="w-4 h-4" />
                  Iniciar simulado
                </button>
              </div>
            </div>
          </div>

          {/* Previous Attempts for this Edition */}
          {stats.completed.length > 0 && (
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Tentativas anteriores nesta edição
              </h2>
              <div className="divide-y divide-neutral-100 dark:divide-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-800">
                {stats.completed.map((att) => {
                  const attQuestions = getQuestionsForAttempt(
                    questions,
                    selectedExam.id,
                    att.selectedLanguage ?? 'Inglês'
                  );
                  const live = scoreAttemptWithResolutions(
                    att.answers,
                    attQuestions,
                    resolutionsById
                  );
                  const isPending = live.gradedCount === 0;
                  return (
                    <div
                      key={att.id}
                      className="px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-sm"
                    >
                      <div>
                        <p className="font-medium text-neutral-800 dark:text-neutral-200">
                          {att.mode === 'real' ? 'Modo Realista' : 'Modo Treino'}
                          {att.selectedLanguage ? ` · ${att.selectedLanguage}` : ''} ·{' '}
                          {new Intl.DateTimeFormat('pt-BR', {
                            dateStyle: 'short',
                            timeStyle: 'short',
                          }).format(new Date(att.finishedAt ?? att.startedAt))}
                        </p>
                        <p className="text-xs text-neutral-500 font-mono tabular-nums">
                          {isPending
                            ? `${live.answeredCount}/${live.totalQuestions} respondidas (em verificação)`
                            : `${live.correctCount}/${live.gradedCount} acertos (${live.accuracyPercent}%)`}
                          {' · '}
                          {formatStudyTimeHuman(att.elapsedSeconds)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRunnerAttemptId(att.id)}
                        className="min-h-[38px] px-3 rounded-lg text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                      >
                        Ver resultado
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Simulados e Provas UFRR
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Edições oficiais 2022–2026 reconstruídas integralmente com experiência fiel à Prova Integral.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            aria-label="Filtrar simulados por ano"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="min-h-[42px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-3 text-xs font-medium text-neutral-800 dark:text-neutral-200"
          >
            <option value="Todos">Todos os anos</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>

          <select
            aria-label="Filtrar simulados por modalidade"
            value={modalityFilter}
            onChange={(e) => setModalityFilter(e.target.value)}
            className="min-h-[42px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-3 text-xs font-medium text-neutral-800 dark:text-neutral-200"
          >
            <option value="Todas">Todas as modalidades</option>
            {modalities.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Active In-Progress Banner */}
      {activeAttempt && (
        <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-950/30 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
              Tentativa em andamento recuperada
            </p>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {activeAttempt.examName} ({activeAttempt.mode === 'real' ? 'Modo Realista' : 'Modo Treino'}
              {activeAttempt.selectedLanguage ? ` · ${activeAttempt.selectedLanguage}` : ''})
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRunnerAttemptId(activeAttempt.id)}
            className="min-h-[44px] px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium whitespace-nowrap"
          >
            Retomar prova agora
          </button>
        </div>
      )}

      {/* Exam Catalog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredExams.map((exam) => {
          const stats = getExamStats(exam);
          const loadedCount = questions.filter((q) => q.examId === exam.id).length;
          const isReadyForReal =
            exam.importStatus === 'validated' || exam.importStatus === 'demo_fixture';
          const isPendingKey = exam.answerKeyStatus === 'pending_gabarito';

          return (
            <article
              key={exam.id}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span>
                    {exam.year} · {exam.modality}
                    {exam.isDemoFixture && ' · Fixture Isolada'}
                  </span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {stats.statusLabel}
                  </span>
                </div>

                <h2 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {exam.name}
                </h2>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 tabular-nums">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-neutral-400" />
                    {exam.totalQuestions} questões
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {formatStudyTimeHuman(exam.officialDurationSeconds)}
                  </span>
                  <span>
                    {exam.subjectBreakdown.length} disciplinas
                  </span>
                  <span>{exam.hasEssay ? 'Com redação' : 'Objetiva'}</span>
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    {isReadyForReal ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        {exam.isDemoFixture
                          ? 'Pronto para testar simulado e redação'
                          : isPendingKey
                            ? `${loadedCount} questões importadas · Gabarito pendente`
                            : `${loadedCount} questões validadas`}
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        Aguardando importação
                      </>
                    )}
                  </span>

                  <span className="font-mono tabular-nums">
                    {stats.bestScore !== null
                      ? `Melhor: ${stats.bestScore}%`
                      : stats.lastDate
                        ? `Última: ${stats.lastDate}`
                        : 'Sem tentativas'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Edição {exam.edition}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedExamId(exam.id)}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-neutral-900 dark:bg-blue-600 hover:bg-neutral-800 dark:hover:bg-blue-700 text-white text-xs font-medium transition-colors whitespace-nowrap"
                >
                  Abrir detalhes
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
