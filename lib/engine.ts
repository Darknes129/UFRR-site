import type {
  AlternativeLetter,
  AnswerKeyEntry,
  AttemptScoreSummary,
  ExamAttempt,
  ExamEdition,
  ForeignLanguageOption,
  Question,
  QuestionAnswerRecord,
  QuestionFilters,
  SubjectName,
  UserQuestionFlags,
} from './types';

/**
 * Computes remaining seconds from a persisted ISO `endsAt` timestamp.
 * Never relies on an in-memory decrement alone so page reloads preserve exact time.
 */
export function calculateRemainingSeconds(
  endsAtIso: string | null,
  nowMs: number = Date.now()
): number {
  if (!endsAtIso) return 0;
  const endMs = Date.parse(endsAtIso);
  if (Number.isNaN(endMs)) return 0;
  const diffSec = Math.floor((endMs - nowMs) / 1000);
  return Math.max(0, diffSec);
}

export function isAttemptExpired(
  attempt: Pick<ExamAttempt, 'mode' | 'status' | 'endsAt'>,
  nowMs: number = Date.now()
): boolean {
  if (attempt.status !== 'in_progress') return false;
  if (attempt.mode !== 'real' || !attempt.endsAt) return false;
  return calculateRemainingSeconds(attempt.endsAt, nowMs) <= 0;
}

export function hasQuestionAnswerKey(answerKey: AnswerKeyEntry): boolean {
  return (
    Boolean(answerKey.annulled) ||
    answerKey.correctLetter !== null ||
    (answerKey.acceptedLetters?.length ?? 0) > 0
  );
}

export function getQuestionsForAttempt(
  questions: Question[],
  examId: string,
  selectedLanguage: ForeignLanguageOption = 'Inglês'
): Question[] {
  return questions
    .filter((q) => {
      if (q.examId !== examId) return false;
      if (!q.foreignLanguage) return true;
      return q.foreignLanguage === selectedLanguage;
    })
    .sort((a, b) => a.originalNumber - b.originalNumber);
}

export function canStartRealExam(exam: ExamEdition, loadedQuestionsCount: number): {
  allowed: boolean;
  reason?: string;
} {
  if (exam.importStatus === 'awaiting_import') {
    return {
      allowed: false,
      reason:
        'Esta edição oficial aguarda a importação e validação completa do caderno de prova.',
    };
  }
  if (loadedQuestionsCount === 0) {
    return {
      allowed: false,
      reason: 'Nenhuma questão validada encontrada para esta edição.',
    };
  }
  if (exam.importStatus === 'validated' && loadedQuestionsCount < exam.totalQuestions) {
    return {
      allowed: false,
      reason: `Prova incompleta: ${loadedQuestionsCount} de ${exam.totalQuestions} questões validadas.`,
    };
  }
  return { allowed: true };
}

export function evaluateAnswer(
  selected: AlternativeLetter,
  answerKey: AnswerKeyEntry
): { isCorrect: boolean; wasAnnulled: boolean; hasOfficialKey: boolean } {
  if (answerKey.annulled) {
    return { isCorrect: true, wasAnnulled: true, hasOfficialKey: true };
  }
  if (answerKey.acceptedLetters && answerKey.acceptedLetters.length > 0) {
    return {
      isCorrect: answerKey.acceptedLetters.includes(selected),
      wasAnnulled: false,
      hasOfficialKey: true,
    };
  }
  if (!answerKey.correctLetter) {
    return { isCorrect: false, wasAnnulled: false, hasOfficialKey: false };
  }
  return {
    isCorrect: selected === answerKey.correctLetter,
    wasAnnulled: false,
    hasOfficialKey: true,
  };
}

