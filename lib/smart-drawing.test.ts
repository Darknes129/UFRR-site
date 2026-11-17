import test from 'node:test';
import assert from 'node:assert/strict';
import {
  adjustSnappedShapeWithPointer,
  fitSafeStraightHighlight,
  matchHighlighterStrokeToTextLines,
  recognizePenShape,
  type CanvasPoint2D,
  type TextWordBox,
} from './smart-drawing';
import {
  findHitStrokeIds,
  renderLayeredAnnotationsOnContexts,
  type BlockRect,
} from './annotation-engine';
import type { PenStroke } from './types';

const ROOT_BLOCK: BlockRect = {
  id: 'question-root',
  left: 0,
  top: 0,
  width: 800,
  height: 1000,
};

const STEM_BLOCK: BlockRect = {
  id: 'stem-p-0',
  left: 40,
  top: 120,
  width: 720,
  height: 220,
};

const BLOCK_MAP = new Map<string, BlockRect>([
  ['question-root', ROOT_BLOCK],
  ['stem-p-0', STEM_BLOCK],
]);

function makeWord(
  text: string,
  left: number,
  top: number,
  width: number,
  height = 20,
  anchorBlockId = 'stem-p-0'
): TextWordBox {
  return {
    text,
    left,
    top,
    right: left + width,
    bottom: top + height,
    width,
    height,
    anchorBlockId,
  };
}

test('Smart Highlighter snaps wavy single-line swipe to exact touched words without bleeding to adjacent lines', () => {
  const words: TextWordBox[] = [
    // Line 1 (y: 130..150)
    makeWord('O', 50, 130, 14),
    makeWord('processo', 70, 130, 72),
    makeWord('de', 148, 130, 20),
    makeWord('diferenciação', 174, 130, 108),
    makeWord('celular', 288, 130, 56),
    makeWord('ocorre', 350, 130, 52),
    // Line 2 (y: 168..188) — untouched
    makeWord('apenas', 50, 168, 56),
    makeWord('em', 112, 168, 22),
    makeWord('tecidos', 140, 168, 60),
  ];

  // Wavy swipe covering "processo de diferenciação"
  const rawPts: CanvasPoint2D[] = [
    { x: 74, y: 145, pressure: 0.2 },
    { x: 118, y: 135, pressure: 0.25 },
    { x: 158, y: 144, pressure: 0.22 },
    { x: 215, y: 136, pressure: 0.21 },
    { x: 274, y: 142, pressure: 0.2 },
  ];

  const result = matchHighlighterStrokeToTextLines(
    rawPts,
    words,
    BLOCK_MAP,
    ROOT_BLOCK,
    13.5,
    STEM_BLOCK
  );

  assert.ok(result);
  assert.equal(result.smartShape.kind, 'text_highlight');
  assert.equal(result.smartShape.highlightRects?.length, 1);

  const rect = result.smartShape.highlightRects![0];
  assert.equal(rect.anchorBlockId, 'stem-p-0');
  assert.equal(rect.textSnippet, 'processo de diferenciação');

  // Verify X bounds match "processo" (70) .. "diferenciação" (282) tightly and skip "O" and "celular"
  const absLeft = STEM_BLOCK.left + rect.x * STEM_BLOCK.width;
  const absRight = absLeft + rect.width * STEM_BLOCK.width;
  assert.ok(absLeft >= 65 && absLeft <= 72);
  assert.ok(absRight >= 280 && absRight <= 290);
});

