import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  OFFICIAL_UFRR_EXAMS,
  OFFICIAL_UFRR_QUESTIONS,
  OFFICIAL_UFRR_SHARED_TEXTS,
} from './data';
import { getQuestionsForAttempt, hasQuestionAnswerKey } from './engine';
import { validateImportPackage } from './import-validator';
import type { ForeignLanguageOption, ImportPackageSchema, SubjectName } from './types';

const CORE_SUBJECTS: SubjectName[] = [
  'Língua Portuguesa',
  'Matemática',
  'Biologia',
  'Física',
  'Geografia',
  'História',
  'Química',
];

const LANGUAGES: ForeignLanguageOption[] = ['Espanhol', 'Inglês', 'Francês'];

test('official UFRR dataset contains all 5 Prova Integral editions (2022–2026) and 450 unique questions', () => {
  assert.equal(OFFICIAL_UFRR_EXAMS.length, 5);
  assert.deepEqual(
    OFFICIAL_UFRR_EXAMS.map((e) => e.year),
    [2026, 2025, 2024, 2023, 2022]
  );
  assert.equal(OFFICIAL_UFRR_QUESTIONS.length, 450);

  const qIds = new Set(OFFICIAL_UFRR_QUESTIONS.map((q) => q.id));
  assert.equal(qIds.size, 450);

  const stIds = new Set(OFFICIAL_UFRR_SHARED_TEXTS.map((st) => st.id));
  assert.equal(stIds.size, OFFICIAL_UFRR_SHARED_TEXTS.length);
});

test('every UFRR edition has 63 core + 27 language questions, 72-question sittings, and 2 essay themes', () => {
  for (const exam of OFFICIAL_UFRR_EXAMS) {
    assert.equal(exam.importStatus, 'validated');
    assert.equal(exam.answerKeyStatus, 'pending_gabarito');
    assert.equal(exam.isDemoFixture, false);
    assert.equal(exam.totalQuestions, 72);
    assert.equal(exam.officialDurationSeconds, 18000);
    assert.equal(exam.hasEssay, true);
    assert.equal(exam.essayPrompt?.themes?.length, 2);

    const examQs = OFFICIAL_UFRR_QUESTIONS.filter((q) => q.examId === exam.id);
    assert.equal(examQs.length, 90, `${exam.id} must have 90 stored questions`);
    assert.equal(exam.questionIds.length, 90);

    for (const subj of CORE_SUBJECTS) {
      const count = examQs.filter((q) => q.classification.subject === subj).length;
      assert.equal(count, 9, `${exam.id} ${subj} expected 9 questions`);
    }

    for (const lang of LANGUAGES) {
      const langCount = examQs.filter(
        (q) =>
          q.classification.subject === 'Língua Estrangeira' &&
          q.foreignLanguage === lang
      ).length;
      assert.equal(langCount, 9, `${exam.id} ${lang} expected 9 questions`);

      const sitting = getQuestionsForAttempt(OFFICIAL_UFRR_QUESTIONS, exam.id, lang);
      assert.equal(sitting.length, 72);
      assert.deepEqual(
        sitting.map((q) => q.originalNumber),
        Array.from({ length: 72 }, (_, idx) => idx + 1)
      );
    }
  }
});

