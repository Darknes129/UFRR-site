import type {
  AlternativeLetter,
  AnswerKeyStatus,
  ExamAttempt,
  ExamEdition,
  ImportPackageSchema,
  OfficialAnswerKeyPackage,
  Question,
  QuestionAnswerRecord,
  SharedText,
  ValidationIssue,
  ValidationReport,
} from './types';
import { evaluateAnswer, getQuestionsForAttempt, hasQuestionAnswerKey, scoreAttempt } from './engine';

const VALID_LETTERS_5: AlternativeLetter[] = ['A', 'B', 'C', 'D', 'E'];
const VALID_LETTERS_6: AlternativeLetter[] = ['A', 'B', 'C', 'D', 'E', 'F'];

function normalizeStem(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .trim();
}

export function validateImportPackage(
  rawInput: unknown,
  existingQuestions: Question[],
  existingExams: ExamEdition[]
): ValidationReport {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const duplicates: ValidationReport['duplicates'] = [];
  const incompleteQuestions: ValidationReport['incompleteQuestions'] = [];

  if (!rawInput || typeof rawInput !== 'object') {
    return {
      validForRealSimulation: false,
      canImportWithWarnings: false,
      errors: [
        {
          severity: 'error',
          code: 'INVALID_ROOT',
          message: 'O arquivo JSON precisa ser um objeto estruturado conforme ImportPackageSchema v1.0.',
        },
      ],
      warnings: [],
      duplicates: [],
      incompleteQuestions: [],
      summary: {
        examId: '-',
        examName: 'Pacote inválido',
        expectedQuestions: 0,
        parsedQuestions: 0,
        sharedTextsCount: 0,
        graphicsCount: 0,
        annulledCount: 0,
        willUpdateExistingExam: false,
      },
    };
  }

  const pkg = rawInput as Partial<ImportPackageSchema>;

  if (pkg.schemaVersion !== '1.0') {
    errors.push({
      severity: 'error',
      code: 'UNSUPPORTED_SCHEMA_VERSION',
      message: `Versão de esquema inválida (${String(pkg.schemaVersion ?? 'ausente')}). Esperado "1.0".`,
    });
  }

  if (!pkg.exam || !pkg.exam.id || !pkg.exam.name || !pkg.exam.year) {
    errors.push({
      severity: 'error',
      code: 'MISSING_EXAM_METADATA',
      message: 'Metadados obrigatórios da prova ausentes (exam.id, exam.name, exam.year).',
    });
  }

  if (!pkg.provenance || !pkg.provenance.institution || !pkg.provenance.documentName) {
    errors.push({
      severity: 'error',
      code: 'MISSING_PROVENANCE',
      message: 'Proveniência obrigatória ausente (provenance.institution e provenance.documentName).',
    });
  }

  const incomingQuestions = Array.isArray(pkg.questions) ? pkg.questions : [];
  if (!Array.isArray(pkg.questions) || incomingQuestions.length === 0) {
    errors.push({
      severity: 'error',
      code: 'NO_QUESTIONS',
      message: 'O pacote não contém nenhuma questão em questions[].',
    });
  }

  const sharedTexts = Array.isArray(pkg.sharedTexts) ? pkg.sharedTexts : [];
  const sharedTextIds = new Set(sharedTexts.map((st) => st.id));

  const existingById = new Map<string, Question>();
  const existingByStem = new Map<string, Question>();
  for (const eq of existingQuestions) {
    existingById.set(eq.id, eq);
    const norm = normalizeStem(eq.stem);
    if (norm.length > 24) {
      existingByStem.set(norm, eq);
    }
  }

  const seenNumberKeys = new Set<string>();
  let totalGraphicsCount = 0;
  let annulledCount = 0;

  for (const q of incomingQuestions) {
    const missingFields: string[] = [];
    const numKey = `${q.originalNumber}::${q.foreignLanguage ?? ''}`;

    if (typeof q.originalNumber !== 'number' || q.originalNumber <= 0) {
      errors.push({
        severity: 'error',
        code: 'INVALID_QUESTION_NUMBER',
        message: 'Questão sem originalNumber numérico positivo.',
      });
    } else if (seenNumberKeys.has(numKey)) {
      errors.push({
        severity: 'error',
        code: 'DUPLICATE_NUMBER_IN_PACKAGE',
        questionNumber: q.originalNumber,
        message: `Número de questão duplicado no pacote: Q${q.originalNumber}${q.foreignLanguage ? ` (${q.foreignLanguage})` : ''}.`,
      });
    } else {
      seenNumberKeys.add(numKey);
    }

    if (!q.stem || q.stem.trim().length < 8) {
      missingFields.push('enunciado');
      errors.push({
        severity: 'error',
        code: 'MISSING_STEM',
        questionNumber: q.originalNumber,
        message: `Questão ${q.originalNumber} sem enunciado válido.`,
      });
    }

    if (!q.subject) missingFields.push('disciplina');
    if (!q.topic) missingFields.push('assunto');

    // Validate alternatives (standard 5 A-E, or 6 A-F if official exam quirk)
    if (!Array.isArray(q.alternatives) || (q.alternatives.length !== 5 && q.alternatives.length !== 6)) {
      missingFields.push('alternativas (5 obrigatórias)');
      errors.push({
        severity: 'error',
        code: 'INVALID_ALTERNATIVES_COUNT',
        questionNumber: q.originalNumber,
        message: `Questão ${q.originalNumber} deve possuir 5 alternativas (A–E). Encontradas: ${q.alternatives?.length ?? 0}.`,
      });
    } else {
      const expectedSet = q.alternatives.length === 6 ? VALID_LETTERS_6 : VALID_LETTERS_5;
      const letters = q.alternatives.map((a) => a.letter);
      for (const expectedLetter of expectedSet) {
        const alt = q.alternatives.find((a) => a.letter === expectedLetter);
        if (!alt) {
          missingFields.push(`alternativa ${expectedLetter}`);
        } else if (!alt.text.trim() && !alt.graphicId) {
          missingFields.push(`texto da alternativa ${expectedLetter}`);
        }
      }
      if (new Set(letters).size !== q.alternatives.length) {
        errors.push({
          severity: 'error',
          code: 'DUPLICATE_ALTERNATIVE_LETTERS',
          questionNumber: q.originalNumber,
          message: `Questão ${q.originalNumber} possui letras de alternativas duplicadas.`,
        });
      }
    }

    // Validate answer key
    if (q.annulled) {
      annulledCount += 1;
    } else if (!q.correctLetter && (!q.acceptedLetters || q.acceptedLetters.length === 0)) {
      missingFields.push('gabarito');
      warnings.push({
        severity: 'warning',
        code: 'MISSING_ANSWER_KEY',
        questionNumber: q.originalNumber,
        message: `Questão ${q.originalNumber} ainda não possui gabarito oficial vinculado.`,
      });
    }

    // Validate shared texts
    for (const stId of q.sharedTextIds ?? []) {
      if (!sharedTextIds.has(stId)) {
        errors.push({
          severity: 'error',
          code: 'BROKEN_SHARED_TEXT_REF',
          questionNumber: q.originalNumber,
          message: `Questão ${q.originalNumber} referencia texto-base inexistente (${stId}).`,
        });
      }
    }

    if (Array.isArray(q.graphics)) {
      totalGraphicsCount += q.graphics.length;
      for (const g of q.graphics) {
        if (!g.altText || (!g.svgContent && !g.imageUrl)) {
          missingFields.push(`recurso gráfico (${g.id})`);
        }
      }
    }

    if (missingFields.length > 0) {
      incompleteQuestions.push({
        questionNumber: q.originalNumber,
        missingFields,
      });
    }

    // Duplicate detection against existing bank
    const candidateId = q.id ?? `${pkg.exam?.id ?? 'exam'}-q${String(q.originalNumber).padStart(2, '0')}`;
    const existingIdMatch = existingById.get(candidateId);
    if (existingIdMatch) {
      duplicates.push({
        incomingNumber: q.originalNumber,
        existingQuestionId: existingIdMatch.id,
        reason: 'id_match',
      });
    } else if (q.stem) {
      const norm = normalizeStem(q.stem);
      const stemMatch = existingByStem.get(norm);
      if (stemMatch) {
        duplicates.push({
          incomingNumber: q.originalNumber,
          existingQuestionId: stemMatch.id,
          reason: 'stem_match',
        });
        warnings.push({
          severity: 'warning',
          code: 'POSSIBLE_DUPLICATE_STEM',
          questionNumber: q.originalNumber,
          message: `Questão ${q.originalNumber} tem enunciado semelhante à questão existente (${stemMatch.originalCode}).`,
        });
      }
    }
  }

  const expectedCount = pkg.exam?.totalQuestions ?? 0;
  if (expectedCount > 0 && incomingQuestions.length < expectedCount) {
    warnings.push({
      severity: 'warning',
      code: 'QUESTION_COUNT_MISMATCH',
      message: `A prova espera ${expectedCount} questões, mas o pacote possui ${incomingQuestions.length}. O simulado real completo exige todas as ${expectedCount} questões.`,
    });
  }

  const willUpdateExistingExam = Boolean(
    pkg.exam?.id && existingExams.some((e) => e.id === pkg.exam?.id)
  );

  const hasMissingAnswerKey = warnings.some((w) => w.code === 'MISSING_ANSWER_KEY');
  const countSatisfied = expectedCount > 0 && incomingQuestions.length >= expectedCount;

  const validForRealSimulation =
    errors.length === 0 &&
    incompleteQuestions.length === 0 &&
    !hasMissingAnswerKey &&
    countSatisfied;

  return {
    validForRealSimulation,
    canImportWithWarnings: errors.length === 0 && incomingQuestions.length > 0,
    errors,
    warnings,
    duplicates,
    incompleteQuestions,
    summary: {
      examId: pkg.exam?.id ?? '-',
      examName: pkg.exam?.name ?? 'Sem título',
      expectedQuestions: expectedCount,
      parsedQuestions: incomingQuestions.length,
      sharedTextsCount: sharedTexts.length,
      graphicsCount: totalGraphicsCount,
      annulledCount,
      willUpdateExistingExam,
    },
  };
}

