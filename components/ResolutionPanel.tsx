'use client';

import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  ListChecks,
  Sparkles,
  Zap,
} from 'lucide-react';
import { MathText } from './MathText';
import {
  getVerificationStatusLabel,
  type RelatedBankQuestionMatch,
} from '@/lib/resolutions';
import type {
  AlternativeLetter,
  Question,
  QuestionResolution,
} from '@/lib/types';

type ResolutionTab = 'como-resolver' | 'macete' | 'semelhantes';

interface ResolutionPanelProps {
  question: Question;
  resolution: QuestionResolution | null;
  relatedMatches: RelatedBankQuestionMatch[];
  selectedLetter?: AlternativeLetter;
  onNavigateToQuestion?: (questionId: string) => void;
}

const ADAPTIVE_TAG_LABEL: Record<
  RelatedBankQuestionMatch['adaptiveTag'],
  { label: string; toneClass: string }
> = {
  retry_wrong: {
    label: 'Errou antes · refazer',
    toneClass: 'text-rose-700 dark:text-rose-400',
  },
  error_reinforcement: {
    label: 'Reforçar ponto fraco',
    toneClass: 'text-amber-700 dark:text-amber-400',
  },
  unsolved: {
    label: 'Inédita recomendada',
    toneClass: 'text-blue-700 dark:text-blue-400',
  },
  practice: {
    label: 'Prática adicional',
    toneClass: 'text-neutral-500 dark:text-neutral-400',
  },
};