test('all 450 questions pass integrity, asset, SVG, shared-text, and non-fabricated key checks', () => {
  const sharedTextIds = new Set(OFFICIAL_UFRR_SHARED_TEXTS.map((st) => st.id));
  const publicDir = path.resolve(process.cwd(), 'public');

  for (const q of OFFICIAL_UFRR_QUESTIONS) {
    assert.ok(q.stem.trim().length >= 8, `${q.id} stem too short`);
    assert.equal(q.provenance.isDemoFixture, false);
    assert.equal(hasQuestionAnswerKey(q.answerKey), false, `${q.id} must not have fabricated key`);
    assert.equal(q.answerKey.correctLetter, null);

    // Alternatives check (Q02 2024 has official A–F; all others A–E)
    const expectedLetters =
      q.id === 'ufrr-2024-q02' ? ['A', 'B', 'C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D', 'E'];
    assert.deepEqual(
      q.alternatives.map((a) => a.letter),
      expectedLetters,
      `${q.id} alternative letters mismatch`
    );

    const graphicIds = new Set(q.graphics.map((g) => g.id));
    for (const alt of q.alternatives) {
      assert.ok(
        alt.text.trim().length > 0 || (alt.graphicId && graphicIds.has(alt.graphicId)),
        `${q.id} alt ${alt.letter} empty without valid graphicId`
      );
    }

    for (const stId of q.sharedTextIds) {
      assert.ok(sharedTextIds.has(stId), `${q.id} broken sharedTextId ${stId}`);
    }

    for (const g of q.graphics) {
      assert.ok(g.altText.trim().length > 0, `${q.id} graphic ${g.id} missing altText`);
      if (g.type === 'svg') {
        assert.ok(g.svgContent?.includes('<svg'), `${q.id} graphic ${g.id} invalid svg`);
      } else {
        assert.ok(g.imageUrl?.startsWith('/exam-assets/'), `${q.id} graphic ${g.id} unexpected imageUrl`);
        const filePath = path.join(publicDir, (g.imageUrl ?? '').replace(/^\//, ''));
        assert.ok(fs.existsSync(filePath), `Missing image asset on disk: ${filePath}`);
      }
    }
  }
});

test('all 5 editions pass validateImportPackage with 0 structural errors', () => {
  for (const exam of OFFICIAL_UFRR_EXAMS) {
    const examQs = OFFICIAL_UFRR_QUESTIONS.filter((q) => q.examId === exam.id);
    const examSts = OFFICIAL_UFRR_SHARED_TEXTS.filter((st) => st.examId === exam.id);

    const pkg: ImportPackageSchema = {
      schemaVersion: '1.0',
      exam: {
        id: exam.id,
        name: exam.name,
        shortName: exam.shortName,
        year: exam.year,
        edition: exam.edition,
        modality: exam.modality,
        totalQuestions: exam.totalQuestions,
        officialDurationSeconds: exam.officialDurationSeconds,
        hasEssay: exam.hasEssay,
        subjectBreakdown: exam.subjectBreakdown,
      },
      provenance: {
        institution: 'UFRR / CPV',
        documentName: exam.sourceDocumentName ?? `${exam.id}.pdf`,
        isDemoFixture: false,
      },
      sharedTexts: examSts,
      questions: examQs.map((q) => ({
        id: q.id,
        originalNumber: q.originalNumber,
        originalCode: q.originalCode,
        foreignLanguage: q.foreignLanguage,
        subject: q.classification.subject,
        subSubjectGroup: q.classification.subSubjectGroup,
        topic: q.classification.topic,
        subtopic: q.classification.subtopic,
        difficulty: q.difficulty,
        sharedTextIds: q.sharedTextIds,
        stem: q.stem,
        tableHtml: q.tableHtml,
        graphics: q.graphics,
        alternatives: q.alternatives,
        correctLetter: q.answerKey.correctLetter,
        editorialNote: q.editorialNote,
        pageNumber: q.provenance.pageNumber,
      })),
    };

    const report = validateImportPackage(pkg, [], []);
    assert.equal(report.errors.length, 0, `${exam.id} had errors: ${JSON.stringify(report.errors)}`);
    assert.equal(report.canImportWithWarnings, true);
    assert.equal(report.summary.parsedQuestions, 90);
    assert.ok(
      report.warnings.every((w) => w.code === 'MISSING_ANSWER_KEY'),
      `${exam.id} unexpected warnings: ${JSON.stringify(report.warnings.filter((w) => w.code !== 'MISSING_ANSWER_KEY'))}`
    );
  }
});