test('Smart Highlighter splits multi-line highlights into separate aligned line segments (no giant box)', () => {
  const words: TextWordBox[] = [
    // Line 1 (y: 130..150)
    makeWord('Minha', 50, 130, 50),
    makeWord('terra', 106, 130, 42),
    makeWord('tem', 154, 130, 34),
    makeWord('palmeiras,', 194, 130, 86),
    // Line 2 (y: 162..182)
    makeWord('Onde', 50, 162, 46),
    makeWord('canta', 102, 162, 46),
    makeWord('o', 154, 162, 12),
    makeWord('Sabiá;', 172, 162, 54),
    // Line 3 (y: 194..214)
    makeWord('As', 50, 194, 24),
    makeWord('aves,', 80, 194, 42),
    makeWord('que', 128, 194, 30),
    makeWord('aqui', 164, 194, 38),
  ];

  // User drags across line 1 -> drops down to line 2 -> drops to line 3
  const rawPts: CanvasPoint2D[] = [
    { x: 108, y: 141, pressure: 0.3 },
    { x: 270, y: 139, pressure: 0.3 },
    { x: 230, y: 172, pressure: 0.3 },
    { x: 54, y: 173, pressure: 0.3 },
    { x: 84, y: 204, pressure: 0.3 },
    { x: 196, y: 204, pressure: 0.3 },
  ];

  const result = matchHighlighterStrokeToTextLines(
    rawPts,
    words,
    BLOCK_MAP,
    ROOT_BLOCK,
    13.5,
    STEM_BLOCK
  );

  assert.ok(result);
  assert.equal(result.smartShape.kind, 'text_highlight');
  assert.equal(result.smartShape.highlightRects?.length, 3);

  const rects = result.smartShape.highlightRects!;
  const heights = rects.map((r) => r.height * STEM_BLOCK.height);
  for (const h of heights) {
    assert.ok(h <= 22, `Expected single-line capsule height <= 22, got ${h}`);
  }
  assert.ok(rects[0].textSnippet?.includes('terra'));
  assert.ok(rects[1].textSnippet?.includes('Sabiá;'));
  assert.ok(rects[2].textSnippet?.includes('aqui'));
});

test('Smart Highlighter over non-textual figures aligns straight lines safely and preserves scribbles', () => {
  const straightPts: CanvasPoint2D[] = [
    { x: 100, y: 400, pressure: 0.4 },
    { x: 180, y: 404, pressure: 0.4 },
    { x: 260, y: 401, pressure: 0.4 },
    { x: 340, y: 405, pressure: 0.4 },
  ];
  const straightResult = fitSafeStraightHighlight(straightPts, ROOT_BLOCK);
  assert.ok(straightResult);
  assert.equal(straightResult.smartShape.kind, 'line');
  // Horizontal snap: both Y coordinates equal
  assert.equal(
    straightResult.smartShape.points![0].y,
    straightResult.smartShape.points![1].y
  );

  const scribblePts: CanvasPoint2D[] = [
    { x: 100, y: 400, pressure: 0.4 },
    { x: 130, y: 370, pressure: 0.4 },
    { x: 150, y: 430, pressure: 0.4 },
    { x: 180, y: 365, pressure: 0.4 },
    { x: 115, y: 410, pressure: 0.4 },
  ];
  assert.equal(fitSafeStraightHighlight(scribblePts, ROOT_BLOCK), null);
});