export const ResolutionPanel: React.FC<ResolutionPanelProps> = ({
  question,
  resolution,
  relatedMatches,
  selectedLetter,
  onNavigateToQuestion,
}) => {
  const [activeTab, setActiveTab] = useState<ResolutionTab>('como-resolver');
  const [showSteps, setShowSteps] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(false);

  const [lastQuestionId, setLastQuestionId] = useState(question.id);
  if (lastQuestionId !== question.id) {
    setLastQuestionId(question.id);
    setActiveTab('como-resolver');
    setShowSteps(false);
    setShowAlternatives(false);
  }

  const verificationMeta = useMemo(() => {
    if (!resolution) return null;
    const label = getVerificationStatusLabel(resolution.verificationStatus);
    switch (resolution.verificationStatus) {
      case 'official_definitive':
      case 'official_preliminary':
        return {
          label,
          badgeClass:
            'border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200',
          icon: (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          ),
        };
      case 'verified_independent':
        return {
          label,
          badgeClass:
            'border-blue-200 dark:border-blue-800/70 bg-blue-50/70 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100',
          icon: (
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          ),
        };
      case 'divergence_detected':
        return {
          label,
          badgeClass:
            'border-amber-300 dark:border-amber-700 bg-amber-50/80 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100',
          icon: (
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          ),
        };
      case 'annulled_official':
        return {
          label,
          badgeClass:
            'border-rose-200 dark:border-rose-800/70 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100',
          icon: (
            <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
          ),
        };
      case 'pending_verification':
      default:
        return {
          label,
          badgeClass:
            'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-neutral-700 dark:text-neutral-200',
          icon: (
            <Clock className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0" />
          ),
        };
    }
  }, [resolution]);

  const normalizedSteps = useMemo(() => {
    if (!resolution?.stepByStep) return [];
    if (Array.isArray(resolution.stepByStep)) {
      return resolution.stepByStep.map((s) => s.trim()).filter(Boolean);
    }
    return resolution.stepByStep
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [resolution]);

  if (!resolution) {
    return (
      <section
        data-testid={`resolution-panel-${question.id}`}
        aria-label="Painel de resolução comentada"
        className="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-5 space-y-4"
      >
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Resolução em preparação
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[68ch]">
              Esta questão ({question.originalCode}) ainda não possui resolução estruturada auditada.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const hasSteps = normalizedSteps.length > 0;
  const answerChip =
    resolution.verificationStatus === 'annulled_official'
      ? 'ANULADA'
      : resolution.proposedAnswer ?? resolution.officialAnswer ?? 'Em verificação';

  return (
    <section
      data-testid={`resolution-panel-${question.id}`}
      aria-label={`Resolução da questão ${question.originalCode}`}
      className="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-5 sm:p-6 space-y-5"
    >
      {/* Compact Header & Honest Verification Strip */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1 min-w-0 flex-1">
          <h3 className="font-display text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            {resolution.methodTitle}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {resolution.subject} · {resolution.topic}
            {resolution.subtopic ? ` · ${resolution.subtopic}` : ''}
          </p>
        </div>

        {verificationMeta && (
          <div
            className={`rounded-xl border px-3 py-2 flex flex-wrap items-center gap-2 text-xs ${verificationMeta.badgeClass}`}
          >
            {verificationMeta.icon}
            <span className="font-medium">{verificationMeta.label}</span>
            <span className="font-mono font-semibold px-1.5 py-0.5 rounded bg-white/80 dark:bg-black/25">
              {answerChip}
            </span>
            {selectedLetter && (
              <span className="font-mono opacity-80">· Sua: {selectedLetter}</span>
            )}
          </div>
        )}
      </div>

      {/* 3 Compact Single-Visibility Tabs */}
      <div
        role="tablist"
        aria-label="Áreas da resolução"
        className="grid grid-cols-3 gap-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-1"
      >
        <button
          type="button"
          role="tab"
          data-testid="resolution-tab-como-resolver"
          aria-selected={activeTab === 'como-resolver'}
          onClick={() => setActiveTab('como-resolver')}
          className={`min-h-[44px] px-3 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 whitespace-nowrap ${
            activeTab === 'como-resolver'
              ? 'bg-neutral-900 dark:bg-blue-600 text-white'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span>Como resolver</span>
        </button>

        <button
          type="button"
          role="tab"
          data-testid="resolution-tab-macete"
          aria-selected={activeTab === 'macete'}
          onClick={() => setActiveTab('macete')}
          className={`min-h-[44px] px-3 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 whitespace-nowrap ${
            activeTab === 'macete'
              ? 'bg-neutral-900 dark:bg-blue-600 text-white'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
          }`}
        >
          <Zap className="w-4 h-4 shrink-0" />
          <span>Macete</span>
        </button>

        <button
          type="button"
          role="tab"
          data-testid="resolution-tab-semelhantes"
          aria-selected={activeTab === 'semelhantes'}
          onClick={() => setActiveTab('semelhantes')}
          className={`min-h-[44px] px-3 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 whitespace-nowrap ${
            activeTab === 'semelhantes'
              ? 'bg-neutral-900 dark:bg-blue-600 text-white'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
          }`}
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span>Questões semelhantes</span>
        </button>
      </div>

      {/* TAB 1: Como resolver (Quick Resolution first, Step-by-step on demand) */}
      {activeTab === 'como-resolver' && (
        <div
          role="tabpanel"
          data-testid="resolution-tabpanel-como-resolver"
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-4"
        >
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Resolução rápida
            </p>
            <div className="text-sm sm:text-[15px] text-neutral-800 dark:text-neutral-100 leading-relaxed max-w-[70ch]">
              <MathText text={resolution.quickSolution} />
            </div>
          </div>

          <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] border border-neutral-200/80 dark:border-neutral-800 px-4 py-3 space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Conceito decisivo
            </p>
            <div className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
              <MathText text={resolution.decisiveConcept} />
            </div>
          </div>

          {(resolution.verificationStatus === 'divergence_detected' ||
            resolution.verificationStatus === 'pending_verification') && (
            <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 px-4 py-3 text-xs text-amber-950 dark:text-amber-100 leading-relaxed">
              <MathText text={resolution.verificationNotes} />
            </div>
          )}

          {/* On-Demand Toggles: Passo a passo & Alternativas */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {hasSteps && (
              <button
                type="button"
                data-testid="toggle-step-by-step-btn"
                aria-expanded={showSteps}
                onClick={() => setShowSteps((v) => !v)}
                className="min-h-[42px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 inline-flex items-center gap-1.5 transition-colors"
              >
                <ListChecks className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{showSteps ? 'Ocultar passo a passo' : 'Ver passo a passo'}</span>
                {showSteps ? (
                  <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                )}
              </button>
            )}

            <button
              type="button"
              data-testid="toggle-alternatives-analysis-btn"
              aria-expanded={showAlternatives}
              onClick={() => setShowAlternatives((v) => !v)}
              className="min-h-[42px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>
                {showAlternatives
                  ? 'Ocultar análise das alternativas'
                  : 'Analisar alternativas'}
              </span>
              {showAlternatives ? (
                <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              )}
            </button>
          </div>

          {showSteps && hasSteps && (
            <div
              data-testid="step-by-step-list"
              className="pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2.5"
            >
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Passo a passo detalhado
              </p>
              <ol className="space-y-2 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {normalizedSteps.map((step, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl bg-neutral-50/80 dark:bg-[#11161D] border border-neutral-200/70 dark:border-neutral-800 px-3.5 py-2.5"
                  >
                    <MathText text={step} />
                  </li>
                ))}
              </ol>
            </div>
          )}

          {showAlternatives && (
            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
              {resolution.alternativeAnalysis.map((item) => {
                const isCorrect = item.status === 'correta';
                return (
                  <div
                    key={item.letter}
                    className={`rounded-xl border px-3.5 py-2.5 flex items-start gap-3 text-xs sm:text-sm ${
                      isCorrect
                        ? 'border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#11161D]'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {item.letter}
                    </span>
                    <div className="flex-1 min-w-0 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      <MathText text={item.explanation} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {resolution.officialAnswerSource && (
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              Fonte: {resolution.officialAnswerSource}
            </p>
          )}
        </div>
      )}

      {/* TAB 2: Macete */}
      {activeTab === 'macete' && (
        <div
          role="tabpanel"
          data-testid="resolution-tabpanel-macete"
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-display text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>
                {resolution.macete.title.trim().toLowerCase() ===
                resolution.methodTitle.trim().toLowerCase()
                  ? 'Atalho de resolução rápida'
                  : resolution.macete.title}
              </span>
            </h4>
            {resolution.macete.isConventionalBest && (
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                Método direto mais seguro
              </span>
            )}
          </div>

          <div className="rounded-xl bg-blue-50/55 dark:bg-blue-950/25 border border-blue-200/70 dark:border-blue-900/60 p-4 text-sm text-neutral-800 dark:text-neutral-100 leading-relaxed max-w-[70ch]">
            <MathText text={resolution.macete.strategy} />
          </div>

          {(resolution.macete.whenToUse || resolution.macete.caution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {resolution.macete.whenToUse && (
                <div className="rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 space-y-1">
                  <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                    Quando usar
                  </p>
                  <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <MathText text={resolution.macete.whenToUse} />
                  </div>
                </div>
              )}

              {resolution.macete.caution && (
                <div className="rounded-xl border border-amber-200/70 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20 p-3.5 space-y-1">
                  <p className="font-semibold text-amber-800 dark:text-amber-300">
                    Cuidado / limitação
                  </p>
                  <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <MathText text={resolution.macete.caution} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Questões semelhantes */}
      {activeTab === 'semelhantes' && (
        <div
          role="tabpanel"
          data-testid="resolution-tabpanel-semelhantes"
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-3.5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Treinar o mesmo padrão na prova da UFRR
            </h4>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Prioriza seus erros e assuntos pendentes
            </span>
          </div>

          {relatedMatches.length === 0 ? (
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 py-3">
              Nenhuma questão correlata encontrada nos filtros atuais do banco.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {relatedMatches.map((m) => {
                const tag = ADAPTIVE_TAG_LABEL[m.adaptiveTag];
                return (
                  <button
                    key={m.question.id}
                    type="button"
                    data-testid={`related-question-btn-${m.question.id}`}
                    disabled={!onNavigateToQuestion}
                    onClick={() => onNavigateToQuestion?.(m.question.id)}
                    className="min-h-[58px] px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-[#11161D] text-left hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-between gap-3 disabled:opacity-60"
                  >
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                          {m.question.originalCode}
                        </span>
                        <span className={`text-[11px] font-medium ${tag.toneClass}`}>
                          · {tag.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                        {m.reason}
                      </p>
                    </div>
                    {onNavigateToQuestion && (
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
