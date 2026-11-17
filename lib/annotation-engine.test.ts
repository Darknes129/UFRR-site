import test from 'node:test';
import assert from 'node:assert/strict';
import {
  classifyHardwareStylusSignal,
  clientToNormalizedPoint,
  computeStrokeSegmentWidth,
  findBlockAtPoint,
  findHitStrokeIds,
  getHighlighterLayerOpacity,
  normalizedToCanvasPoint,
  normalizePressure,
  pushHistorySnapshot,
  redoHistory,
  renderLayeredAnnotationsOnContexts,
  resolveStrokeBlockRect,
  resolveThemeInkColor,
  undoHistory,
  type BlockRect,
  type StrokeHistoryState,
} from './annotation-engine';
import type { PenStroke } from './types';

test('findBlockAtPoint selects the deepest content block or falls back to root', () => {
  const root: BlockRect = { id: 'question-root', left: 0, top: 0, width: 800, height: 1000 };
  const stem: BlockRect = { id: 'stem', left: 20, top: 40, width: 760, height: 220 };
  const altC: BlockRect = { id: 'alt-C', left: 20, top: 460, width: 760, height: 64 };

  assert.equal(findBlockAtPoint(120, 120, [stem, altC], root).id, 'stem');
  assert.equal(findBlockAtPoint(120, 490, [stem, altC], root).id, 'alt-C');
  assert.equal(findBlockAtPoint(5, 5, [stem, altC], root).id, 'question-root');
});

test('block-anchored normalized coordinates stay aligned across scroll, layout shift, and orientation resize', () => {
  // Initial Landscape Layout
  const canvasRect = { left: 100, top: 50, width: 800, height: 900 };
  const altCInitial: BlockRect = { id: 'alt-C', left: 24, top: 400, width: 752, height: 60 };

  // User circles center of Alternative C (clientX = 100 + 24 + 376 = 500, clientY = 50 + 400 + 30 = 480)
  const pt = clientToNormalizedPoint(500, 480, canvasRect, altCInitial, 0.72, 12, -8);
  assert.ok(Math.abs(pt.x - 0.5) < 1e-6);
  assert.ok(Math.abs(pt.y - 0.5) < 1e-6);
  assert.equal(pt.pressure, 0.72);
  assert.equal(pt.tiltX, 12);
  assert.equal(pt.tiltY, -8);

  // Now tablet rotates to Portrait & shared text expands, shifting Alternative C down and narrowing it
  const altCPortrait: BlockRect = { id: 'alt-C', left: 16, top: 680, width: 520, height: 84 };
  const mapped = normalizedToCanvasPoint(pt, altCPortrait);

  // Must remain centered right on Alternative C (16 + 260 = 276, 680 + 42 = 722)
  assert.ok(Math.abs(mapped.x - 276) < 1e-6);
  assert.ok(Math.abs(mapped.y - 722) < 1e-6);
});

test('resolveStrokeBlockRect hides collapsible shared-text annotations while collapsed and falls back for missing non-collapsible blocks', () => {
  const root: BlockRect = { id: 'question-root', left: 0, top: 0, width: 800, height: 900 };
  const stem: BlockRect = { id: 'stem', left: 10, top: 20, width: 780, height: 200 };
  const blockMap = new Map<string, BlockRect>([
    ['question-root', root],
    ['stem', stem],
  ]);

  assert.equal(resolveStrokeBlockRect({ anchorBlockId: 'stem' }, blockMap, root), stem);
  assert.equal(
    resolveStrokeBlockRect({ anchorBlockId: 'shared-text-1' }, blockMap, root),
    null
  );
  assert.equal(
    resolveStrokeBlockRect({ anchorBlockId: 'unknown-block' }, blockMap, root),
    root
  );
});

