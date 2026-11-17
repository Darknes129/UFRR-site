import type {
  Question,
  QuestionAnswerRecord,
  QuestionResolution,
  SubjectName,
} from './types';

export interface QuestionPerformanceState {
  questionId: string;
  attempts: number;
  wrongCount: number;
  correctCount: number;
  lastIsCorrect: boolean | null;
  lastHasKey: boolean;
  lastAnsweredAt: string;
}

export interface TopicAdaptiveStats {
  key: string;
  subject: SubjectName;
  topic: string;
  subtopic?: string;
  totalAttempts: number;
  gradedAttempts: number;
  correctCount: number;
  wrongCount: number;
  recentAccuracy: number;
  mastered: boolean;
  needsReview: boolean;
  missingConcepts: string[];
  lastAnsweredAt: string;
}

export interface AdaptiveStudySummary {
  questionStates: Map<string, QuestionPerformanceState>;
  topicStats: Map<string, TopicAdaptiveStats>;
  weakTopics: TopicAdaptiveStats[];
  unsolvedAfterErrorQuestionIds: Set<string>;
  recommendedQuestions: Array<{
    question: Question;
    priorityReason: string;
    category: 'retry_wrong' | 'reinforce_topic' | 'fresh_gap';
  }>;
}

export function normalizeAdaptiveKey(
  subject: SubjectName,
  topic: string,
  subtopic?: string
): string {
  const norm = (v?: string) =>
    (v ?? '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  return `${subject}::${norm(topic)}${subtopic ? `::${norm(subtopic)}` : ''}`;
}

export function buildAdaptiveStudySummary(
  questions: Question[],
  records: QuestionAnswerRecord[],
  resolutionsById: Record<string, QuestionResolution>
): AdaptiveStudySummary {
  const sortedAsc = [...records].sort((a, b) =>
    a.answeredAt.localeCompare(b.answeredAt)
  );

  const questionStates = new Map<string, QuestionPerformanceState>();
  const topicRecordsMap = new Map<string, QuestionAnswerRecord[]>();

  for (const rec of sortedAsc) {
    const prev = questionStates.get(rec.questionId) ?? {
      questionId: rec.questionId,
      attempts: 0,
      wrongCount: 0,
      correctCount: 0,
      lastIsCorrect: null,
      lastHasKey: false,
      lastAnsweredAt: rec.answeredAt,
    };

    const isGraded = rec.hasOfficialKey !== false && !rec.wasAnnulled;
    const nextWrong =
      isGraded && !rec.isCorrect ? prev.wrongCount + 1 : prev.wrongCount;
    const nextCorrect =
      isGraded && rec.isCorrect ? prev.correctCount + 1 : prev.correctCount;

    questionStates.set(rec.questionId, {
      questionId: rec.questionId,
      attempts: prev.attempts + 1,
      wrongCount: nextWrong,
      correctCount: nextCorrect,
      lastIsCorrect: isGraded ? rec.isCorrect : prev.lastIsCorrect,
      lastHasKey: isGraded || prev.lastHasKey,
      lastAnsweredAt: rec.answeredAt,
    });

    const tKey = normalizeAdaptiveKey(rec.subject, rec.topic, rec.subtopic);
    if (!topicRecordsMap.has(tKey)) topicRecordsMap.set(tKey, []);
    topicRecordsMap.get(tKey)!.push(rec);

    // Also track at parent topic level when subtopic exists
    if (rec.subtopic) {
      const parentKey = normalizeAdaptiveKey(rec.subject, rec.topic);
      if (!topicRecordsMap.has(parentKey)) topicRecordsMap.set(parentKey, []);
      topicRecordsMap.get(parentKey)!.push(rec);
    }
  }

  const topicStats = new Map<string, TopicAdaptiveStats>();
  for (const [key, list] of topicRecordsMap.entries()) {
    const graded = list.filter(
      (r) => r.hasOfficialKey !== false && !r.wasAnnulled
    );
    const correctCount = graded.filter((r) => r.isCorrect).length;
    const wrongCount = graded.filter((r) => !r.isCorrect).length;

    // Look at most recent up to 5 graded attempts for mastery vs active error detection
    const recentWindow = graded.slice(-5);
    const recentCorrect = recentWindow.filter((r) => r.isCorrect).length;
    const recentAccuracy =
      recentWindow.length > 0
        ? Math.round((recentCorrect / recentWindow.length) * 100)
        : 0;
    const lastTwo = graded.slice(-2);
    const consecutiveCorrect =
      lastTwo.length >= 2 && lastTwo.every((r) => r.isCorrect);

    const mastered =
      graded.length >= 3 && recentAccuracy >= 80 && consecutiveCorrect;
    const needsReview = wrongCount > 0 && !mastered;

    const conceptSet = new Set<string>();
    for (const r of list) {
      if (r.hasOfficialKey !== false && !r.isCorrect) {
        if (r.missingConcept) {
          conceptSet.add(r.missingConcept);
        } else {
          const res = resolutionsById[r.questionId];
          if (res?.decisiveConcept) conceptSet.add(res.decisiveConcept);
        }
      }
    }

    const sample = list[list.length - 1];
    const parts = key.split('::');
    const isSub = parts.length === 3;

    topicStats.set(key, {
      key,
      subject: sample.subject,
      topic: sample.topic,
      subtopic: isSub ? sample.subtopic : undefined,
      totalAttempts: list.length,
      gradedAttempts: graded.length,
      correctCount,
      wrongCount,
      recentAccuracy,
      mastered,
      needsReview,
      missingConcepts: Array.from(conceptSet).slice(0, 3),
      lastAnsweredAt: sample.answeredAt,
    });
  }

  const unsolvedAfterErrorQuestionIds = new Set<string>();
  for (const [qId, state] of questionStates.entries()) {
    if (state.lastHasKey && state.lastIsCorrect === false) {
      unsolvedAfterErrorQuestionIds.add(qId);
    }
  }

  // Only rank subtopic-or-topic buckets directly (avoid duplicating parent when subtopic identical)
  const weakTopics = Array.from(topicStats.values())
    .filter((t) => t.needsReview && t.wrongCount > 0)
    .sort((a, b) => {
      if (a.recentAccuracy !== b.recentAccuracy) {
        return a.recentAccuracy - b.recentAccuracy;
      }
      return b.wrongCount - a.wrongCount;
    })
    .slice(0, 6);

  // Recommend concrete next questions based on real errors
  const recommendedQuestions: AdaptiveStudySummary['recommendedQuestions'] = [];
  const addedIds = new Set<string>();

  // 1. Direct questions missed in latest attempt
  for (const q of questions) {
    if (unsolvedAfterErrorQuestionIds.has(q.id) && !addedIds.has(q.id)) {
      addedIds.add(q.id);
      recommendedQuestions.push({
        question: q,
        priorityReason: `Você errou esta questão anteriormente (${q.classification.topic})`,
        category: 'retry_wrong',
      });
    }
    if (recommendedQuestions.length >= 4) break;
  }

  // 2. Unsolved questions matching weak error topics/subtopics
  for (const wt of weakTopics) {
    for (const q of questions) {
      if (addedIds.has(q.id) || questionStates.has(q.id)) continue;
      const qSubKey = normalizeAdaptiveKey(
        q.classification.subject,
        q.classification.topic,
        q.classification.subtopic
      );
      const qTopKey = normalizeAdaptiveKey(
        q.classification.subject,
        q.classification.topic
      );
      if (qSubKey === wt.key || qTopKey === wt.key) {
        addedIds.add(q.id);
        recommendedQuestions.push({
          question: q,
          priorityReason: `Reforço inédito em ${wt.subtopic ?? wt.topic} (${wt.wrongCount} ${wt.wrongCount === 1 ? 'erro recente' : 'erros recentes'})`,
          category: 'reinforce_topic',
        });
        break;
      }
    }
    if (recommendedQuestions.length >= 8) break;
  }

  return {
    questionStates,
    topicStats,
    weakTopics,
    unsolvedAfterErrorQuestionIds,
    recommendedQuestions,
  };
}
