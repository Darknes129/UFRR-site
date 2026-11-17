import type {
  LegacyQuestionResolution,
  QuestionResolution,
  ResolutionVerificationStatus,
} from '../types';

function mapVerificationStatus(
  legacy: LegacyQuestionResolution
): ResolutionVerificationStatus {
  if (legacy.verificationStatus === 'verified_official') {
    return 'official_definitive';
  }
  if (legacy.verificationStatus === 'annulled_official') {
    return 'annulled_official';
  }
  if (legacy.verificationStatus === 'divergence_detected') {
    return 'divergence_detected';
  }
  if (
    legacy.officialAnswerStatus === 'preliminary_reported' &&
    legacy.officialAnswer
  ) {
    return 'official_preliminary';
  }
  return 'verified_independent';
}

function buildQuickSolution(legacy: LegacyQuestionResolution): string {
  const interp = legacy.questionInterpretation.trim();
  const correctAlt = legacy.alternativeAnalysis.find(
    (a) => a.status === 'correta'
  );
  if (correctAlt) {
    const answerTag = legacy.proposedAnswer
      ? ` (**Alternativa ${legacy.proposedAnswer}**)`
      : '';
    return `${interp} ${correctAlt.explanation}${answerTag}`.trim();
  }
  const lastStep = legacy.stepByStepSolution[legacy.stepByStepSolution.length - 1];
  if (lastStep) {
    return `${interp} ${lastStep.replace(/^\d+\.\s*/, '')}`.trim();
  }
  return interp;
}

export function adaptLegacyResolution(
  legacy: LegacyQuestionResolution
): QuestionResolution {
  const decisiveConcept =
    legacy.essentialKnowledge[0] ??
    legacy.methodTitle ??
    `${legacy.subject} · ${legacy.topic}`;

  return {
    questionId: legacy.questionId,
    examId: legacy.examId,
    subject: legacy.subject,
    topic: legacy.topic,
    subtopic: legacy.subtopic,
    questionType: legacy.questionType,
    methodTitle: legacy.methodTitle,
    decisiveConcept,
    quickSolution: buildQuickSolution(legacy),
    stepByStep: legacy.stepByStepSolution,
    macete: {
      title: legacy.methodTitle,
      strategy: legacy.shortcutMethod,
      whenToUse: legacy.shortcutApplicability,
      caution: legacy.shortcutLimitations,
    },
    alternativeAnalysis: legacy.alternativeAnalysis.map((alt) => ({
      ...alt,
      errorDiagnosis:
        alt.status === 'incorreta' ? legacy.commonTraps[0] : undefined,
    })),
    proposedAnswer: legacy.proposedAnswer,
    officialAnswer: legacy.officialAnswer,
    officialAnswerSource: legacy.officialAnswerSource,
    officialAnswerStatus: legacy.officialAnswerStatus,
    verificationStatus: mapVerificationStatus(legacy),
    verificationNotes: legacy.verificationNotes,
    relatedQuestionIds: legacy.relatedQuestionIds,
    reviewedAt: legacy.reviewedAt,
    contentVersion: 2,
  };
}
