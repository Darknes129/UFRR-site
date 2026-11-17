import type { QuestionResolution } from '../types';
import { adaptLegacyResolution } from './legacy-adapter';

import { UFRR_2026_PORTUGUES_RESOLUTIONS } from './ufrr-2026-portugues';
import { UFRR_2026_MATEMATICA_RESOLUTIONS } from './ufrr-2026-matematica';
import { UFRR_2026_BIOLOGIA_RESOLUTIONS } from './ufrr-2026-biologia';
import { UFRR_2026_FISICA_RESOLUTIONS } from './ufrr-2026-fisica';
import { UFRR_2026_HUMANAS_QUIMICA_RESOLUTIONS } from './ufrr-2026-humanas-quimica';
import { UFRR_2026_IDIOMAS_RESOLUTIONS } from './ufrr-2026-idiomas';

import { UFRR_2025_LINGUAGENS_EXATAS_RESOLUTIONS } from './ufrr-2025-linguagens-exatas';
import { UFRR_2025_BIO_FIS_RESOLUTIONS } from './ufrr-2025-bio-fis';
import { UFRR_2025_GEO_HIS_RESOLUTIONS } from './ufrr-2025-geo-his';
import { UFRR_2025_QUIMICA_RESOLUTIONS } from './ufrr-2025-quimica';
import { UFRR_2025_IDIOMAS_RESOLUTIONS } from './ufrr-2025-idiomas';

import { UFRR_2024_LINGUAGENS_EXATAS_RESOLUTIONS } from './ufrr-2024-linguagens-exatas';
import { UFRR_2024_BIO_FIS_RESOLUTIONS } from './ufrr-2024-bio-fis';
import { UFRR_2024_GEO_HIS_RESOLUTIONS } from './ufrr-2024-geo-his';
import { UFRR_2024_QUIMICA_RESOLUTIONS } from './ufrr-2024-quimica';
import { UFRR_2024_IDIOMAS_RESOLUTIONS } from './ufrr-2024-idiomas';

import { UFRR_2023_LINGUAGENS_EXATAS_RESOLUTIONS } from './ufrr-2023-linguagens-exatas';
import { UFRR_2023_BIO_FIS_RESOLUTIONS } from './ufrr-2023-bio-fis';
import { UFRR_2023_GEO_HIS_RESOLUTIONS } from './ufrr-2023-geo-his';
import { UFRR_2023_QUIMICA_RESOLUTIONS } from './ufrr-2023-quimica';
import { UFRR_2023_IDIOMAS_RESOLUTIONS } from './ufrr-2023-idiomas';

import { UFRR_2022_LINGUAGENS_EXATAS_RESOLUTIONS } from './ufrr-2022-linguagens-exatas';
import { UFRR_2022_BIO_FIS_RESOLUTIONS } from './ufrr-2022-bio-fis';
import { UFRR_2022_GEO_HIS_RESOLUTIONS } from './ufrr-2022-geo-his';
import { UFRR_2022_QUIMICA_RESOLUTIONS } from './ufrr-2022-quimica';
import { UFRR_2022_IDIOMAS_RESOLUTIONS } from './ufrr-2022-idiomas';

export * from './engine';

export const OFFICIAL_QUESTION_RESOLUTIONS: QuestionResolution[] = [
  ...UFRR_2026_PORTUGUES_RESOLUTIONS.map(adaptLegacyResolution),
  ...UFRR_2026_MATEMATICA_RESOLUTIONS.map(adaptLegacyResolution),
  ...UFRR_2026_BIOLOGIA_RESOLUTIONS.map(adaptLegacyResolution),
  ...UFRR_2026_FISICA_RESOLUTIONS.map(adaptLegacyResolution),
  ...UFRR_2026_HUMANAS_QUIMICA_RESOLUTIONS,
  ...UFRR_2026_IDIOMAS_RESOLUTIONS,

  ...UFRR_2025_LINGUAGENS_EXATAS_RESOLUTIONS,
  ...UFRR_2025_BIO_FIS_RESOLUTIONS,
  ...UFRR_2025_GEO_HIS_RESOLUTIONS,
  ...UFRR_2025_QUIMICA_RESOLUTIONS,
  ...UFRR_2025_IDIOMAS_RESOLUTIONS,

  ...UFRR_2024_LINGUAGENS_EXATAS_RESOLUTIONS,
  ...UFRR_2024_BIO_FIS_RESOLUTIONS,
  ...UFRR_2024_GEO_HIS_RESOLUTIONS,
  ...UFRR_2024_QUIMICA_RESOLUTIONS,
  ...UFRR_2024_IDIOMAS_RESOLUTIONS,

  ...UFRR_2023_LINGUAGENS_EXATAS_RESOLUTIONS,
  ...UFRR_2023_BIO_FIS_RESOLUTIONS,
  ...UFRR_2023_GEO_HIS_RESOLUTIONS,
  ...UFRR_2023_QUIMICA_RESOLUTIONS,
  ...UFRR_2023_IDIOMAS_RESOLUTIONS,

  ...UFRR_2022_LINGUAGENS_EXATAS_RESOLUTIONS,
  ...UFRR_2022_BIO_FIS_RESOLUTIONS,
  ...UFRR_2022_GEO_HIS_RESOLUTIONS,
  ...UFRR_2022_QUIMICA_RESOLUTIONS,
  ...UFRR_2022_IDIOMAS_RESOLUTIONS,
];

export const RESOLUTIONS_BY_QUESTION_ID: Record<string, QuestionResolution> =
  Object.fromEntries(
    OFFICIAL_QUESTION_RESOLUTIONS.map((res) => [res.questionId, res])
  );

export function getResolutionForQuestion(
  questionId: string
): QuestionResolution | null {
  return RESOLUTIONS_BY_QUESTION_ID[questionId] ?? null;
}