test('Smart Pen recognizes straight lines, arrows, circles, ellipses, squares, rectangles, and triangles', () => {
  // 1. Line (slightly tilted ~3 deg -> snaps horizontal)
  const linePts: CanvasPoint2D[] = [];
  for (let i = 0; i <= 12; i++) {
    linePts.push({ x: 100 + i * 20, y: 200 + Math.sin(i) * 2, pressure: 0.5 });
  }
  const lineRes = recognizePenShape(linePts, ROOT_BLOCK);
  assert.equal(lineRes?.smartShape.kind, 'line');

  // 2. Circle
  const circlePts: CanvasPoint2D[] = [];
  for (let i = 0; i <= 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    circlePts.push({
      x: 300 + 55 * Math.cos(a) + Math.sin(a * 3) * 1.5,
      y: 300 + 54 * Math.sin(a),
      pressure: 0.5,
    });
  }
  const circleRes = recognizePenShape(circlePts, ROOT_BLOCK);
  assert.equal(circleRes?.smartShape.kind, 'circle');
  assert.ok(
    Math.abs(
      circleRes!.smartShape.rx! * ROOT_BLOCK.width -
        circleRes!.smartShape.ry! * ROOT_BLOCK.height
    ) < 1e-6
  );

  // 3. Ellipse
  const ellipsePts: CanvasPoint2D[] = [];
  for (let i = 0; i <= 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    ellipsePts.push({
      x: 400 + 90 * Math.cos(a),
      y: 350 + 40 * Math.sin(a),
      pressure: 0.5,
    });
  }
  const ellipseRes = recognizePenShape(ellipsePts, ROOT_BLOCK);
  assert.equal(ellipseRes?.smartShape.kind, 'ellipse');

  // 4. Square
  const squarePts: CanvasPoint2D[] = [
    { x: 100, y: 100, pressure: 0.5 },
    { x: 150, y: 101, pressure: 0.5 },
    { x: 200, y: 100, pressure: 0.5 },
    { x: 201, y: 150, pressure: 0.5 },
    { x: 200, y: 200, pressure: 0.5 },
    { x: 150, y: 199, pressure: 0.5 },
    { x: 100, y: 200, pressure: 0.5 },
    { x: 99, y: 150, pressure: 0.5 },
    { x: 101, y: 102, pressure: 0.5 },
  ];
  const squareRes = recognizePenShape(squarePts, ROOT_BLOCK);
  assert.equal(squareRes?.smartShape.kind, 'square');

  // 5. Rectangle
  const rectPts: CanvasPoint2D[] = [
    { x: 100, y: 100, pressure: 0.5 },
    { x: 220, y: 101, pressure: 0.5 },
    { x: 340, y: 100, pressure: 0.5 },
    { x: 341, y: 160, pressure: 0.5 },
    { x: 340, y: 210, pressure: 0.5 },
    { x: 220, y: 209, pressure: 0.5 },
    { x: 100, y: 210, pressure: 0.5 },
    { x: 99, y: 160, pressure: 0.5 },
    { x: 101, y: 102, pressure: 0.5 },
  ];
  const rectRes = recognizePenShape(rectPts, ROOT_BLOCK);
  assert.equal(rectRes?.smartShape.kind, 'rectangle');

  // 6. Triangle
  const triPts: CanvasPoint2D[] = [
    { x: 200, y: 100, pressure: 0.5 },
    { x: 245, y: 170, pressure: 0.5 },
    { x: 290, y: 240, pressure: 0.5 },
    { x: 200, y: 241, pressure: 0.5 },
    { x: 110, y: 240, pressure: 0.5 },
    { x: 155, y: 170, pressure: 0.5 },
    { x: 201, y: 102, pressure: 0.5 },
  ];
  const triRes = recognizePenShape(triPts, ROOT_BLOCK);
  assert.equal(triRes?.smartShape.kind, 'triangle');

  // 7. Arrow (shaft + folded chevron tip)
  const arrowPts: CanvasPoint2D[] = [
    { x: 100, y: 300, pressure: 0.5 },
    { x: 160, y: 300, pressure: 0.5 },
    { x: 220, y: 300, pressure: 0.5 },
    { x: 280, y: 300, pressure: 0.5 }, // tip
    { x: 262, y: 286, pressure: 0.5 },
    { x: 280, y: 300, pressure: 0.5 },
    { x: 262, y: 314, pressure: 0.5 },
  ];
  const arrowRes = recognizePenShape(arrowPts, ROOT_BLOCK);
  assert.equal(arrowRes?.smartShape.kind, 'arrow');
  assert.ok(arrowRes?.smartShape.arrowHeadLeft);
  assert.ok(arrowRes?.smartShape.arrowHeadRight);
});

test('Smart Pen strictly avoids false positives on handwriting, small digits, and cursive loops', () => {
  // Small handwritten digit "2" (~18x22px)
  const smallDigit: CanvasPoint2D[] = [
    { x: 100, y: 100, pressure: 0.5 },
    { x: 110, y: 95, pressure: 0.5 },
    { x: 118, y: 103, pressure: 0.5 },
    { x: 101, y: 118, pressure: 0.5 },
    { x: 118, y: 118, pressure: 0.5 },
  ];
  assert.equal(recognizePenShape(smallDigit, ROOT_BLOCK), null);

  // Cursive letter "m" / wave
  const cursiveWave: CanvasPoint2D[] = [
    { x: 100, y: 140, pressure: 0.5 },
    { x: 112, y: 115, pressure: 0.5 },
    { x: 124, y: 140, pressure: 0.5 },
    { x: 136, y: 115, pressure: 0.5 },
    { x: 148, y: 140, pressure: 0.5 },
    { x: 160, y: 115, pressure: 0.5 },
    { x: 172, y: 140, pressure: 0.5 },
  ];
  assert.equal(recognizePenShape(cursiveWave, ROOT_BLOCK), null);

  // Handwritten figure-eight "8" (self-intersecting winding near 0 deg)
  const figureEight: CanvasPoint2D[] = [];
  for (let i = 0; i <= 40; i++) {
    const t = (i / 40) * Math.PI * 2;
    figureEight.push({
      x: 200 + 25 * Math.sin(t),
      y: 200 + 40 * Math.sin(t) * Math.cos(t),
      pressure: 0.5,
    });
  }
  assert.equal(recognizePenShape(figureEight, ROOT_BLOCK), null);
});

