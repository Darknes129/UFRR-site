import test from 'node:test';
import assert from 'node:assert/strict';
import { OFFICIAL_UFRR_QUESTIONS } from './data';
import { computeDashboardMetrics } from './analytics';
import { buildAdaptiveStudySummary } from './adaptive-learning';
import {
  OFFICIAL_QUESTION_RESOLUTIONS,
  RESOLUTIONS_BY_QUESTION_ID,
  auditResolutionsIntegrity,
  canAccessResolutionInContext,
  computeResolutionCoverage,
  evaluateQuestionWithResolution,
  findRelatedBankQuestions,
  scoreAttemptWithResolutions,
} from './resolutions';
import type { AlternativeLetter, QuestionAnswerRecord } from './types';

test('all 450 official UFRR resolutions (2022–2026) pass full editorial and schema audit', () => {
  assert.equal(OFFICIAL_UFRR_QUESTIONS.length, 450);

  const report = auditResolutionsIntegrity(
    OFFICIAL_UFRR_QUESTIONS,
    OFFICIAL_QUESTION_RESOLUTIONS
  );
  assert.equal(report.totalAudited, 450);
  assert.equal(report.valid, true, JSON.stringify(report.issues.slice(0, 10)));
  assert.equal(report.issues.length, 0);

  for (const q of OFFICIAL_UFRR_QUESTIONS) {
    const res = RESOLUTIONS_BY_QUESTION_ID[q.id];
    assert.ok(res, `Missing resolution for ${q.id}`);
    assert.ok(res.quickSolution.trim().length > 0, `${q.id} needs quickSolution`);
    assert.ok(res.decisiveConcept.trim().length > 0, `${q.id} needs decisiveConcept`);
    assert.ok(res.macete.title.trim().length > 0, `${q.id} needs macete.title`);
    assert.ok(res.macete.strategy.trim().length > 0, `${q.id} needs macete.strategy`);

    const serialized = JSON.stringify(res);
    for (let i = 0; i < serialized.length; i++) {
      const code = serialized.charCodeAt(i);
      assert.ok(
        code >= 32 || code === 10,
        `Unexpected control character (code ${code}) in ${q.id} near "${serialized.slice(Math.max(0, i - 12), i + 12)}"`
      );
    }
  }
});

test('ufrr-2024-q02 preserves full A–F alternative feedback coverage', () => {
  const res = RESOLUTIONS_BY_QUESTION_ID['ufrr-2024-q02'];
  assert.ok(res);
  const letters = new Set(res.alternativeAnalysis.map((a) => a.letter));
  for (const letter of ['A', 'B', 'C', 'D', 'E', 'F'] as AlternativeLetter[]) {
    assert.ok(letters.has(letter), `Expected alternative ${letter} in ufrr-2024-q02`);
  }
});

test('honest key verification preserves Q01 official, Q09 annulled, Q11 divergence, and pending verification items', () => {
  const q01 = RESOLUTIONS_BY_QUESTION_ID['ufrr-2026-q01'];
  assert.equal(q01.verificationStatus, 'official_definitive');
  assert.equal(q01.proposedAnswer, 'C');
  assert.equal(q01.officialAnswer, 'C');

  const q09 = RESOLUTIONS_BY_QUESTION_ID['ufrr-2026-q09'];
  assert.equal(q09.verificationStatus, 'annulled_official');
  assert.equal(q09.proposedAnswer, null);
  assert.equal(q09.officialAnswer, null);

  const q11 = RESOLUTIONS_BY_QUESTION_ID['ufrr-2026-q11'];
  assert.equal(q11.verificationStatus, 'divergence_detected');
  assert.equal(q11.proposedAnswer, 'C');
  assert.equal(q11.officialAnswer, 'B');

  const mathExpected: Array<[string, AlternativeLetter]> = [
    ['ufrr-2026-q10', 'C'],
    ['ufrr-2026-q12', 'B'],
    ['ufrr-2026-q13', 'A'],
    ['ufrr-2026-q14', 'C'],
    ['ufrr-2026-q15', 'E'],
    ['ufrr-2026-q16', 'A'],
    ['ufrr-2026-q17', 'D'],
    ['ufrr-2026-q18', 'E'],
  ];
  for (const [id, expected] of mathExpected) {
    assert.equal(
      RESOLUTIONS_BY_QUESTION_ID[id].proposedAnswer,
      expected,
      `${id} mismatch`
    );
  }

  const pendingItems = OFFICIAL_QUESTION_RESOLUTIONS.filter(
    (r) => r.verificationStatus === 'pending_verification'
  );
  assert.ok(pendingItems.length > 0);
  for (const item of pendingItems) {
    assert.equal(item.proposedAnswer, null);
  }
});