export function materializeImportPackage(pkg: ImportPackageSchema): {
  exam: ExamEdition;
  sharedTexts: SharedText[];
  questions: Question[];
} {
  const nowIso = new Date().toISOString();
  const questions: Question[] = pkg.questions
    .slice()
    .sort((a, b) => a.originalNumber - b.originalNumber)
    .map((iq) => {
      const langSuffix = iq.foreignLanguage
        ? `-${iq.foreignLanguage === 'Espanhol' ? 'es' : iq.foreignLanguage === 'Inglês' ? 'en' : 'fr'}`
        : '';
      const qId =
        iq.id ??
        `${pkg.exam.id}-q${String(iq.originalNumber).padStart(2, '0')}${langSuffix}`;
      return {
        id: qId,
        examId: pkg.exam.id,
        originalNumber: iq.originalNumber,
        originalCode:
          iq.originalCode ??
          `${pkg.exam.shortName ?? pkg.exam.edition} · Q${String(iq.originalNumber).padStart(2, '0')}`,
        foreignLanguage: iq.foreignLanguage,
        year: pkg.exam.year,
        edition: pkg.exam.edition,
        modality: pkg.exam.modality,
        examName: pkg.exam.name,
        classification: {
          subject: iq.subject,
          subSubjectGroup: iq.subSubjectGroup,
          topic: iq.topic,
          subtopic: iq.subtopic,
        },
        difficulty: iq.difficulty ?? 'Não classificada',
        sharedTextIds: iq.sharedTextIds ?? [],
        stem: iq.stem,
        tableHtml: iq.tableHtml,
        graphics: iq.graphics ?? [],
        alternatives: iq.alternatives,
        answerKey: {
          questionId: qId,
          correctLetter: iq.correctLetter ?? null,
          annulled: iq.annulled,
          acceptedLetters: iq.acceptedLetters,
          specialRuleNote: iq.specialRuleNote,
          verifiedExplanation: iq.verifiedExplanation,
        },
        provenance: {
          ...pkg.provenance,
          pageNumber: iq.pageNumber,
          importedAt: pkg.provenance.importedAt ?? nowIso,
        },
        editorialNote: iq.editorialNote,
        keywords: iq.keywords,
      };
    });

  const gradedCount = questions.filter((q) => hasQuestionAnswerKey(q.answerKey)).length;
  const answerKeyStatus: AnswerKeyStatus =
    gradedCount === 0
      ? 'pending_gabarito'
      : gradedCount === questions.length
        ? 'complete'
        : 'partial';

  const hasEnoughQuestions = questions.length >= pkg.exam.totalQuestions;

  const exam: ExamEdition = {
    id: pkg.exam.id,
    name: pkg.exam.name,
    shortName: pkg.exam.shortName ?? pkg.exam.name,
    year: pkg.exam.year,
    edition: pkg.exam.edition,
    modality: pkg.exam.modality,
    totalQuestions: pkg.exam.totalQuestions,
    officialDurationSeconds: pkg.exam.officialDurationSeconds,
    alternativesPerQuestion: 5,
    subjectBreakdown: pkg.exam.subjectBreakdown,
    hasEssay: pkg.exam.hasEssay,
    essayPrompt: pkg.exam.essayPrompt,
    importStatus: pkg.provenance.isDemoFixture
      ? 'demo_fixture'
      : hasEnoughQuestions
        ? 'validated'
        : 'awaiting_import',
    answerKeyStatus,
    sourceDocumentName: pkg.provenance.documentName,
    isDemoFixture: pkg.provenance.isDemoFixture,
    rulesSummary: pkg.exam.rulesSummary ?? [
      `${pkg.exam.totalQuestions} questões objetivas com alternativas A–E.`,
      `Duração oficial: ${Math.round(pkg.exam.officialDurationSeconds / 3600)} horas.`,
    ],
    scoringRulesNote: pkg.exam.scoringRulesNote,
    questionIds: questions.map((q) => q.id),
  };

  const sharedTexts: SharedText[] = (pkg.sharedTexts ?? []).map((st) => ({
    ...st,
    examId: pkg.exam.id,
    isDemoFixture: pkg.provenance.isDemoFixture,
  }));

  return { exam, sharedTexts, questions };
}

