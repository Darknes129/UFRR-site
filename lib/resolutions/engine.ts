import { hasQuestionAnswerKey } from '../engine';
import {
  buildAdaptiveStudySummary,
  normalizeAdaptiveKey,
} from '../adaptive-learning';
import type {
  AlternativeAnalysisItem,
  AlternativeLetter,
  AttemptStatus,
  Question,
  QuestionAnswerRecord,
  QuestionResolution,
  ResolutionCoverageSummary,
  ResolutionVerificationStatus,
  SimulationMode,
  SubjectName,
} from '../types';

export interface ResolutionAccessContext {
  mode: 'study' | 'exam';
  attemptMode?: SimulationMode;
  attemptStatus?: AttemptStatus;
}

/**
 * Strict separation between Learning (Question Bank / Post-exam Review)
 * and Assessment (In-progress Simulado — neither Realista nor Treino reveals corrections before completion).
 */
export function canAccessResolutionInContext(ctx: ResolutionAccessContext): {
  allowed: boolean;
  reason?: string;
} {
  if (ctx.mode === 'study') {
    return { allowed: true };
  }
  if (ctx.attemptStatus === 'in_progress') {
    return {
      allowed: false,
      reason:
        'Durante o simulado em andamento, correções, gabaritos, macetes e comentários permanecem ocultos até a finalização.',
    };
  }
  return { allowed: true };
}

export interface EvaluatedStudyAnswer {
  hasVerifiedKey: boolean;
  isCorrect: boolean;
  wasAnnulled: boolean;
  expectedLetter: AlternativeLetter | null;
  verificationStatus: ResolutionVerificationStatus;
  verificationLabel: string;
  verificationSource?: string;
  chosenFeedback?: AlternativeAnalysisItem;
  correctFeedback?: AlternativeAnalysisItem;
  missingConcept?: string;
  divergenceNote?: string;
}

export function getVerificationStatusLabel(
  status: ResolutionVerificationStatus
): string {
  switch (status) {
    case 'official_definitive':
      return 'Gabarito oficial definitivo';
    case 'official_preliminary':
      return 'Gabarito oficial preliminar';
    case 'verified_independent':
      return 'Resolução independente verificada';
    case 'divergence_detected':
      return 'Divergência identificada (resolução rigorosa vs. preliminar)';
    case 'annulled_official':
      return 'Questão anulada no gabarito oficial';
    case 'pending_verification':
    default:
      return 'Resolução pendente de verificação';
  }
}

