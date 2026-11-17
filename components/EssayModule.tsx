'use client';

import React, { useMemo, useState } from 'react';
import {
  FileText,
  Keyboard,
  PenTool,
  Plus,
  Sparkles,
} from 'lucide-react';
import { MathText } from './MathText';
import { PenCanvas } from './PenCanvas';
import type { EssayPrompt, EssaySubmission, ScratchpadDocument } from '@/lib/types';

interface EssayModuleProps {
  attemptId: string;
  prompt?: EssayPrompt;
  submission: EssaySubmission;
  scratchpads: Record<string, ScratchpadDocument>;
  defaultPalmRejection: boolean;
  onPalmRejectionChange: (enabled: boolean) => void;
  onUpdateSubmission: (next: EssaySubmission) => void;
  onSaveScratchpad: (doc: ScratchpadDocument) => Promise<void>;
  readOnly?: boolean;
}

export const EssayModule: React.FC<EssayModuleProps> = ({
  attemptId,
  prompt,
  submission,
  scratchpads,
  defaultPalmRejection,
  onPalmRejectionChange,
  onUpdateSubmission,
  onSaveScratchpad,
  readOnly = false,
}) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const themes = prompt?.themes && prompt.themes.length > 0 ? prompt.themes : null;
  const activeTheme = useMemo(() => {
    if (!themes) return null;
    return themes.find((t) => t.id === submission.selectedThemeId) ?? themes[0];
  }, [submission.selectedThemeId, themes]);

  const displayedThemeTitle =
    activeTheme?.theme ?? prompt?.theme ?? 'Proposta oficial vinculada à edição';
  const displayedInstructions =
    activeTheme?.instructions ??
    prompt?.instructions ??
    'Produza seu texto dissertativo-argumentativo na modalidade digitada ou manuscrita.';
  const displayedTexts =
    activeTheme?.supportingTexts ?? prompt?.supportingTexts ?? [];
  const minLines = activeTheme?.minLines ?? prompt?.minLines ?? 15;
  const maxLines = activeTheme?.maxLines ?? prompt?.maxLines ?? 30;

  const pageIds =
    submission.handwrittenPageIds.length > 0
      ? submission.handwrittenPageIds
      : [`essay-${attemptId}-p1`];

  const activePageId = pageIds[activePageIndex] ?? pageIds[0];

  const { wordCount, estimatedLines } = useMemo(() => {
    const trimmed = submission.typedText.trim();
    if (!trimmed) return { wordCount: 0, estimatedLines: 0 };
    const words = trimmed.split(/\s+/).length;
    const paragraphs = trimmed.split(/\n/);
    const lines = paragraphs.reduce(
      (acc, p) => acc + Math.max(1, Math.ceil(p.length / 78)),
      0
    );
    return { wordCount: words, estimatedLines: lines };
  }, [submission.typedText]);

  const handleModeSwitch = (mode: 'typed' | 'handwritten') => {
    if (readOnly) return;
    onUpdateSubmission({
      ...submission,
      mode,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleThemeSelect = (themeId: string) => {
    if (readOnly) return;
    onUpdateSubmission({
      ...submission,
      selectedThemeId: themeId,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleAddHandwrittenPage = () => {
    if (readOnly || pageIds.length >= 4) return;
    const nextId = `essay-${attemptId}-p${pageIds.length + 1}`;
    const nextPages = [...pageIds, nextId];
    onUpdateSubmission({
      ...submission,
      handwrittenPageIds: nextPages,
      updatedAt: new Date().toISOString(),
    });
    setActivePageIndex(nextPages.length - 1);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
      {/* Proposal & Motivating Texts */}
      <section className="xl:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 sm:p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
            Proposta de Redação {prompt?.isDemoFixture ? '· Fixture de Demonstração' : '· Oficial UFRR'}
          </p>
          <h2 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {displayedThemeTitle}
          </h2>
        </div>

        {themes && themes.length > 1 && (
          <div
            role="tablist"
            aria-label="Selecionar proposta de redação"
            className="flex items-center gap-1.5 bg-neutral-100 dark:bg-[#10151C] p-1 rounded-xl"
          >
            {themes.map((t) => {
              const selected = activeTheme?.id === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  disabled={readOnly}
                  onClick={() => handleThemeSelect(t.id)}
                  className={`flex-1 min-h-[38px] px-3 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    selected
                      ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <MathText text={displayedInstructions} />
        </div>

        {prompt && (
          <p className="text-xs font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
            Extensão sugerida: {minLines} a {maxLines} linhas
          </p>
        )}

        {displayedTexts.length > 0 && (
          <div className="space-y-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            {displayedTexts.map((st) => (
              <div
                key={st.label}
                className="rounded-xl bg-neutral-50 dark:bg-[#11161D] border border-neutral-200/80 dark:border-neutral-800 p-4 space-y-1.5"
              >
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {st.label}
                </p>
                <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <MathText text={st.content} />
                </div>
                {st.source && (
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 italic">
                    {st.source}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Future AI Estimation Slot — Explicitly non-official */}
        <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-200">
            <Sparkles className="w-4 h-4 text-neutral-400" />
            <span>Avaliação assistida (módulo futuro)</span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {submission.aiEstimateSlot?.disclaimer ??
              'Nenhuma nota automática é gerada nesta etapa. A futura função de correção assistida por IA será claramente identificada como estimativa, separada da banca oficial da UFRR.'}
          </p>
        </div>
      </section>

      {/* Writing Workspace (Typed or Handwritten Lined Sheet) */}
      <section className="xl:col-span-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-3">
          <div className="flex items-center gap-1 bg-neutral-100 dark:bg-[#10151C] p-1 rounded-xl">
            <button
              type="button"
              disabled={readOnly}
              onClick={() => handleModeSwitch('typed')}
              className={`min-h-[40px] px-3.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                submission.mode === 'typed'
                  ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              <Keyboard className="w-4 h-4" />
              Redação digitada
            </button>
            <button
              type="button"
              disabled={readOnly}
              onClick={() => handleModeSwitch('handwritten')}
              className={`min-h-[40px] px-3.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                submission.mode === 'handwritten'
                  ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              <PenTool className="w-4 h-4" />
              Redação manuscrita (Caneta)
            </button>
          </div>

          {submission.mode === 'typed' ? (
            <div className="flex items-center gap-3 px-2 text-xs font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
              <span>{wordCount} palavras</span>
              <span aria-hidden="true">·</span>
              <span>~{estimatedLines} linhas</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              {pageIds.map((pid, idx) => (
                <button
                  key={pid}
                  type="button"
                  onClick={() => setActivePageIndex(idx)}
                  className={`min-h-[38px] px-3 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    activePageIndex === idx
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  Página {idx + 1}
                </button>
              ))}
              {!readOnly && pageIds.length < 4 && (
                <button
                  type="button"
                  onClick={handleAddHandwrittenPage}
                  aria-label="Adicionar folha de redação"
                  className="min-h-[38px] px-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Folha
                </button>
              )}
            </div>
          )}
        </div>

        {submission.mode === 'typed' ? (
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              <FileText className="w-4 h-4" />
              <span>Folha de Redação Digitada — salvamento automático</span>
            </div>
            <textarea
              value={submission.typedText}
              readOnly={readOnly}
              onChange={(e) =>
                onUpdateSubmission({
                  ...submission,
                  typedText: e.target.value,
                  updatedAt: new Date().toISOString(),
                })
              }
              rows={18}
              placeholder="Escreva sua redação aqui em norma-padrão da língua portuguesa..."
              aria-label="Texto da redação"
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#FFFEFB] dark:bg-[#10151C] p-4 text-[15px] leading-[1.85] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
            />
          </div>
        ) : (
          <PenCanvas
            docId={activePageId}
            scope="essay"
            targetId={attemptId}
            title={`Folha de Redação · Página ${activePageIndex + 1}`}
            initialDoc={scratchpads[activePageId]}
            lined={true}
            showZoomControls={true}
            defaultPalmRejection={defaultPalmRejection}
            onPalmRejectionChange={onPalmRejectionChange}
            onSave={onSaveScratchpad}
            minHeightClass="h-[580px]"
            testId={`essay-canvas-p${activePageIndex + 1}`}
          />
        )}
      </section>
    </div>
  );
};
