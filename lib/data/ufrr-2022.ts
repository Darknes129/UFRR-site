import type { ExamEdition, Question } from '../types';
import { UFRR_2022_CORE_A } from './ufrr-2022-core-a';
import { UFRR_2022_CORE_B } from './ufrr-2022-core-b';
import { UFRR_2022_LANGS } from './ufrr-2022-langs';
import {
  DOC_NAME_2022,
  ESSAY_PROMPT_2022,
  EXAM_ID_2022,
  EXAM_NAME_2022,
  UFRR_2022_SHARED_TEXTS,
} from './ufrr-2022-texts';

export { ESSAY_PROMPT_2022, UFRR_2022_SHARED_TEXTS };

export const UFRR_2022_QUESTIONS: Question[] = [
  ...UFRR_2022_CORE_A,
  ...UFRR_2022_CORE_B,
  ...UFRR_2022_LANGS,
];

export const UFRR_2022_EXAM: ExamEdition = {
  id: EXAM_ID_2022,
  name: EXAM_NAME_2022,
  shortName: 'UFRR 2022 Integral',
  year: 2022,
  edition: 'UFRR 2022',
  modality: 'Prova Integral',
  totalQuestions: 72,
  officialDurationSeconds: 5 * 3600,
  alternativesPerQuestion: 5,
  subjectBreakdown: [
    { subject: 'Língua Portuguesa', questionCount: 9 },
    { subject: 'Matemática', questionCount: 9 },
    { subject: 'Biologia', questionCount: 9 },
    { subject: 'Física', questionCount: 9 },
    { subject: 'Geografia', questionCount: 9 },
    { subject: 'História', questionCount: 9 },
    { subject: 'Química', questionCount: 9 },
    { subject: 'Língua Estrangeira', questionCount: 9 },
  ],
  hasEssay: true,
  essayPrompt: ESSAY_PROMPT_2022,
  importStatus: 'validated',
  answerKeyStatus: 'pending_gabarito',
  sourceDocumentName: DOC_NAME_2022,
  isDemoFixture: false,
  rulesSummary: [
    '72 questões objetivas (A–E) distribuídas em 8 disciplinas — sendo Q64 a Q72 selecionadas conforme idioma escolhido (Espanhol, Inglês ou Francês).',
    'Duração oficial de 5 horas incluindo Redação (Tema I ou Tema II, máx. 25 linhas).',
    'Gabarito oficial pendente de vinculação: respostas e tempos ficam salvos para recálculo automático futuro.',
  ],
  scoringRulesNote:
    'Edição UFRR 2022 importada fielmente do caderno oficial, incluindo tabelas estruturadas (Q19, Q27, Q32), gráficos vetoriais nas alternativas de Física (Q35 A–E), curva de solubilidade (Q60) e estruturas orgânicas (Q61–Q63).',
  questionIds: UFRR_2022_QUESTIONS.map((q) => q.id),
};
