import type {
  ExamAttempt,
  Question,
  QuestionAnswerRecord,
  SubjectName,
  UserQuestionFlags,
} from './types';

export interface SubjectMetric {
  subject: SubjectName;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  accuracyPercent: number;
  avgTimeSeconds: number;
  shareOfStudyPercent: number;
}

export interface TopicMetric {
  subject: SubjectName;
  topic: string;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  accuracyPercent: number;
  errorRatePercent: number;
}

export interface PeriodPoint {
  dateKey: string; // YYYY-MM-DD
  label: string; // DD/MM
  answered: number;
  correct: number;
  accuracyPercent: number;
}

export interface DashboardMetrics {
  totalSolvedUnique: number;
  totalAnswerEvents: number;
  gradedAnswerEvents: number;
  pendingKeyEventsCount: number;
  totalCorrect: number;
  totalIncorrect: number;
  accuracyPercent: number;
  totalStudySeconds: number;
  avgTimePerQuestionSeconds: number;
  pendingReviewCount: number;
  wrongLatestCount: number;
  favoriteCount: number;
  completedSimuladosCount: number;
  subjectMetrics: SubjectMetric[];
  topicMetrics: TopicMetric[];
  highestErrorTopics: TopicMetric[];
  evolutionByPeriod: PeriodPoint[];
  recentActivity: Array<{
    id: string;
    type: 'question' | 'simulado';
    title: string;
    subtitle: string;
    timestamp: string;
    resultLabel: string;
    isPositive: boolean;
    isPendingKey?: boolean;
  }>;
  attemptComparisons: Array<{
    examId: string;
    examName: string;
    attempts: Array<{
      attemptId: string;
      mode: 'real' | 'treino';
      finishedAt: string;
      accuracyPercent: number;
      correctCount: number;
      totalQuestions: number;
      pendingKeyCount: number;
      elapsedSeconds: number;
    }>;
  }>;
  assistedBreakdown: {
    unassistedTotal: number;
    unassistedGraded: number;
    unassistedCorrect: number;
    unassistedAccuracyPercent: number;
    consultedTotal: number;
    consultedGraded: number;
    consultedCorrect: number;
    consultedAccuracyPercent: number;
  };
}