export function evaluateQuestionWithResolution(
  selectedLetter: AlternativeLetter,
  question: Question,
  resolution: QuestionResolution | null
): EvaluatedStudyAnswer {
  // 1. Imported official answer key on Question takes precedence if present
  if (hasQuestionAnswerKey(question.answerKey)) {
    if (question.answerKey.annulled) {
      return {
        hasVerifiedKey: true,
        isCorrect: true,
        wasAnnulled: true,
        expectedLetter: null,
        verificationStatus: 'annulled_official',
        verificationLabel: getVerificationStatusLabel('annulled_official'),
        verificationSource: resolution?.officialAnswerSource,
        chosenFeedback: resolution?.alternativeAnalysis.find(
          (a) => a.letter === selectedLetter
        ),
        missingConcept: resolution?.decisiveConcept,
      };
    }

    const accepted = question.answerKey.acceptedLetters?.length
      ? question.answerKey.acceptedLetters
      : question.answerKey.correctLetter
        ? [question.answerKey.correctLetter]
        : [];
    const expectedLetter = accepted[0] ?? null;
    const isCorrect = accepted.includes(selectedLetter);

    return {
      hasVerifiedKey: accepted.length > 0,
      isCorrect,
      wasAnnulled: false,
      expectedLetter,
      verificationStatus: 'official_definitive',
      verificationLabel: getVerificationStatusLabel('official_definitive'),
      verificationSource: resolution?.officialAnswerSource,
      chosenFeedback: resolution?.alternativeAnalysis.find(
        (a) => a.letter === selectedLetter
      ),
      correctFeedback: expectedLetter
        ? resolution?.alternativeAnalysis.find((a) => a.letter === expectedLetter)
        : undefined,
      missingConcept: isCorrect ? undefined : resolution?.decisiveConcept,
    };
  }

  // 2. Annulled via verified official resolution registry
  if (resolution?.verificationStatus === 'annulled_official') {
    return {
      hasVerifiedKey: true,
      isCorrect: true,
      wasAnnulled: true,
      expectedLetter: null,
      verificationStatus: 'annulled_official',
      verificationLabel: getVerificationStatusLabel('annulled_official'),
      verificationSource: resolution.officialAnswerSource,
      chosenFeedback: resolution.alternativeAnalysis.find(
        (a) => a.letter === selectedLetter
      ),
    };
  }

  // 3. Verified resolution (official_definitive, official_preliminary, verified_independent, or divergence_detected)
  if (
    resolution &&
    resolution.proposedAnswer &&
    resolution.verificationStatus !== 'pending_verification'
  ) {
    const expectedLetter = resolution.proposedAnswer;
    const isCorrect = selectedLetter === expectedLetter;
    return {
      hasVerifiedKey: true,
      isCorrect,
      wasAnnulled: false,
      expectedLetter,
      verificationStatus: resolution.verificationStatus,
      verificationLabel: getVerificationStatusLabel(resolution.verificationStatus),
      verificationSource: resolution.officialAnswerSource,
      chosenFeedback: resolution.alternativeAnalysis.find(
        (a) => a.letter === selectedLetter
      ),
      correctFeedback: resolution.alternativeAnalysis.find(
        (a) => a.letter === expectedLetter
      ),
      missingConcept: isCorrect ? undefined : resolution.decisiveConcept,
      divergenceNote:
        resolution.verificationStatus === 'divergence_detected' &&
        resolution.officialAnswer
          ? `Nota de transparência: a dedução técnica rigorosa aponta ${resolution.proposedAnswer}, enquanto o gabarito preliminar divulgado registrou ${resolution.officialAnswer}.`
          : undefined,
    };
  }

  // 4. Honest pending verification state (never guess or falsify right/wrong)
  return {
    hasVerifiedKey: false,
    isCorrect: false,
    wasAnnulled: false,
    expectedLetter: null,
    verificationStatus: 'pending_verification',
    verificationLabel: getVerificationStatusLabel('pending_verification'),
    verificationSource: resolution?.officialAnswerSource,
    chosenFeedback: resolution?.alternativeAnalysis.find(
      (a) => a.letter === selectedLetter
    ),
  };
}

export function mapVerificationStatusToBasis(
  status: ResolutionVerificationStatus
): NonNullable<QuestionAnswerRecord['evaluationBasis']> {
  switch (status) {
    case 'official_definitive':
      return 'official_definitive';
    case 'official_preliminary':
      return 'official_preliminary';
    case 'annulled_official':
      return 'annulled';
    case 'pending_verification':
      return 'pending';
    case 'verified_independent':
    case 'divergence_detected':
    default:
      return 'verified_independent';
  }
}

export interface ExtendedAttemptScoreSummary {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  annulledCount: number;
  pendingKeyCount: number;
  gradedCount: number;
  officialGradedCount: number;
  independentGradedCount: number;
  accuracyPercent: number;
  bySubject: Array<{
    subject: SubjectName;
    total: number;
    answered: number;
    correct: number;
    pendingKeyCount: number;
    accuracyPercent: number;
  }>;
}