test('canAccessResolutionInContext blocks both Realista and Treino while in_progress, allowing Completed, Expired, and Study', () => {
  assert.equal(canAccessResolutionInContext({ mode: 'study' }).allowed, true);
  assert.equal(
    canAccessResolutionInContext({
      mode: 'exam',
      attemptMode: 'real',
      attemptStatus: 'in_progress',
    }).allowed,
    false
  );
  assert.equal(
    canAccessResolutionInContext({
      mode: 'exam',
      attemptMode: 'treino',
      attemptStatus: 'in_progress',
    }).allowed,
    false
  );
  assert.equal(
    canAccessResolutionInContext({
      mode: 'exam',
      attemptMode: 'real',
      attemptStatus: 'completed',
    }).allowed,
    true
  );
  assert.equal(
    canAccessResolutionInContext({
      mode: 'exam',
      attemptMode: 'treino',
      attemptStatus: 'completed',
    }).allowed,
    true
  );
  assert.equal(
    canAccessResolutionInContext({
      mode: 'exam',
      attemptMode: 'real',
      attemptStatus: 'expired',
    }).allowed,
    true
  );
});

test('evaluateQuestionWithResolution delivers immediate diagnostic feedback for wrong, right, annulled, and pending items', () => {
  const q10 = OFFICIAL_UFRR_QUESTIONS.find((q) => q.id === 'ufrr-2026-q10')!;
  const res10 = RESOLUTIONS_BY_QUESTION_ID['ufrr-2026-q10'];

  const wrong = evaluateQuestionWithResolution('A', q10, res10);
  assert.equal(wrong.hasVerifiedKey, true);
  assert.equal(wrong.isCorrect, false);
  assert.equal(wrong.expectedLetter, 'C');
  assert.ok(wrong.chosenFeedback && wrong.chosenFeedback.letter === 'A');
  assert.ok(wrong.correctFeedback && wrong.correctFeedback.letter === 'C');
  assert.equal(wrong.missingConcept, res10.decisiveConcept);

  const right = evaluateQuestionWithResolution('C', q10, res10);
  assert.equal(right.hasVerifiedKey, true);
  assert.equal(right.isCorrect, true);
  assert.equal(right.missingConcept, undefined);

  const q09 = OFFICIAL_UFRR_QUESTIONS.find((q) => q.id === 'ufrr-2026-q09')!;
  const res09 = RESOLUTIONS_BY_QUESTION_ID['ufrr-2026-q09'];
  const annulled = evaluateQuestionWithResolution('B', q09, res09);
  assert.equal(annulled.hasVerifiedKey, true);
  assert.equal(annulled.wasAnnulled, true);
  assert.equal(annulled.isCorrect, true);
});

test('computeResolutionCoverage reports consistent metrics across all 450 official UFRR questions (2022–2026)', () => {
  const coverage = computeResolutionCoverage(
    OFFICIAL_UFRR_QUESTIONS,
    OFFICIAL_QUESTION_RESOLUTIONS
  );

  assert.equal(coverage.totalQuestions, 450);
  assert.equal(
    coverage.resolvedCount + coverage.pendingVerificationCount,
    450
  );
  assert.equal(coverage.resolvedCount, 432);
  assert.equal(coverage.pendingVerificationCount, 18);
  assert.equal(coverage.officialDefinitiveCount, 1);
  assert.equal(coverage.annulledCount, 1);
  assert.equal(coverage.divergenceCount, 1);
  assert.equal(coverage.macetesCount, 450);
  assert.ok(coverage.distinctMethodsCount > 50);

  for (const year of [2026, 2025, 2024, 2023, 2022]) {
    const ed = coverage.byEdition.find((e) => e.year === year);
    assert.ok(ed, `Missing edition ${year}`);
    assert.equal(ed.total, 90);
    assert.equal(ed.resolved + ed.pending, 90);
  }
});

test('scoreAttemptWithResolutions grades completed simulado accurately and tracks official vs independent counts', () => {
  const exam2026 = OFFICIAL_UFRR_QUESTIONS.filter(
    (q) => q.examId === 'ufrr-integral-2026' && (!q.foreignLanguage || q.foreignLanguage === 'Inglês')
  );
  const summary = scoreAttemptWithResolutions(
    {
      'ufrr-2026-q01': 'C',
      'ufrr-2026-q10': 'A',
    },
    exam2026,
    RESOLUTIONS_BY_QUESTION_ID
  );
  assert.equal(summary.totalQuestions, 72);
  assert.equal(summary.answeredCount, 2);
  assert.ok(summary.officialGradedCount >= 2);
  assert.ok(summary.independentGradedCount >= 35);
  // Q01 correct (+1) + Q09 annulled (+1), Q10 wrong
  assert.equal(summary.correctCount, 2);
  assert.equal(summary.incorrectCount, 1);
});

