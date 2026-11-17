export type AlternativeLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export type ForeignLanguageOption = 'Espanhol' | 'Inglês' | 'Francês';

export type AnswerKeyStatus = 'complete' | 'partial' | 'pending_gabarito';

export type SubjectName =
  | 'Biologia'
  | 'Química'
  | 'Física'
  | 'Matemática'
  | 'Língua Portuguesa'
  | 'Literatura'
  | 'História'
  | 'Geografia'
  | 'Língua Estrangeira';

export type ExamModality =
  | 'Prova Integral'
  | 'PSS 1'
  | 'PSS 2'
  | 'PSS 3'
  | 'Simulado Demonstração';

export type ExamImportStatus = 'awaiting_import' | 'validated' | 'demo_fixture';

export type DifficultyLevel = 'Fácil' | 'Média' | 'Difícil' | 'Não classificada';

export interface SourceProvenance {
  institution: string; // e.g., 'UFRR / CPV' or 'Fixture de Demonstração'
  documentName: string;
  pageNumber?: number;
  importedAt?: string;
  verifiedByUser?: boolean;
  isDemoFixture: boolean;
  notes?: string;
}

export interface Alternative {
  letter: AlternativeLetter;
  text: string;
  graphicId?: string;
}

export interface SharedText {
  id: string;
  examId: string;
  title?: string;
  referenceLabel: string; // e.g., "Texto I — Para as questões 01 a 04"
  content: string; // Supports paragraphs, __underline__, **bold**, and KaTeX math
  sourceCitation?: string;
  isDemoFixture?: boolean;
}

export interface GraphicResource {
  id: string;
  type: 'svg' | 'image';
  svgContent?: string;
  imageUrl?: string;
  caption?: string;
  altText: string;
}

export interface TopicClassification {
  subject: SubjectName;
  subSubjectGroup?: string; // e.g., "Literatura" inside Língua Portuguesa when applicable
  topic: string;
  subtopic?: string;
}

export interface AnswerKeyEntry {
  questionId: string;
  correctLetter: AlternativeLetter | null;
  annulled?: boolean;
  acceptedLetters?: AlternativeLetter[]; // For multi-valid official keys
  specialRuleNote?: string;
  verifiedExplanation?: string; // Only shown when explicitly verified
}

export interface Question {
  id: string;
  examId: string;
  originalNumber: number;
  originalCode: string; // e.g. "UFRR 2026 · Q01" or "DEMO · Q01"
  foreignLanguage?: ForeignLanguageOption;
  year: number;
  edition: string;
  modality: ExamModality;
  examName: string;
  classification: TopicClassification;
  classificationConfidence?: 'alta' | 'media' | 'revisar';
  difficulty: DifficultyLevel;
  sharedTextIds: string[];
  stem: string; // Enunciado (supports KaTeX $...$ / $$...$$, **bold**, __underline__)
  tableHtml?: string; // Structured native table data if present
  graphics: GraphicResource[];
  alternatives: Alternative[];
  answerKey: AnswerKeyEntry;
  provenance: SourceProvenance;
  editorialNote?: string;
  visualReviewPending?: boolean;
  incompleteFields?: string[];
  keywords?: string[];
}

export interface SubjectRule {
  subject: SubjectName;
  questionCount: number;
  languageOption?: ForeignLanguageOption;
}

export interface EssayTheme {
  id: string;
  label: string; // e.g., "Tema 1"
  theme: string;
  instructions: string;
  supportingTexts: Array<{
    label: string;
    content: string;
    source?: string;
  }>;
  minLines?: number;
  maxLines?: number;
}

export interface EssayPrompt {
  id: string;
  title: string;
  theme: string;
  instructions: string;
  supportingTexts: Array<{
    label: string;
    content: string;
    source?: string;
  }>;
  themes?: EssayTheme[];
  minLines?: number;
  maxLines?: number;
  isDemoFixture: boolean;
}

