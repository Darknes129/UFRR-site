'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flag,
  Image as ImageIcon,
  LayoutList,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  Table2,
} from 'lucide-react';
import { QuestionReader } from './QuestionReader';
import { filterQuestions, getQuestionTopicParts } from '@/lib/engine';
import { findRelatedBankQuestions } from '@/lib/resolutions';
import { useStudy } from '@/lib/study-store';
import type {
  AlternativeLetter,
  DifficultyLevel,
  ExamModality,
  ForeignLanguageOption,
  QuestionFilters,
  SubjectName,
} from '@/lib/types';

const INITIAL_SUBJECTS: SubjectName[] = [
  'Biologia',
  'Química',
  'Física',
  'Matemática',
  'Língua Portuguesa',
  'Literatura',
  'História',
  'Geografia',
  'Língua Estrangeira',
];

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

type BankViewMode = 'list' | 'reader';
type PageSizeOption = 30 | 90 | 'all';

function formatStemPreview(stem: string, maxLength = 210): string {
  const cleaned = stem
    .replace(/\$\$([\s\S]*?)\$\$/g, ' $1 ')
    .replace(/\$([^$]+)\$/g, ' $1 ')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\*\*/g, '')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).trimEnd()}…`;
}

function buildPaginationItems(
  currentPage: number,
  totalPages: number
): Array<number | 'ellipsis-left' | 'ellipsis-right'> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const items: Array<number | 'ellipsis-left' | 'ellipsis-right'> = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  if (start > 2) items.push('ellipsis-left');
  for (let p = start; p <= end; p++) items.push(p);
  if (end < totalPages - 1) items.push('ellipsis-right');
  items.push(totalPages);
  return items;
}

export const QuestionBankView: React.FC = () => {
  const {
    questions,
    sharedTexts,
    exams,
    questionRecords,
    userFlags,
    scratchpads,
    palmRejectionDefault,
    setPalmRejectionDefault,
    recordBankAnswer,
    toggleFavorite,
    toggleReviewFlag,
    saveScratchpad,
    focusedQuestionId,
    setFocusedQuestionId,
    focusedNotebookId,
    setFocusedNotebookId,
    notebooks,
    resolutionsById,
    adaptiveSummary,
  } = useStudy();

  const [filters, setFilters] = useState<QuestionFilters>(DEFAULT_FILTERS);
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);
  const [viewMode, setViewMode] = useState<BankViewMode>('list');
  const [pageSize, setPageSize] = useState<PageSizeOption>(30);
  const [listPage, setListPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [draftSelections, setDraftSelections] = useState<
    Record<string, AlternativeLetter>
  >({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  const [consultedQuestions, setConsultedQuestions] = useState<
    Record<string, boolean>
  >({});
  const [questionHistoryStack, setQuestionHistoryStack] = useState<string[]>([]);

  const effectiveViewMode: BankViewMode = focusedQuestionId ? 'reader' : viewMode;

  const updateFilters = (updater: (prev: QuestionFilters) => QuestionFilters) => {
    if (focusedQuestionId) setFocusedQuestionId(null);
    setSelectedIndex(0);
    setListPage(1);
    setFilters(updater);
  };

  // Cascading filter options derived from loaded catalog questions
  const availableTopics = useMemo(() => {
    const set = new Set<string>();
    for (const q of questions) {
      if (filters.subject !== 'Todas') {
        const matchSub =
          q.classification.subject === filters.subject ||
          (filters.subject === 'Literatura' &&
            q.classification.subSubjectGroup === 'Literatura');
        if (!matchSub) continue;
      }
      if (
        filters.foreignLanguage &&
        filters.foreignLanguage !== 'Todas' &&
        q.foreignLanguage !== filters.foreignLanguage
      ) {
        continue;
      }
      const { topic } = getQuestionTopicParts(q);
      if (topic) set.add(topic);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [filters.foreignLanguage, filters.subject, questions]);

  const availableSubtopics = useMemo(() => {
    const set = new Set<string>();
    for (const q of questions) {
      if (filters.subject !== 'Todas') {
        const matchSub =
          q.classification.subject === filters.subject ||
          (filters.subject === 'Literatura' &&
            q.classification.subSubjectGroup === 'Literatura');
        if (!matchSub) continue;
      }
      if (
        filters.foreignLanguage &&
        filters.foreignLanguage !== 'Todas' &&
        q.foreignLanguage !== filters.foreignLanguage
      ) {
        continue;
      }
      const parts = getQuestionTopicParts(q);
      if (
        filters.topic !== 'Todos' &&
        q.classification.topic !== filters.topic &&
        parts.topic !== filters.topic
      ) {
        continue;
      }
      if (parts.subtopic) set.add(parts.subtopic);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [filters.foreignLanguage, filters.subject, filters.topic, questions]);

  const availableYears = useMemo(() => {
    const set = new Set<number>(questions.map((q) => q.year));
    exams.forEach((e) => set.add(e.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [exams, questions]);

  const availableEditions = useMemo(() => {
    const set = new Set<string>(questions.map((q) => q.edition));
    return Array.from(set).sort((a, b) => b.localeCompare(a, 'pt-BR'));
  }, [questions]);

  const availableModalities = useMemo(() => {
    const set = new Set<ExamModality>(questions.map((q) => q.modality));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [questions]);

  const activeNotebook = useMemo(
    () => notebooks.find((n) => n.id === focusedNotebookId) ?? null,
    [focusedNotebookId, notebooks]
  );

  const notebookBaseQuestions = useMemo(() => {
    if (!activeNotebook) return questions;
    const idSet = new Set(activeNotebook.questionIds);
    return questions.filter((q) => idSet.has(q.id));
  }, [activeNotebook, questions]);

  const filteredQuestions = useMemo(
    () => filterQuestions(notebookBaseQuestions, filters, questionRecords, userFlags),
    [filters, notebookBaseQuestions, questionRecords, userFlags]
  );

  // Per-year counts respecting all non-year/non-edition filters for quick jump tabs
  const editionCounts = useMemo(() => {
    const nonYearMatches = filterQuestions(
      notebookBaseQuestions,
      {
        ...filters,
        yearFrom: null,
        yearTo: null,
        edition: 'Todas',
      },
      questionRecords,
      userFlags
    );
    const byYear = new Map<number, number>();
    for (const q of nonYearMatches) {
      byYear.set(q.year, (byYear.get(q.year) ?? 0) + 1);
    }
    return {
      totalAllEditions: nonYearMatches.length,
      years: availableYears.map((y) => ({
        year: y,
        editionLabel: `UFRR ${y}`,
        count: byYear.get(y) ?? 0,
      })),
    };
  }, [availableYears, filters, notebookBaseQuestions, questionRecords, userFlags]);

  const latestRecordByQuestion = useMemo(() => {
    const map = new Map<
      string,
      { isCorrect: boolean; hasOfficialKey: boolean; selectedLetter: AlternativeLetter }
    >();
    const sorted = [...questionRecords].sort((a, b) =>
      b.answeredAt.localeCompare(a.answeredAt)
    );
    for (const rec of sorted) {
      if (!map.has(rec.questionId)) {
        map.set(rec.questionId, {
          isCorrect: rec.isCorrect,
          hasOfficialKey: rec.hasOfficialKey !== false,
          selectedLetter: rec.selectedLetter,
        });
      }
    }
    return map;
  }, [questionRecords]);

  // Pagination for catalog list
  const effectivePageSize =
    pageSize === 'all' ? Math.max(1, filteredQuestions.length) : pageSize;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredQuestions.length / effectivePageSize)
  );
  const safeListPage = Math.min(listPage, totalPages);
  const pageStartIndex = (safeListPage - 1) * effectivePageSize;
  const pageEndIndex = Math.min(
    filteredQuestions.length,
    pageStartIndex + effectivePageSize
  );
  const paginatedQuestions = useMemo(
    () => filteredQuestions.slice(pageStartIndex, pageEndIndex),
    [filteredQuestions, pageEndIndex, pageStartIndex]
  );

  const safeSelectedIndex = useMemo(() => {
    if (focusedQuestionId) {
      const idx = filteredQuestions.findIndex((q) => q.id === focusedQuestionId);
      if (idx >= 0) return idx;
    }
    if (selectedIndex >= filteredQuestions.length) return 0;
    return selectedIndex;
  }, [filteredQuestions, focusedQuestionId, selectedIndex]);

  const currentQuestion = filteredQuestions[safeSelectedIndex] ?? null;

  const resolutionsMap = useMemo(
    () => new Map(Object.entries(resolutionsById)),
    [resolutionsById]
  );

  const currentResolution = currentQuestion
    ? resolutionsById[currentQuestion.id] ?? null
    : null;

  const currentRelatedMatches = useMemo(() => {
    if (!currentQuestion) return [];
    return findRelatedBankQuestions(
      currentQuestion,
      questions,
      resolutionsMap,
      5,
      questionRecords
    );
  }, [currentQuestion, questionRecords, questions, resolutionsMap]);

  const resetQuestionAttemptState = (questionId?: string) => {
    if (!questionId) return;
    setCheckedQuestions((prev) => {
      if (!prev[questionId]) return prev;
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setDraftSelections((prev) => {
      if (!prev[questionId]) return prev;
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const openQuestionAt = (index: number) => {
    if (focusedQuestionId) setFocusedQuestionId(null);
    const targetQ = filteredQuestions[index];
    resetQuestionAttemptState(targetQ?.id);
    setSelectedIndex(index);
    setViewMode('reader');
  };

  const navigateDirectToQuestionId = (
    targetQuestionId: string,
    pushCurrentToHistory: boolean
  ) => {
    if (pushCurrentToHistory && currentQuestion && currentQuestion.id !== targetQuestionId) {
      setQuestionHistoryStack((prev) => [...prev, currentQuestion.id]);
    }
    resetQuestionAttemptState(targetQuestionId);
    const existingIdx = filteredQuestions.findIndex(
      (q) => q.id === targetQuestionId
    );
    if (existingIdx >= 0) {
      if (focusedQuestionId) setFocusedQuestionId(null);
      setSelectedIndex(existingIdx);
      setViewMode('reader');
      return;
    }
    if (
      activeNotebook &&
      !activeNotebook.questionIds.includes(targetQuestionId)
    ) {
      setFocusedNotebookId(null);
    }
    setFilters(DEFAULT_FILTERS);
    setListPage(1);
    setSelectedIndex(0);
    setFocusedQuestionId(targetQuestionId);
    setViewMode('reader');
  };

  const handleNavigateToRelatedQuestion = (targetQuestionId: string) => {
    navigateDirectToQuestionId(targetQuestionId, true);
  };

  const handleNavigateBackInHistory = () => {
    if (questionHistoryStack.length === 0) return;
    const prevId = questionHistoryStack[questionHistoryStack.length - 1];
    setQuestionHistoryStack((prev) => prev.slice(0, -1));
    navigateDirectToQuestionId(prevId, false);
  };

  const handleConsultResolution = (questionId: string) => {
    setConsultedQuestions((prev) =>
      prev[questionId] ? prev : { ...prev, [questionId]: true }
    );
  };

  const backToCatalog = () => {
    if (focusedQuestionId) setFocusedQuestionId(null);
    setQuestionHistoryStack([]);
    const targetPage = Math.floor(safeSelectedIndex / effectivePageSize) + 1;
    setListPage(targetPage);
    setViewMode('list');
  };

  const handleSelectAlternative = (letter: AlternativeLetter) => {
    if (!currentQuestion) return;
    setDraftSelections((prev) => ({ ...prev, [currentQuestion.id]: letter }));
    setCheckedQuestions((prev) => ({ ...prev, [currentQuestion.id]: false }));
  };

  const handleCheckAnswer = async (timeSpentMs: number) => {
    if (!currentQuestion) return;
    const chosen = draftSelections[currentQuestion.id];
    if (!chosen) return;
    await recordBankAnswer(currentQuestion, chosen, timeSpentMs, {
      resolutionConsulted: Boolean(consultedQuestions[currentQuestion.id]),
    });
    setCheckedQuestions((prev) => ({ ...prev, [currentQuestion.id]: true }));
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.subject !== 'Todas') count++;
    if (filters.foreignLanguage && filters.foreignLanguage !== 'Todas') count++;
    if (filters.topic !== 'Todos') count++;
    if (filters.subtopic !== 'Todos') count++;
    if (filters.yearFrom !== null || filters.yearTo !== null) count++;
    if (filters.edition !== 'Todas') count++;
    if (filters.modality !== 'Todas') count++;
    if (filters.examId !== 'Todas') count++;
    if (filters.difficulty !== 'Todas') count++;
    if (filters.status !== 'Todas') count++;
    if (filters.onlyWithImages) count++;
    if (filters.keyword.trim() !== '') count++;
    return count;
  }, [filters]);

  const paginationItems = useMemo(
    () => buildPaginationItems(safeListPage, totalPages),
    [safeListPage, totalPages]
  );

  const isAllYearsSelected =
    filters.edition === 'Todas' &&
    filters.yearFrom === null &&
    filters.yearTo === null;

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      {/* Header & Search */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Banco de Questões
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
            {activeNotebook
              ? `Estudando caderno: ${activeNotebook.title}`
              : `Acervo oficial UFRR completo com ${questions.length} questões (2022–2026) e filtros combinados.`}
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 shrink-0">
          {activeNotebook && (
            <button
              type="button"
              onClick={() => setFocusedNotebookId(null)}
              className="min-h-[44px] px-3.5 rounded-xl border border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-xs font-medium text-blue-700 dark:text-blue-300 whitespace-nowrap"
            >
              Sair do caderno ({activeNotebook.title})
            </button>
          )}

          <div className="relative flex-1 sm:flex-initial sm:w-52 xl:w-60 min-w-[180px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={filters.keyword}
              onChange={(e) =>
                updateFilters((prev) => ({ ...prev, keyword: e.target.value }))
              }
              placeholder="Buscar palavras-chave..."
              aria-label="Buscar questões por palavras-chave"
              className="w-full min-h-[44px] pl-10 pr-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowFiltersPanel((v) => !v)}
            aria-expanded={showFiltersPanel}
            className="min-h-[44px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] text-xs font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-2 whitespace-nowrap"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtros{activeFiltersCount > 0 ? ` (${activeFiltersCount})` : ''}</span>
          </button>

          {/* View Mode Switcher */}
          <div
            role="group"
            aria-label="Modo de visualização do banco"
            className="inline-flex rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-1"
          >
            <button
              type="button"
              onClick={backToCatalog}
              className={`min-h-[36px] px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                effectiveViewMode === 'list'
                  ? 'bg-neutral-900 dark:bg-blue-600 text-white'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Catálogo</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('reader')}
              disabled={filteredQuestions.length === 0}
              className={`min-h-[36px] px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 disabled:opacity-40 ${
                effectiveViewMode === 'reader'
                  ? 'bg-neutral-900 dark:bg-blue-600 text-white'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Resolução</span>
            </button>
          </div>
        </div>
      </header>

      {/* Multi-Filter Panel */}
      {showFiltersPanel && (
        <section
          aria-label="Filtros combinados de questões"
          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-4 sm:p-5 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* 1. Disciplina */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Disciplina
              </span>
              <select
                value={filters.subject}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    subject: e.target.value as QuestionFilters['subject'],
                    topic: 'Todos',
                    subtopic: 'Todos',
                  }))
                }
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                <option value="Todas">Todas as disciplinas</option>
                {INITIAL_SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            {/* 2. Assunto */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Assunto
              </span>
              <select
                value={filters.topic}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    topic: e.target.value,
                    subtopic: 'Todos',
                  }))
                }
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                <option value="Todos">
                  Todos os assuntos ({availableTopics.length})
                </option>
                {availableTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            {/* 3. Subassunto */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Subassunto
              </span>
              <select
                value={filters.subtopic}
                onChange={(e) =>
                  updateFilters((prev) => ({ ...prev, subtopic: e.target.value }))
                }
                disabled={availableSubtopics.length === 0}
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100 disabled:opacity-50"
              >
                <option value="Todos">
                  {availableSubtopics.length > 0
                    ? `Todos os subassuntos (${availableSubtopics.length})`
                    : 'Sem subassuntos disponíveis'}
                </option>
                {availableSubtopics.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </label>

            {/* 4. Situação pessoal */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Situação pessoal
              </span>
              <select
                value={filters.status}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    status: e.target.value as QuestionFilters['status'],
                  }))
                }
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                <option value="Todas">Todas</option>
                <option value="Não resolvidas">Ainda não resolvidas</option>
                <option value="Resolvidas">Já resolvidas</option>
                <option value="Erradas">Respondidas incorretamente</option>
                <option value="Favoritas">Favoritas</option>
                <option value="Para revisar">Marcadas para revisar</option>
              </select>
            </label>

            {/* 5. Ano inicial / Ano final */}
            <div className="grid grid-cols-2 gap-2">
              <label className="space-y-1 text-xs">
                <span className="font-medium text-neutral-600 dark:text-neutral-400">
                  Ano inicial
                </span>
                <select
                  value={filters.yearFrom ?? ''}
                  onChange={(e) => {
                    const nextFrom = e.target.value ? Number(e.target.value) : null;
                    updateFilters((prev) => ({
                      ...prev,
                      edition: 'Todas',
                      yearFrom: nextFrom,
                      yearTo:
                        nextFrom !== null &&
                        prev.yearTo !== null &&
                        prev.yearTo < nextFrom
                          ? nextFrom
                          : prev.yearTo,
                    }));
                  }}
                  className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-2.5 text-xs font-medium text-neutral-900 dark:text-neutral-100"
                >
                  <option value="">Qualquer</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-1 text-xs">
                <span className="font-medium text-neutral-600 dark:text-neutral-400">
                  Ano final
                </span>
                <select
                  value={filters.yearTo ?? ''}
                  onChange={(e) => {
                    const nextTo = e.target.value ? Number(e.target.value) : null;
                    updateFilters((prev) => ({
                      ...prev,
                      edition: 'Todas',
                      yearTo: nextTo,
                      yearFrom:
                        nextTo !== null &&
                        prev.yearFrom !== null &&
                        prev.yearFrom > nextTo
                          ? nextTo
                          : prev.yearFrom,
                    }));
                  }}
                  className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-2.5 text-xs font-medium text-neutral-900 dark:text-neutral-100"
                >
                  <option value="">Qualquer</option>
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* 6. Edição */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Edição
              </span>
              <select
                value={filters.edition}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    edition: e.target.value,
                    yearFrom: null,
                    yearTo: null,
                  }))
                }
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                <option value="Todas">Todas as edições</option>
                {availableEditions.map((ed) => (
                  <option key={ed} value={ed}>
                    {ed}
                  </option>
                ))}
              </select>
            </label>

            {/* 7. Modalidade */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Modalidade
              </span>
              <select
                value={filters.modality}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    modality: e.target.value as QuestionFilters['modality'],
                  }))
                }
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                <option value="Todas">Todas as modalidades</option>
                {availableModalities.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>

            {/* 8. Língua Estrangeira */}
            <label className="space-y-1 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Língua Estrangeira
              </span>
              <select
                value={filters.foreignLanguage ?? 'Todas'}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    foreignLanguage: e.target.value as ForeignLanguageOption | 'Todas',
                    topic: 'Todos',
                    subtopic: 'Todos',
                  }))
                }
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                <option value="Todas">Todos os idiomas</option>
                <option value="Inglês">Inglês</option>
                <option value="Espanhol">Espanhol</option>
                <option value="Francês">Francês</option>
              </select>
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-wrap items-center gap-3">
              <label className="min-h-[40px] inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onlyWithImages}
                  onChange={(e) =>
                    updateFilters((prev) => ({
                      ...prev,
                      onlyWithImages: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                Apenas questões com imagens ou gráficos
              </label>

              <select
                aria-label="Filtrar por dificuldade"
                value={filters.difficulty}
                onChange={(e) =>
                  updateFilters((prev) => ({
                    ...prev,
                    difficulty: e.target.value as DifficultyLevel | 'Todas',
                  }))
                }
                className="min-h-[40px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs text-neutral-700 dark:text-neutral-200"
              >
                <option value="Todas">Dificuldade: Todas</option>
                <option value="Fácil">Fácil</option>
                <option value="Média">Média</option>
                <option value="Difícil">Difícil</option>
                <option value="Não classificada">Não classificada</option>
              </select>

              {exams.length > 1 && (
                <select
                  aria-label="Filtrar por caderno específico"
                  value={filters.examId}
                  onChange={(e) =>
                    updateFilters((prev) => ({ ...prev, examId: e.target.value }))
                  }
                  className="min-h-[40px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs text-neutral-700 dark:text-neutral-200"
                >
                  <option value="Todas">Caderno: Todos</option>
                  {exams.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      {ex.shortName}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span
                data-testid="bank-results-count"
                className="text-xs font-mono tabular-nums font-medium text-neutral-700 dark:text-neutral-300"
              >
                {filteredQuestions.length}{' '}
                {filteredQuestions.length === 1
                  ? 'questão encontrada'
                  : 'questões encontradas'}
              </span>

              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={() => updateFilters(() => DEFAULT_FILTERS)}
                  className="min-h-[40px] px-3 rounded-xl text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Edition Quick-Access Bar across all UFRR years */}
      <nav
        aria-label="Acesso rápido por edição"
        className="flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          onClick={() =>
            updateFilters((prev) => ({
              ...prev,
              edition: 'Todas',
              yearFrom: null,
              yearTo: null,
            }))
          }
          className={`min-h-[40px] px-3.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-2 border ${
            isAllYearsSelected
              ? 'bg-neutral-900 dark:bg-blue-600 text-white border-neutral-900 dark:border-blue-600'
              : 'bg-white dark:bg-[#151B23] text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'
          }`}
        >
          <span>Todas as edições</span>
          <span
            className={`font-mono tabular-nums text-[11px] ${
              isAllYearsSelected
                ? 'text-white/80'
                : 'text-neutral-400 dark:text-neutral-500'
            }`}
          >
            {editionCounts.totalAllEditions}
          </span>
        </button>

        {editionCounts.years.map(({ year, editionLabel, count }) => {
          const isActive =
            filters.edition === editionLabel ||
            (filters.yearFrom === year && filters.yearTo === year);
          return (
            <button
              key={year}
              type="button"
              onClick={() =>
                updateFilters((prev) => ({
                  ...prev,
                  edition: isActive ? 'Todas' : editionLabel,
                  yearFrom: null,
                  yearTo: null,
                }))
              }
              className={`min-h-[40px] px-3.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-2 border ${
                isActive
                  ? 'bg-neutral-900 dark:bg-blue-600 text-white border-neutral-900 dark:border-blue-600'
                  : 'bg-white dark:bg-[#151B23] text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <span>UFRR {year}</span>
              <span
                className={`font-mono tabular-nums text-[11px] ${
                  isActive
                    ? 'text-white/80'
                    : 'text-neutral-400 dark:text-neutral-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Adaptive Study Strip (shown only when real error/weakness recommendations exist in Catalog mode) */}
      {effectiveViewMode === 'list' &&
        (adaptiveSummary.weakTopics.length > 0 ||
          adaptiveSummary.recommendedQuestions.length > 0) && (
          <section
            data-testid="adaptive-recommendations-strip"
            aria-label="Recomendações de reforço com base nos seus erros"
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-3.5 sm:px-5 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Prioridades para revisar agora</span>
              </div>
              {adaptiveSummary.weakTopics.length > 0 && (
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Pontos de atenção:{' '}
                  {adaptiveSummary.weakTopics
                    .slice(0, 2)
                    .map(
                      (wt) =>
                        `${wt.subtopic ?? wt.topic} (${wt.recentAccuracy}%)`
                    )
                    .join(' · ')}
                </p>
              )}
            </div>

            {adaptiveSummary.recommendedQuestions.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {adaptiveSummary.recommendedQuestions.slice(0, 3).map((rec) => (
                  <button
                    key={rec.question.id}
                    type="button"
                    data-testid={`adaptive-rec-${rec.question.id}`}
                    onClick={() => navigateDirectToQuestionId(rec.question.id, false)}
                    className="min-h-[52px] px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] text-left hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p className="font-mono text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                        {rec.question.originalCode} · {rec.question.classification.subject}
                      </p>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                        {rec.priorityReason}
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-blue-700 dark:text-blue-400 shrink-0">
                      Praticar →
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

      {/* Main Content: Empty State | Catalog List | Reader */}
      {filteredQuestions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151B23] p-10 text-center space-y-3">
          <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            Nenhuma questão corresponde aos filtros atuais
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            {questions.length === 0
              ? 'Ainda não há questões importadas neste banco. Importe cadernos na seção Meu Estudo.'
              : 'Ajuste ou limpe os filtros combinados para visualizar outras questões disponíveis.'}
          </p>
          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={() => updateFilters(() => DEFAULT_FILTERS)}
              className="min-h-[44px] px-5 rounded-xl bg-blue-600 text-white text-sm font-medium"
            >
              Limpar todos os filtros
            </button>
          )}
        </div>
      ) : effectiveViewMode === 'list' ? (
        <div className="space-y-4">
          {/* Catalog List Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono tabular-nums text-neutral-600 dark:text-neutral-300">
                Exibindo {pageStartIndex + 1}–{pageEndIndex} de{' '}
                <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {filteredQuestions.length}
                </strong>{' '}
                questões
              </span>

              <label className="inline-flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span>Por página:</span>
                <select
                  aria-label="Questões por página"
                  value={pageSize}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPageSize(val === 'all' ? 'all' : (Number(val) as 30 | 90));
                    setListPage(1);
                  }}
                  className="min-h-[36px] rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#11161D] px-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-100"
                >
                  <option value={30}>30 questões</option>
                  <option value={90}>90 questões (1 prova)</option>
                  <option value="all">Todas ({filteredQuestions.length})</option>
                </select>
              </label>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  type="button"
                  disabled={safeListPage <= 1}
                  onClick={() => setListPage((p) => Math.max(1, p - 1))}
                  aria-label="Página anterior"
                  className="min-h-[38px] min-w-[38px] px-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 flex items-center justify-center disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {paginationItems.map((item) =>
                  typeof item === 'number' ? (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setListPage(item)}
                      aria-current={item === safeListPage ? 'page' : undefined}
                      className={`min-h-[38px] min-w-[38px] px-2.5 rounded-lg font-mono text-xs font-medium tabular-nums transition-colors ${
                        item === safeListPage
                          ? 'bg-neutral-900 dark:bg-blue-600 text-white'
                          : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {item}
                    </button>
                  ) : (
                    <span
                      key={item}
                      className="px-1.5 text-xs text-neutral-400 select-none"
                    >
                      …
                    </span>
                  )
                )}
                <button
                  type="button"
                  disabled={safeListPage >= totalPages}
                  onClick={() => setListPage((p) => Math.min(totalPages, p + 1))}
                  aria-label="Próxima página"
                  className="min-h-[38px] min-w-[38px] px-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 flex items-center justify-center disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Question Catalog Rows */}
          <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] overflow-hidden">
            {paginatedQuestions.map((q, localIdx) => {
              const absIdx = pageStartIndex + localIdx;
              const topicParts = getQuestionTopicParts(q);
              const flag = userFlags[q.id];
              const rec = latestRecordByQuestion.get(q.id);
              const previewText = formatStemPreview(q.stem);

              return (
                <article
                  key={q.id}
                  className="group p-4 sm:px-5 sm:py-4 hover:bg-neutral-50/80 dark:hover:bg-[#1B222C]/70 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                    <button
                      type="button"
                      onClick={() => openQuestionAt(absIdx)}
                      className="flex-1 min-w-0 text-left space-y-1.5 focus:outline-none"
                    >
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
                        <span className="font-mono font-semibold tabular-nums text-neutral-900 dark:text-neutral-100">
                          {q.originalCode}
                        </span>
                        <span className="text-neutral-300 dark:text-neutral-700">·</span>
                        <span className="font-medium text-blue-700 dark:text-blue-400">
                          {q.classification.subject}
                        </span>
                        {q.foreignLanguage && (
                          <>
                            <span className="text-neutral-300 dark:text-neutral-700">·</span>
                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                              {q.foreignLanguage}
                            </span>
                          </>
                        )}
                        <span className="text-neutral-300 dark:text-neutral-700">·</span>
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {topicParts.topic}
                          {topicParts.subtopic ? ` › ${topicParts.subtopic}` : ''}
                        </span>
                        {q.graphics.length > 0 && (
                          <span
                            title="Contém imagem ou gráfico"
                            className="inline-flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400"
                          >
                            <ImageIcon className="w-3.5 h-3.5" />
                            <span>Figura</span>
                          </span>
                        )}
                        {q.tableHtml && (
                          <span
                            title="Contém tabela"
                            className="inline-flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400"
                          >
                            <Table2 className="w-3.5 h-3.5" />
                            <span>Tabela</span>
                          </span>
                        )}
                        {rec && (
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                              !rec.hasOfficialKey
                                ? 'text-neutral-500 dark:text-neutral-400'
                                : rec.isCorrect
                                  ? 'text-emerald-700 dark:text-emerald-400'
                                  : 'text-rose-700 dark:text-rose-400'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>
                              {!rec.hasOfficialKey
                                ? 'Registrada'
                                : rec.isCorrect
                                  ? 'Acertada'
                                  : 'Errou anteriormente'}
                            </span>
                          </span>
                        )}
                        {resolutionsById[q.id] && (
                          <span
                            title="Resolução comentada e macete disponíveis"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 dark:text-blue-400"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Resolução + Macete</span>
                          </span>
                        )}
                        {flag?.isFavorite && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                            <Bookmark className="w-3.5 h-3.5 fill-current" />
                            <span>Favorita</span>
                          </span>
                        )}
                        {flag?.isFlaggedForReview && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-600 dark:text-rose-400">
                            <Flag className="w-3.5 h-3.5 fill-current" />
                            <span>Revisar</span>
                          </span>
                        )}
                      </div>

                      <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 line-clamp-2">
                        {previewText}
                      </p>
                    </button>

                    <div className="flex items-center justify-end gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => openQuestionAt(absIdx)}
                        className="min-h-[44px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#11161D] text-xs font-semibold text-neutral-800 dark:text-neutral-100 group-hover:border-neutral-900 dark:group-hover:border-blue-500 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors whitespace-nowrap"
                      >
                        Resolver
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Pagination Bar */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-3">
              <span className="text-xs font-mono tabular-nums text-neutral-500">
                Página {safeListPage} de {totalPages}
              </span>
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  type="button"
                  disabled={safeListPage <= 1}
                  onClick={() => setListPage((p) => Math.max(1, p - 1))}
                  className="min-h-[40px] px-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 flex items-center gap-1 disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
                {paginationItems.map((item) =>
                  typeof item === 'number' ? (
                    <button
                      key={`bottom-${item}`}
                      type="button"
                      onClick={() => setListPage(item)}
                      className={`min-h-[40px] min-w-[40px] px-2.5 rounded-xl font-mono text-xs font-medium tabular-nums transition-colors ${
                        item === safeListPage
                          ? 'bg-neutral-900 dark:bg-blue-600 text-white'
                          : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {item}
                    </button>
                  ) : (
                    <span
                      key={`bottom-${item}`}
                      className="px-1.5 text-xs text-neutral-400 select-none"
                    >
                      …
                    </span>
                  )
                )}
                <button
                  type="button"
                  disabled={safeListPage >= totalPages}
                  onClick={() => setListPage((p) => Math.min(totalPages, p + 1))}
                  className="min-h-[40px] px-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 flex items-center gap-1 disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Reader Top Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-2.5">
            <div className="flex flex-wrap items-center gap-2.5 min-w-0">
              <button
                type="button"
                onClick={backToCatalog}
                className="min-h-[42px] px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao catálogo ({filteredQuestions.length})</span>
              </button>

              {questionHistoryStack.length > 0 && (
                <button
                  type="button"
                  data-testid="back-to-previous-question-btn"
                  onClick={handleNavigateBackInHistory}
                  className="min-h-[42px] px-3.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-950/30 text-xs font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100/70 dark:hover:bg-blue-950/50 flex items-center gap-1.5 whitespace-nowrap"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar à questão anterior</span>
                </button>
              )}

              <select
                aria-label="Ir diretamente para questão filtrada"
                value={safeSelectedIndex}
                onChange={(e) => openQuestionAt(Number(e.target.value))}
                className="min-h-[42px] max-w-full sm:max-w-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs font-medium text-neutral-900 dark:text-neutral-100"
              >
                {filteredQuestions.map((q, idx) => (
                  <option key={q.id} value={idx}>
                    {q.originalCode} — {q.classification.subject}
                    {q.foreignLanguage ? ` (${q.foreignLanguage})` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                disabled={safeSelectedIndex === 0}
                onClick={() => openQuestionAt(Math.max(0, safeSelectedIndex - 1))}
                aria-label="Questão anterior"
                className="min-h-[42px] min-w-[42px] rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono tabular-nums text-neutral-600 dark:text-neutral-300 px-2">
                {safeSelectedIndex + 1}/{filteredQuestions.length}
              </span>
              <button
                type="button"
                disabled={safeSelectedIndex >= filteredQuestions.length - 1}
                onClick={() =>
                  openQuestionAt(
                    Math.min(filteredQuestions.length - 1, safeSelectedIndex + 1)
                  )
                }
                aria-label="Próxima questão"
                className="min-h-[42px] min-w-[42px] rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {currentQuestion && (
            <QuestionReader
              question={currentQuestion}
              sharedTexts={sharedTexts}
              mode="study"
              selectedLetter={draftSelections[currentQuestion.id]}
              isChecked={Boolean(checkedQuestions[currentQuestion.id])}
              isFavorite={Boolean(userFlags[currentQuestion.id]?.isFavorite)}
              isFlaggedForReview={Boolean(
                userFlags[currentQuestion.id]?.isFlaggedForReview
              )}
              scratchpadDoc={scratchpads[`q-note-${currentQuestion.id}`]}
              overlayDoc={scratchpads[`q-overlay-${currentQuestion.id}`]}
              defaultPalmRejection={palmRejectionDefault}
              onPalmRejectionChange={(enabled) => void setPalmRejectionDefault(enabled)}
              onSelectAlternative={handleSelectAlternative}
              onCheckAnswer={(ms) => void handleCheckAnswer(ms)}
              onToggleFavorite={() => void toggleFavorite(currentQuestion.id)}
              onToggleReviewFlag={() => void toggleReviewFlag(currentQuestion.id)}
              onSaveScratchpad={saveScratchpad}
              allowResolution={true}
              resolution={currentResolution}
              relatedMatches={currentRelatedMatches}
              onConsultResolution={handleConsultResolution}
              onNavigateToQuestion={handleNavigateToRelatedQuestion}
            />
          )}

          {/* Reader Bottom Navigation Bar */}
          {filteredQuestions.length > 1 && (
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] px-4 py-3">
              <button
                type="button"
                disabled={safeSelectedIndex === 0}
                onClick={() => openQuestionAt(Math.max(0, safeSelectedIndex - 1))}
                className="min-h-[44px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-100 flex items-center gap-1.5 disabled:opacity-35 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Questão anterior</span>
              </button>

              <span className="text-xs font-mono tabular-nums text-neutral-500">
                {safeSelectedIndex + 1} de {filteredQuestions.length}
              </span>

              <button
                type="button"
                disabled={safeSelectedIndex >= filteredQuestions.length - 1}
                onClick={() =>
                  openQuestionAt(
                    Math.min(filteredQuestions.length - 1, safeSelectedIndex + 1)
                  )
                }
                className="min-h-[44px] px-4 rounded-xl bg-neutral-900 dark:bg-blue-600 text-white text-xs font-medium flex items-center gap-1.5 disabled:opacity-35"
              >
                <span>Próxima questão</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
