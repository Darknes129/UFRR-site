import type { ExamEdition } from './types';
import { OFFICIAL_UFRR_EXAMS } from './data';

/**
 * Catálogo oficial das provas da UFRR (Prova Integral 2022–2026).
 */
export { OFFICIAL_UFRR_EXAMS };

/**
 * Alias de compatibilidade mantido para módulos e testes existentes.
 */
export const OFFICIAL_UFRR_EXAM_SHELLS: ExamEdition[] = OFFICIAL_UFRR_EXAMS;