export interface ExamEdition {
  id: string;
  name: string;
  shortName: string;
  year: number;
  edition: string;
  modality: ExamModality;
  totalQuestions: number;
  officialDurationSeconds: number; // e.g., 18000 (5 hours)
  alternativesPerQuestion: 5;
  subjectBreakdown: SubjectRule[];
  hasEssay: boolean;
  essayPrompt?: EssayPrompt;
  importStatus: ExamImportStatus;
  answerKeyStatus?: AnswerKeyStatus;
  sourceDocumentName?: string;
  isDemoFixture: boolean;
  rulesSummary: string[];
  scoringRulesNote?: string;
  questionIds: string[];
}

export type SimulationMode = 'real' | 'treino';

export type AttemptStatus = 'in_progress' | 'completed' | 'expired';

export interface EssaySubmission {
  mode: 'typed' | 'handwritten';
  selectedThemeId?: string;
  typedText: string;
  handwrittenPageIds: string[]; // Scratchpad IDs for virtual essay sheets
  updatedAt: string;
  aiEstimateSlot?: {
    available: boolean;
    disclaimer: string;
    lastEstimatedAt?: string;
  };
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examName: string;
  selectedLanguage?: ForeignLanguageOption;
  mode: SimulationMode;
  status: AttemptStatus;
  startedAt: string;
  endsAt: string | null; // Persisted ISO timestamp for real mode countdown
  finishedAt?: string;
  durationSecondsConfigured: number;
  elapsedSeconds: number; // Used in flexible treino mode or final tally
  currentQuestionIndex: number;
  answers: Record<string, AlternativeLetter>; // questionId -> selected
  flaggedQuestionIds: string[];
  questionTimeSpentMs: Record<string, number>;
  consultedQuestionIds?: string[];
  essaySubmission?: EssaySubmission;
  scoreSummary?: AttemptScoreSummary;
  isDemoFixture: boolean;
}

export interface AttemptScoreSummary {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  annulledCount: number;
  pendingKeyCount?: number;
  gradedCount?: number;
  accuracyPercent: number;
  bySubject: Array<{
    subject: SubjectName;
    total: number;
    answered: number;
    correct: number;
    pendingKeyCount?: number;
    accuracyPercent: number;
  }>;
}

export interface QuestionAnswerRecord {
  id: string;
  questionId: string;
  subject: SubjectName;
  topic: string;
  subtopic?: string;
  year: number;
  examId: string;
  selectedLetter: AlternativeLetter;
  isCorrect: boolean;
  wasAnnulled: boolean;
  hasOfficialKey?: boolean;
  evaluationBasis?:
    | 'official_definitive'
    | 'official_preliminary'
    | 'verified_independent'
    | 'annulled'
    | 'pending';
  missingConcept?: string;
  questionType?: string;
  resolutionConsulted?: boolean;
  timeSpentMs: number;
  answeredAt: string;
  source: 'bank' | 'simulado';
  attemptId?: string;
  isDemoFixture: boolean;
}

export interface UserQuestionFlags {
  questionId: string;
  isFavorite: boolean;
  isFlaggedForReview: boolean;
  updatedAt: string;
}

export type PenTool = 'pen' | 'highlighter' | 'eraser';

export type EraserMode = 'stroke' | 'precision';

export interface PenPoint {
  x: number;
  y: number;
  pressure: number;
  tiltX?: number;
  tiltY?: number;
}

export type SmartShapeKind =
  | 'text_highlight'
  | 'line'
  | 'circle'
  | 'ellipse'
  | 'rectangle'
  | 'square'
  | 'triangle'
  | 'arrow';

export interface SmartHighlightRect {
  anchorBlockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  textSnippet?: string;
}

export interface SmartShapeGeometry {
  kind: SmartShapeKind;
  points?: PenPoint[];
  highlightRects?: SmartHighlightRect[];
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
  arrowHeadLeft?: { x: number; y: number };
  arrowHeadRight?: { x: number; y: number };
  confidence: number;
}

