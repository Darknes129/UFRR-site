'use client';

import React, { useMemo } from 'react';
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Clock,
  FileCheck2,
  Flag,
  Layers,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { formatStudyTimeHuman } from '@/lib/engine';
import { useStudy } from '@/lib/study-store';

export const HomeView: React.FC = () => {
  const {
    metrics,
    activeAttempt,
    exams,
    questions,
    adaptiveSummary,
    setActiveSection,
    setResumeAttemptId,
    setFocusedQuestionId,
  } = useStudy();

  const { greeting, formattedDate } = useMemo(() => {
    const now = new Date();
    const hour = now.getHours();
    const greet =
      hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
    const dateStr = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(now);
    return {
      greeting: greet,
      formattedDate: dateStr.charAt(0).toUpperCase() + dateStr.slice(1),
    };
  }, []);

  const hasData = metrics.totalAnswerEvents > 0 || metrics.completedSimuladosCount > 0;
  const hasPendingKeysOnly =
    hasData && metrics.gradedAnswerEvents === 0 && metrics.pendingKeyEventsCount > 0;
  const officialExams = exams.filter((e) => !e.isDemoFixture);
  const officialValidatedCount = officialExams.filter(
    (e) => e.importStatus === 'validated'
  ).length;
  const officialAwaitingCount = officialExams.filter(
    (e) => e.importStatus === 'awaiting_import'
  ).length;
  const pendingGabaritoCount = officialExams.filter(
    (e) => e.importStatus === 'validated' && e.answerKeyStatus === 'pending_gabarito'
  ).length;
  const officialQuestionsCount = questions.filter((q) => !q.provenance.isDemoFixture).length;

  const handleContinueAction = () => {
    if (activeAttempt) {
      setResumeAttemptId(activeAttempt.id);
      setActiveSection('simulados');
      return;
    }
    setActiveSection('questoes');
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Hero / Greeting Section */}
      <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {formattedDate} · Preparação UFRR Integral & Medicina
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
              {greeting}. Sua mesa de estudos está pronta.
            </h1>
            <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {activeAttempt
                ? `Você possui um simulado em andamento (${activeAttempt.examName}). Retome exatamente de onde parou.`
                : hasData
                  ? `Você já registrou ${metrics.totalSolvedUnique} ${metrics.totalSolvedUnique === 1 ? 'questão resolvida' : 'questões resolvidas'} neste dispositivo. Continue praticando ou revise seus pontos de atenção.`
                  : 'Comece imediatamente pelo banco de questões, explore os simulados ou prepare seu caderno de anotações com a caneta.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleContinueAction}
              className="min-h-[48px] px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
            >
              <span>
                {activeAttempt ? 'Retomar simulado em curso' : 'Continuar estudando'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setActiveSection('simulados')}
              className="min-h-[48px] px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
            >
              <ClipboardCheck className="w-4 h-4 text-neutral-500" />
              <span>Simulados</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection('questoes')}
              className="min-h-[48px] px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4 text-neutral-500" />
              <span>Banco de Questões</span>
            </button>
          </div>
        </div>
      </section>

      {/* Primary KPI Strip (Real Usage Data Only) */}
      <section aria-label="Resumo de utilização" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Questões resolvidas</span>
            <FileCheck2 className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="mt-3 font-mono text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
            {metrics.totalSolvedUnique}
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
            {metrics.totalAnswerEvents} {metrics.totalAnswerEvents === 1 ? 'registro total' : 'registros totais'}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Taxa de acertos</span>
            <Target className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="mt-3 font-mono text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
            {!hasData ? '—' : hasPendingKeysOnly ? 'Pendente' : `${metrics.accuracyPercent}%`}
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
            {!hasData
              ? 'Sem resoluções registradas'
              : hasPendingKeysOnly
                ? `${metrics.pendingKeyEventsCount} ${metrics.pendingKeyEventsCount === 1 ? 'resposta' : 'respostas'} aguardando gabarito`
                : `${metrics.totalCorrect} acertos · ${metrics.totalIncorrect} erros`}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Tempo de estudo</span>
            <Clock className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="mt-3 font-mono text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
            {metrics.totalStudySeconds > 0
              ? formatStudyTimeHuman(metrics.totalStudySeconds)
              : '0 min'}
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
            {metrics.completedSimuladosCount}{' '}
            {metrics.completedSimuladosCount === 1 ? 'simulado concluído' : 'simulados concluídos'}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Pendentes e erradas</span>
            <Flag className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="mt-3 font-mono text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
            {metrics.wrongLatestCount + metrics.pendingReviewCount}
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 tabular-nums">
            {metrics.wrongLatestCount} erradas · {metrics.pendingReviewCount} para revisar
          </p>
        </div>
      </section>

      {/* Concise Adaptive Next-Step Strip */}
      {adaptiveSummary.recommendedQuestions.length > 0 && (
        <section
          data-testid="home-adaptive-next-step"
          aria-label="Próximo passo recomendado"
          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-5 py-4 space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Próximo passo recomendado para sua revisão
            </h2>
            {adaptiveSummary.weakTopics[0] && (
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Foco atual:{' '}
                {adaptiveSummary.weakTopics[0].subtopic ??
                  adaptiveSummary.weakTopics[0].topic}{' '}
                ({adaptiveSummary.weakTopics[0].recentAccuracy}% acerto)
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {adaptiveSummary.recommendedQuestions.slice(0, 3).map((rec) => (
              <button
                key={rec.question.id}
                type="button"
                onClick={() => {
                  setFocusedQuestionId(rec.question.id);
                  setActiveSection('questoes');
                }}
                className="min-h-[50px] px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] text-left hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <p className="font-mono text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    {rec.question.originalCode} · {rec.question.classification.subject}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                    {rec.priorityReason}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Main Split: Evolution + Subject Distribution + Recent History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Evolution & Subject Distribution */}
        <section className="lg:col-span-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Evolução e distribuição por disciplina
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Calculado exclusivamente com base nas suas respostas reais
              </p>
            </div>
            {hasData && (
              <button
                type="button"
                onClick={() => setActiveSection('desempenho')}
                className="min-h-[38px] px-3 rounded-lg text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 whitespace-nowrap"
              >
                Ver análise completa
              </button>
            )}
          </div>

          {!hasData ? (
            <div className="rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 p-8 text-center space-y-2">
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Nenhum dado de desempenho registrado ainda
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                À medida que você resolver questões ou concluir simulados, sua curva de evolução e a distribuição por disciplina aparecerão aqui automaticamente.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Period Accuracy Mini SVG Chart */}
              {metrics.gradedAnswerEvents > 0 && metrics.evolutionByPeriod.length > 0 ? (
                <div>
                  <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                    Aproveitamento recente por dia
                  </p>
                  <div className="h-32 w-full">
                    <svg
                      viewBox="0 0 560 120"
                      className="w-full h-full overflow-visible"
                      role="img"
                      aria-label="Gráfico de evolução diária de acertos"
                    >
                      <line
                        x1="0"
                        y1="100"
                        x2="560"
                        y2="100"
                        stroke="currentColor"
                        className="text-neutral-200 dark:text-neutral-800"
                      />
                      <line
                        x1="0"
                        y1="50"
                        x2="560"
                        y2="50"
                        stroke="currentColor"
                        strokeDasharray="4 4"
                        className="text-neutral-200 dark:text-neutral-800"
                      />
                      {(() => {
                        const pts = metrics.evolutionByPeriod;
                        if (pts.length === 1) {
                          const y = 100 - (pts[0].accuracyPercent / 100) * 85;
                          return (
                            <g>
                              <circle cx="280" cy={y} r="5" className="fill-blue-600 dark:fill-blue-400" />
                              <text
                                x="280"
                                y="116"
                                textAnchor="middle"
                                className="fill-neutral-500 text-[10px] font-mono"
                              >
                                {pts[0].label} ({pts[0].accuracyPercent}%)
                              </text>
                            </g>
                          );
                        }
                        const coords = pts.map((p, i) => {
                          const x = 24 + (i / (pts.length - 1)) * 512;
                          const y = 100 - (p.accuracyPercent / 100) * 85;
                          return { x, y, p };
                        });
                        const d = coords
                          .map((c, idx) => `${idx === 0 ? 'M' : 'L'} ${c.x} ${c.y}`)
                          .join(' ');
                        return (
                          <>
                            <path
                              d={d}
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {coords.map((c) => (
                              <g key={c.p.dateKey}>
                                <circle
                                  cx={c.x}
                                  cy={c.y}
                                  r="4"
                                  className="fill-blue-600 dark:fill-blue-400"
                                />
                                <text
                                  x={c.x}
                                  y="116"
                                  textAnchor="middle"
                                  className="fill-neutral-500 text-[10px] font-mono"
                                >
                                  {c.p.label}
                                </text>
                              </g>
                            ))}
                          </>
                        );
                      })()}
                    </svg>
                  </div>
                </div>
              ) : hasPendingKeysOnly ? (
                <div className="rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 p-4 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Suas resoluções estão salvas. A curva de acertos será exibida automaticamente assim que o gabarito oficial das provas respondidas for vinculado em Meu Estudo.
                </div>
              ) : null}

              {/* Subject Distribution */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Distribuição por disciplina
                </p>
                {metrics.subjectMetrics.map((sm) => (
                  <div key={sm.subject} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">
                        {sm.subject}
                      </span>
                      <span className="font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
                        {metrics.gradedAnswerEvents > 0
                          ? `${sm.answeredCount} Q · ${sm.accuracyPercent}% acerto`
                          : `${sm.answeredCount} Q · gabarito pendente`}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
                        style={{ width: `${Math.max(4, sm.shareOfStudyPercent)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Recent History & Platform Readiness */}
        <section className="lg:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
              Histórico recente
            </h2>

            {metrics.recentActivity.length === 0 ? (
              <div className="rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 p-6 text-center space-y-2">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Sem atividade recente
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Suas resoluções no Banco de Questões e seus simulados aparecerão aqui em ordem cronológica.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {metrics.recentActivity.map((item) => (
                  <li
                    key={item.id}
                    className="py-2.5 flex items-center justify-between gap-3 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-neutral-800 dark:text-neutral-100 truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-mono tabular-nums shrink-0 ${
                        item.isPendingKey
                          ? 'text-blue-700 dark:text-blue-400'
                          : item.isPositive
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {item.resultLabel}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Transparent Platform State & Local Storage Notice */}
          <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] border border-neutral-200/80 dark:border-neutral-800 p-4 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {officialValidatedCount > 0
                    ? `${officialValidatedCount} provas oficiais da UFRR carregadas (2022–2026)`
                    : 'Catálogo UFRR pronto para importação'}
                </span>
                <p className="mt-0.5">
                  {officialValidatedCount > 0
                    ? `${officialQuestionsCount} questões oficiais estruturadas com textos-base, fórmulas e figuras.${pendingGabaritoCount > 0 ? ` ${pendingGabaritoCount} edições aguardam vinculação do gabarito oficial definitivo (Meu Estudo → Backup & Importação).` : ' Gabaritos oficiais vinculados.'}`
                    : `${officialAwaitingCount} edições oficiais da UFRR catalogadas aguardando importação.`}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-2 border-t border-neutral-200/70 dark:border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Seus estudos e rascunhos são salvos localmente neste dispositivo (IndexedDB). Limpar os dados do navegador remove o histórico caso não haja backup exportado em Meu Estudo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