export function scoreAttemptWithResolutions(
  answers: Record<string, AlternativeLetter>,
  examQuestions: Question[],
  resolutionsById: Record<string, QuestionResolution>
): ExtendedAttemptScoreSummary {
  const totalQuestions = examQuestions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let annulledCount = 0;
  let pendingKeyCount = 0;
  let officialGradedCount = 0;
  let independentGradedCount = 0;

  const subjectMap = new Map<
    SubjectName,
    { total: number; answered: number; correct: number; pendingKeyCount: number }
  >();

  for (const q of examQuestions) {
    const subj = q.classification.subject;
    if (!subjectMap.has(subj)) {
      subjectMap.set(subj, {
        total: 0,
        answered: 0,
        correct: 0,
        pendingKeyCount: 0,
      });
    }
    const bucket = subjectMap.get(subj)!;
    bucket.total += 1;

    const selected = answers[q.id];
    const resolution = resolutionsById[q.id] ?? null;
    const probe = evaluateQuestionWithResolution(
      selected ?? 'A',
      q,
      resolution
    );

    if (!probe.hasVerifiedKey) {
      pendingKeyCount += 1;
      bucket.pendingKeyCount += 1;
      if (selected) {
        answeredCount += 1;
        bucket.answered += 1;
      }
      continue;
    }

    if (
      probe.verificationStatus === 'official_definitive' ||
      probe.verificationStatus === 'official_preliminary' ||
      probe.verificationStatus === 'annulled_official'
    ) {
      officialGradedCount += 1;
    } else {
      independentGradedCount += 1;
    }

    if (probe.wasAnnulled) {
      annulledCount += 1;
      correctCount += 1;
      bucket.correct += 1;
      if (selected) {
        answeredCount += 1;
        bucket.answered += 1;
      }
      continue;
    }

    if (selected) {
      answeredCount += 1;
      bucket.answered += 1;
      if (probe.isCorrect) {
        correctCount += 1;
        bucket.correct += 1;
      } else {
        incorrectCount += 1;
      }
    }
  }

  const gradedCount = Math.max(0, totalQuestions - pendingKeyCount);
  const accuracyPercent =
    gradedCount > 0 ? Math.round((correctCount / gradedCount) * 1000) / 10 : 0;

  const bySubject = Array.from(subjectMap.entries()).map(([subject, data]) => {
    const subjGraded = Math.max(0, data.total - data.pendingKeyCount);
    return {
      subject,
      total: data.total,
      answered: data.answered,
      correct: data.correct,
      pendingKeyCount: data.pendingKeyCount,
      accuracyPercent:
        subjGraded > 0 ? Math.round((data.correct / subjGraded) * 1000) / 10 : 0,
    };
  });

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    incorrectCount,
    annulledCount,
    pendingKeyCount,
    gradedCount,
    officialGradedCount,
    independentGradedCount,
    accuracyPercent,
    bySubject,
  };
}

export interface RelatedBankQuestionMatch {
  question: Question;
  reason: string;
  sameMethod: boolean;
  adaptiveTag:
    | 'retry_wrong'
    | 'error_reinforcement'
    | 'unsolved'
    | 'practice';
}

