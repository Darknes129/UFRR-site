import type { EraserMode, PenPoint, PenStroke, PenTool } from './types';

export interface BlockRect {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface CanvasClientRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type AnnotationTool = PenTool | 'hand';

export interface AnnotationPreferences {
  tool: AnnotationTool;
  lastInkTool: 'pen' | 'highlighter';
  penColor: string;
  highlighterColor: string;
  penWidth: number;
  highlighterWidth: number;
  eraserMode: EraserMode;
  shortcutKey: string;
  secondaryBarrelToggle: boolean;
  smartDrawingEnabled: boolean;
  smartHighlighterEnabled: boolean;
  smartShapesEnabled: boolean;
  smartHoldDurationMs: number;
}

export const DEFAULT_ANNOTATION_PREFERENCES: AnnotationPreferences = {
  tool: 'pen',
  lastInkTool: 'pen',
  penColor: '#1D4ED8',
  highlighterColor: '#F59E0B',
  penWidth: 2.8,
  highlighterWidth: 4.5,
  eraserMode: 'stroke',
  shortcutKey: 'e',
  secondaryBarrelToggle: true,
  smartDrawingEnabled: true,
  smartHighlighterEnabled: true,
  smartShapesEnabled: true,
  smartHoldDurationMs: 500,
};

export const ANNOTATION_PEN_COLORS = [
  { label: 'Azul Caneta', value: '#1D4ED8', darkValue: '#60A5FA' },
  { label: 'Grafite', value: '#1E293B', darkValue: '#F1F5F9' },
  { label: 'Vermelho', value: '#DC2626', darkValue: '#F87171' },
  { label: 'Verde', value: '#059669', darkValue: '#34D399' },
  { label: 'Roxo', value: '#7C3AED', darkValue: '#A78BFA' },
];

export const ANNOTATION_HIGHLIGHTER_COLORS = [
  { label: 'Âmbar', value: '#F59E0B' },
  { label: 'Verde', value: '#10B981' },
  { label: 'Azul', value: '#0EA5E9' },
  { label: 'Rosa', value: '#EC4899' },
];

export const ANNOTATION_WIDTHS = [
  { label: 'Fina', penValue: 1.8, highlighterValue: 3.2 },
  { label: 'Média', penValue: 2.8, highlighterValue: 4.5 },
  { label: 'Larga', penValue: 4.6, highlighterValue: 6.4 },
];

const PREFS_STORAGE_KEY = 'ufrr-study-annotation-prefs-v1';

export function loadAnnotationPreferences(): AnnotationPreferences {
  if (typeof window === 'undefined') return DEFAULT_ANNOTATION_PREFERENCES;
  try {
    const raw = window.localStorage.getItem(PREFS_STORAGE_KEY);
    if (!raw) return DEFAULT_ANNOTATION_PREFERENCES;
    const parsed = JSON.parse(raw) as Partial<AnnotationPreferences>;
    const rawHold = parsed.smartHoldDurationMs;
    const smartHoldDurationMs =
      typeof rawHold === 'number' && Number.isFinite(rawHold)
        ? Math.min(900, Math.max(300, Math.round(rawHold)))
        : DEFAULT_ANNOTATION_PREFERENCES.smartHoldDurationMs;
    return {
      ...DEFAULT_ANNOTATION_PREFERENCES,
      ...parsed,
      smartDrawingEnabled:
        typeof parsed.smartDrawingEnabled === 'boolean'
          ? parsed.smartDrawingEnabled
          : DEFAULT_ANNOTATION_PREFERENCES.smartDrawingEnabled,
      smartHighlighterEnabled:
        typeof parsed.smartHighlighterEnabled === 'boolean'
          ? parsed.smartHighlighterEnabled
          : DEFAULT_ANNOTATION_PREFERENCES.smartHighlighterEnabled,
      smartShapesEnabled:
        typeof parsed.smartShapesEnabled === 'boolean'
          ? parsed.smartShapesEnabled
          : DEFAULT_ANNOTATION_PREFERENCES.smartShapesEnabled,
      smartHoldDurationMs,
      shortcutKey:
        typeof parsed.shortcutKey === 'string' && parsed.shortcutKey.trim().length > 0
          ? parsed.shortcutKey.trim().toLowerCase()
          : DEFAULT_ANNOTATION_PREFERENCES.shortcutKey,
    };
  } catch {
    return DEFAULT_ANNOTATION_PREFERENCES;
  }
}

export function saveAnnotationPreferences(prefs: AnnotationPreferences): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Ignore quota or storage restriction errors
  }
}

