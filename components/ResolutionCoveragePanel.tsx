'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useStudy } from '@/lib/study-store';

export const ResolutionCoveragePanel: React.FC = () => {
  const { resolutionCoverage } = useStudy();
  const [showMethodsList, setShowMethodsList] = useState(false);

  const percentResolved =
    resolutionCoverage.totalQuestions > 0
      ? Math.round(
          (resolutionCoverage.resolvedCount / resolutionCoverage.totalQuestions) *
            1000
        ) / 10
      : 0;

  const officialCount =
    resolutionCoverage.officialDefinitiveCount +
    resolutionCoverage.officialPreliminaryCount;

  return (
    <section
      data-testid="resolution-coverage-panel"
      aria-label="Cobertura e auditoria das resoluções inteligentes"
      className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-4">
        <div className="space-y-1">
          <h2 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
            <BookOpenCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Cobertura das Resoluções Inteligentes
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Auditoria em tempo real sobre as {resolutionCoverage.totalQuestions}{' '}
            questões oficiais UFRR (2022–2026), diferenciando gabaritos oficiais, resoluções independentes verificadas e itens em verificação.
          </p>
        </div>

        <div className="text-right font-mono tabular-nums">
          <p className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
            {resolutionCoverage.resolvedCount}/{resolutionCoverage.totalQuestions}
          </p>
          <p className="text-xs text-neutral-500">
            {percentResolved}% com resolução verificada
          </p>
        </div>
      </div>

      {/* Main Coverage KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-4 space-y-1">
          <p className="text-xs text-neutral-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Oficiais / preliminares
          </p>
          <p className="font-mono text-2xl font-semibold tabular-nums text-neutral-900 dark:text-neutral-50">
            {officialCount}
          </p>
          <p className="text-[11px] text-neutral-500">
            {resolutionCoverage.officialDefinitiveCount} def. ·{' '}
            {resolutionCoverage.officialPreliminaryCount} prelim.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-4 space-y-1">
          <p className="text-xs text-neutral-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Independentes verificadas
          </p>
          <p className="font-mono text-2xl font-semibold tabular-nums text-neutral-900 dark:text-neutral-50">
            {resolutionCoverage.verifiedIndependentCount}
          </p>
          <p className="text-[11px] text-neutral-500">
            Resolução e conferência técnica completas
          </p>
        </div>

        <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 space-y-1">
          <p className="text-xs text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Divergências detectadas
          </p>
          <p className="font-mono text-2xl font-semibold tabular-nums text-amber-900 dark:text-amber-100">
            {resolutionCoverage.divergenceCount}
          </p>
          <p className="text-[11px] text-amber-800/85 dark:text-amber-300/80">
            Resolução técnica vs. preliminar
          </p>
        </div>

        <div className="rounded-xl border border-rose-200/80 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-4 space-y-1">
          <p className="text-xs text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            Anuladas / Em verificação
          </p>
          <p className="font-mono text-2xl font-semibold tabular-nums text-neutral-900 dark:text-neutral-50">
            {resolutionCoverage.annulledCount}{' '}
            <span className="text-sm font-normal text-neutral-500">
              / {resolutionCoverage.pendingVerificationCount} verif.
            </span>
          </p>
          <p className="text-[11px] text-neutral-500">
            Transparência sem gabarito inventado
          </p>
        </div>
      </div>

      {/* Shortcuts & Generalizable Methods Strip */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-[#11161D] p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <span className="flex items-center gap-2 font-medium text-neutral-800 dark:text-neutral-200">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>
                <strong className="font-mono tabular-nums">
                  {resolutionCoverage.macetesCount}
                </strong>{' '}
                macetes práticos com condição de uso e cuidado
              </span>
            </span>
            <span className="flex items-center gap-2 font-medium text-neutral-800 dark:text-neutral-200">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>
                <strong className="font-mono tabular-nums">
                  {resolutionCoverage.distinctMethodsCount}
                </strong>{' '}
                habilidades mapeadas para questões semelhantes
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowMethodsList((v) => !v)}
            className="min-h-[38px] px-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-xs font-medium text-neutral-700 dark:text-neutral-200 inline-flex items-center gap-1.5"
          >
            <span>
              {showMethodsList
                ? 'Ocultar catálogo'
                : `Ver ${resolutionCoverage.distinctMethodsCount} padrões`}
            </span>
            {showMethodsList ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {showMethodsList && (
          <div className="pt-3 border-t border-neutral-200/70 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
            {resolutionCoverage.methodsList.map((m) => (
              <div
                key={m.questionType}
                className="rounded-lg border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-3 py-2 flex items-center justify-between gap-2 text-xs"
              >
                <div className="min-w-0">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100 truncate">
                    {m.methodTitle}
                  </p>
                  <p className="text-[11px] text-neutral-500">{m.subject}</p>
                </div>
                <span className="font-mono text-[11px] text-neutral-500 shrink-0">
                  {m.questionCount}×
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subject & Edition Breakdown Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Cobertura por disciplina
          </h3>
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-neutral-50 dark:bg-[#11161D] text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                  <th className="px-3.5 py-2 text-left font-medium">Disciplina</th>
                  <th className="px-3.5 py-2 text-right font-medium">Verif.</th>
                  <th className="px-3.5 py-2 text-right font-medium">Em verif.</th>
                  <th className="px-3.5 py-2 text-right font-medium">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {resolutionCoverage.bySubject.map((row) => (
                  <tr key={row.subject}>
                    <td className="px-3.5 py-2 font-medium text-neutral-800 dark:text-neutral-200">
                      {row.subject}
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono tabular-nums font-semibold text-blue-700 dark:text-blue-400">
                      {row.resolved}
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono tabular-nums text-neutral-500">
                      {row.pending}
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono tabular-nums text-neutral-500">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Cobertura por edição
          </h3>
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-neutral-50 dark:bg-[#11161D] text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                  <th className="px-3.5 py-2 text-left font-medium">Edição</th>
                  <th className="px-3.5 py-2 text-right font-medium">Verif.</th>
                  <th className="px-3.5 py-2 text-right font-medium">Div. / Anul.</th>
                  <th className="px-3.5 py-2 text-right font-medium">Em verif.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {resolutionCoverage.byEdition.map((row) => (
                  <tr key={row.examId}>
                    <td className="px-3.5 py-2 font-medium text-neutral-800 dark:text-neutral-200">
                      {row.edition} ({row.total}q)
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono tabular-nums font-semibold text-blue-700 dark:text-blue-400">
                      {row.resolved}
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono tabular-nums text-amber-700 dark:text-amber-400">
                      {row.divergences + row.annulled}
                    </td>
                    <td className="px-3.5 py-2 text-right font-mono tabular-nums text-neutral-500">
                      {row.pending}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