export function computeDashboardMetrics(
  records: QuestionAnswerRecord[],
  attempts: ExamAttempt[],
  questions: Question[],
  flagsMap: Record<string, UserQuestionFlags>
): DashboardMetrics {
  const uniqueSolvedIds = new Set<string>();
  const latestGradedByQuestion = new Map<string, QuestionAnswerRecord>();

  const sortedAsc = [...records].sort((a, b) =>
    a.answeredAt.localeCompare(b.answeredAt)
  );
  for (const r of sortedAsc) {
    uniqueSolvedIds.add(r.questionId);
    if (r.hasOfficialKey !== false) {
      latestGradedByQuestion.set(r.questionId, r);
    }
  }

  const totalAnswerEvents = records.length;
  let gradedAnswerEvents = 0;
  let pendingKeyEventsCount = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalTimeMs = 0;
  let unassistedTotal = 0;
  let unassistedGraded = 0;
  let unassistedCorrect = 0;
  let consultedTotal = 0;
  let consultedGraded = 0;
  let consultedCorrect = 0;

  const subjectBuckets = new Map<
    SubjectName,
    { answered: number; graded: number; correct: number; incorrect: number; timeMs: number }
  >();
  const topicBuckets = new Map<
    string,
    { subject: SubjectName; topic: string; answered: number; graded: number; correct: number; incorrect: number }
  >();
  const dayBuckets = new Map<string, { answered: number; graded: number; correct: number }>();

  for (const r of records) {
    const isGraded = r.hasOfficialKey !== false;
    const consulted = Boolean(r.resolutionConsulted);
    if (consulted) {
      consultedTotal += 1;
    } else {
      unassistedTotal += 1;
    }

    if (isGraded) {
      gradedAnswerEvents += 1;
      if (r.isCorrect) totalCorrect += 1;
      else totalIncorrect += 1;
      if (consulted) {
        consultedGraded += 1;
        if (r.isCorrect) consultedCorrect += 1;
      } else {
        unassistedGraded += 1;
        if (r.isCorrect) unassistedCorrect += 1;
      }
    } else {
      pendingKeyEventsCount += 1;
    }

    const safeMs = Math.max(0, r.timeSpentMs || 0);
    totalTimeMs += safeMs;

    if (!subjectBuckets.has(r.subject)) {
      subjectBuckets.set(r.subject, { answered: 0, graded: 0, correct: 0, incorrect: 0, timeMs: 0 });
    }
    const sb = subjectBuckets.get(r.subject)!;
    sb.answered += 1;
    if (isGraded) {
      sb.graded += 1;
      if (r.isCorrect) sb.correct += 1;
      else sb.incorrect += 1;
    }
    sb.timeMs += safeMs;

    const topicKey = `${r.subject}::${r.topic}`;
    if (!topicBuckets.has(topicKey)) {
      topicBuckets.set(topicKey, {
        subject: r.subject,
        topic: r.topic,
        answered: 0,
        graded: 0,
        correct: 0,
        incorrect: 0,
      });
    }
    const tb = topicBuckets.get(topicKey)!;
    tb.answered += 1;
    if (isGraded) {
      tb.graded += 1;
      if (r.isCorrect) tb.correct += 1;
      else tb.incorrect += 1;
    }

    const dateKey = r.answeredAt.slice(0, 10);
    if (!dayBuckets.has(dateKey)) {
      dayBuckets.set(dateKey, { answered: 0, graded: 0, correct: 0 });
    }
    const db = dayBuckets.get(dateKey)!;
    db.answered += 1;
    if (isGraded) {
      db.graded += 1;
      if (r.isCorrect) db.correct += 1;
    }
  }

  // Add completed exam duration if records don't cover essay/reading time
  const completedAttempts = attempts.filter(
    (a) => a.status === 'completed' || a.status === 'expired'
  );
  const attemptsTimeSeconds = completedAttempts.reduce(
    (acc, a) => acc + Math.max(0, a.elapsedSeconds || 0),
    0
  );
  const recordsTimeSeconds = Math.round(totalTimeMs / 1000);
  const totalStudySeconds = Math.max(recordsTimeSeconds, attemptsTimeSeconds);

  const accuracyPercent =
    gradedAnswerEvents > 0
      ? Math.round((totalCorrect / gradedAnswerEvents) * 1000) / 10
      : 0;

  const avgTimePerQuestionSeconds =
    totalAnswerEvents > 0 ? Math.round(recordsTimeSeconds / totalAnswerEvents) : 0;

  let pendingReviewCount = 0;
  let favoriteCount = 0;
  for (const flag of Object.values(flagsMap)) {
    if (flag.isFlaggedForReview) pendingReviewCount += 1;
    if (flag.isFavorite) favoriteCount += 1;
  }

  let wrongLatestCount = 0;
  for (const rec of latestGradedByQuestion.values()) {
    if (!rec.isCorrect) wrongLatestCount += 1;
  }

  const subjectMetrics: SubjectMetric[] = Array.from(subjectBuckets.entries())
    .map(([subject, b]) => ({
      subject,
      answeredCount: b.answered,
      correctCount: b.correct,
      incorrectCount: b.incorrect,
      accuracyPercent:
        b.graded > 0 ? Math.round((b.correct / b.graded) * 1000) / 10 : 0,
      avgTimeSeconds:
        b.answered > 0 ? Math.round(b.timeMs / 1000 / b.answered) : 0,
      shareOfStudyPercent:
        totalAnswerEvents > 0
          ? Math.round((b.answered / totalAnswerEvents) * 1000) / 10
          : 0,
    }))
    .sort((a, b) => b.answeredCount - a.answeredCount);

  const topicMetrics: TopicMetric[] = Array.from(topicBuckets.values())
    .map((b) => {
      const acc = b.graded > 0 ? Math.round((b.correct / b.graded) * 1000) / 10 : 0;
      const err = b.graded > 0 ? Math.round((b.incorrect / b.graded) * 1000) / 10 : 0;
      return {
        subject: b.subject,
        topic: b.topic,
        answeredCount: b.answered,
        correctCount: b.correct,
        incorrectCount: b.incorrect,
        accuracyPercent: acc,
        errorRatePercent: err,
      };
    })
    .sort((a, b) => b.answeredCount - a.answeredCount);

  const highestErrorTopics = [...topicMetrics]
    .filter((t) => t.incorrectCount > 0)
    .sort((a, b) => {
      if (b.errorRatePercent !== a.errorRatePercent) {
        return b.errorRatePercent - a.errorRatePercent;
      }
      return b.incorrectCount - a.incorrectCount;
    })
    .slice(0, 6);

  const evolutionByPeriod: PeriodPoint[] = Array.from(dayBuckets.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14)
    .map(([dateKey, d]) => {
      const [, month, day] = dateKey.split('-');
      return {
        dateKey,
        label: `${day}/${month}`,
        answered: d.answered,
        correct: d.correct,
        accuracyPercent:
          d.graded > 0 ? Math.round((d.correct / d.graded) * 1000) / 10 : 0,
      };
    });

  const questionLookup = new Map<string, Question>();
  for (const q of questions) {
    questionLookup.set(q.id, q);
  }

  const recentQuestionItems = [...records]
    .sort((a, b) => b.answeredAt.localeCompare(a.answeredAt))
    .slice(0, 8)
    .map((r) => {
      const q = questionLookup.get(r.questionId);
      const isPending = r.hasOfficialKey === false;
      return {
        id: r.id,
        type: 'question' as const,
        title: q ? `${q.originalCode} · ${r.subject}` : `${r.subject} · ${r.topic}`,
        subtitle: r.topic,
        timestamp: r.answeredAt,
        resultLabel: isPending
          ? `Registrada (${r.selectedLetter}) · Pendente`
          : r.wasAnnulled
            ? 'Anulada (ponto)'
            : r.isCorrect
              ? `Acerto (${r.selectedLetter})`
              : `Erro (${r.selectedLetter})`,
        isPositive: isPending ? true : r.isCorrect,
        isPendingKey: isPending,
      };
    });

  const recentSimuladoItems = completedAttempts
    .slice()
    .sort((a, b) =>
      (b.finishedAt ?? b.startedAt).localeCompare(a.finishedAt ?? a.startedAt)
    )
    .slice(0, 5)
    .map((a) => {
      const s = a.scoreSummary;
      const allPending =
        Boolean(s) && (s?.pendingKeyCount ?? 0) === s?.totalQuestions;
      return {
        id: a.id,
        type: 'simulado' as const,
        title: a.examName,
        subtitle: a.mode === 'real' ? 'Modo Realista' : 'Modo Treino',
        timestamp: a.finishedAt ?? a.startedAt,
        resultLabel: allPending
          ? `${s?.answeredCount ?? 0}/${s?.totalQuestions ?? 0} resp. (gabarito pendente)`
          : s
            ? `${s.correctCount}/${s.gradedCount ?? s.totalQuestions} (${s.accuracyPercent}%)`
            : 'Finalizado',
        isPositive: allPending ? true : (s?.accuracyPercent ?? 0) >= 60,
        isPendingKey: allPending,
      };
    });

  const recentActivity = [...recentSimuladoItems, ...recentQuestionItems]
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    .slice(0, 8);

  const groupedAttempts = new Map<
    string,
    {
      examId: string;
      examName: string;
      attempts: DashboardMetrics['attemptComparisons'][number]['attempts'];
    }
  >();

  for (const a of completedAttempts) {
    if (!a.scoreSummary) continue;
    if (!groupedAttempts.has(a.examId)) {
      groupedAttempts.set(a.examId, {
        examId: a.examId,
        examName: a.examName,
        attempts: [],
      });
    }
    groupedAttempts.get(a.examId)!.attempts.push({
      attemptId: a.id,
      mode: a.mode,
      finishedAt: a.finishedAt ?? a.startedAt,
      accuracyPercent: a.scoreSummary.accuracyPercent,
      correctCount: a.scoreSummary.correctCount,
      totalQuestions: a.scoreSummary.totalQuestions,
      pendingKeyCount: a.scoreSummary.pendingKeyCount ?? 0,
      elapsedSeconds: a.elapsedSeconds,
    });
  }

  const attemptComparisons = Array.from(groupedAttempts.values()).map((g) => ({
    ...g,
    attempts: g.attempts.sort((a, b) => a.finishedAt.localeCompare(b.finishedAt)),
  }));

  return {
    totalSolvedUnique: uniqueSolvedIds.size,
    totalAnswerEvents,
    gradedAnswerEvents,
    pendingKeyEventsCount,
    totalCorrect,
    totalIncorrect,
    accuracyPercent,
    totalStudySeconds,
    avgTimePerQuestionSeconds,
    pendingReviewCount,
    wrongLatestCount,
    favoriteCount,
    completedSimuladosCount: completedAttempts.length,
    subjectMetrics,
    topicMetrics,
    highestErrorTopics,
    evolutionByPeriod,
    recentActivity,
    attemptComparisons,
    assistedBreakdown: {
      unassistedTotal,
      unassistedGraded,
      unassistedCorrect,
      unassistedAccuracyPercent:
        unassistedGraded > 0
          ? Math.round((unassistedCorrect / unassistedGraded) * 1000) / 10
          : 0,
      consultedTotal,
      consultedGraded,
      consultedCorrect,
      consultedAccuracyPercent:
        consultedGraded > 0
          ? Math.round((consultedCorrect / consultedGraded) * 1000) / 10
          : 0,
    },
  };
}
