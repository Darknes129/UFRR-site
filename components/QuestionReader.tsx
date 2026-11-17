'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Eye,
  EyeOff,
  Flag,
  FlaskConical,
  Info,
  PenLine,
  PenTool,
  Star,
  XCircle,
} from 'lucide-react';
import { MathText } from './MathText';
import { PenCanvas } from './PenCanvas';
import { PeriodicTableModal } from './PeriodicTableModal';
import { QuestionAnnotationSession } from './QuestionAnnotationLayer';
import { ResolutionPanel } from './ResolutionPanel';
import {
  canAccessResolutionInContext,
  evaluateQuestionWithResolution,
  type RelatedBankQuestionMatch,
} from '@/lib/resolutions';
import type {
  AlternativeLetter,
  AttemptStatus,
  Question,
  QuestionResolution,
  ScratchpadDocument,
  SharedText,
  SimulationMode,
} from '@/lib/types';

interface QuestionReaderProps {
  question: Question;
  sharedTexts: SharedText[];
  mode: 'study' | 'exam';
  selectedLetter?: AlternativeLetter;
  isChecked?: boolean;
  isFavorite: boolean;
  isFlaggedForReview: boolean;
  scratchpadDoc?: ScratchpadDocument;
  overlayDoc?: ScratchpadDocument;
  defaultPalmRejection: boolean;
  onPalmRejectionChange: (enabled: boolean) => void;
  onSelectAlternative: (letter: AlternativeLetter) => void;
  onCheckAnswer?: (timeSpentMs: number) => void;
  onToggleFavorite: () => void;
  onToggleReviewFlag: () => void;
  onSaveScratchpad: (doc: ScratchpadDocument) => Promise<void>;
  showScratchpadInitially?: boolean;
  allowResolution?: boolean;
  attemptMode?: SimulationMode;
  attemptStatus?: AttemptStatus;
  resolution?: QuestionResolution | null;
  relatedMatches?: RelatedBankQuestionMatch[];
  onConsultResolution?: (questionId: string) => void;
  onNavigateToQuestion?: (questionId: string) => void;
}