test('findRelatedBankQuestions retrieves cross-year matches, excludes self, and prioritizes prior errors', () => {
  const resMap = new Map(Object.entries(RESOLUTIONS_BY_QUESTION_ID));
  const q18 = OFFICIAL_UFRR_QUESTIONS.find((q) => q.id === 'ufrr-2026-q18')!;

  const baseMatches = findRelatedBankQuestions(
    q18,
    OFFICIAL_UFRR_QUESTIONS,
    resMap,
    5
  );
  assert.ok(baseMatches.length >= 3 && baseMatches.length <= 5);
  assert.ok(baseMatches.every((m) => m.question.id !== q18.id));
  assert.ok(baseMatches.some((m) => m.question.year < 2026));

  const targetRelated = baseMatches[baseMatches.length - 1].question;
  const userRecords: QuestionAnswerRecord[] = [
    {
      id: 'rec-err-1',
      questionId: targetRelated.id,
      subject: targetRelated.classification.subject,
      topic: targetRelated.classification.topic,
      subtopic: targetRelated.classification.subtopic,
      year: targetRelated.year,
      examId: targetRelated.examId,
      selectedLetter: 'A',
      isCorrect: false,
      wasAnnulled: false,
      hasOfficialKey: true,
      timeSpentMs: 42000,
      answeredAt: '2026-11-16T09:00:00.000Z',
      source: 'bank',
      isDemoFixture: false,
    },
  ];

  const adaptiveMatches = findRelatedBankQuestions(
    q18,
    OFFICIAL_UFRR_QUESTIONS,
    resMap,
    5,
    userRecords
  );
  const prioritized = adaptiveMatches.find(
    (m) => m.question.id === targetRelated.id
  );
  assert.ok(prioritized, 'Expected missed related question to remain in results');
  assert.equal(prioritized.adaptiveTag, 'retry_wrong');

  const adaptiveSummary = buildAdaptiveStudySummary(
    OFFICIAL_UFRR_QUESTIONS,
    userRecords,
    RESOLUTIONS_BY_QUESTION_ID
  );
  assert.ok(adaptiveSummary.weakTopics.length > 0);
  assert.ok(
    adaptiveSummary.recommendedQuestions.some(
      (r) => r.question.id === targetRelated.id
    )
  );
});

test('computeDashboardMetrics separates autonomous vs resolution-consulted performance', () => {
  const records: QuestionAnswerRecord[] = [
    {
      id: 'r1',
      questionId: 'ufrr-2026-q01',
      subject: 'Língua Portuguesa',
      topic: 'Interpretação de Texto',
      year: 2026,
      examId: 'ufrr-2026-pi',
      selectedLetter: 'C',
      isCorrect: true,
      wasAnnulled: false,
      hasOfficialKey: true,
      resolutionConsulted: false,
      timeSpentMs: 45000,
      answeredAt: '2026-11-16T10:00:00.000Z',
      source: 'bank',
      isDemoFixture: false,
    },
    {
      id: 'r2',
      questionId: 'ufrr-2026-q10',
      subject: 'Matemática',
      topic: 'Álgebra',
      year: 2026,
      examId: 'ufrr-2026-pi',
      selectedLetter: 'A',
      isCorrect: false,
      wasAnnulled: false,
      hasOfficialKey: true,
      resolutionConsulted: false,
      timeSpentMs: 60000,
      answeredAt: '2026-11-16T10:05:00.000Z',
      source: 'bank',
      isDemoFixture: false,
    },
    {
      id: 'r3',
      questionId: 'ufrr-2026-q12',
      subject: 'Matemática',
      topic: 'Sistemas Lineares',
      year: 2026,
      examId: 'ufrr-2026-pi',
      selectedLetter: 'B',
      isCorrect: true,
      wasAnnulled: false,
      hasOfficialKey: true,
      resolutionConsulted: true,
      timeSpentMs: 30000,
      answeredAt: '2026-11-16T10:10:00.000Z',
      source: 'simulado',
      attemptId: 'att-1',
      isDemoFixture: false,
    },
  ];

  const metrics = computeDashboardMetrics(records, [], OFFICIAL_UFRR_QUESTIONS, {});
  assert.equal(metrics.assistedBreakdown.unassistedTotal, 2);
  assert.equal(metrics.assistedBreakdown.unassistedGraded, 2);
  assert.equal(metrics.assistedBreakdown.unassistedCorrect, 1);
  assert.equal(metrics.assistedBreakdown.unassistedAccuracyPercent, 50);

  assert.equal(metrics.assistedBreakdown.consultedTotal, 1);
  assert.equal(metrics.assistedBreakdown.consultedGraded, 1);
  assert.equal(metrics.assistedBreakdown.consultedCorrect, 1);
  assert.equal(metrics.assistedBreakdown.consultedAccuracyPercent, 100);
});