export interface PenStroke {
  id: string;
  tool: PenTool;
  color: string;
  baseWidth: number;
  opacity: number;
  points: PenPoint[];
  rawPoints?: PenPoint[];
  smartShape?: SmartShapeGeometry;
  anchorBlockId?: string;
  anchorWidth?: number;
  anchorHeight?: number;
  eraserMode?: EraserMode;
}

export interface ScratchpadDocument {
  id: string;
  scope: 'question' | 'question-overlay' | 'exam' | 'essay';
  targetId: string; // questionId, attemptId, or essayPageId
  title: string;
  strokes: PenStroke[];
  pageWidth: number;
  pageHeight: number;
  lined?: boolean;
  updatedAt: string;
}

export interface StudyNotebook {
  id: string;
  title: string;
  description: string;
  questionIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface QuestionFilters {
  subject: SubjectName | 'Todas';
  foreignLanguage?: ForeignLanguageOption | 'Todas';
  topic: string | 'Todos';
  subtopic: string | 'Todos';
  yearFrom: number | null;
  yearTo: number | null;
  edition: string | 'Todas';
  modality: ExamModality | 'Todas';
  examId: string | 'Todas';
  difficulty: DifficultyLevel | 'Todas';
  status: 'Todas' | 'Resolvidas' | 'Não resolvidas' | 'Erradas' | 'Favoritas' | 'Para revisar';
  onlyWithImages: boolean;
  keyword: string;
}

export interface ImportPackageQuestion {
  id?: string;
  originalNumber: number;
  originalCode?: string;
  foreignLanguage?: ForeignLanguageOption;
  subject: SubjectName;
  subSubjectGroup?: string;
  topic: string;
  subtopic?: string;
  difficulty?: DifficultyLevel;
  sharedTextIds?: string[];
  stem: string;
  tableHtml?: string;
  graphics?: GraphicResource[];
  alternatives: Alternative[];
  correctLetter?: AlternativeLetter | null;
  annulled?: boolean;
  acceptedLetters?: AlternativeLetter[];
  specialRuleNote?: string;
  verifiedExplanation?: string;
  editorialNote?: string;
  keywords?: string[];
  pageNumber?: number;
}

export interface ImportPackageSchema {
  schemaVersion: '1.0';
  exam: {
    id: string;
    name: string;
    shortName?: string;
    year: number;
    edition: string;
    modality: ExamModality;
    totalQuestions: number;
    officialDurationSeconds: number;
    hasEssay: boolean;
    subjectBreakdown: SubjectRule[];
    rulesSummary?: string[];
    scoringRulesNote?: string;
    essayPrompt?: EssayPrompt;
  };
  provenance: SourceProvenance;
  sharedTexts?: SharedText[];
  questions: ImportPackageQuestion[];
}

export interface OfficialAnswerKeyEntry {
  questionId?: string;
  originalNumber?: number;
  foreignLanguage?: ForeignLanguageOption;
  correctLetter: AlternativeLetter | null;
  annulled?: boolean;
  acceptedLetters?: AlternativeLetter[];
  specialRuleNote?: string;
  verifiedExplanation?: string;
}

export interface OfficialAnswerKeyPackage {
  schemaVersion: '1.0';
  examId: string;
  sourceDocumentName: string;
  isOfficialDefinitive?: boolean;
  entries: OfficialAnswerKeyEntry[];
}

export interface ValidationIssue {
  severity: 'error' | 'warning';
  code: string;
  message: string;
  questionNumber?: number;
  questionId?: string;
}

export interface ValidationReport {
  validForRealSimulation: boolean;
  canImportWithWarnings: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  duplicates: Array<{
    incomingNumber: number;
    existingQuestionId: string;
    reason: 'id_match' | 'stem_match';
  }>;
  incompleteQuestions: Array<{
    questionNumber: number;
    missingFields: string[];
  }>;
  summary: {
    examId: string;
    examName: string;
    expectedQuestions: number;
    parsedQuestions: number;
    sharedTextsCount: number;
    graphicsCount: number;
    annulledCount: number;
    willUpdateExistingExam: boolean;
  };
}

export type ResolutionVerificationStatus =
  | 'official_definitive'
  | 'official_preliminary'
  | 'verified_independent'
  | 'pending_verification'
  | 'annulled_official'
  | 'divergence_detected';

export type OfficialAnswerSourceStatus =
  | 'verified_official'
  | 'annulled_official'
  | 'preliminary_reported'
  | 'unavailable';

export interface AlternativeAnalysisItem {
  letter: AlternativeLetter;
  status: 'correta' | 'incorreta' | 'contestada' | 'anulada' | 'pendente' | 'incerta';
  explanation: string;
  errorDiagnosis?: string;
}

export interface MaceteInfo {
  title: string;
  strategy: string;
  whenToUse?: string;
  caution?: string;
  isConventionalBest?: boolean;
}

export interface LegacyQuestionResolution {
  questionId: string;
  examId: string;
  subject: SubjectName;
  topic: string;
  subtopic?: string;
  questionType: string;
  methodTitle: string;
  questionInterpretation: string;
  stepByStepSolution: string[];
  proposedAnswer: AlternativeLetter | null;
  officialAnswer: AlternativeLetter | null;
  officialAnswerSource?: string;
  officialAnswerStatus: OfficialAnswerSourceStatus;
  shortcutMethod: string;
  shortcutApplicability: string;
  shortcutLimitations: string;
  universalMethod: string;
  universalVariationNote?: string;
  alternativeAnalysis: AlternativeAnalysisItem[];
  commonTraps: string[];
  essentialKnowledge: string[];
  transferExercise: {
    prompt: string;
    hint?: string;
    expectedAnswer: string;
    justification: string;
    solutionSummary: string;
  };
  relatedQuestionIds?: string[];
  verificationStatus:
    | 'verified_official'
    | 'proposed_pending_official'
    | 'divergence_detected'
    | 'annulled_official';
  verificationNotes: string;
  reviewedAt: string;
  contentVersion: number;
}

export interface QuestionResolution {
  questionId: string;
  examId: string;
  subject: SubjectName;
  subSubjectGroup?: string;
  topic: string;
  subtopic?: string;
  questionType: string;
  methodTitle: string;
  decisiveConcept: string;
  quickSolution: string;
  stepByStep?: string[] | string;
  macete: MaceteInfo;
  alternativeAnalysis: AlternativeAnalysisItem[];
  proposedAnswer: AlternativeLetter | null;
  officialAnswer: AlternativeLetter | null;
  officialAnswerSource?: string;
  officialAnswerStatus: OfficialAnswerSourceStatus;
  verificationStatus: ResolutionVerificationStatus;
  verificationNotes: string;
  relatedQuestionIds?: string[];
  reviewedAt: string;
  contentVersion: number;
}

export interface TransferAttemptRecord {
  questionId: string;
  userAnswer: string;
  revealed: boolean;
  selfEvaluatedCorrect?: boolean;
  updatedAt: string;
}

export interface ResolutionCoverageSummary {
  totalQuestions: number;
  resolvedCount: number;
  officialDefinitiveCount: number;
  officialPreliminaryCount: number;
  verifiedIndependentCount: number;
  pendingVerificationCount: number;
  divergenceCount: number;
  annulledCount: number;
  macetesCount: number;
  distinctMethodsCount: number;
  methodsList: Array<{
    questionType: string;
    methodTitle: string;
    subject: SubjectName;
    questionCount: number;
  }>;
  bySubject: Array<{
    subject: SubjectName;
    total: number;
    resolved: number;
    officialDefinitive: number;
    officialPreliminary: number;
    verifiedIndependent: number;
    divergences: number;
    annulled: number;
    pending: number;
  }>;
  byEdition: Array<{
    examId: string;
    edition: string;
    year: number;
    total: number;
    resolved: number;
    officialDefinitive: number;
    officialPreliminary: number;
    verifiedIndependent: number;
    divergences: number;
    annulled: number;
    pending: number;
  }>;
}