test('adjustSnappedShapeWithPointer updates line, arrow, and circle geometry cleanly while holding', () => {
  const circleShape = recognizePenShape(
    Array.from({ length: 28 }, (_, i) => {
      const a = (i / 27) * Math.PI * 2;
      return { x: 300 + 40 * Math.cos(a), y: 300 + 40 * Math.sin(a), pressure: 0.5 };
    }),
    ROOT_BLOCK
  )!.smartShape;

  const resized = adjustSnappedShapeWithPointer(circleShape, 380, 300, ROOT_BLOCK);
  assert.ok(resized);
  assert.ok(Math.abs(resized.smartShape.rx! * ROOT_BLOCK.width - 80) < 1);
  assert.ok(
    Math.abs(
      resized.smartShape.rx! * ROOT_BLOCK.width -
        resized.smartShape.ry! * ROOT_BLOCK.height
    ) < 1e-6
  );
});

test('findHitStrokeIds & layered renderer handle multi-line smart text_highlight and smart pen shapes', () => {
  const smartHighlightStroke: PenStroke = {
    id: 'smart-hi-1',
    tool: 'highlighter',
    color: '#F59E0B',
    baseWidth: 4.5,
    opacity: 0.26,
    anchorBlockId: 'stem-p-0',
    points: [{ x: 0.1, y: 0.1, pressure: 0.5 }],
    smartShape: {
      kind: 'text_highlight',
      confidence: 0.94,
      highlightRects: [
        { anchorBlockId: 'stem-p-0', x: 0.05, y: 0.05, width: 0.4, height: 0.08 },
        { anchorBlockId: 'stem-p-0', x: 0.05, y: 0.22, width: 0.35, height: 0.08 },
      ],
    },
  };

  // Hit on second line capsule: left=40+36=76, top=120+48.4=168.4
  assert.deepEqual(
    findHitStrokeIds([smartHighlightStroke], 120, 175, 10, BLOCK_MAP, ROOT_BLOCK),
    ['smart-hi-1']
  );
  // Miss far right
  assert.deepEqual(
    findHitStrokeIds([smartHighlightStroke], 700, 175, 10, BLOCK_MAP, ROOT_BLOCK),
    []
  );

  // Verify smart circle & smart text_highlight render into isolated layers
  const calls: Array<{ layer: string; op: string; alpha: number }> = [];
  const makeMockCtx = (layer: string): CanvasRenderingContext2D => {
    const mock = {
      lineCap: 'butt',
      lineJoin: 'miter',
      lineWidth: 1,
      globalCompositeOperation: 'source-over',
      strokeStyle: '#000',
      fillStyle: '#000',
      globalAlpha: 1,
      save() {},
      restore() {},
      beginPath() {},
      closePath() {},
      moveTo() {},
      lineTo() {},
      quadraticCurveTo() {},
      ellipse() {},
      arc() {},
      fill() {
        calls.push({ layer, op: 'fill', alpha: mock.globalAlpha });
      },
      stroke() {
        calls.push({ layer, op: 'stroke', alpha: mock.globalAlpha });
      },
    };
    return mock as unknown as CanvasRenderingContext2D;
  };

  const smartCircle: PenStroke = {
    id: 'smart-circle-1',
    tool: 'pen',
    color: '#1D4ED8',
    baseWidth: 2.8,
    opacity: 1,
    anchorBlockId: 'stem-p-0',
    points: [{ x: 0.5, y: 0.5, pressure: 0.55 }],
    smartShape: {
      kind: 'circle',
      cx: 0.5,
      cy: 0.5,
      rx: 0.1,
      ry: 0.15,
      confidence: 0.92,
    },
  };

  renderLayeredAnnotationsOnContexts(
    makeMockCtx('hi'),
    makeMockCtx('pen'),
    [smartHighlightStroke, smartCircle],
    BLOCK_MAP,
    ROOT_BLOCK,
    false
  );

  assert.equal(
    calls.filter((c) => c.layer === 'hi' && c.op === 'fill' && c.alpha === 1).length,
    2
  );
  assert.equal(calls.filter((c) => c.layer === 'pen' && c.op === 'stroke').length, 1);
});