/**
 * Finds the deepest/most-specific semantic content block covering (canvasX, canvasY).
 * Falls back to `question-root` when pointer lands in outer card padding.
 */
export function findBlockAtPoint(
  canvasX: number,
  canvasY: number,
  blocks: BlockRect[],
  fallbackRoot: BlockRect
): BlockRect {
  let best: BlockRect | null = null;
  let bestArea = Infinity;

  for (const b of blocks) {
    if (b.id === fallbackRoot.id) continue;
    if (b.width <= 0 || b.height <= 0) continue;
    if (
      canvasX >= b.left &&
      canvasX <= b.left + b.width &&
      canvasY >= b.top &&
      canvasY <= b.top + b.height
    ) {
      const area = b.width * b.height;
      if (area < bestArea) {
        best = b;
        bestArea = area;
      }
    }
  }

  return best ?? fallbackRoot;
}

export function normalizePressure(
  pointerType: string,
  rawPressure: number,
  buttons: number
): number {
  if (pointerType === 'pen') {
    if (rawPressure > 0 && Number.isFinite(rawPressure)) {
      return Math.min(1, Math.max(0.05, rawPressure));
    }
    return buttons > 0 ? 0.45 : 0.35;
  }
  return 0.55;
}

export function clientToNormalizedPoint(
  clientX: number,
  clientY: number,
  canvasRect: CanvasClientRect,
  blockRect: BlockRect,
  pressure: number,
  tiltX?: number,
  tiltY?: number
): PenPoint {
  const safeW = Math.max(1, blockRect.width);
  const safeH = Math.max(1, blockRect.height);
  const canvasX = clientX - canvasRect.left;
  const canvasY = clientY - canvasRect.top;
  return {
    x: (canvasX - blockRect.left) / safeW,
    y: (canvasY - blockRect.top) / safeH,
    pressure,
    ...(typeof tiltX === 'number' && Number.isFinite(tiltX) ? { tiltX } : {}),
    ...(typeof tiltY === 'number' && Number.isFinite(tiltY) ? { tiltY } : {}),
  };
}

export function resolveStrokeBlockRect(
  stroke: Pick<PenStroke, 'anchorBlockId'>,
  blockMap: Map<string, BlockRect>,
  fallbackRoot: BlockRect
): BlockRect | null {
  const anchorId = stroke.anchorBlockId;
  if (!anchorId) return fallbackRoot;
  const matched = blockMap.get(anchorId);
  if (matched && matched.width > 0 && matched.height > 0) {
    return matched;
  }
  // Collapsible shared texts intentionally hide their strokes while collapsed
  if (anchorId.startsWith('shared-text-')) {
    return null;
  }
  return fallbackRoot;
}

export function normalizedToCanvasPoint(
  point: PenPoint,
  blockRect: BlockRect
): PenPoint {
  return {
    x: blockRect.left + point.x * blockRect.width,
    y: blockRect.top + point.y * blockRect.height,
    pressure: point.pressure,
    tiltX: point.tiltX,
    tiltY: point.tiltY,
  };
}