test('findHitStrokeIds detects pen and highlighter strokes for stroke-eraser without touching non-hit strokes', () => {
  const root: BlockRect = { id: 'question-root', left: 0, top: 0, width: 800, height: 900 };
  const stem: BlockRect = { id: 'stem', left: 0, top: 100, width: 800, height: 200 };
  const blockMap = new Map<string, BlockRect>([
    ['question-root', root],
    ['stem', stem],
  ]);

  const s1: PenStroke = {
    id: 's1',
    tool: 'pen',
    color: '#1D4ED8',
    baseWidth: 3,
    opacity: 1,
    anchorBlockId: 'stem',
    points: [
      { x: 0.1, y: 0.5, pressure: 0.6 }, // (80, 200)
      { x: 0.5, y: 0.5, pressure: 0.6 }, // (400, 200)
    ],
  };

  const s2: PenStroke = {
    id: 's2',
    tool: 'highlighter',
    color: '#F59E0B',
    baseWidth: 4.5,
    opacity: 0.28,
    anchorBlockId: 'stem',
    points: [
      { x: 0.1, y: 0.9, pressure: 0.5 }, // (80, 280)
      { x: 0.5, y: 0.9, pressure: 0.5 }, // (400, 280)
    ],
  };

  // Hit near middle of s1 (240, 204)
  assert.deepEqual(findHitStrokeIds([s1, s2], 240, 204, 10, blockMap, root), ['s1']);

  // Miss both (240, 240)
  assert.deepEqual(findHitStrokeIds([s1, s2], 240, 240, 8, blockMap, root), []);
});

test('undoHistory and redoHistory preserve draw, erase, and clear-all operations cleanly', () => {
  const strokeA: PenStroke = {
    id: 'a',
    tool: 'pen',
    color: '#1D4ED8',
    baseWidth: 2.8,
    opacity: 1,
    points: [{ x: 0.2, y: 0.2, pressure: 0.5 }],
  };
  const strokeB: PenStroke = {
    id: 'b',
    tool: 'highlighter',
    color: '#F59E0B',
    baseWidth: 4.5,
    opacity: 0.28,
    points: [{ x: 0.4, y: 0.4, pressure: 0.5 }],
  };

  let state: StrokeHistoryState = { past: [], present: [], future: [] };
  state = pushHistorySnapshot(state, [strokeA]);
  state = pushHistorySnapshot(state, [strokeA, strokeB]);
  // Clear all
  state = pushHistorySnapshot(state, []);
  assert.equal(state.present.length, 0);

  // Undo clear-all restores both strokes!
  state = undoHistory(state);
  assert.deepEqual(state.present.map((s) => s.id), ['a', 'b']);

  // Undo strokeB
  state = undoHistory(state);
  assert.deepEqual(state.present.map((s) => s.id), ['a']);

  // Redo strokeB
  state = redoHistory(state);
  assert.deepEqual(state.present.map((s) => s.id), ['a', 'b']);
});

test('pressure, tilt, theme ink adaptation, and hardware stylus signal classification work as specified', () => {
  assert.ok(normalizePressure('pen', 0.85, 1) > normalizePressure('pen', 0.15, 1));
  assert.equal(normalizePressure('mouse', 0, 1), 0.55);

  const lightStrokeW = computeStrokeSegmentWidth('pen', 2.8, {
    pressure: 0.15,
    tiltX: 0,
    tiltY: 0,
  });
  const firmStrokeW = computeStrokeSegmentWidth('pen', 2.8, {
    pressure: 0.95,
    tiltX: 25,
    tiltY: 15,
  });
  assert.ok(firmStrokeW > lightStrokeW);

  assert.equal(resolveThemeInkColor('#1E293B', true), '#F1F5F9');
  assert.equal(resolveThemeInkColor('#1D4ED8', true), '#60A5FA');
  assert.equal(resolveThemeInkColor('#F1F5F9', false), '#1E293B');

  assert.equal(
    classifyHardwareStylusSignal(
      { pointerType: 'pen', button: 5, buttons: 32, pressure: 0.5, tiltX: 0, tiltY: 0 },
      true
    ),
    'eraser_tip'
  );
  assert.equal(
    classifyHardwareStylusSignal(
      { pointerType: 'pen', button: 2, buttons: 2, pressure: 0, tiltX: 0, tiltY: 0 },
      true
    ),
    'secondary_barrel_toggle'
  );
  assert.equal(
    classifyHardwareStylusSignal(
      { pointerType: 'pen', button: 2, buttons: 2, pressure: 0, tiltX: 0, tiltY: 0 },
      false
    ),
    'none'
  );
});

