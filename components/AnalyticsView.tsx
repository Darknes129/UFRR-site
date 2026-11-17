'use client';

import React from 'react';
import {
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  Clock,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import { formatStudyTimeHuman } from '@/lib/engine';
import { useStudy } from '@/lib/study-store';
import { MathText } from './MathText';
import { ResolutionCoveragePanel } from './ResolutionCoveragePanel';

export const AnalyticsView: React.FC = () => {
  const {
    metrics,
    attempts,
    adaptiveSummary,
    setFocusedQuestionId,
    setActiveSection,
  } = useStudy();

  const completedAttempts = attempts.filter(
    (a) => a.status === 'completed' || a.status === 'expired'
  );
  const hasAnyData =
    metrics.totalAnswerEvents > 0 || completedAttempts.length > 0;
  const hasGradedData = metrics.gradedAnswerEvents > 0;
  const hasPendingKeysOnly =
    hasAnyData && !hasGradedData && metrics.pendingKeyEventsCount > 0;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Desempenho e Estatísticas
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Métricas reais consolidadas a partir das suas resoluções no banco e simulados.
          </p>
        </div>
      </header>

      {!hasAnyData ? (
        <section className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151B23] p-10 text-center space-y-4">
          <BarChart3 className="w-8 h-8 text-neutral-400 mx-auto" />
          <div className="space-y-1.5">
            <h2 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Ainda não há estatísticas para exibir
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
              Esta plataforma não fabrica números fictícios. Resolva questões no Banco de Questões ou conclua um simulado para gerar seus gráficos reais de evolução, disciplinas e assuntos.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setActiveSection('questoes')}
              className="min-h-[44px] px-5 rounded-xl bg-blue-600 text-white text-sm font-medium"
            >
              Ir para o Banco de Questões
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('simulados')}
              className="min-h-[44px] px-5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-800 dark:text-neutral-100"
            >
              Abrir Simulados
            </button>
          </div>
        </section>
      ) : (
        <>
          {/* Summary KPI Strip */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
              <p className="text-xs text-neutral-500">Total resolvidas</p>
              <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-neutral-900 dark:text-neutral-50">
                {metrics.totalSolvedUnique}
              </p>
              <p className="mt-1 text-xs text-neutral-500 tabular-nums">
                {metrics.totalAnswerEvents}{' '}
                {metrics.totalAnswerEvents === 1
                  ? 'resposta registrada'
                  : 'respostas registradas'}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
              <p className="text-xs text-neutral-500">Acertos e erros</p>
              <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-neutral-900 dark:text-neutral-50">
                {hasPendingKeysOnly ? '— / —' : `${metrics.totalCorrect} / ${metrics.totalIncorrect}`}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {hasPendingKeysOnly
                  ? `${metrics.pendingKeyEventsCount} aguardando gabarito`
                  : 'acertos / erros'}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Percentual de acertos</span>
                <Target className="w-4 h-4 text-neutral-400" />
              </div>
              <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-blue-700 dark:text-blue-400">
                {hasPendingKeysOnly ? 'Pendente' : `${metrics.accuracyPercent}%`}
              </p>
              <p className="mt-1 text-xs text-neutral-500 tabular-nums">
                {metrics.completedSimuladosCount} simulados finalizados
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Tempo médio / questão</span>
                <Clock className="w-4 h-4 text-neutral-400" />
              </div>
              <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-neutral-900 dark:text-neutral-50">
                {formatStudyTimeHuman(metrics.avgTimePerQuestionSeconds)}
              </p>
              <p className="mt-1 text-xs text-neutral-500 tabular-nums">
                Total: {formatStudyTimeHuman(metrics.totalStudySeconds)}
              </p>
            </div>
          </section>

          {/* Assisted vs Unassisted Resolution Breakdown */}
          <section
            data-testid="assisted-breakdown-section"
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 sm:p-6 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <BookOpenCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Autonomia de resolução (sem consulta vs. com consulta prévia)
              </h2>
              <span className="text-xs text-neutral-500">
                Separa respostas autônomas de respostas feitas após abrir a resolução
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-4 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Resolução autônoma (sem consultar resolução)
                  </p>
                  <p className="text-xs text-neutral-500 tabular-nums">
                    {metrics.assistedBreakdown.unassistedTotal}{' '}
                    {metrics.assistedBreakdown.unassistedTotal === 1
                      ? 'resposta registrada'
                      : 'respostas registradas'}
                    {metrics.assistedBreakdown.unassistedGraded > 0
                      ? ` · ${metrics.assistedBreakdown.unassistedCorrect}/${metrics.assistedBreakdown.unassistedGraded} acertos`
                      : ''}
                  </p>
                </div>
                <p className="font-mono text-xl font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
                  {metrics.assistedBreakdown.unassistedGraded > 0
                    ? `${metrics.assistedBreakdown.unassistedAccuracyPercent}%`
                    : '—'}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-4 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Com consulta prévia à resolução
                  </p>
                  <p className="text-xs text-neutral-500 tabular-nums">
                    {metrics.assistedBreakdown.consultedTotal}{' '}
                    {metrics.assistedBreakdown.consultedTotal === 1
                      ? 'resposta registrada'
                      : 'respostas registradas'}
                    {metrics.assistedBreakdown.consultedGraded > 0
                      ? ` · ${metrics.assistedBreakdown.consultedCorrect}/${metrics.assistedBreakdown.consultedGraded} acertos`
                      : ''}
                  </p>
                </div>
                <p className="font-mono text-xl font-semibold tabular-nums text-blue-700 dark:text-blue-400">
                  {metrics.assistedBreakdown.consultedGraded > 0
                    ? `${metrics.assistedBreakdown.consultedAccuracyPercent}%`
                    : '—'}
                </p>
              </div>
            </div>
          </section>

          {/* Adaptive Medicina UFRR Focus (Real Error & Concept Gaps) */}
          {(adaptiveSummary.weakTopics.length > 0 ||
            adaptiveSummary.recommendedQuestions.length > 0) && (
            <section
              data-testid="analytics-adaptive-focus"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 sm:p-6 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Foco adaptativo para Medicina UFRR
                </h2>
                <span className="text-xs text-neutral-500">
                  Baseado nos seus erros recentes e conceitos decisivos pendentes
                </span>
              </div>

              {adaptiveSummary.weakTopics.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {adaptiveSummary.weakTopics.map((wt) => (
                    <div
                      key={wt.key}
                      className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-3.5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                          {wt.subtopic ?? wt.topic}
                        </span>
                        <span className="font-mono tabular-nums font-medium text-rose-600 dark:text-rose-400 shrink-0">
                          {wt.recentAccuracy}% acerto
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500">
                        {wt.subject} · {wt.wrongCount}{' '}
                        {wt.wrongCount === 1 ? 'erro' : 'erros'} em{' '}
                        {wt.gradedAttempts}{' '}
                        {wt.gradedAttempts === 1 ? 'tentativa' : 'tentativas'}
                      </p>
                      {wt.missingConcepts.length > 0 && (
                        <div className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
                          <MathText text={`Revisar: ${wt.missingConcepts[0]}`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {adaptiveSummary.recommendedQuestions.length > 0 && (
                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-2.5">
                  <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                    Próximas questões recomendadas para fechar essas lacunas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {adaptiveSummary.recommendedQuestions.slice(0, 4).map((rec) => (
                      <button
                        key={rec.question.id}
                        type="button"
                        onClick={() => {
                          setFocusedQuestionId(rec.question.id);
                          setActiveSection('questoes');
                        }}
                        className="min-h-[52px] px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] text-left hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                            {rec.question.originalCode}
                          </p>
                          <p className="text-[11px] text-neutral-500 truncate">
                            {rec.priorityReason}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Evolution Chart + Highest Error Topics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Evolução por período
                </h2>
                <span className="text-xs text-neutral-500">Últimos dias ativos</span>
              </div>

              {!hasGradedData ? (
                <div className="rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 p-6 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Você já possui respostas registradas, mas as questões respondidas aguardam vinculação do gabarito oficial em Meu Estudo → Backup & Importação para calcular a curva de acertos.
                </div>
              ) : metrics.evolutionByPeriod.length > 0 && (
                <div className="h-52 w-full">
                  <svg
                    viewBox="0 0 600 180"
                    className="w-full h-full overflow-visible"
                    role="img"
                    aria-label="Gráfico de evolução por período"
                  >
                    {[0, 50, 100].map((pct) => {
                      const y = 148 - (pct / 100) * 124;
                      return (
                        <g key={pct}>
                          <line
                            x1="36"
                            y1={y}
                            x2="584"
                            y2={y}
                            stroke="currentColor"
                            strokeDasharray={pct === 0 ? undefined : '4 4'}
                            className="text-neutral-200 dark:text-neutral-800"
                          />
                          <text
                            x="28"
                            y={y + 4}
                            textAnchor="end"
                            className="fill-neutral-400 text-[10px] font-mono"
                          >
                            {pct}%
                          </text>
                        </g>
                      );
                    })}

                    {(() => {
                      const pts = metrics.evolutionByPeriod;
                      const coords = pts.map((p, i) => {
                        const x =
                          pts.length === 1
                            ? 310
                            : 52 + (i / (pts.length - 1)) * 516;
                        const y = 148 - (p.accuracyPercent / 100) * 124;
                        return { x, y, p };
                      });
                      const pathD =
                        coords.length > 1
                          ? coords
                              .map((c, idx) => `${idx === 0 ? 'M' : 'L'} ${c.x} ${c.y}`)
                              .join(' ')
                          : '';

                      return (
                        <>
                          {pathD && (
                            <path
                              d={pathD}
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          )}
                          {coords.map((c) => (
                            <g key={c.p.dateKey}>
                              <circle
                                cx={c.x}
                                cy={c.y}
                                r="5"
                                className="fill-blue-600 dark:fill-blue-400"
                              />
                              <text
                                x={c.x}
                                y={c.y - 10}
                                textAnchor="middle"
                                className="fill-neutral-700 dark:fill-neutral-300 text-[10px] font-mono"
                              >
                                {c.p.accuracyPercent}%
                              </text>
                              <text
                                x={c.x}
                                y="168"
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
              )}
            </section>

            {/* Highest Error Topics */}
            <section className="lg:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
              <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Conteúdos com maior incidência de erros
              </h2>

              {metrics.highestErrorTopics.length === 0 ? (
                <p className="text-sm text-neutral-500 py-6">
                  {hasPendingKeysOnly
                    ? 'Aguardando vinculação dos gabaritos oficiais para apurar erros por assunto.'
                    : 'Nenhum erro registrado até o momento.'}
                </p>
              ) : (
                <div className="space-y-3">
                  {metrics.highestErrorTopics.map((t) => (
                    <div
                      key={`${t.subject}-${t.topic}`}
                      className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-3.5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {t.topic}
                        </span>
                        <span className="font-mono tabular-nums text-red-600 dark:text-red-400 font-medium">
                          {t.errorRatePercent}% erro ({t.incorrectCount}/{t.answeredCount})
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500">{t.subject}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Subject & Topic Breakdown Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
              <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Desempenho por disciplina
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
                      <th className="py-2 text-left font-medium">Disciplina</th>
                      <th className="py-2 text-right font-medium">Resolvidas</th>
                      <th className="py-2 text-right font-medium">Acertos</th>
                      <th className="py-2 text-right font-medium">Tempo médio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {metrics.subjectMetrics.map((sm) => (
                      <tr key={sm.subject}>
                        <td className="py-2.5 font-medium text-neutral-900 dark:text-neutral-100">
                          {sm.subject}
                        </td>
                        <td className="py-2.5 text-right font-mono tabular-nums">
                          {sm.answeredCount}
                        </td>
                        <td className="py-2.5 text-right font-mono tabular-nums font-medium text-blue-700 dark:text-blue-400">
                          {hasGradedData ? `${sm.accuracyPercent}%` : 'Aguardando gabarito'}
                        </td>
                        <td className="py-2.5 text-right font-mono tabular-nums text-neutral-500">
                          {formatStudyTimeHuman(sm.avgTimeSeconds)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
              <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Desempenho por assunto
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
                      <th className="py-2 text-left font-medium">Assunto</th>
                      <th className="py-2 text-right font-medium">Qtd.</th>
                      <th className="py-2 text-right font-medium">Acertos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {metrics.topicMetrics.map((tm) => (
                      <tr key={`${tm.subject}-${tm.topic}`}>
                        <td className="py-2.5">
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {tm.topic}
                          </p>
                          <p className="text-[11px] text-neutral-500">{tm.subject}</p>
                        </td>
                        <td className="py-2.5 text-right font-mono tabular-nums">
                          {tm.answeredCount}
                        </td>
                        <td className="py-2.5 text-right font-mono tabular-nums font-medium">
                          {hasGradedData ? `${tm.accuracyPercent}%` : 'Aguardando gabarito'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Individual Exam Attempt History & Comparisons */}
          {metrics.attemptComparisons.length > 0 && (
            <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-5">
              <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Histórico de simulados e comparação entre tentativas
              </h2>

              <div className="space-y-5">
                {metrics.attemptComparisons.map((group) => (
                  <div
                    key={group.examId}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {group.examName}
                      </h3>
                      <span className="text-xs font-mono tabular-nums text-neutral-500">
                        {group.attempts.length}{' '}
                        {group.attempts.length === 1 ? 'tentativa' : 'tentativas'}
                      </span>
                    </div>

                    <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                      {group.attempts.map((a, idx) => (
                        <div
                          key={a.attemptId}
                          className="py-2 flex flex-wrap items-center justify-between gap-3 text-xs"
                        >
                          <span className="font-medium text-neutral-700 dark:text-neutral-300">
                            Tentativa #{idx + 1} ·{' '}
                            {a.mode === 'real' ? 'Realista' : 'Treino'} ·{' '}
                            {new Intl.DateTimeFormat('pt-BR', {
                              dateStyle: 'short',
                              timeStyle: 'short',
                            }).format(new Date(a.finishedAt))}
                          </span>
                          <span className="font-mono tabular-nums font-semibold text-neutral-900 dark:text-neutral-100">
                            {a.pendingKeyCount === a.totalQuestions
                              ? `Gabarito pendente · ${formatStudyTimeHuman(a.elapsedSeconds)}`
                              : `${a.correctCount}/${a.totalQuestions} (${a.accuracyPercent}%) · ${formatStudyTimeHuman(a.elapsedSeconds)}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <ResolutionCoveragePanel />
    </div>
  );
};