export function resolveThemeInkColor(color: string, isDarkTheme: boolean): string {
  if (isDarkTheme) {
    if (color === '#1E293B') return '#F1F5F9';
    if (color === '#1D4ED8') return '#60A5FA';
    if (color === '#DC2626') return '#F87171';
    if (color === '#059669') return '#34D399';
    if (color === '#7C3AED') return '#A78BFA';
  } else {
    if (color === '#F1F5F9') return '#1E293B';
    if (color === '#60A5FA') return '#1D4ED8';
  }
  return color;
}

export function getHighlighterLayerOpacity(isDarkTheme: boolean): number {
  return isDarkTheme ? 0.3 : 0.26;
}

export function computeStrokeSegmentWidth(
  tool: PenTool,
  baseWidth: number,
  point: Pick<PenPoint, 'pressure' | 'tiltX' | 'tiltY'>
): number {
  const pressure = Number.isFinite(point.pressure) && point.pressure > 0 ? point.pressure : 0.55;
  const tiltMag = Math.min(
    1,
    Math.hypot(point.tiltX ?? 0, point.tiltY ?? 0) / 90
  );

  if (tool === 'highlighter') {
    // Predictable, pressure- and tilt-invariant single-line width (Fina ~9.6px, Média ~13.5px, Larga ~19.2px)
    return Math.max(8, Math.min(22, Number((baseWidth * 3.0).toFixed(2))));
  }
  if (tool === 'eraser') {
    return Math.max(4, baseWidth * 4);
  }
  const pressureCurve = 0.55 + Math.pow(pressure, 0.85) * 1.05;
  const tiltBoost = 1 + tiltMag * 0.15;
  return Math.max(0.9, baseWidth * pressureCurve * tiltBoost);
}

export interface RenderStrokeOptions {
  /**
   * When true, highlighter strokes are drawn at full alpha inside their own isolated
   * layer canvas so overlapping/crossed strokes never compound opacity; the parent layer
   * applies the calibrated translucent opacity.
   */
  forceOpaqueHighlighter?: boolean;
  /**
   * Optional [0..1] morph progress used during the 130ms transition from raw freehand
   * stroke into the recognized smartShape geometry. Defaults to 1 (fully snapped).
   */
  morphProgress?: number;
}

function traceRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radius: number
): void {
  const r = Math.max(0, Math.min(radius, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function resample2D(
  pts: ReadonlyArray<{ x: number; y: number }>,
  count: number
): Array<{ x: number; y: number }> {
  if (pts.length === 0) return [];
  if (pts.length === 1 || count <= 1) {
    return Array.from({ length: Math.max(1, count) }, () => ({
      x: pts[0].x,
      y: pts[0].y,
    }));
  }
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  }
  if (total < 1e-4) {
    return Array.from({ length: count }, () => ({ x: pts[0].x, y: pts[0].y }));
  }
  const step = total / (count - 1);
  const out: Array<{ x: number; y: number }> = [{ x: pts[0].x, y: pts[0].y }];
  let accum = 0;
  let i = 1;
  let prev = { x: pts[0].x, y: pts[0].y };

  while (i < pts.length) {
    const curr = pts[i];
    const segLen = Math.hypot(curr.x - prev.x, curr.y - prev.y);
    if (accum + segLen >= step) {
      const t = (step - accum) / Math.max(1e-6, segLen);
      const nextPt = {
        x: prev.x + t * (curr.x - prev.x),
        y: prev.y + t * (curr.y - prev.y),
      };
      out.push(nextPt);
      prev = nextPt;
      accum = 0;
      if (out.length === count) break;
    } else {
      accum += segLen;
      prev = curr;
      i++;
    }
  }
  const last = pts[pts.length - 1];
  while (out.length < count) {
    out.push({ x: last.x, y: last.y });
  }
  return out;
}

function resolveAnchorIdRect(
  anchorBlockId: string | undefined,
  blockMap: Map<string, BlockRect>,
  fallbackRoot: BlockRect
): BlockRect | null {
  if (!anchorBlockId) return fallbackRoot;
  const matched = blockMap.get(anchorBlockId);
  if (matched && matched.width > 0 && matched.height > 0) return matched;
  if (anchorBlockId.startsWith('shared-text-')) return null;
  return fallbackRoot;
}

function drawFreehandPath(
  ctx: CanvasRenderingContext2D,
  pts: ReadonlyArray<PenPoint>,
  tool: PenStroke['tool'],
  baseWidth: number
): void {
  if (pts.length === 0) return;
  if (pts.length === 1) {
    const p = pts[0];
    const width = computeStrokeSegmentWidth(tool, baseWidth, p);
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(0.8, width / 2), 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (tool === 'highlighter' || tool === 'eraser') {
    ctx.lineWidth = computeStrokeSegmentWidth(tool, baseWidth, pts[0]);
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const next = pts[i + 1];
      if (next) {
        ctx.quadraticCurveTo(prev.x, prev.y, (curr.x + next.x) / 2, (curr.y + next.y) / 2);
      } else {
        ctx.quadraticCurveTo(prev.x, prev.y, curr.x, curr.y);
      }
    }
    ctx.stroke();
    return;
  }

  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const next = pts[i + 1];

    const startX = i === 1 ? pts[0].x : (pts[i - 2].x + prev.x) / 2;
    const startY = i === 1 ? pts[0].y : (pts[i - 2].y + prev.y) / 2;
    const endX = next ? (curr.x + next.x) / 2 : curr.x;
    const endY = next ? (curr.y + next.y) / 2 : curr.y;

    ctx.lineWidth = computeStrokeSegmentWidth(tool, baseWidth, curr);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    if (next) {
      ctx.quadraticCurveTo(prev.x, prev.y, endX, endY);
    } else {
      ctx.quadraticCurveTo(prev.x, prev.y, curr.x, curr.y);
    }
    ctx.stroke();
  }
}

export function renderAnnotationStrokeOnContext(
  ctx: CanvasRenderingContext2D,
  stroke: PenStroke,
  blockMap: Map<string, BlockRect>,
  fallbackRoot: BlockRect,
  isDarkTheme: boolean,
  options: RenderStrokeOptions = {}
): void {
  if (stroke.points.length === 0 && !stroke.smartShape) return;
  const blockRect = resolveStrokeBlockRect(stroke, blockMap, fallbackRoot);
  if (!blockRect) return;

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const baseAlpha =
    stroke.tool === 'eraser'
      ? 1
      : stroke.tool === 'highlighter' && options.forceOpaqueHighlighter
        ? 1
        : stroke.opacity;

  if (stroke.tool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.globalAlpha = 1;
  } else {
    ctx.globalCompositeOperation = 'source-over';
    const resolvedColor =
      stroke.tool === 'highlighter'
        ? stroke.color
        : resolveThemeInkColor(stroke.color, isDarkTheme);
    ctx.strokeStyle = resolvedColor;
    ctx.fillStyle = resolvedColor;
    ctx.globalAlpha = baseAlpha;
  }

  const shape = stroke.smartShape;
  const morph =
    typeof options.morphProgress === 'number'
      ? Math.max(0, Math.min(1, options.morphProgress))
      : 1;

  // Render Smart Shape geometry (with smooth optional morph interpolation from rawPoints)
  if (shape && stroke.tool !== 'eraser') {
    const rawPts =
      stroke.rawPoints && stroke.rawPoints.length >= 2
        ? stroke.rawPoints.map((pt) => normalizedToCanvasPoint(pt, blockRect))
        : null;

    if (shape.kind === 'text_highlight' && shape.highlightRects && shape.highlightRects.length > 0) {
      // During morph (<1), cross-fade raw freehand into aligned text capsules
      if (morph < 1 && rawPts) {
        ctx.save();
        ctx.globalAlpha = baseAlpha * (1 - morph);
        drawFreehandPath(ctx, rawPts, stroke.tool, stroke.baseWidth);
        ctx.restore();
      }

      ctx.globalAlpha = baseAlpha * (morph < 1 ? 0.25 + 0.75 * morph : 1);
      for (const rect of shape.highlightRects) {
        const rectBlock = resolveAnchorIdRect(rect.anchorBlockId, blockMap, fallbackRoot);
        if (!rectBlock) continue;
        const x = rectBlock.left + rect.x * rectBlock.width;
        const fullH = Math.max(4, rect.height * rectBlock.height);
        const h = morph < 1 ? fullH * (0.55 + 0.45 * morph) : fullH;
        const y = rectBlock.top + rect.y * rectBlock.height + (fullH - h) / 2;
        const w = Math.max(6, rect.width * rectBlock.width);
        traceRoundedRect(ctx, x, y, w, h, Math.min(h / 2, 5.5));
        ctx.fill();
      }
      ctx.restore();
      return;
    }

    const uniformWidth = computeStrokeSegmentWidth(stroke.tool, stroke.baseWidth, {
      pressure: 0.55,
    });
    ctx.lineWidth = uniformWidth;

    if (
      (shape.kind === 'circle' || shape.kind === 'ellipse') &&
      shape.cx !== undefined &&
      shape.cy !== undefined &&
      shape.rx !== undefined &&
      shape.ry !== undefined
    ) {
      const cxPx = blockRect.left + shape.cx * blockRect.width;
      const cyPx = blockRect.top + shape.cy * blockRect.height;
      const rxPx = Math.max(2, shape.rx * blockRect.width);
      const ryPx =
        shape.kind === 'circle'
          ? rxPx
          : Math.max(2, shape.ry * blockRect.height);

      if (morph < 1 && rawPts) {
        const N = 48;
        const from = resample2D(rawPts, N);
        const to: Array<{ x: number; y: number }> = [];
        for (let i = 0; i < N; i++) {
          const ang = (i / (N - 1)) * Math.PI * 2;
          to.push({ x: cxPx + rxPx * Math.cos(ang), y: cyPx + ryPx * Math.sin(ang) });
        }
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const ix = from[i].x + (to[i].x - from[i].x) * morph;
          const iy = from[i].y + (to[i].y - from[i].y) * morph;
          if (i === 0) ctx.moveTo(ix, iy);
          else ctx.lineTo(ix, iy);
        }
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.ellipse(cxPx, cyPx, rxPx, ryPx, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
      return;
    }

    if (
      shape.kind === 'arrow' &&
      shape.points &&
      shape.points.length >= 2 &&
      shape.arrowHeadLeft &&
      shape.arrowHeadRight
    ) {
      const p0 = normalizedToCanvasPoint(shape.points[0], blockRect);
      const p1 = normalizedToCanvasPoint(shape.points[1], blockRect);
      const leftWing = {
        x: blockRect.left + shape.arrowHeadLeft.x * blockRect.width,
        y: blockRect.top + shape.arrowHeadLeft.y * blockRect.height,
      };
      const rightWing = {
        x: blockRect.left + shape.arrowHeadRight.x * blockRect.width,
        y: blockRect.top + shape.arrowHeadRight.y * blockRect.height,
      };

      if (morph < 1 && rawPts) {
        ctx.save();
        ctx.globalAlpha = baseAlpha * (1 - morph);
        drawFreehandPath(ctx, rawPts, stroke.tool, stroke.baseWidth);
        ctx.restore();
        ctx.globalAlpha = baseAlpha * morph;
      }

      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.moveTo(leftWing.x, leftWing.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.lineTo(rightWing.x, rightWing.y);
      ctx.stroke();
      ctx.restore();
      return;
    }

    if (shape.points && shape.points.length >= 2) {
      const shapePts = shape.points.map((pt) => normalizedToCanvasPoint(pt, blockRect));
      if (morph < 1 && rawPts) {
        const N = 36;
        const from = resample2D(rawPts, N);
        const to = resample2D(shapePts, N);
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const ix = from[i].x + (to[i].x - from[i].x) * morph;
          const iy = from[i].y + (to[i].y - from[i].y) * morph;
          if (i === 0) ctx.moveTo(ix, iy);
          else ctx.lineTo(ix, iy);
        }
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(shapePts[0].x, shapePts[0].y);
        for (let i = 1; i < shapePts.length; i++) {
          ctx.lineTo(shapePts[i].x, shapePts[i].y);
        }
        if (
          shape.kind === 'rectangle' ||
          shape.kind === 'square' ||
          shape.kind === 'triangle'
        ) {
          ctx.closePath();
        }
        ctx.stroke();
      }
      ctx.restore();
      return;
    }
  }

  const pts = stroke.points.map((pt) => normalizedToCanvasPoint(pt, blockRect));
  drawFreehandPath(ctx, pts, stroke.tool, stroke.baseWidth);
  ctx.restore();
}

/**
 * Renders committed strokes onto physically separated Highlighter (behind text) and Pen
 * (above text) contexts, applying precision erasers chronologically to both layers.
 */
export function renderLayeredAnnotationsOnContexts(
  highlighterCtx: CanvasRenderingContext2D | null,
  penCtx: CanvasRenderingContext2D | null,
  strokes: PenStroke[],
  blockMap: Map<string, BlockRect>,
  fallbackRoot: BlockRect,
  isDarkTheme: boolean
): void {
  for (const stroke of strokes) {
    if (stroke.tool === 'highlighter') {
      if (highlighterCtx) {
        renderAnnotationStrokeOnContext(
          highlighterCtx,
          stroke,
          blockMap,
          fallbackRoot,
          isDarkTheme,
          { forceOpaqueHighlighter: true }
        );
      }
    } else if (stroke.tool === 'eraser') {
      if (highlighterCtx) {
        renderAnnotationStrokeOnContext(
          highlighterCtx,
          stroke,
          blockMap,
          fallbackRoot,
          isDarkTheme
        );
      }
      if (penCtx) {
        renderAnnotationStrokeOnContext(
          penCtx,
          stroke,
          blockMap,
          fallbackRoot,
          isDarkTheme
        );
      }
    } else if (penCtx) {
      renderAnnotationStrokeOnContext(
        penCtx,
        stroke,
        blockMap,
        fallbackRoot,
        isDarkTheme
      );
    }
  }
}

export function distanceToSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number
): number {
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
  const projX = ax + t * dx;
  const projY = ay + t * dy;
  return Math.hypot(px - projX, py - projY);
}

/**
 * Returns IDs of ink/highlighter strokes intersecting the eraser cursor at (canvasX, canvasY).
 */
export function findHitStrokeIds(
  strokes: PenStroke[],
  canvasX: number,
  canvasY: number,
  eraserRadius: number,
  blockMap: Map<string, BlockRect>,
  fallbackRoot: BlockRect
): string[] {
  const hits: string[] = [];

  for (const stroke of strokes) {
    if (stroke.tool === 'eraser') continue;

    // Hit-test Smart Text Highlight capsules across all matched lines
    if (
      stroke.smartShape?.kind === 'text_highlight' &&
      stroke.smartShape.highlightRects &&
      stroke.smartShape.highlightRects.length > 0
    ) {
      let hitRect = false;
      for (const rect of stroke.smartShape.highlightRects) {
        const rectBlock = resolveAnchorIdRect(rect.anchorBlockId, blockMap, fallbackRoot);
        if (!rectBlock) continue;
        const left = rectBlock.left + rect.x * rectBlock.width;
        const top = rectBlock.top + rect.y * rectBlock.height;
        const width = rect.width * rectBlock.width;
        const height = rect.height * rectBlock.height;
        if (
          canvasX >= left - eraserRadius &&
          canvasX <= left + width + eraserRadius &&
          canvasY >= top - eraserRadius &&
          canvasY <= top + height + eraserRadius
        ) {
          hitRect = true;
          break;
        }
      }
      if (hitRect) {
        hits.push(stroke.id);
        continue;
      }
    }

    if (stroke.points.length === 0) continue;
    const blockRect = resolveStrokeBlockRect(stroke, blockMap, fallbackRoot);
    if (!blockRect) continue;

    const pts = stroke.points.map((pt) => normalizedToCanvasPoint(pt, blockRect));
    const halfWidth =
      computeStrokeSegmentWidth(stroke.tool, stroke.baseWidth, pts[0]) / 2;
    const threshold = eraserRadius + halfWidth;

    if (pts.length === 1) {
      if (Math.hypot(canvasX - pts[0].x, canvasY - pts[0].y) <= threshold) {
        hits.push(stroke.id);
      }
      continue;
    }

    for (let i = 1; i < pts.length; i++) {
      const dist = distanceToSegment(
        canvasX,
        canvasY,
        pts[i - 1].x,
        pts[i - 1].y,
        pts[i].x,
        pts[i].y
      );
      if (dist <= threshold) {
        hits.push(stroke.id);
        break;
      }
    }
  }

  return hits;
}

export interface StrokeHistoryState {
  past: PenStroke[][];
  present: PenStroke[];
  future: PenStroke[][];
}

const MAX_HISTORY_STEPS = 60;

export function pushHistorySnapshot(
  state: StrokeHistoryState,
  nextPresent: PenStroke[]
): StrokeHistoryState {
  const nextPast = [...state.past, state.present].slice(-MAX_HISTORY_STEPS);
  return {
    past: nextPast,
    present: nextPresent,
    future: [],
  };
}

export function undoHistory(state: StrokeHistoryState): StrokeHistoryState {
  if (state.past.length === 0) return state;
  const previous = state.past[state.past.length - 1];
  return {
    past: state.past.slice(0, -1),
    present: previous,
    future: [state.present, ...state.future].slice(0, MAX_HISTORY_STEPS),
  };
}

export function redoHistory(state: StrokeHistoryState): StrokeHistoryState {
  if (state.future.length === 0) return state;
  const [next, ...rest] = state.future;
  return {
    past: [...state.past, state.present].slice(-MAX_HISTORY_STEPS),
    present: next,
    future: rest,
  };
}

/**
 * Modular interface for optional native Android / HyperOS WebView bridge integration.
 * Standard web browsers on HyperOS do not expose Xiaomi Focus Pen Pro double-press natively;
 * if wrapped in a native Android WebView shell, it may dispatch `ufrr-stylus-gesture` or attach
 * `window.__UFRR_STYLUS_BRIDGE__`.
 */
export type StylusHardwareGesture =
  | 'double_press'
  | 'barrel_secondary'
  | 'eraser_tip_active';

export interface UfrrStylusNativeBridge {
  version: string;
  platform: 'hyperos-webview' | 'android-webview' | 'web';
  supportsDoublePress?: boolean;
  onGesture?: (callback: (gesture: StylusHardwareGesture) => void) => () => void;
}

declare global {
  interface Window {
    __UFRR_STYLUS_BRIDGE__?: UfrrStylusNativeBridge;
  }
}

export interface PointerSignalSample {
  pointerType: string;
  button: number;
  buttons: number;
  pressure: number;
  tiltX: number;
  tiltY: number;
}

export function classifyHardwareStylusSignal(
  sample: PointerSignalSample,
  allowSecondaryBarrelToggle: boolean
): 'eraser_tip' | 'secondary_barrel_toggle' | 'none' {
  // W3C Pointer Events Level 2/3 standard eraser bit (buttons === 32 or button === 5)
  if ((sample.buttons & 32) !== 0 || sample.button === 5) {
    return 'eraser_tip';
  }
  if (
    allowSecondaryBarrelToggle &&
    sample.pointerType === 'pen' &&
    sample.button === 2
  ) {
    return 'secondary_barrel_toggle';
  }
  return 'none';
}