test('highlighter width stays single-line and consistent across pressure/tilt variations, and layered renderer isolates highlighter vs pen', () => {
  const thin = computeStrokeSegmentWidth('highlighter', 3.2, { pressure: 0.1, tiltX: 0, tiltY: 0 });
  const medLowP = computeStrokeSegmentWidth('highlighter', 4.5, { pressure: 0.1, tiltX: 0, tiltY: 0 });
  const medHighP = computeStrokeSegmentWidth('highlighter', 4.5, { pressure: 1.0, tiltX: 55, tiltY: 30 });
  const wide = computeStrokeSegmentWidth('highlighter', 6.4, { pressure: 0.8, tiltX: 15, tiltY: 10 });

  assert.equal(medLowP, medHighP);
  assert.ok(thin < medLowP && medLowP < wide);
  assert.ok(medLowP >= 12 && medLowP <= 15);
  assert.ok(wide <= 20);

  const lightOpacity = getHighlighterLayerOpacity(false);
  const darkOpacity = getHighlighterLayerOpacity(true);
  assert.ok(lightOpacity >= 0.2 && lightOpacity <= 0.35);
  assert.ok(darkOpacity >= 0.2 && darkOpacity <= 0.35);

  const makeMockCtx = () => {
    const ops: Array<{ type: string; alpha: number; composite: string }> = [];
    const ctx = {
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
      moveTo() {},
      quadraticCurveTo() {},
      arc() {},
      fill() {
        ops.push({ type: 'fill', alpha: this.globalAlpha, composite: this.globalCompositeOperation });
      },
      stroke() {
        ops.push({ type: 'stroke', alpha: this.globalAlpha, composite: this.globalCompositeOperation });
      },
      ops,
    };
    return ctx as unknown as CanvasRenderingContext2D & {
      ops: Array<{ type: string; alpha: number; composite: string }>;
    };
  };

  const hiCtx = makeMockCtx();
  const penCtx = makeMockCtx();
  const root: BlockRect = { id: 'question-root', left: 0, top: 0, width: 800, height: 900 };
  const map = new Map<string, BlockRect>([['question-root', root]]);

  const strokes: PenStroke[] = [
    {
      id: 'h1',
      tool: 'highlighter',
      color: '#F59E0B',
      baseWidth: 4.5,
      opacity: 0.32, // legacy saved stroke opacity
      points: [
        { x: 0.1, y: 0.2, pressure: 0.4 },
        { x: 0.4, y: 0.2, pressure: 0.9 },
      ],
    },
    {
      id: 'p1',
      tool: 'pen',
      color: '#1D4ED8',
      baseWidth: 2.8,
      opacity: 1,
      points: [
        { x: 0.2, y: 0.2, pressure: 0.6 },
        { x: 0.3, y: 0.2, pressure: 0.8 },
      ],
    },
    {
      id: 'e1',
      tool: 'eraser',
      color: '#000',
      baseWidth: 4,
      opacity: 1,
      eraserMode: 'precision',
      points: [
        { x: 0.2, y: 0.2, pressure: 0.5 },
        { x: 0.25, y: 0.2, pressure: 0.5 },
      ],
    },
  ];

  renderLayeredAnnotationsOnContexts(hiCtx, penCtx, strokes, map, root, false);

  // Highlighter stroke drawn opaque (alpha 1) inside isolated highlighter canvas, followed by precision eraser
  assert.equal(hiCtx.ops.length, 2);
  assert.equal(hiCtx.ops[0].alpha, 1);
  assert.equal(hiCtx.ops[0].composite, 'source-over');
  assert.equal(hiCtx.ops[1].composite, 'destination-out');

  // Pen stroke + precision eraser routed to pen canvas
  assert.equal(penCtx.ops.length, 2);
  assert.equal(penCtx.ops[0].composite, 'source-over');
  assert.equal(penCtx.ops[1].composite, 'destination-out');
});