export const QuestionReader: React.FC<QuestionReaderProps> = ({
  question,
  sharedTexts,
  mode,
  selectedLetter,
  isChecked = false,
  isFavorite,
  isFlaggedForReview,
  scratchpadDoc,
  overlayDoc,
  defaultPalmRejection,
  onPalmRejectionChange,
  onSelectAlternative,
  onCheckAnswer,
  onToggleFavorite,
  onToggleReviewFlag,
  onSaveScratchpad,
  showScratchpadInitially = false,
  allowResolution = true,
  attemptMode,
  attemptStatus,
  resolution = null,
  relatedMatches = [],
  onConsultResolution,
  onNavigateToQuestion,
}) => {
  const [showSharedTexts, setShowSharedTexts] = useState(true);
  const [showScratchpad, setShowScratchpad] = useState(showScratchpadInitially);
  const [showPeriodicTable, setShowPeriodicTable] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [annotationsVisible, setAnnotationsVisible] = useState(true);
  const [resolutionState, setResolutionState] = useState<{
    questionId: string;
    open: boolean;
  } | null>(null);
  const [annotationStrokeCount, setAnnotationStrokeCount] = useState(
    overlayDoc?.strokes.length ?? 0
  );
  const questionStartRef = useRef<number>(0);

  // Reset per-question transient resolution toggle cleanly when switching questions or unchecking
  const [lastQuestionId, setLastQuestionId] = useState(question.id);
  const [lastCheckedState, setLastCheckedState] = useState(isChecked);
  if (lastQuestionId !== question.id) {
    setLastQuestionId(question.id);
    setLastCheckedState(isChecked);
    setResolutionState(null);
  } else if (lastCheckedState !== isChecked) {
    setLastCheckedState(isChecked);
    if (!isChecked) {
      setResolutionState(null);
    }
  }

  const resolutionAccess = canAccessResolutionInContext({
    mode,
    attemptMode,
    attemptStatus,
  });

  // Never reveal gabarito or resolution before a fresh attempt in study mode
  const hasAttemptedInSession = mode === 'study' && isChecked;
  const canShowResolution =
    allowResolution && resolutionAccess.allowed && hasAttemptedInSession;

  const evaluation = useMemo(() => {
    if (!hasAttemptedInSession || !selectedLetter) return null;
    return evaluateQuestionWithResolution(selectedLetter, question, resolution);
  }, [hasAttemptedInSession, question, resolution, selectedLetter]);

  // Auto-open ResolutionPanel on wrong answer (unless user explicitly toggled it closed)
  const isWrongVerified =
    Boolean(evaluation) &&
    evaluation!.hasVerifiedKey &&
    !evaluation!.wasAnnulled &&
    !evaluation!.isCorrect;

  const isResolutionOpen = useMemo(() => {
    if (!canShowResolution) return false;
    if (resolutionState?.questionId === question.id) {
      return resolutionState.open;
    }
    return isWrongVerified;
  }, [canShowResolution, isWrongVerified, question.id, resolutionState]);

  const handleToggleResolution = () => {
    if (!canShowResolution) return;
    const nextOpen = !isResolutionOpen;
    setResolutionState({ questionId: question.id, open: nextOpen });
    if (nextOpen) {
      onConsultResolution?.(question.id);
    }
  };

  const handleAnnotationsStateChange = React.useCallback(
    (info: { strokeCount: number; saveState: 'idle' | 'saving' | 'saved' }) => {
      setAnnotationStrokeCount((prev) =>
        prev === info.strokeCount ? prev : info.strokeCount
      );
    },
    []
  );

  useEffect(() => {
    questionStartRef.current = Date.now();
  }, [question.id]);

  const linkedTexts = useMemo(() => {
    if (!question.sharedTextIds || question.sharedTextIds.length === 0) return [];
    const set = new Set(question.sharedTextIds);
    return sharedTexts.filter((st) => set.has(st.id));
  }, [question.sharedTextIds, sharedTexts]);

  const { graphicsMap, stemGraphics } = useMemo(() => {
    const map = new Map<string, Question['graphics'][number]>();
    const altReferencedIds = new Set<string>();
    for (const alt of question.alternatives) {
      if (alt.graphicId) altReferencedIds.add(alt.graphicId);
    }
    for (const g of question.graphics) {
      map.set(g.id, g);
    }
    const stemOnly = question.graphics.filter((g) => !altReferencedIds.has(g.id));
    return { graphicsMap: map, stemGraphics: stemOnly };
  }, [question.alternatives, question.graphics]);

  const handleCheck = () => {
    if (!onCheckAnswer) return;
    const elapsed = Math.max(1000, Date.now() - questionStartRef.current);
    onCheckAnswer(elapsed);
  };

  const showAnswerHighlights =
    mode === 'study' && isChecked && Boolean(evaluation?.hasVerifiedKey);

  const isCorrectOption = (letter: AlternativeLetter): boolean => {
    if (!evaluation || !evaluation.hasVerifiedKey) return false;
    if (evaluation.wasAnnulled) return true;
    if (
      question.answerKey.acceptedLetters &&
      question.answerKey.acceptedLetters.length > 0
    ) {
      return question.answerKey.acceptedLetters.includes(letter);
    }
    return evaluation.expectedLetter === letter;
  };

  return (
    <div
      className={`grid gap-6 ${
        showScratchpad ? 'grid-cols-1 xl:grid-cols-12 items-start' : 'grid-cols-1'
      }`}
    >
      <PeriodicTableModal
        open={showPeriodicTable}
        onClose={() => setShowPeriodicTable(false)}
      />

      {/* Question Reading Column */}
      <article
        className={`${
          showScratchpad ? 'xl:col-span-7' : 'max-w-4xl w-full'
        } rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 sm:p-7`}
      >
        {/* Unboxed Editorial Metadata Header */}
        <div className="flex flex-wrap xl:flex-nowrap items-start justify-between gap-3 sm:gap-4 border-b border-neutral-100 dark:border-neutral-800/80 pb-4">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="font-mono font-semibold text-neutral-900 dark:text-neutral-100 tabular-nums">
                {question.originalCode}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-blue-700 dark:text-blue-400">
                {question.classification.subject}
              </span>
              {question.foreignLanguage && (
                <>
                  <span aria-hidden="true">/</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {question.foreignLanguage}
                  </span>
                </>
              )}
              {question.classification.subSubjectGroup && (
                <>
                  <span aria-hidden="true">/</span>
                  <span>{question.classification.subSubjectGroup}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{question.classification.topic}</span>
              {question.classification.subtopic && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{question.classification.subtopic}</span>
                </>
              )}
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {question.examName} ({question.year})
              {question.difficulty !== 'Não classificada' && (
                <>
                  {' '}
                  · Dificuldade: {question.difficulty}
                </>
              )}
              {question.provenance.isDemoFixture && (
                <> · Fixture de Demonstração (não oficial UFRR)</>
              )}
            </p>
          </div>

          {/* Action Controls (44px+ hitboxes) */}
          <div className="flex flex-wrap items-center gap-1.5 max-w-full">
            {question.classification.subject === 'Química' && (
              <button
                type="button"
                onClick={() => setShowPeriodicTable(true)}
                aria-label="Abrir Tabela Periódica oficial da UFRR"
                className="min-h-[42px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
              >
                <FlaskConical className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="hidden sm:inline">Tabela Periódica</span>
              </button>
            )}

            <button
              type="button"
              onClick={onToggleFavorite}
              aria-label={
                isFavorite
                  ? `Remover ${question.originalCode} das favoritas`
                  : `Favoritar ${question.originalCode}`
              }
              aria-pressed={isFavorite}
              className={`min-h-[42px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition-colors whitespace-nowrap shrink-0 ${
                isFavorite
                  ? 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                  : 'border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <Star className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">Favoritar</span>
            </button>

            <button
              type="button"
              onClick={onToggleReviewFlag}
              aria-label={
                isFlaggedForReview
                  ? `Remover ${question.originalCode} de revisão`
                  : `Marcar ${question.originalCode} para revisar`
              }
              aria-pressed={isFlaggedForReview}
              className={`min-h-[42px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition-colors whitespace-nowrap shrink-0 ${
                isFlaggedForReview
                  ? 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                  : 'border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <Flag className={`w-4 h-4 ${isFlaggedForReview ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">Revisar</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsDrawingMode((v) => {
                  const next = !v;
                  if (next) setAnnotationsVisible(true);
                  return next;
                });
              }}
              aria-label={
                isDrawingMode
                  ? 'Sair do modo de desenho sobre a questão'
                  : 'Desenhar diretamente sobre a questão'
              }
              aria-pressed={isDrawingMode}
              className={`min-h-[42px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition-colors whitespace-nowrap shrink-0 ${
                isDrawingMode
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span>Desenhar</span>
              {!isDrawingMode &&
                (annotationStrokeCount > 0 ||
                  (overlayDoc?.strokes.length ?? 0) > 0) && (
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                  />
                )}
            </button>

            {(isDrawingMode ||
              annotationStrokeCount > 0 ||
              (overlayDoc?.strokes.length ?? 0) > 0) && (
              <button
                type="button"
                onClick={() => setAnnotationsVisible((v) => !v)}
                aria-label={
                  annotationsVisible
                    ? 'Ocultar anotações da questão'
                    : 'Exibir anotações da questão'
                }
                aria-pressed={!annotationsVisible}
                title={
                  annotationsVisible
                    ? 'Ocultar anotações temporariamente'
                    : 'Exibir anotações'
                }
                className={`min-h-[42px] min-w-[42px] px-2.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border transition-colors whitespace-nowrap shrink-0 ${
                  !annotationsVisible
                    ? 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {annotationsVisible ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowScratchpad((v) => !v)}
              aria-label="Alternar área de rascunho com caneta"
              aria-expanded={showScratchpad}
              className={`min-h-[42px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition-colors whitespace-nowrap shrink-0 ${
                showScratchpad
                  ? 'border-neutral-900 dark:border-blue-500 bg-neutral-900 dark:bg-blue-600 text-white'
                  : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <PenLine className="w-4 h-4" />
              <span>Rascunho</span>
            </button>

            {canShowResolution && (
              <button
                type="button"
                data-testid="toggle-resolution-btn"
                onClick={handleToggleResolution}
                aria-label={
                  isResolutionOpen
                    ? `Ocultar resolução comentada de ${question.originalCode}`
                    : `Ver resolução comentada e macete de ${question.originalCode}`
                }
                aria-expanded={isResolutionOpen}
                className={`min-h-[42px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition-colors whitespace-nowrap shrink-0 ${
                  isResolutionOpen
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100/70 dark:hover:bg-blue-950/50'
                }`}
              >
                <BookOpenCheck className="w-4 h-4" />
                <span>{isResolutionOpen ? 'Ocultar resolução' : 'Ver resolução'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Annotatable Question Content Surface */}
        <QuestionAnnotationSession
          key={question.id}
          question={question}
          mode={mode}
          initialDoc={overlayDoc}
          isDrawingMode={isDrawingMode}
          annotationsVisible={annotationsVisible}
          palmRejection={defaultPalmRejection}
          onPalmRejectionChange={onPalmRejectionChange}
          onSave={onSaveScratchpad}
          onAnnotationsStateChange={handleAnnotationsStateChange}
          onExitDrawingMode={() => setIsDrawingMode(false)}
        >
          <div className="pt-1">
            {/* Shared Base Texts */}
            {linkedTexts.length > 0 && (
              <div className="mt-4 rounded-xl bg-neutral-900/[0.025] dark:bg-white/[0.03] border border-neutral-200/80 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowSharedTexts((v) => !v)}
                  aria-expanded={showSharedTexts}
                  className="w-full min-h-[44px] px-4 py-2.5 flex items-center justify-between text-left text-xs font-semibold text-neutral-700 dark:text-neutral-200"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {linkedTexts.map((t) => t.referenceLabel).join(' / ')}
                  </span>
                  {showSharedTexts ? (
                    <ChevronUp className="w-4 h-4 text-neutral-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400" />
                  )}
                </button>
                {showSharedTexts && (
                  <div className="px-4 pb-4 pt-1 space-y-4 border-t border-neutral-200/70 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
                    {linkedTexts.map((st) => (
                      <div
                        key={st.id}
                        data-annotation-block={`shared-text-${st.id}`}
                        className="space-y-1.5"
                      >
                        {st.title && (
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {st.title}
                          </h4>
                        )}
                        <MathText text={st.content} />
                        {st.sourceCitation && (
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                            {st.sourceCitation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Question Stem */}
            <div
              data-annotation-block="stem"
              className="mt-5 text-[15.5px] sm:text-base text-neutral-900 dark:text-neutral-100 leading-[1.7] max-w-[72ch]"
            >
              <MathText text={question.stem} />
            </div>

            {/* Native Structured Table if provided */}
            {question.tableHtml && (
              <div
                data-annotation-block="table"
                className="mt-5 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 [&_table]:w-full [&_table]:text-sm [&_th]:bg-neutral-900/[0.03] dark:[&_th]:bg-white/[0.04] [&_th]:px-3.5 [&_th]:py-2.5 [&_th]:text-left [&_th]:font-semibold [&_td]:px-3.5 [&_td]:py-2.5 [&_td]:border-t [&_td]:border-neutral-200 dark:[&_td]:border-neutral-800"
                dangerouslySetInnerHTML={{ __html: question.tableHtml }}
              />
            )}

            {/* Stem Graphic Resources */}
            {stemGraphics.length > 0 && (
              <div className="mt-5 space-y-4">
                {stemGraphics.map((g) => (
                  <figure
                    key={g.id}
                    data-annotation-block={`figure-${g.id}`}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900/[0.02] dark:bg-white/[0.02] p-4 flex flex-col items-center"
                  >
                    {g.type === 'svg' && g.svgContent ? (
                      <div
                        role="img"
                        aria-label={g.altText}
                        className="w-full flex justify-center text-neutral-800 dark:text-neutral-200"
                        dangerouslySetInnerHTML={{ __html: g.svgContent }}
                      />
                    ) : g.imageUrl ? (
                      <div className="rounded-lg bg-white p-2 inline-block shadow-xs">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={g.imageUrl}
                          alt={g.altText}
                          referrerPolicy="no-referrer"
                          className="max-h-80 w-auto rounded object-contain"
                        />
                      </div>
                    ) : (
                      <div className="py-6 text-xs text-neutral-500">
                        Recurso visual: {g.altText}
                      </div>
                    )}
                    {g.caption && (
                      <figcaption className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 text-center">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {/* Alternatives (A–E or A–F when official quirk) */}
            <div
              className="mt-6 space-y-2.5"
              role="radiogroup"
              aria-label={`Alternativas da questão ${question.originalCode}`}
            >
              {question.alternatives.map((alt) => {
                const isSelected = selectedLetter === alt.letter;
                const rightOption = isCorrectOption(alt.letter);
                const altGraphic = alt.graphicId
                  ? graphicsMap.get(alt.graphicId)
                  : undefined;

                let borderStyle =
                  'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-900/[0.025] dark:hover:bg-white/[0.03]';
                let badgeStyle =
                  'bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300';

                if (showAnswerHighlights) {
                  if (rightOption) {
                    borderStyle =
                      'border-emerald-500/80 dark:border-emerald-500/60 bg-emerald-500/[0.08]';
                    badgeStyle = 'bg-emerald-600 text-white';
                  } else if (isSelected && !rightOption) {
                    borderStyle =
                      'border-rose-500/80 dark:border-rose-500/60 bg-rose-500/[0.08]';
                    badgeStyle = 'bg-rose-600 text-white';
                  }
                } else if (isSelected) {
                  borderStyle =
                    'border-blue-600 dark:border-blue-500 bg-blue-500/[0.07]';
                  badgeStyle = 'bg-blue-600 text-white';
                }

                return (
                  <button
                    key={alt.letter}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    data-testid={`alt-option-${alt.letter}`}
                    data-annotation-block={`alt-${alt.letter}`}
                    onClick={() => onSelectAlternative(alt.letter)}
                    className={`w-full min-h-[52px] px-4 py-3 rounded-xl border text-left flex items-start gap-3.5 transition-all duration-150 active:scale-[0.995] ${borderStyle}`}
                  >
                    <span
                      className={`mt-0.5 w-7 h-7 rounded-lg text-xs font-mono font-semibold flex items-center justify-center shrink-0 transition-colors ${badgeStyle}`}
                    >
                      {alt.letter}
                    </span>
                    <div className="flex-1 min-w-0 text-[15px] text-neutral-800 dark:text-neutral-100 leading-relaxed space-y-2">
                      {alt.text && <MathText text={alt.text} />}
                      {altGraphic && (
                        <div className="pt-1">
                          {altGraphic.type === 'svg' && altGraphic.svgContent ? (
                            <div
                              role="img"
                              aria-label={altGraphic.altText}
                              className="text-neutral-800 dark:text-neutral-200 max-w-[260px]"
                              dangerouslySetInnerHTML={{
                                __html: altGraphic.svgContent,
                              }}
                            />
                          ) : altGraphic.imageUrl ? (
                            <div className="rounded-lg bg-white p-1.5 inline-block">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={altGraphic.imageUrl}
                                alt={altGraphic.altText}
                                referrerPolicy="no-referrer"
                                className="max-h-36 w-auto object-contain"
                              />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                    {showAnswerHighlights && rightOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                    )}
                    {showAnswerHighlights && isSelected && !rightOption && (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Editorial Note for Official PDF Quirks */}
            {question.editorialNote && (
              <div
                data-annotation-block="footer"
                className="mt-4 rounded-xl bg-neutral-900/[0.025] dark:bg-white/[0.03] border border-neutral-200/70 dark:border-neutral-800 px-3.5 py-2.5 flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400"
              >
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-400" />
                <span>{question.editorialNote}</span>
              </div>
            )}

            {/* Study Mode Check Answer & Immediate Diagnostic Feedback */}
            {mode === 'study' && (
              <div
                data-annotation-block="study-footer"
                className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4"
              >
                {!isChecked ? (
                  <button
                    type="button"
                    data-testid="check-answer-btn"
                    disabled={!selectedLetter}
                    onClick={handleCheck}
                    className="min-h-[44px] px-5 py-2.5 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none transition-colors whitespace-nowrap"
                  >
                    Conferir resposta
                  </button>
                ) : evaluation ? (
                  <div className="w-full space-y-3">
                    {evaluation.wasAnnulled ? (
                      <div
                        data-testid="answer-feedback-annulled"
                        className="flex flex-wrap items-start justify-between gap-3 rounded-xl bg-amber-500/[0.08] border border-amber-200 dark:border-amber-800/60 p-4 text-sm text-amber-900 dark:text-amber-100"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <p className="font-semibold">
                              Questão anulada no gabarito oficial
                            </p>
                            <p className="text-xs opacity-90">
                              {question.answerKey.specialRuleNote ??
                                'A pontuação desta questão foi atribuída integralmente conforme critério oficial.'}
                            </p>
                          </div>
                        </div>
                        {canShowResolution && !isResolutionOpen && (
                          <button
                            type="button"
                            onClick={handleToggleResolution}
                            className="min-h-[38px] px-3.5 rounded-lg bg-white dark:bg-[#151B23] border border-amber-300 dark:border-amber-700 text-xs font-medium text-amber-900 dark:text-amber-200"
                          >
                            Ver resolução e semelhantes
                          </button>
                        )}
                      </div>
                    ) : !evaluation.hasVerifiedKey ? (
                      <div
                        data-testid="answer-feedback-pending"
                        className="flex flex-wrap items-start justify-between gap-3 rounded-xl bg-neutral-900/[0.025] dark:bg-white/[0.03] border border-neutral-200 dark:border-neutral-800 p-4 text-sm text-neutral-700 dark:text-neutral-200"
                      >
                        <div className="flex items-start gap-2.5">
                          <Clock className="w-5 h-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                          <div className="space-y-1">
                            <p className="font-semibold">
                              Resposta registrada ({selectedLetter}) · Verificação de gabarito pendente
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[65ch]">
                              Esta questão segue com gabarito em verificação para evitar resposta imprecisa.
                            </p>
                          </div>
                        </div>
                        {canShowResolution && !isResolutionOpen && (
                          <button
                            type="button"
                            onClick={handleToggleResolution}
                            className="min-h-[38px] px-3.5 rounded-lg bg-white dark:bg-[#151B23] border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100"
                          >
                            Abrir notas e semelhantes
                          </button>
                        )}
                      </div>
                    ) : evaluation.isCorrect ? (
                      <div
                        data-testid="answer-feedback-correct"
                        className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-200 dark:border-emerald-800/60 px-4 py-3.5 text-sm text-emerald-950 dark:text-emerald-100"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <div>
                            <p className="font-semibold">
                              Resposta correta ({selectedLetter})
                            </p>
                            <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
                              {evaluation.verificationLabel}
                            </p>
                          </div>
                        </div>

                        {canShowResolution && !isResolutionOpen && (
                          <button
                            type="button"
                            data-testid="open-resolution-from-correct-btn"
                            onClick={handleToggleResolution}
                            className="min-h-[40px] px-3.5 rounded-xl bg-white dark:bg-[#151B23] border border-emerald-300 dark:border-emerald-700 text-xs font-medium text-emerald-900 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                          >
                            Ver como resolver, macete e semelhantes
                          </button>
                        )}
                      </div>
                    ) : (
                      <div
                        data-testid="answer-feedback-incorrect"
                        className="rounded-xl bg-rose-500/[0.06] border border-rose-200 dark:border-rose-800/60 p-4 sm:p-5 space-y-3 text-sm text-neutral-900 dark:text-neutral-100"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-semibold">
                            <XCircle className="w-5 h-5 shrink-0" />
                            <span>
                              Você marcou {selectedLetter} · Alternativa correta:{' '}
                              {evaluation.expectedLetter}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                            {evaluation.verificationLabel}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                          {evaluation.chosenFeedback && (
                            <div className="rounded-xl bg-white/85 dark:bg-[#151B23] border border-rose-200/80 dark:border-rose-900/50 p-3.5 space-y-1">
                              <p className="text-xs font-semibold text-rose-800 dark:text-rose-300">
                                Por que a {selectedLetter} não resolve
                              </p>
                              <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                <MathText
                                  text={evaluation.chosenFeedback.explanation}
                                />
                              </div>
                            </div>
                          )}

                          {evaluation.correctFeedback && (
                            <div className="rounded-xl bg-white/85 dark:bg-[#151B23] border border-emerald-200/80 dark:border-emerald-900/50 p-3.5 space-y-1">
                              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                                Por que a {evaluation.expectedLetter} é a correta
                              </p>
                              <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                <MathText
                                  text={evaluation.correctFeedback.explanation}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {(evaluation.missingConcept ||
                          resolution?.decisiveConcept) && (
                          <div className="rounded-xl bg-white/80 dark:bg-[#151B23] border border-neutral-200/80 dark:border-neutral-800 px-3.5 py-2.5 text-xs space-y-1">
                            <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                              Conceito decisivo
                            </p>
                            <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                              <MathText
                                text={
                                  evaluation.missingConcept ??
                                  resolution!.decisiveConcept
                                }
                              />
                            </div>
                          </div>
                        )}

                        {evaluation.divergenceNote && (
                          <p className="text-xs text-amber-800 dark:text-amber-300">
                            {evaluation.divergenceNote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </QuestionAnnotationSession>

        {isResolutionOpen && (
          <ResolutionPanel
            question={question}
            resolution={resolution}
            relatedMatches={relatedMatches}
            selectedLetter={selectedLetter}
            onNavigateToQuestion={onNavigateToQuestion}
          />
        )}
      </article>

      {/* Collapsible / Split Pen Scratchpad */}
      {showScratchpad && (
        <aside className="xl:col-span-5 xl:sticky xl:top-16">
          <PenCanvas
            docId={`q-note-${question.id}`}
            scope="question"
            targetId={question.id}
            title={`Rascunho · ${question.originalCode}`}
            initialDoc={scratchpadDoc}
            defaultPalmRejection={defaultPalmRejection}
            onPalmRejectionChange={onPalmRejectionChange}
            onSave={onSaveScratchpad}
            minHeightClass="h-[420px] xl:h-[520px]"
            testId={`scratchpad-${question.id}`}
          />
        </aside>
      )}
    </div>
  );
};