export function applyOfficialAnswerKeysToData(
  keyPkg: OfficialAnswerKeyPackage,
  exams: ExamEdition[],
  questions: Question[],
  attempts: ExamAttempt[],
  records: QuestionAnswerRecord[]
): {
  updatedQuestions: Question[];
  updatedExam: ExamEdition | null;
  updatedAttempts: ExamAttempt[];
  updatedRecords: QuestionAnswerRecord[];
  matchedCount: number;
} {
  const targetExam = exams.find((e) => e.id === keyPkg.examId) ?? null;
  const entryById = new Map<string, OfficialAnswerKeyPackage['entries'][number]>();
  const entryByNumberLang = new Map<string, OfficialAnswerKeyPackage['entries'][number]>();

  for (const entry of keyPkg.entries) {
    if (entry.questionId) {
      entryById.set(entry.questionId, entry);
    }
    if (typeof entry.originalNumber === 'number') {
      entryByNumberLang.set(
        `${entry.originalNumber}::${entry.foreignLanguage ?? ''}`,
        entry
      );
    }
  }

  let matchedCount = 0;
  const updatedQuestionsMap = new Map<string, Question>();
  const updatedQuestionsList: Question[] = [];

  for (const q of questions) {
    if (q.examId !== keyPkg.examId) continue;
    const match =
      entryById.get(q.id) ??
      entryByNumberLang.get(`${q.originalNumber}::${q.foreignLanguage ?? ''}`);
    if (match) {
      matchedCount += 1;
      const nextQ: Question = {
        ...q,
        answerKey: {
          questionId: q.id,
          correctLetter: match.annulled ? null : match.correctLetter,
          annulled: Boolean(match.annulled),
          acceptedLetters: match.acceptedLetters,
          specialRuleNote: match.specialRuleNote,
          verifiedExplanation: match.verifiedExplanation ?? q.answerKey.verifiedExplanation,
        },
        provenance: {
          ...q.provenance,
          notes: `Gabarito vinculado via ${keyPkg.sourceDocumentName}`,
        },
      };
      updatedQuestionsMap.set(q.id, nextQ);
      updatedQuestionsList.push(nextQ);
    }
  }

  const allExamQuestions = questions
    .filter((q) => q.examId === keyPkg.examId)
    .map((q) => updatedQuestionsMap.get(q.id) ?? q);

  const gradedTotal = allExamQuestions.filter((q) =>
    hasQuestionAnswerKey(q.answerKey)
  ).length;

  const updatedExam: ExamEdition | null = targetExam
    ? {
        ...targetExam,
        answerKeyStatus:
          gradedTotal === 0
            ? 'pending_gabarito'
            : gradedTotal === allExamQuestions.length
              ? 'complete'
              : 'partial',
      }
    : null;

  const updatedAttempts: ExamAttempt[] = [];
  for (const att of attempts) {
    if (
      att.examId === keyPkg.examId &&
      (att.status === 'completed' || att.status === 'expired')
    ) {
      const attemptQuestions = getQuestionsForAttempt(
        allExamQuestions,
        att.examId,
        att.selectedLanguage ?? 'Inglês'
      );
      const summary = scoreAttempt(att.answers, attemptQuestions);
      updatedAttempts.push({ ...att, scoreSummary: summary });
    }
  }

  const updatedRecords: QuestionAnswerRecord[] = [];
  for (const rec of records) {
    if (rec.examId !== keyPkg.examId) continue;
    const q = updatedQuestionsMap.get(rec.questionId);
    if (!q) continue;
    const ev = evaluateAnswer(rec.selectedLetter, q.answerKey);
    updatedRecords.push({
      ...rec,
      isCorrect: ev.isCorrect,
      wasAnnulled: ev.wasAnnulled,
      hasOfficialKey: ev.hasOfficialKey,
    });
  }

  return {
    updatedQuestions: updatedQuestionsList,
    updatedExam,
    updatedAttempts,
    updatedRecords,
    matchedCount,
  };
}

