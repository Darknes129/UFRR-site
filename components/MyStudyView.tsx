'use client';

import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  BookMarked,
  CheckCircle2,
  Database,
  Download,
  FileJson,
  Flag,
  FolderPlus,
  History,
  PenLine,
  Play,
  Smartphone,
  Star,
  Trash2,
  Upload,
  XCircle,
} from 'lucide-react';
import { PenCanvas } from './PenCanvas';
import { usePWA } from './PWAComponents';
import { validateImportPackage } from '@/lib/import-validator';
import { useStudy } from '@/lib/study-store';
import type {
  ImportPackageSchema,
  OfficialAnswerKeyPackage,
  StudyNotebook,
  ValidationReport,
} from '@/lib/types';
import type { BackupPayload } from '@/lib/db';

type MyStudyTab = 'revisao' | 'anotacoes' | 'cadernos' | 'dados';

export const MyStudyView: React.FC = () => {
  const {
    questions,
    exams,
    questionRecords,
    userFlags,
    scratchpads,
    notebooks,
    activeAttempt,
    palmRejectionDefault,
    setPalmRejectionDefault,
    saveScratchpad,
    saveNotebook,
    deleteNotebook,
    importValidatedPackage,
    applyOfficialAnswerKeys,
    exportBackup,
    importBackup,
    setActiveSection,
    setFocusedQuestionId,
    setFocusedNotebookId,
    setResumeAttemptId,
  } = useStudy();

  const { isStandalone, isInstallable, promptInstall } = usePWA();
  const [tab, setTab] = useState<MyStudyTab>('revisao');
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  // Custom notebook creation state
  const [nbTitle, setNbTitle] = useState('');
  const [nbDesc, setNbDesc] = useState('');
  const [nbSearch, setNbSearch] = useState('');
  const [nbSelectedIds, setNbSelectedIds] = useState<string[]>([]);

  // Backup & Import state
  const [backupMessage, setBackupMessage] = useState<string | null>(null);
  const [backupError, setBackupError] = useState<string | null>(null);
  const [importText, setImportText] = useState('');
  const [validationReport, setValidationReport] =
    useState<ValidationReport | null>(null);
  const [parsedPkg, setParsedPkg] = useState<ImportPackageSchema | null>(null);
  const [importStatusMsg, setImportStatusMsg] = useState<string | null>(null);
  const [answerKeyJson, setAnswerKeyJson] = useState('');
  const [answerKeyMsg, setAnswerKeyMsg] = useState<string | null>(null);
  const [answerKeyErr, setAnswerKeyErr] = useState<string | null>(null);

  const favoriteQuestions = useMemo(
    () => questions.filter((q) => userFlags[q.id]?.isFavorite),
    [questions, userFlags]
  );

  const reviewQuestions = useMemo(
    () => questions.filter((q) => userFlags[q.id]?.isFlaggedForReview),
    [questions, userFlags]
  );

  const wrongQuestions = useMemo(() => {
    const latest = new Map<string, boolean>();
    const asc = [...questionRecords].sort((a, b) =>
      a.answeredAt.localeCompare(b.answeredAt)
    );
    for (const r of asc) {
      if (r.hasOfficialKey === false) continue;
      latest.set(r.questionId, r.isCorrect);
    }
    return questions.filter((q) => latest.get(q.id) === false);
  }, [questionRecords, questions]);

  const filteredNotebookQuestions = useMemo(() => {
    const q = nbSearch.trim().toLowerCase();
    if (!q) return questions.slice(0, 80);
    return questions
      .filter(
        (item) =>
          item.originalCode.toLowerCase().includes(q) ||
          item.classification.subject.toLowerCase().includes(q) ||
          item.classification.topic.toLowerCase().includes(q) ||
          item.stem.toLowerCase().includes(q)
      )
      .slice(0, 80);
  }, [nbSearch, questions]);

  const savedScratchpadList = useMemo(
    () =>
      Object.values(scratchpads)
        .filter((s) => s.strokes.length > 0)
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [scratchpads]
  );

  const activeScratchpad = useMemo(
    () =>
      savedScratchpadList.find((s) => s.id === selectedNoteId) ??
      savedScratchpadList[0] ??
      null,
    [savedScratchpadList, selectedNoteId]
  );

  const openQuestionInBank = (questionId: string) => {
    setFocusedNotebookId(null);
    setFocusedQuestionId(questionId);
    setActiveSection('questoes');
  };

  const handleCreateNotebook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nbTitle.trim() || nbSelectedIds.length === 0) return;
    const now = new Date().toISOString();
    const nb: StudyNotebook = {
      id: `nb-${Date.now()}`,
      title: nbTitle.trim(),
      description:
        nbDesc.trim() || `${nbSelectedIds.length} questões selecionadas`,
      questionIds: nbSelectedIds,
      createdAt: now,
      updatedAt: now,
    };
    await saveNotebook(nb);
    setNbTitle('');
    setNbDesc('');
    setNbSelectedIds([]);
  };

  const handleExportBackup = async () => {
    setBackupError(null);
    setBackupMessage(null);
    const payload = await exportBackup();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ufrr-study-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupMessage(
      `Backup exportado com ${payload.data.questionRecords.length} respostas e ${payload.data.scratchpads.length} anotações.`
    );
  };

  const handleRestoreFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBackupError(null);
    setBackupMessage(null);
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as BackupPayload;
      await importBackup(parsed);
      setBackupMessage('Backup restaurado com sucesso neste dispositivo.');
    } catch (err) {
      setBackupError(
        err instanceof Error ? err.message : 'Falha ao ler arquivo de backup.'
      );
    } finally {
      e.target.value = '';
    }
  };

  const handleValidateImport = (rawJson: string) => {
    setImportStatusMsg(null);
    try {
      const parsed = JSON.parse(rawJson) as unknown;
      const report = validateImportPackage(parsed, questions, exams);
      setValidationReport(report);
      setParsedPkg(
        report.canImportWithWarnings ? (parsed as ImportPackageSchema) : null
      );
    } catch {
      setValidationReport(
        validateImportPackage(null, questions, exams)
      );
      setParsedPkg(null);
    }
  };

  const handleUploadImportJson = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    setImportText(text);
    handleValidateImport(text);
    e.target.value = '';
  };

  const handleCommitImport = async () => {
    if (!parsedPkg) return;
    await importValidatedPackage(parsedPkg);
    setImportStatusMsg(
      `Edição "${parsedPkg.exam.name}" importada/atualizada com sucesso no banco local.`
    );
    setValidationReport(null);
    setParsedPkg(null);
    setImportText('');
  };

  const handleUploadAnswerKeyJson = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    setAnswerKeyJson(text);
    setAnswerKeyMsg(null);
    setAnswerKeyErr(null);
    e.target.value = '';
  };

  const handleApplyAnswerKeys = async () => {
    setAnswerKeyMsg(null);
    setAnswerKeyErr(null);
    try {
      const parsed = JSON.parse(answerKeyJson) as OfficialAnswerKeyPackage;
      if (
        !parsed ||
        parsed.schemaVersion !== '1.0' ||
        !parsed.examId ||
        !parsed.sourceDocumentName ||
        !Array.isArray(parsed.entries)
      ) {
        throw new Error(
          'JSON inválido. Esperado OfficialAnswerKeyPackage v1.0 com examId, sourceDocumentName e entries[].'
        );
      }
      const res = await applyOfficialAnswerKeys(parsed);
      setAnswerKeyMsg(
        `Gabarito aplicado: ${res.matchedCount} questões atualizadas, ${res.updatedRecordsCount} registros anteriores e ${res.updatedAttemptsCount} simulados recalculados.`
      );
      setAnswerKeyJson('');
    } catch (err) {
      setAnswerKeyErr(
        err instanceof Error ? err.message : 'Falha ao aplicar pacote de gabarito.'
      );
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Meu Estudo
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Revisões, anotações manuscritas, cadernos personalizados, backups e importação de provas.
          </p>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1 bg-neutral-100 dark:bg-[#11161D] p-1 rounded-xl">
          {(
            [
              { id: 'revisao', label: 'Revisões & Histórico' },
              { id: 'anotacoes', label: 'Anotações' },
              { id: 'cadernos', label: 'Cadernos' },
              { id: 'dados', label: 'Backup & Importação' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`min-h-[40px] px-3.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                tab === item.id
                  ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Active Session Continuation Banner */}
      {activeAttempt && (
        <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-950/30 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Sessão anterior em andamento:
            </span>{' '}
            <span className="text-neutral-700 dark:text-neutral-300">
              {activeAttempt.examName}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setResumeAttemptId(activeAttempt.id);
              setActiveSection('simulados');
            }}
            className="min-h-[40px] px-4 rounded-xl bg-blue-600 text-white text-xs font-medium whitespace-nowrap"
          >
            Continuar sessão
          </button>
        </div>
      )}

      {/* TAB 1: REVISÕES & HISTÓRICO */}
      {tab === 'revisao' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Favorites */}
          <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                Favoritas
              </h2>
              <span className="text-xs font-mono tabular-nums text-neutral-500">
                {favoriteQuestions.length}
              </span>
            </div>
            {favoriteQuestions.length === 0 ? (
              <p className="text-xs text-neutral-500 py-4">
                Nenhuma questão favoritada ainda.
              </p>
            ) : (
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {favoriteQuestions.map((q) => (
                  <li key={q.id} className="py-2.5 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                        {q.originalCode} · {q.classification.subject}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate">
                        {q.classification.topic}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openQuestionInBank(q.id)}
                      className="min-h-[36px] px-2.5 rounded-lg text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 shrink-0"
                    >
                      Abrir
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Wrong Questions */}
          <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                Questões erradas
              </h2>
              <span className="text-xs font-mono tabular-nums text-neutral-500">
                {wrongQuestions.length}
              </span>
            </div>
            {wrongQuestions.length === 0 ? (
              <p className="text-xs text-neutral-500 py-4">
                Nenhuma questão com erro recente.
              </p>
            ) : (
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {wrongQuestions.map((q) => (
                  <li key={q.id} className="py-2.5 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                        {q.originalCode} · {q.classification.subject}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate">
                        {q.classification.topic}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openQuestionInBank(q.id)}
                      className="min-h-[36px] px-2.5 rounded-lg text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 shrink-0"
                    >
                      Refazer
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Flagged for Review */}
          <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Flag className="w-4 h-4 text-blue-600" />
                Marcadas para revisar
              </h2>
              <span className="text-xs font-mono tabular-nums text-neutral-500">
                {reviewQuestions.length}
              </span>
            </div>
            {reviewQuestions.length === 0 ? (
              <p className="text-xs text-neutral-500 py-4">
                Nenhuma questão marcada para revisão.
              </p>
            ) : (
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {reviewQuestions.map((q) => (
                  <li key={q.id} className="py-2.5 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                        {q.originalCode} · {q.classification.subject}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate">
                        {q.classification.topic}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openQuestionInBank(q.id)}
                      className="min-h-[36px] px-2.5 rounded-lg text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 shrink-0"
                    >
                      Revisar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Answer History */}
          <section className="lg:col-span-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
            <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <History className="w-4 h-4 text-neutral-500" />
              Histórico de respostas ({questionRecords.length})
            </h2>
            {questionRecords.length === 0 ? (
              <p className="text-sm text-neutral-500 py-4">
                Nenhuma resposta registrada até o momento.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
                      <th className="py-2 text-left font-medium">Data</th>
                      <th className="py-2 text-left font-medium">Disciplina / Assunto</th>
                      <th className="py-2 text-left font-medium">Origem</th>
                      <th className="py-2 text-right font-medium">Escolha</th>
                      <th className="py-2 text-right font-medium">Resultado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {questionRecords.slice(0, 25).map((r) => (
                      <tr key={r.id}>
                        <td className="py-2.5 font-mono text-xs tabular-nums text-neutral-500">
                          {new Intl.DateTimeFormat('pt-BR', {
                            dateStyle: 'short',
                            timeStyle: 'short',
                          }).format(new Date(r.answeredAt))}
                        </td>
                        <td className="py-2.5">
                          <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            {r.subject}
                          </span>{' '}
                          <span className="text-xs text-neutral-500">· {r.topic}</span>
                        </td>
                        <td className="py-2.5 text-xs text-neutral-500">
                          {r.source === 'simulado' ? 'Simulado' : 'Banco'}
                        </td>
                        <td className="py-2.5 text-right font-mono font-semibold">
                          {r.selectedLetter}
                        </td>
                        <td
                          className={`py-2.5 text-right text-xs font-medium ${
                            r.hasOfficialKey === false
                              ? 'text-blue-700 dark:text-blue-400'
                              : r.isCorrect
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {r.hasOfficialKey === false
                            ? 'Gabarito pendente'
                            : r.wasAnnulled
                              ? 'Anulada'
                              : r.isCorrect
                                ? 'Acerto'
                                : 'Erro'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      )}

      {/* TAB 2: ANOTAÇÕES MANUSCRITAS */}
      {tab === 'anotacoes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <aside className="lg:col-span-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 space-y-3">
            <h2 className="font-display text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <PenLine className="w-4 h-4 text-blue-600" />
              Anotações salvas ({savedScratchpadList.length})
            </h2>
            {savedScratchpadList.length === 0 ? (
              <p className="text-xs text-neutral-500 py-4 leading-relaxed">
                Seus rascunhos com caneta feitos nas questões, simulados ou folhas de redação aparecerão aqui automaticamente.
              </p>
            ) : (
              <div className="space-y-2">
                {savedScratchpadList.map((note) => (
                  <button
                    key={note.id}
                    type="button"
                    onClick={() => setSelectedNoteId(note.id)}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border text-left transition-colors ${
                      activeScratchpad?.id === note.id
                        ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/30'
                        : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                      {note.title}
                    </p>
                    <p className="text-[11px] text-neutral-500 tabular-nums mt-0.5">
                      {note.strokes.length} traços ·{' '}
                      {new Intl.DateTimeFormat('pt-BR', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      }).format(new Date(note.updatedAt))}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </aside>

          <div className="lg:col-span-8">
            {activeScratchpad ? (
              activeScratchpad.scope === 'question-overlay' ? (
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                      Anotação diretamente sobre a questão
                    </p>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {activeScratchpad.title}
                    </h3>
                    <p className="text-xs text-neutral-500 tabular-nums">
                      {activeScratchpad.strokes.length}{' '}
                      {activeScratchpad.strokes.length === 1 ? 'traço salvo' : 'traços salvos'}{' '}
                      · Atualizado em{' '}
                      {new Intl.DateTimeFormat('pt-BR', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      }).format(new Date(activeScratchpad.updatedAt))}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Estes traços estão ancorados diretamente ao texto, às figuras e às alternativas originais desta questão. Abra a questão para visualizar ou continuar editando sobre o conteúdo original.
                  </p>
                  <button
                    type="button"
                    onClick={() => openQuestionInBank(activeScratchpad.targetId)}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium inline-flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Abrir questão com anotações
                  </button>
                </div>
              ) : (
                <PenCanvas
                  docId={activeScratchpad.id}
                  scope={activeScratchpad.scope}
                  targetId={activeScratchpad.targetId}
                  title={activeScratchpad.title}
                  initialDoc={activeScratchpad}
                  lined={activeScratchpad.lined}
                  showZoomControls={activeScratchpad.scope === 'essay'}
                  defaultPalmRejection={palmRejectionDefault}
                  onPalmRejectionChange={(enabled) => void setPalmRejectionDefault(enabled)}
                  onSave={saveScratchpad}
                  minHeightClass="h-[520px]"
                  testId="mystudy-scratchpad-viewer"
                />
              )
            ) : (
              <div className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151B23] p-10 text-center text-sm text-neutral-500">
                Selecione uma anotação à esquerda ou crie um rascunho em qualquer questão.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: CADERNOS PERSONALIZADOS */}
      {tab === 'cadernos' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <section className="lg:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
            <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <FolderPlus className="w-4 h-4 text-blue-600" />
              Criar caderno personalizado
            </h2>
            <form onSubmit={(e) => void handleCreateNotebook(e)} className="space-y-4">
              <label className="block space-y-1 text-xs">
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Nome do caderno
                </span>
                <input
                  type="text"
                  required
                  value={nbTitle}
                  onChange={(e) => setNbTitle(e.target.value)}
                  placeholder="Ex.: Revisão Medicina — Bio & Quím"
                  className="w-full min-h-[42px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-sm"
                />
              </label>

              <label className="block space-y-1 text-xs">
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Descrição (opcional)
                </span>
                <input
                  type="text"
                  value={nbDesc}
                  onChange={(e) => setNbDesc(e.target.value)}
                  placeholder="Objetivo ou foco da sessão"
                  className="w-full min-h-[42px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-sm"
                />
              </label>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Selecionar questões ({nbSelectedIds.length} marcadas)
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Exibindo até 80 resultados
                  </span>
                </div>
                <input
                  type="search"
                  value={nbSearch}
                  onChange={(e) => setNbSearch(e.target.value)}
                  placeholder="Filtrar por código, disciplina ou assunto..."
                  aria-label="Filtrar questões para o caderno"
                  className="w-full min-h-[38px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] px-3 text-xs"
                />
                <div className="max-h-60 overflow-y-auto rounded-xl border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800">
                  {filteredNotebookQuestions.length === 0 ? (
                    <p className="p-3 text-xs text-neutral-500">
                      Nenhuma questão encontrada para esse filtro.
                    </p>
                  ) : (
                    filteredNotebookQuestions.map((q) => {
                      const checked = nbSelectedIds.includes(q.id);
                      return (
                        <label
                          key={q.id}
                          className="min-h-[44px] px-3 py-2 flex items-center gap-2.5 text-xs cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              setNbSelectedIds((prev) =>
                                checked
                                  ? prev.filter((id) => id !== q.id)
                                  : [...prev, q.id]
                              )
                            }
                            className="w-4 h-4 rounded accent-blue-600"
                          />
                          <span className="font-mono font-semibold text-neutral-800 dark:text-neutral-200 shrink-0">
                            {q.originalCode}
                          </span>
                          <span className="text-neutral-600 dark:text-neutral-400 truncate">
                            {q.classification.subject} · {q.classification.topic}
                          </span>
                        </label>
                      );
                    })
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={!nbTitle.trim() || nbSelectedIds.length === 0}
                className="w-full min-h-[44px] rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-sm font-medium"
              >
                Salvar caderno personalizado
              </button>
            </form>
          </section>

          <section className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-neutral-500" />
              Meus cadernos ({notebooks.length})
            </h2>
            {notebooks.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#151B23] p-8 text-center text-sm text-neutral-500">
                Monte cadernos misturando questões de diferentes disciplinas e assuntos para criar sessões personalizadas de revisão.
              </div>
            ) : (
              <div className="space-y-3">
                {notebooks.map((nb) => (
                  <article
                    key={nb.id}
                    className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-5 flex flex-wrap items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {nb.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {nb.description} · {nb.questionIds.length} questões
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFocusedNotebookId(nb.id);
                          setActiveSection('questoes');
                        }}
                        className="min-h-[42px] px-4 rounded-xl bg-neutral-900 dark:bg-blue-600 text-white text-xs font-medium flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Estudar caderno
                      </button>
                      <button
                        type="button"
                        onClick={() => void deleteNotebook(nb.id)}
                        aria-label={`Excluir caderno ${nb.title}`}
                        className="min-h-[42px] min-w-[42px] rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {/* TAB 4: BACKUP, DEMO FIXTURE CONTROL & ETAPA 2 IMPORT PIPELINE */}
      {tab === 'dados' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Backup & Restore */}
            <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Backup local e privacidade (IndexedDB)
                </h2>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Como a plataforma funciona sem login, todos os seus simulados, estatísticas, cadernos e anotações manuscritas ficam salvos localmente no navegador deste tablet.{' '}
                <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Limpar os dados do navegador apaga o histórico caso você não possua um arquivo de backup.
                </strong>
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => void handleExportBackup()}
                  className="min-h-[44px] px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Exportar backup (.json)
                </button>

                <label className="min-h-[44px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-100 flex items-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  Restaurar backup
                  <input
                    type="file"
                    accept="application/json"
                    onChange={(e) => void handleRestoreFile(e)}
                    className="sr-only"
                  />
                </label>
              </div>

              {backupMessage && (
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  {backupMessage}
                </p>
              )}
              {backupError && (
                <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                  {backupError}
                </p>
              )}
            </section>

            {/* PWA & Fullscreen Guide for Xiaomi Pad 8 / Android */}
            <section
              data-testid="pwa-device-card"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Aplicativo PWA e Tela Cheia (Xiaomi Pad 8)
                  </h2>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {isStandalone ? 'Modo aplicativo ativo' : 'Modo navegador'}
                </span>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                No navegador, o botão <strong>Tela cheia</strong> no topo solicita a ocultação da barra de URL via Fullscreen API. Para abrir diretamente sem barra de endereço como aplicativo independente:
              </p>

              <ol className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed list-decimal list-inside">
                <li>Toque no menu do navegador (⋮) no Xiaomi Pad 8.</li>
                <li>
                  Escolha <strong>Instalar aplicativo</strong> ou{' '}
                  <strong>Adicionar à tela inicial</strong>.
                </li>
                <li>Abra o UFRR Study pelo ícone criado na tela inicial.</li>
              </ol>

              {!isStandalone && isInstallable && (
                <button
                  type="button"
                  onClick={() => void promptInstall()}
                  className="min-h-[42px] px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Instalar aplicativo agora
                </button>
              )}
            </section>
          </div>

          {/* Phase 2 Import & Integrity Validator */}
          <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-blue-600" />
                  Pipeline de Importação e Validação de Provas (Etapa 2)
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Valida esquema JSON v1.0, integridade A–E, textos compartilhados, recursos gráficos, gabaritos, duplicatas e atualização de edições existentes.
                </p>
              </div>

              <label className="min-h-[42px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-medium flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                Selecionar pacote JSON
                <input
                  type="file"
                  accept="application/json"
                  onChange={(e) => void handleUploadImportJson(e)}
                  className="sr-only"
                />
              </label>
            </div>

            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              rows={6}
              placeholder='Cole aqui um pacote estruturado conforme ImportPackageSchema v1.0 ({ "schemaVersion": "1.0", "exam": ..., "provenance": ..., "questions": [...] })'
              aria-label="JSON do pacote de importação da prova"
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] p-3.5 font-mono text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={!importText.trim()}
                onClick={() => handleValidateImport(importText)}
                className="min-h-[44px] px-5 rounded-xl bg-neutral-900 dark:bg-blue-600 text-white text-xs font-medium disabled:opacity-40"
              >
                Validar integridade do pacote
              </button>

              {parsedPkg && validationReport?.canImportWithWarnings && (
                <button
                  type="button"
                  onClick={() => void handleCommitImport()}
                  className="min-h-[44px] px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium"
                >
                  Confirmar importação no dispositivo
                </button>
              )}
            </div>

            {importStatusMsg && (
              <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-4 text-xs font-medium text-emerald-800 dark:text-emerald-200">
                {importStatusMsg}
              </div>
            )}

            {validationReport && (
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#11161D] p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {validationReport.validForRealSimulation ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-700 dark:text-emerald-400">
                          Apto para Simulado Realista
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                        <span className="text-amber-700 dark:text-amber-400">
                          {validationReport.canImportWithWarnings
                            ? 'Importável com pendências (bloqueado para Simulado Realista)'
                            : 'Erros críticos impedem a importação'}
                        </span>
                      </>
                    )}
                  </div>
                  <span className="text-xs font-mono tabular-nums text-neutral-500">
                    {validationReport.summary.parsedQuestions}/
                    {validationReport.summary.expectedQuestions} questões ·{' '}
                    {validationReport.duplicates.length} duplicatas
                  </span>
                </div>

                {validationReport.errors.length > 0 && (
                  <ul className="space-y-1 text-xs text-red-600 dark:text-red-400">
                    {validationReport.errors.map((err, i) => (
                      <li key={i}>
                        [Erro · {err.code}] {err.message}
                      </li>
                    ))}
                  </ul>
                )}

                {validationReport.warnings.length > 0 && (
                  <ul className="space-y-1 text-xs text-amber-700 dark:text-amber-300">
                    {validationReport.warnings.map((w, i) => (
                      <li key={i}>
                        [Aviso · {w.code}] {w.message}
                      </li>
                    ))}
                  </ul>
                )}

                {validationReport.incompleteQuestions.length > 0 && (
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Questões incompletas:{' '}
                    {validationReport.incompleteQuestions
                      .map((iq) => `Q${iq.questionNumber} (${iq.missingFields.join(', ')})`)
                      .join(' · ')}
                  </p>
                )}
              </div>
            )}
          </section>

          {/* Official Answer Key Batch Linking */}
          <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Vincular Gabarito Oficial (JSON)
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Aplica um gabarito oficial definitivo a uma edição já carregada e recalcula retroativamente suas respostas e simulados anteriores.
                </p>
              </div>
              <label className="min-h-[42px] px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-medium flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                Selecionar gabarito JSON
                <input
                  type="file"
                  accept="application/json"
                  onChange={(e) => void handleUploadAnswerKeyJson(e)}
                  className="sr-only"
                />
              </label>
            </div>

            <textarea
              value={answerKeyJson}
              onChange={(e) => setAnswerKeyJson(e.target.value)}
              rows={4}
              placeholder='{ "schemaVersion": "1.0", "examId": "ufrr-integral-2026", "sourceDocumentName": "Gabarito Definitivo UFRR 2026.pdf", "entries": [{ "originalNumber": 1, "correctLetter": "C" }] }'
              aria-label="JSON do pacote de gabarito oficial"
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11161D] p-3.5 font-mono text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={!answerKeyJson.trim()}
                onClick={() => void handleApplyAnswerKeys()}
                className="min-h-[44px] px-5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-medium"
              >
                Vincular gabarito e recalcular desempenho
              </button>
            </div>

            {answerKeyMsg && (
              <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-4 text-xs font-medium text-emerald-800 dark:text-emerald-200">
                {answerKeyMsg}
              </div>
            )}
            {answerKeyErr && (
              <div className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-4 text-xs font-medium text-red-700 dark:text-red-300">
                {answerKeyErr}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};