export function scoreAttempt(
  answers: Record<string, AlternativeLetter>,
  examQuestions: Question[]
): AttemptScoreSummary {
  const totalQuestions = examQuestions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let annulledCount = 0;
  let pendingKeyCount = 0;

  const subjectMap = new Map<
    SubjectName,
    { total: number; answered: number; correct: number; pendingKeyCount: number }
  >();

  for (const q of examQuestions) {
    const subj = q.classification.subject;
    if (!subjectMap.has(subj)) {
      subjectMap.set(subj, { total: 0, answered: 0, correct: 0, pendingKeyCount: 0 });
    }
    const bucket = subjectMap.get(subj)!;
    bucket.total += 1;

    const selected = answers[q.id];
    const hasKey = hasQuestionAnswerKey(q.answerKey);

    if (!hasKey) {
      pendingKeyCount += 1;
      bucket.pendingKeyCount += 1;
      if (selected) {
        answeredCount += 1;
        bucket.answered += 1;
      }
      continue;
    }

    const isAnnulled = Boolean(q.answerKey.annulled);
    if (isAnnulled) {
      annulledCount += 1;
      // Standard Brazilian vestibular rule: annulled objective questions award the point to all candidates
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
      const result = evaluateAnswer(selected, q.answerKey);
      if (result.isCorrect) {
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
    accuracyPercent,
    bySubject,
  };
}

export function getQuestionTopicParts(q: Pick<Question, 'classification'>): {
  topic: string;
  subtopic?: string;
} {
  const rawTopic = q.classification.topic.trim();
  const explicitSub = q.classification.subtopic?.trim();
  if (explicitSub) {
    return { topic: rawTopic, subtopic: explicitSub };
  }
  const dashIdx = rawTopic.indexOf(' — ');
  if (dashIdx > 0) {
    return {
      topic: rawTopic.slice(0, dashIdx).trim(),
      subtopic: rawTopic.slice(dashIdx + 3).trim(),
    };
  }
  return { topic: rawTopic };
}

export function filterQuestions(
  questions: Question[],
  filters: QuestionFilters,
  records: QuestionAnswerRecord[],
  flagsMap: Record<string, UserQuestionFlags>
): Question[] {
  // Build fast lookup sets from user records
  const solvedIds = new Set<string>();
  const latestGradedCorrectness = new Map<string, boolean>();

  // Sort ascending by answeredAt so latest graded answer wins for "Erradas" status
  const sortedRecords = [...records].sort((a, b) =>
    a.answeredAt.localeCompare(b.answeredAt)
  );
  for (const rec of sortedRecords) {
    solvedIds.add(rec.questionId);
    if (rec.hasOfficialKey !== false) {
      latestGradedCorrectness.set(rec.questionId, rec.isCorrect);
    }
  }

  const kw = filters.keyword.trim().toLowerCase();

  return questions.filter((q) => {
    if (filters.subject !== 'Todas') {
      const matchesPrimary = q.classification.subject === filters.subject;
      const matchesSubGroup =
        filters.subject === 'Literatura' &&
        q.classification.subSubjectGroup === 'Literatura';
      if (!matchesPrimary && !matchesSubGroup) return false;
    }

    if (
      filters.foreignLanguage &&
      filters.foreignLanguage !== 'Todas' &&
      q.foreignLanguage !== filters.foreignLanguage
    ) {
      return false;
    }

    const topicParts = getQuestionTopicParts(q);

    if (
      filters.topic !== 'Todos' &&
      q.classification.topic !== filters.topic &&
      topicParts.topic !== filters.topic
    ) {
      return false;
    }

    if (
      filters.subtopic !== 'Todos' &&
      q.classification.subtopic !== filters.subtopic &&
      topicParts.subtopic !== filters.subtopic
    ) {
      return false;
    }

    if (filters.yearFrom !== null && q.year < filters.yearFrom) {
      return false;
    }

    if (filters.yearTo !== null && q.year > filters.yearTo) {
      return false;
    }

    if (filters.edition !== 'Todas' && q.edition !== filters.edition) {
      return false;
    }

    if (filters.modality !== 'Todas' && q.modality !== filters.modality) {
      return false;
    }

    if (filters.examId !== 'Todas' && q.examId !== filters.examId) {
      return false;
    }

    if (
      filters.difficulty !== 'Todas' &&
      q.difficulty !== filters.difficulty
    ) {
      return false;
    }

    if (filters.onlyWithImages && q.graphics.length === 0) {
      return false;
    }

    const isSolved = solvedIds.has(q.id);
    const isLatestWrong =
      isSolved && latestGradedCorrectness.get(q.id) === false;
    const flag = flagsMap[q.id];

    if (filters.status === 'Resolvidas' && !isSolved) return false;
    if (filters.status === 'Não resolvidas' && isSolved) return false;
    if (filters.status === 'Erradas' && !isLatestWrong) return false;
    if (filters.status === 'Favoritas' && !flag?.isFavorite) return false;
    if (filters.status === 'Para revisar' && !flag?.isFlaggedForReview) return false;

    if (kw.length > 0) {
      const haystack = [
        q.originalCode,
        q.examName,
        q.foreignLanguage ?? '',
        q.classification.subject,
        q.classification.topic,
        q.classification.subtopic ?? '',
        q.stem,
        ...q.alternatives.map((a) => a.text),
        ...(q.keywords ?? []),
      ]
        .join(' ')
        .toLowerCase();

      if (!haystack.includes(kw)) return false;
    }

    return true;
  });
}

export function formatDurationClock(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(clamped / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  const seconds = clamped % 60;
  return [hours, minutes, seconds]
    .map((v) => String(v).padStart(2, '0'))
    .join(':');
}

export function formatStudyTimeHuman(totalSeconds: number): string {
  if (totalSeconds < 60) return `${Math.max(0, Math.round(totalSeconds))}s`;
  const hours = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  if (hours === 0) return `${mins} min`;
  return `${hours}h ${String(mins).padStart(2, '0')}m`;
}