function normalizeTopic(value?: string): string {
  return (value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTopicKeywords(topic?: string, subtopic?: string): string[] {
  const stop = new Set([
    'de',
    'da',
    'do',
    'das',
    'dos',
    'e',
    'em',
    'para',
    'com',
    'sobre',
    'uma',
    'um',
    'no',
    'na',
    'geral',
    'aplicada',
  ]);
  return `${normalizeTopic(topic)} ${normalizeTopic(subtopic)}`
    .split(' ')
    .filter((w) => w.length >= 4 && !stop.has(w));
}

export function findRelatedBankQuestions(
  currentQuestion: Question,
  allQuestions: Question[],
  resolutionsMap: Map<string, QuestionResolution>,
  limit = 5,
  userRecords: QuestionAnswerRecord[] = []
): RelatedBankQuestionMatch[] {
  const currentRes = resolutionsMap.get(currentQuestion.id);
  const explicitSet = new Set(currentRes?.relatedQuestionIds ?? []);
  const currentKeywords = extractTopicKeywords(
    currentQuestion.classification.topic,
    currentQuestion.classification.subtopic
  );
  const currentNormTopic = normalizeTopic(currentQuestion.classification.topic);
  const currentNormSubtopic = normalizeTopic(
    currentQuestion.classification.subtopic
  );

  const resObj = Object.fromEntries(resolutionsMap.entries());
  const adaptive = buildAdaptiveStudySummary(allQuestions, userRecords, resObj);

  const scored: Array<{
    question: Question;
    score: number;
    reason: string;
    sameMethod: boolean;
    adaptiveTag: RelatedBankQuestionMatch['adaptiveTag'];
  }> = [];

  for (const candidate of allQuestions) {
    if (candidate.id === currentQuestion.id) continue;

    const candRes = resolutionsMap.get(candidate.id);
    const sameQuestionType =
      Boolean(currentRes?.questionType) &&
      Boolean(candRes?.questionType) &&
      candRes?.questionType === currentRes?.questionType;
    const isExplicit = explicitSet.has(candidate.id);

    const candSubjectMatch =
      candidate.classification.subject ===
        currentQuestion.classification.subject ||
      (currentQuestion.classification.subSubjectGroup &&
        candidate.classification.subSubjectGroup ===
          currentQuestion.classification.subSubjectGroup);

    if (!sameQuestionType && !isExplicit && !candSubjectMatch) {
      continue;
    }

    const candNormTopic = normalizeTopic(candidate.classification.topic);
    const candNormSubtopic = normalizeTopic(
      candidate.classification.subtopic
    );
    const candText = `${candNormTopic} ${candNormSubtopic}`;

    let score = 0;
    let reason = '';
    let sameMethod = false;

    if (sameQuestionType) {
      score += 100;
      sameMethod = true;
      reason = `Mesma habilidade (${currentRes?.methodTitle})`;
    } else if (isExplicit) {
      score += 85;
      reason = 'Padrão equivalente na banca UFRR';
    }

    if (
      currentNormSubtopic &&
      candNormSubtopic &&
      currentNormSubtopic === candNormSubtopic
    ) {
      score += 45;
      if (!reason) {
        reason = `Mesmo subassunto (${candidate.classification.subtopic})`;
      }
    } else if (currentNormTopic && candNormTopic === currentNormTopic) {
      score += 32;
      if (!reason) {
        reason = `Mesmo assunto (${candidate.classification.topic})`;
      }
    } else if (currentKeywords.length > 0) {
      const overlap = currentKeywords.filter((kw) => candText.includes(kw));
      if (overlap.length > 0) {
        score += overlap.length * 14;
        if (!reason) {
          reason = `Assunto correlato (${candidate.classification.topic})`;
        }
      }
    }

    if (score < 14) continue;

    // Adaptive prioritization from real student history
    const qState = adaptive.questionStates.get(candidate.id);
    const candTopicKey = normalizeAdaptiveKey(
      candidate.classification.subject,
      candidate.classification.topic,
      candidate.classification.subtopic
    );
    const candParentKey = normalizeAdaptiveKey(
      candidate.classification.subject,
      candidate.classification.topic
    );
    const topicStat =
      adaptive.topicStats.get(candTopicKey) ??
      adaptive.topicStats.get(candParentKey);

    let adaptiveTag: RelatedBankQuestionMatch['adaptiveTag'] = 'practice';

    if (qState && qState.lastHasKey && qState.lastIsCorrect === false) {
      score += 36;
      adaptiveTag = 'retry_wrong';
    } else if (topicStat?.needsReview) {
      score += qState ? 18 : 42;
      adaptiveTag = qState ? 'practice' : 'error_reinforcement';
    } else if (!qState) {
      score += 30;
      adaptiveTag = 'unsolved';
    } else if (topicStat?.mastered) {
      // Avoid over-drilling already mastered topics when unseen/weak options exist
      score -= 26;
    }

    if (candidate.year !== currentQuestion.year) score += 2;

    scored.push({
      question: candidate,
      score,
      reason,
      sameMethod,
      adaptiveTag,
    });
  }

  return scored
    .sort((a, b) => b.score - a.score || b.question.year - a.question.year)
    .slice(0, Math.min(5, Math.max(3, limit)))
    .map(({ question, reason, sameMethod, adaptiveTag }) => ({
      question,
      reason,
      sameMethod,
      adaptiveTag,
    }));
}

export function computeResolutionCoverage(
  questions: Question[],
  resolutions: QuestionResolution[]
): ResolutionCoverageSummary {
  const resById = new Map<string, QuestionResolution>();
  for (const r of resolutions) {
    resById.set(r.questionId, r);
  }

  let officialDefinitiveCount = 0;
  let officialPreliminaryCount = 0;
  let verifiedIndependentCount = 0;
  let pendingVerificationCount = 0;
  let divergenceCount = 0;
  let annulledCount = 0;
  let macetesCount = 0;

  const methodsMap = new Map<
    string,
    {
      questionType: string;
      methodTitle: string;
      subject: SubjectName;
      questionCount: number;
    }
  >();

  const subjectMap = new Map<
    SubjectName,
    ResolutionCoverageSummary['bySubject'][number]
  >();

  const editionMap = new Map<
    string,
    ResolutionCoverageSummary['byEdition'][number]
  >();

  for (const q of questions) {
    const subj = q.classification.subject;
    if (!subjectMap.has(subj)) {
      subjectMap.set(subj, {
        subject: subj,
        total: 0,
        resolved: 0,
        officialDefinitive: 0,
        officialPreliminary: 0,
        verifiedIndependent: 0,
        divergences: 0,
        annulled: 0,
        pending: 0,
      });
    }
    const sb = subjectMap.get(subj)!;
    sb.total += 1;

    if (!editionMap.has(q.examId)) {
      editionMap.set(q.examId, {
        examId: q.examId,
        edition: q.edition,
        year: q.year,
        total: 0,
        resolved: 0,
        officialDefinitive: 0,
        officialPreliminary: 0,
        verifiedIndependent: 0,
        divergences: 0,
        annulled: 0,
        pending: 0,
      });
    }
    const eb = editionMap.get(q.examId)!;
    eb.total += 1;

    const res = resById.get(q.id);
    if (!res) {
      pendingVerificationCount += 1;
      sb.pending += 1;
      eb.pending += 1;
      continue;
    }

    if (res.macete.strategy.trim().length > 0) {
      macetesCount += 1;
    }

    if (!methodsMap.has(res.questionType)) {
      methodsMap.set(res.questionType, {
        questionType: res.questionType,
        methodTitle: res.methodTitle,
        subject: res.subject,
        questionCount: 0,
      });
    }
    methodsMap.get(res.questionType)!.questionCount += 1;

    switch (res.verificationStatus) {
      case 'official_definitive':
        officialDefinitiveCount += 1;
        sb.resolved += 1;
        eb.resolved += 1;
        sb.officialDefinitive += 1;
        eb.officialDefinitive += 1;
        break;
      case 'official_preliminary':
        officialPreliminaryCount += 1;
        sb.resolved += 1;
        eb.resolved += 1;
        sb.officialPreliminary += 1;
        eb.officialPreliminary += 1;
        break;
      case 'verified_independent':
        verifiedIndependentCount += 1;
        sb.resolved += 1;
        eb.resolved += 1;
        sb.verifiedIndependent += 1;
        eb.verifiedIndependent += 1;
        break;
      case 'divergence_detected':
        divergenceCount += 1;
        sb.resolved += 1;
        eb.resolved += 1;
        sb.divergences += 1;
        eb.divergences += 1;
        break;
      case 'annulled_official':
        annulledCount += 1;
        sb.resolved += 1;
        eb.resolved += 1;
        sb.annulled += 1;
        eb.annulled += 1;
        break;
      case 'pending_verification':
      default:
        pendingVerificationCount += 1;
        sb.pending += 1;
        eb.pending += 1;
        break;
    }
  }

  const resolvedCount =
    officialDefinitiveCount +
    officialPreliminaryCount +
    verifiedIndependentCount +
    divergenceCount +
    annulledCount;

  return {
    totalQuestions: questions.length,
    resolvedCount,
    officialDefinitiveCount,
    officialPreliminaryCount,
    verifiedIndependentCount,
    pendingVerificationCount,
    divergenceCount,
    annulledCount,
    macetesCount,
    distinctMethodsCount: methodsMap.size,
    methodsList: Array.from(methodsMap.values()).sort(
      (a, b) =>
        b.questionCount - a.questionCount ||
        a.methodTitle.localeCompare(b.methodTitle, 'pt-BR')
    ),
    bySubject: Array.from(subjectMap.values()).sort(
      (a, b) => b.resolved - a.resolved || b.total - a.total
    ),
    byEdition: Array.from(editionMap.values()).sort((a, b) => b.year - a.year),
  };
}

export interface ResolutionIntegrityIssue {
  questionId: string;
  code: string;
  message: string;
}

export interface ResolutionAuditReport {
  valid: boolean;
  totalAudited: number;
  issues: ResolutionIntegrityIssue[];
}

export function auditResolutionsIntegrity(
  questions: Question[],
  resolutions: QuestionResolution[]
): ResolutionAuditReport {
  const questionById = new Map(questions.map((q) => [q.id, q]));
  const seenIds = new Set<string>();
  const issues: ResolutionIntegrityIssue[] = [];

  for (const res of resolutions) {
    if (seenIds.has(res.questionId)) {
      issues.push({
        questionId: res.questionId,
        code: 'DUPLICATE_RESOLUTION',
        message: `Resolução duplicada para ${res.questionId}.`,
      });
    }
    seenIds.add(res.questionId);

    const q = questionById.get(res.questionId);
    if (!q) {
      issues.push({
        questionId: res.questionId,
        code: 'ORPHAN_RESOLUTION',
        message: `Questão ${res.questionId} não encontrada no catálogo oficial.`,
      });
      continue;
    }

    if (!res.quickSolution.trim()) {
      issues.push({
        questionId: res.questionId,
        code: 'MISSING_QUICK_SOLUTION',
        message: 'Resolução rápida (Como resolver) está vazia.',
      });
    }

    if (!res.decisiveConcept.trim()) {
      issues.push({
        questionId: res.questionId,
        code: 'MISSING_DECISIVE_CONCEPT',
        message: 'Conceito decisivo está vazio.',
      });
    }

    if (!res.macete.title.trim() || !res.macete.strategy.trim()) {
      issues.push({
        questionId: res.questionId,
        code: 'INCOMPLETE_MACETE',
        message: 'Aba Macete deve conter título e estratégia válida.',
      });
    }

    const qLetters = new Set(q.alternatives.map((a) => a.letter));
    const aLetters = new Set(res.alternativeAnalysis.map((a) => a.letter));
    for (const letter of qLetters) {
      if (!aLetters.has(letter)) {
        issues.push({
          questionId: res.questionId,
          code: 'MISSING_ALTERNATIVE_FEEDBACK',
          message: `Feedback específico não cobre a alternativa ${letter}.`,
        });
      }
    }

    for (const item of res.alternativeAnalysis) {
      if (!item.explanation.trim()) {
        issues.push({
          questionId: res.questionId,
          code: 'EMPTY_ALTERNATIVE_EXPLANATION',
          message: `Alternativa ${item.letter} possui explicação vazia.`,
        });
      }
    }

    if (
      res.verificationStatus === 'official_definitive' &&
      (!res.proposedAnswer ||
        !res.officialAnswer ||
        res.proposedAnswer !== res.officialAnswer ||
        !res.officialAnswerSource?.trim())
    ) {
      issues.push({
        questionId: res.questionId,
        code: 'OFFICIAL_DEFINITIVE_MISMATCH',
        message:
          'Status official_definitive exige proposedAnswer igual ao officialAnswer e fonte oficial explícita.',
      });
    }

    if (
      res.verificationStatus === 'official_preliminary' &&
      (!res.proposedAnswer || !res.officialAnswer || res.proposedAnswer !== res.officialAnswer)
    ) {
      issues.push({
        questionId: res.questionId,
        code: 'OFFICIAL_PRELIMINARY_MISMATCH',
        message:
          'Status official_preliminary exige proposedAnswer igual ao officialAnswer preliminar.',
      });
    }

    if (
      res.verificationStatus === 'verified_independent' &&
      !res.proposedAnswer
    ) {
      issues.push({
        questionId: res.questionId,
        code: 'MISSING_PROPOSED_ANSWER',
        message: 'Status verified_independent exige proposedAnswer definido.',
      });
    }

    if (
      res.verificationStatus === 'divergence_detected' &&
      res.proposedAnswer &&
      res.officialAnswer &&
      res.proposedAnswer === res.officialAnswer
    ) {
      issues.push({
        questionId: res.questionId,
        code: 'INVALID_DIVERGENCE',
        message:
          'Status divergence_detected não pode ter proposedAnswer igual a officialAnswer.',
      });
    }

    if (
      res.verificationStatus === 'pending_verification' &&
      res.proposedAnswer !== null
    ) {
      issues.push({
        questionId: res.questionId,
        code: 'PENDING_MUST_NOT_CLAIM_ANSWER',
        message:
          'Status pending_verification deve manter proposedAnswer === null.',
      });
    }
  }

  return {
    valid: issues.length === 0,
    totalAudited: resolutions.length,
    issues,
  };
}
