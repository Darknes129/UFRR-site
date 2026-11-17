import type { BlockRect, CanvasClientRect } from './annotation-engine';
import type {
  PenPoint,
  SmartHighlightRect,
  SmartShapeGeometry,
  SmartShapeKind,
} from './types';

export interface CanvasPoint2D {
  x: number;
  y: number;
  pressure: number;
  tiltX?: number;
  tiltY?: number;
}

export interface TextWordBox {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  anchorBlockId: string;
  text: string;
}

export function getSmartShapeLabel(kind: SmartShapeKind): string {
  switch (kind) {
    case 'text_highlight':
      return 'Destaque alinhado ao texto';
    case 'line':
      return 'Linha reta';
    case 'circle':
      return 'Círculo';
    case 'ellipse':
      return 'Elipse';
    case 'square':
      return 'Quadrado';
    case 'rectangle':
      return 'Retângulo';
    case 'triangle':
      return 'Triângulo';
    case 'arrow':
      return 'Seta';
  }
}

/**
 * Collects real word & inline-formula client bounding rectangles inside the question content layer
 * using native DOM `Range.getClientRects()`, skipping hidden/non-textual overlays and letter badges.
 */
export function collectSurfaceTextWords(
  contentRoot: HTMLElement,
  canvasRect: CanvasClientRect
): TextWordBox[] {
  if (typeof document === 'undefined') return [];
  const words: TextWordBox[] = [];

  // 1. Collect native text words (normal, bold, italic, underlined, headings, table cells)
  const walker = document.createTreeWalker(contentRoot, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.textContent;
      if (!text || !text.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      // Treat KaTeX formulas as atomic inline boxes below rather than chopping math symbols
      if (parent.closest('.katex, .katex-mathml, svg, [aria-hidden="true"]')) {
        return NodeFilter.FILTER_REJECT;
      }
      // Skip single-letter alternative radio badges ("A", "B", "C", "D", "E")
      const btnParent = parent.closest('button[role="radio"]');
      if (btnParent) {
        const badgeSpan = btnParent.firstElementChild;
        if (badgeSpan && badgeSpan.contains(parent)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const range = document.createRange();
  let current: Node | null = walker.nextNode();
  while (current) {
    const textNode = current as Text;
    const content = textNode.textContent ?? '';
    const parentEl = textNode.parentElement;
    const blockEl = parentEl?.closest<HTMLElement>('[data-annotation-block]');
    const anchorBlockId = blockEl?.dataset.annotationBlock ?? 'question-root';

    const wordRegex = /\S+/g;
    let match: RegExpExecArray | null;
    while ((match = wordRegex.exec(content)) !== null) {
      try {
        range.setStart(textNode, match.index);
        range.setEnd(textNode, match.index + match[0].length);
        const rects = range.getClientRects();
        for (let i = 0; i < rects.length; i++) {
          const r = rects[i];
          if (r.width < 1 || r.height < 4) continue;
          const left = r.left - canvasRect.left;
          const top = r.top - canvasRect.top;
          words.push({
            left,
            top,
            right: left + r.width,
            bottom: top + r.height,
            width: r.width,
            height: r.height,
            anchorBlockId,
            text: match[0],
          });
        }
      } catch {
        // Ignore stale range edge cases during live DOM updates
      }
    }
    current = walker.nextNode();
  }

  // 2. Include inline KaTeX expressions (not standalone block diagrams) as atomic inline words
  const inlineKatexNodes = contentRoot.querySelectorAll<HTMLElement>('.katex');
  inlineKatexNodes.forEach((kEl) => {
    if (kEl.closest('.katex-display')) return;
    const r = kEl.getBoundingClientRect();
    if (r.width < 2 || r.height < 4 || r.height > 48) return;
    const blockEl = kEl.closest<HTMLElement>('[data-annotation-block]');
    const anchorBlockId = blockEl?.dataset.annotationBlock ?? 'question-root';
    const left = r.left - canvasRect.left;
    const top = r.top - canvasRect.top;
    words.push({
      left,
      top,
      right: left + r.width,
      bottom: top + r.height,
      width: r.width,
      height: r.height,
      anchorBlockId,
      text: '[formula]',
    });
  });

  return words;
}

export function dist2D(ax: number, ay: number, bx: number, by: number): number {
  return Math.hypot(bx - ax, by - ay);
}

export function computePolylineLength(pts: ReadonlyArray<{ x: number; y: number }>): number {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    len += dist2D(pts[i - 1].x, pts[i - 1].y, pts[i].x, pts[i].y);
  }
  return len;
}

export function resamplePolyline(
  pts: ReadonlyArray<CanvasPoint2D>,
  count: number
): CanvasPoint2D[] {
  if (pts.length === 0) return [];
  if (pts.length === 1 || count <= 1) return [pts[0]];
  const totalLen = computePolylineLength(pts);
  if (totalLen < 1e-4) return [pts[0]];

  const step = totalLen / (count - 1);
  const out: CanvasPoint2D[] = [pts[0]];
  let accum = 0;
  let i = 1;
  let prev = pts[0];

  while (i < pts.length) {
    const curr = pts[i];
    const segLen = dist2D(prev.x, prev.y, curr.x, curr.y);
    if (accum + segLen >= step) {
      const t = (step - accum) / Math.max(1e-6, segLen);
      const nx = prev.x + t * (curr.x - prev.x);
      const ny = prev.y + t * (curr.y - prev.y);
      const interpolated: CanvasPoint2D = {
        x: nx,
        y: ny,
        pressure: prev.pressure + t * (curr.pressure - prev.pressure),
      };
      out.push(interpolated);
      prev = interpolated;
      accum = 0;
      if (out.length === count) break;
    } else {
      accum += segLen;
      prev = curr;
      i++;
    }
  }

  while (out.length < count) {
    out.push(pts[pts.length - 1]);
  }
  return out;
}

function pointToSegmentDist(
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
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function pointToInfiniteLineDist(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number
): number {
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return Math.hypot(px - ax, py - ay);
  return Math.abs(dy * px - dx * py + bx * ay - by * ax) / len;
}

function rdpSimplify(
  pts: ReadonlyArray<{ x: number; y: number }>,
  epsilon: number
): Array<{ x: number; y: number }> {
  if (pts.length <= 2) return pts.map((p) => ({ x: p.x, y: p.y }));
  let maxDist = 0;
  let index = 0;
  const start = pts[0];
  const end = pts[pts.length - 1];

  for (let i = 1; i < pts.length - 1; i++) {
    const d = pointToInfiniteLineDist(
      pts[i].x,
      pts[i].y,
      start.x,
      start.y,
      end.x,
      end.y
    );
    if (d > maxDist) {
      maxDist = d;
      index = i;
    }
  }

  if (maxDist > epsilon) {
    const left = rdpSimplify(pts.slice(0, index + 1), epsilon);
    const right = rdpSimplify(pts.slice(index), epsilon);
    return [...left.slice(0, -1), ...right];
  }
  return [
    { x: start.x, y: start.y },
    { x: end.x, y: end.y },
  ];
}

function normalizeCanvasPointToBlock(
  x: number,
  y: number,
  blockRect: BlockRect,
  pressure = 0.5
): PenPoint {
  return {
    x: (x - blockRect.left) / Math.max(1, blockRect.width),
    y: (y - blockRect.top) / Math.max(1, blockRect.height),
    pressure,
  };
}

/**
 * Matches a freehand highlighter stroke against DOM word geometry, producing
 * cleanly aligned per-line highlight segments (or safe straight highlight over figures).
 * Returns null when confidence is too low so the original freehand stroke is preserved.
 */
export function matchHighlighterStrokeToTextLines(
  rawCanvasPts: ReadonlyArray<CanvasPoint2D>,
  wordBoxes: ReadonlyArray<TextWordBox>,
  blockMap: Map<string, BlockRect>,
  fallbackRoot: BlockRect,
  configuredWidthPx: number,
  strokeAnchorBlock: BlockRect
): {
  smartShape: SmartShapeGeometry;
  representativePoints: PenPoint[];
} | null {
  if (rawCanvasPts.length < 2) return null;
  const totalLen = computePolylineLength(rawCanvasPts);
  if (totalLen < 20) return null;

  // Sample path densely so fast pen swipes never skip short words ("de", "e", "o")
  const sampleCount = Math.min(420, Math.max(16, Math.ceil(totalLen / 3)));
  const samples = resamplePolyline(rawCanvasPts, sampleCount);

  const verticalPad = Math.max(7, configuredWidthPx * 0.55);
  const horizontalPad = 4;
  const matchedWords: TextWordBox[] = [];

  for (const word of wordBoxes) {
    // Check if any sampled point falls inside the expanded word rect
    const minY = word.top - verticalPad;
    const maxY = word.bottom + verticalPad;
    const minX = word.left - horizontalPad;
    const maxX = word.right + horizontalPad;
    let hits = 0;
    for (const s of samples) {
      if (s.x >= minX && s.x <= maxX && s.y >= minY && s.y <= maxY) {
        hits++;
        if (hits >= 1) break;
      }
    }
    if (hits > 0) {
      matchedWords.push(word);
    }
  }

  if (matchedWords.length > 0) {
    // Sort top-to-bottom, then left-to-right, and cluster into visual text lines per block
    const sorted = [...matchedWords].sort((a, b) => {
      if (a.anchorBlockId !== b.anchorBlockId) {
        return a.anchorBlockId.localeCompare(b.anchorBlockId);
      }
      const cyA = (a.top + a.bottom) / 2;
      const cyB = (b.top + b.bottom) / 2;
      if (Math.abs(cyA - cyB) > Math.max(8, Math.min(a.height, b.height) * 0.6)) {
        return cyA - cyB;
      }
      return a.left - b.left;
    });

    interface LineCluster {
      anchorBlockId: string;
      cySum: number;
      count: number;
      minLeft: number;
      maxRight: number;
      minTop: number;
      maxBottom: number;
      snippets: string[];
    }

    const clusters: LineCluster[] = [];
    for (const w of sorted) {
      const cy = (w.top + w.bottom) / 2;
      const existing = clusters.find(
        (c) =>
          c.anchorBlockId === w.anchorBlockId &&
          Math.abs(c.cySum / c.count - cy) <=
            Math.max(8, Math.min(c.maxBottom - c.minTop, w.height) * 0.65)
      );
      if (existing) {
        existing.cySum += cy;
        existing.count += 1;
        existing.minLeft = Math.min(existing.minLeft, w.left);
        existing.maxRight = Math.max(existing.maxRight, w.right);
        existing.minTop = Math.min(existing.minTop, w.top);
        existing.maxBottom = Math.max(existing.maxBottom, w.bottom);
        if (existing.snippets.length < 8 && w.text !== '[formula]') {
          existing.snippets.push(w.text);
        }
      } else {
        clusters.push({
          anchorBlockId: w.anchorBlockId,
          cySum: cy,
          count: 1,
          minLeft: w.left,
          maxRight: w.right,
          minTop: w.top,
          maxBottom: w.bottom,
          snippets: w.text !== '[formula]' ? [w.text] : [],
        });
      }
    }

    // Filter out accidental stray 1-character vertical bleed unless it is the only line
    const validClusters = clusters.filter(
      (c) => c.maxRight - c.minLeft >= 8 || clusters.length === 1
    );

    if (validClusters.length > 0) {
      const highlightRects: SmartHighlightRect[] = [];
      const representativePoints: PenPoint[] = [];

      for (const cl of validClusters) {
        const block = blockMap.get(cl.anchorBlockId) ?? fallbackRoot;
        const textH = Math.max(10, cl.maxBottom - cl.minTop);
        const targetH =
          configuredWidthPx <= 11
            ? Math.max(10, Math.min(textH * 0.88, 14.5))
            : configuredWidthPx <= 15
              ? Math.max(13, Math.min(textH * 1.02, 19))
              : Math.max(16, Math.min(textH * 1.12, 22));
        const centerY = (cl.minTop + cl.maxBottom) / 2;
        const rectLeft = cl.minLeft - 2.5;
        const rectWidth = Math.max(8, cl.maxRight - cl.minLeft + 5);
        const rectTop = centerY - targetH / 2;

        highlightRects.push({
          anchorBlockId: block.id,
          x: (rectLeft - block.left) / Math.max(1, block.width),
          y: (rectTop - block.top) / Math.max(1, block.height),
          width: rectWidth / Math.max(1, block.width),
          height: targetH / Math.max(1, block.height),
          textSnippet: cl.snippets.join(' '),
        });

        representativePoints.push(
          normalizeCanvasPointToBlock(rectLeft, centerY, strokeAnchorBlock, 0.5),
          normalizeCanvasPointToBlock(
            rectLeft + rectWidth,
            centerY,
            strokeAnchorBlock,
            0.5
          )
        );
      }

      return {
        smartShape: {
          kind: 'text_highlight',
          highlightRects,
          confidence: 0.94,
        },
        representativePoints,
      };
    }
  }

  // Fallback for non-textual elements (figures, graphs, standalone formulas):
  // Safe geometric straight-line alignment only when clearly straight.
  return fitSafeStraightHighlight(rawCanvasPts, strokeAnchorBlock);
}

export function fitSafeStraightHighlight(
  rawCanvasPts: ReadonlyArray<CanvasPoint2D>,
  anchorBlock: BlockRect
): {
  smartShape: SmartShapeGeometry;
  representativePoints: PenPoint[];
} | null {
  if (rawCanvasPts.length < 2) return null;
  const first = rawCanvasPts[0];
  const last = rawCanvasPts[rawCanvasPts.length - 1];
  const chord = dist2D(first.x, first.y, last.x, last.y);
  const pathLen = computePolylineLength(rawCanvasPts);
  if (chord < 24 || pathLen < 24) return null;

  const straightness = chord / pathLen;
  if (straightness < 0.86) return null;

  let maxDev = 0;
  for (const p of rawCanvasPts) {
    const d = pointToInfiniteLineDist(p.x, p.y, first.x, first.y, last.x, last.y);
    if (d > maxDev) maxDev = d;
  }
  if (maxDev > Math.max(16, chord * 0.16)) return null;

  // Snap to horizontal or vertical if within ±12°
  const dx = last.x - first.x;
  const dy = last.y - first.y;
  const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
  let endX = last.x;
  let endY = last.y;
  if (Math.abs(angleDeg) <= 12 || Math.abs(Math.abs(angleDeg) - 180) <= 12) {
    endY = (first.y + last.y) / 2;
    const startY = endY;
    const nStart = normalizeCanvasPointToBlock(first.x, startY, anchorBlock, 0.5);
    const nEnd = normalizeCanvasPointToBlock(endX, endY, anchorBlock, 0.5);
    return {
      smartShape: {
        kind: 'line',
        points: [nStart, nEnd],
        confidence: Math.min(0.95, straightness),
      },
      representativePoints: [nStart, nEnd],
    };
  }
  if (Math.abs(Math.abs(angleDeg) - 90) <= 12) {
    const avgX = (first.x + last.x) / 2;
    const nStart = normalizeCanvasPointToBlock(avgX, first.y, anchorBlock, 0.5);
    const nEnd = normalizeCanvasPointToBlock(avgX, endY, anchorBlock, 0.5);
    return {
      smartShape: {
        kind: 'line',
        points: [nStart, nEnd],
        confidence: Math.min(0.95, straightness),
      },
      representativePoints: [nStart, nEnd],
    };
  }

  const nStart = normalizeCanvasPointToBlock(first.x, first.y, anchorBlock, 0.5);
  const nEnd = normalizeCanvasPointToBlock(endX, endY, anchorBlock, 0.5);
  return {
    smartShape: {
      kind: 'line',
      points: [nStart, nEnd],
      confidence: Math.min(0.9, straightness),
    },
    representativePoints: [nStart, nEnd],
  };
}

function fitArrowShape(
  rawCanvasPts: ReadonlyArray<CanvasPoint2D>,
  anchorBlock: BlockRect
): {
  smartShape: SmartShapeGeometry;
  representativePoints: PenPoint[];
} | null {
  if (rawCanvasPts.length < 6) return null;
  const start = rawCanvasPts[0];
  const pathLen = computePolylineLength(rawCanvasPts);
  if (pathLen < 42) return null;

  // Find point farthest from start — candidate arrow tip
  let tipIdx = 0;
  let maxDistFromStart = 0;
  for (let i = 1; i < rawCanvasPts.length; i++) {
    const d = dist2D(start.x, start.y, rawCanvasPts[i].x, rawCanvasPts[i].y);
    if (d > maxDistFromStart) {
      maxDistFromStart = d;
      tipIdx = i;
    }
  }

  if (tipIdx < 2 || tipIdx >= rawCanvasPts.length - 2 || maxDistFromStart < 30) {
    return null;
  }

  const tip = rawCanvasPts[tipIdx];
  const shaftPts = rawCanvasPts.slice(0, tipIdx + 1);
  const headPts = rawCanvasPts.slice(tipIdx);

  const shaftLen = computePolylineLength(shaftPts);
  const headLen = computePolylineLength(headPts);

  // Shaft must be cleanly straight and represent the bulk of the stroke; head must be compact
  if (shaftLen / pathLen < 0.52 || headLen < 10 || headLen > shaftLen * 0.72) {
    return null;
  }

  const shaftStraightness = maxDistFromStart / Math.max(1, shaftLen);
  if (shaftStraightness < 0.88) return null;

  let maxShaftDev = 0;
  for (const p of shaftPts) {
    const d = pointToInfiniteLineDist(p.x, p.y, start.x, start.y, tip.x, tip.y);
    if (d > maxShaftDev) maxShaftDev = d;
  }
  if (maxShaftDev > Math.max(10, maxDistFromStart * 0.09)) return null;

  // Head must fold back toward the shaft (at least one point behind tip along shaft axis)
  const ux = (tip.x - start.x) / maxDistFromStart;
  const uy = (tip.y - start.y) / maxDistFromStart;
  let maxBackProj = 0;
  let maxSideOffset = 0;
  for (const p of headPts) {
    const vx = p.x - tip.x;
    const vy = p.y - tip.y;
    const proj = -(vx * ux + vy * uy); // positive when folding back along shaft
    const perp = Math.abs(vx * -uy + vy * ux);
    if (proj > maxBackProj) maxBackProj = proj;
    if (perp > maxSideOffset) maxSideOffset = perp;
  }

  if (maxBackProj < 5 || maxSideOffset < 4) return null;

  // Construct clean geometric shaft + symmetric wings (±30°)
  let endX = tip.x;
  let endY = tip.y;
  const angleDeg = (Math.atan2(endY - start.y, endX - start.x) * 180) / Math.PI;
  let startX = start.x;
  let startY = start.y;
  if (Math.abs(angleDeg) <= 7 || Math.abs(Math.abs(angleDeg) - 180) <= 7) {
    const avgY = (startY + endY) / 2;
    startY = avgY;
    endY = avgY;
  } else if (Math.abs(Math.abs(angleDeg) - 90) <= 7) {
    const avgX = (startX + endX) / 2;
    startX = avgX;
    endX = avgX;
  }

  const finalLen = dist2D(startX, startY, endX, endY);
  const wingLen = Math.max(10, Math.min(22, finalLen * 0.18));
  const theta = Math.atan2(endY - startY, endX - startX);
  const wingAngle = (30 * Math.PI) / 180;

  const leftWingX = endX - wingLen * Math.cos(theta - wingAngle);
  const leftWingY = endY - wingLen * Math.sin(theta - wingAngle);
  const rightWingX = endX - wingLen * Math.cos(theta + wingAngle);
  const rightWingY = endY - wingLen * Math.sin(theta + wingAngle);

  const nStart = normalizeCanvasPointToBlock(startX, startY, anchorBlock, 0.55);
  const nTip = normalizeCanvasPointToBlock(endX, endY, anchorBlock, 0.55);
  const nLeft = normalizeCanvasPointToBlock(leftWingX, leftWingY, anchorBlock, 0.55);
  const nRight = normalizeCanvasPointToBlock(rightWingX, rightWingY, anchorBlock, 0.55);

  return {
    smartShape: {
      kind: 'arrow',
      points: [nStart, nTip],
      arrowHeadLeft: { x: nLeft.x, y: nLeft.y },
      arrowHeadRight: { x: nRight.x, y: nRight.y },
      confidence: 0.9,
    },
    representativePoints: [nStart, nTip, nLeft, nTip, nRight],
  };
}

/**
 * Recognizes geometric shapes drawn with the Pen tool after a prolonged hold:
 * straight line, arrow, circle, ellipse, square, rectangle, triangle.
 * Strictly guards against misclassifying handwriting, digits, or calculations.
 */
export function recognizePenShape(
  rawCanvasPts: ReadonlyArray<CanvasPoint2D>,
  anchorBlock: BlockRect
): {
  smartShape: SmartShapeGeometry;
  representativePoints: PenPoint[];
} | null {
  if (rawCanvasPts.length < 2) return null;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const p of rawCanvasPts) {
    if (p.x < minX) minX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x;
    if (p.y > maxY) maxY = p.y;
  }

  const bboxW = maxX - minX;
  const bboxH = maxY - minY;
  const diag = Math.hypot(bboxW, bboxH);
  const pathLen = computePolylineLength(rawCanvasPts);

  // Handwriting / small letter / punctuation guard
  if (pathLen < 36 || Math.max(bboxW, bboxH) < 24) {
    return null;
  }

  const first = rawCanvasPts[0];
  const last = rawCanvasPts[rawCanvasPts.length - 1];
  const startToEnd = dist2D(first.x, first.y, last.x, last.y);

  // 1. Open shapes: Straight Line or Arrow
  const isClosed = startToEnd <= Math.max(28, diag * 0.32);
  if (!isClosed) {
    const arrow = fitArrowShape(rawCanvasPts, anchorBlock);
    if (arrow) return arrow;

    const straightness = startToEnd / Math.max(1, pathLen);
    if (startToEnd >= 28 && straightness >= 0.9) {
      let maxDev = 0;
      for (const p of rawCanvasPts) {
        const d = pointToInfiniteLineDist(p.x, p.y, first.x, first.y, last.x, last.y);
        if (d > maxDev) maxDev = d;
      }
      if (maxDev <= Math.max(10, startToEnd * 0.08)) {
        let sx = first.x;
        let sy = first.y;
        let ex = last.x;
        let ey = last.y;
        const angleDeg = (Math.atan2(ey - sy, ex - sx) * 180) / Math.PI;
        if (Math.abs(angleDeg) <= 8 || Math.abs(Math.abs(angleDeg) - 180) <= 8) {
          const avgY = (sy + ey) / 2;
          sy = avgY;
          ey = avgY;
        } else if (Math.abs(Math.abs(angleDeg) - 90) <= 8) {
          const avgX = (sx + ex) / 2;
          sx = avgX;
          ex = avgX;
        }
        const n1 = normalizeCanvasPointToBlock(sx, sy, anchorBlock, 0.55);
        const n2 = normalizeCanvasPointToBlock(ex, ey, anchorBlock, 0.55);
        return {
          smartShape: {
            kind: 'line',
            points: [n1, n2],
            confidence: Math.min(0.97, straightness),
          },
          representativePoints: [n1, n2],
        };
      }
    }

    return null;
  }

  // 2. Closed shapes require larger minimum footprint so handwritten "o", "0", "8", "a" aren't snapped
  if (rawCanvasPts.length < 6 || pathLen < 75 || bboxW < 22 || bboxH < 22) {
    return null;
  }

  const samples = resamplePolyline(rawCanvasPts, 48);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const rx = bboxW / 2;
  const ry = bboxH / 2;

  // Check total signed winding angle (~360° single loop; prevents "8" or self-crossing loops)
  let totalAngle = 0;
  for (let i = 1; i < samples.length; i++) {
    const a1 = Math.atan2(samples[i - 1].y - cy, samples[i - 1].x - cx);
    const a2 = Math.atan2(samples[i].y - cy, samples[i].x - cx);
    let da = a2 - a1;
    while (da > Math.PI) da -= Math.PI * 2;
    while (da < -Math.PI) da += Math.PI * 2;
    totalAngle += da;
  }
  const absWindingDeg = (Math.abs(totalAngle) * 180) / Math.PI;
  if (absWindingDeg < 275 || absWindingDeg > 470) {
    return null;
  }

  // Evaluate Ellipse/Circle radial error vs Axis-Aligned Box edge error
  let ellipseErrSum = 0;
  let boxEdgeErrSum = 0;
  for (const p of samples) {
    const nx = (p.x - cx) / Math.max(1, rx);
    const ny = (p.y - cy) / Math.max(1, ry);
    ellipseErrSum += Math.abs(Math.hypot(nx, ny) - 1);

    const dBox = Math.min(
      Math.abs(p.x - minX),
      Math.abs(p.x - maxX),
      Math.abs(p.y - minY),
      Math.abs(p.y - maxY)
    );
    boxEdgeErrSum += dBox / Math.max(1, Math.min(rx, ry));
  }
  const meanEllipseErr = ellipseErrSum / samples.length;
  const meanBoxErr = boxEdgeErrSum / samples.length;

  // Check simplified polygon corners (with closed loop wrapped)
  const closedForRdp = [...samples, samples[0]];
  const simplified = rdpSimplify(closedForRdp, Math.max(6, diag * 0.075));
  const rawCorners = simplified.slice(0, -1); // remove duplicate closing vertex

  // Merge adjacent corners that are very close (< diag * 0.14)
  const corners: Array<{ x: number; y: number }> = [];
  for (const c of rawCorners) {
    if (
      corners.length === 0 ||
      dist2D(corners[corners.length - 1].x, corners[corners.length - 1].y, c.x, c.y) >
        diag * 0.14
    ) {
      corners.push(c);
    }
  }
  if (
    corners.length > 2 &&
    dist2D(
      corners[0].x,
      corners[0].y,
      corners[corners.length - 1].x,
      corners[corners.length - 1].y
    ) <=
      diag * 0.14
  ) {
    corners.pop();
  }

  // Candidate A: Triangle (3 crisp vertices + low edge error + meaningful area)
  if (corners.length === 3) {
    const [a, b, c] = corners;
    const triArea =
      Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / 2;
    let maxTriDev = 0;
    for (const p of samples) {
      const d = Math.min(
        pointToSegmentDist(p.x, p.y, a.x, a.y, b.x, b.y),
        pointToSegmentDist(p.x, p.y, b.x, b.y, c.x, c.y),
        pointToSegmentDist(p.x, p.y, c.x, c.y, a.x, a.y)
      );
      if (d > maxTriDev) maxTriDev = d;
    }
    if (triArea >= bboxW * bboxH * 0.2 && maxTriDev <= Math.max(12, diag * 0.11)) {
      const nA = normalizeCanvasPointToBlock(a.x, a.y, anchorBlock, 0.55);
      const nB = normalizeCanvasPointToBlock(b.x, b.y, anchorBlock, 0.55);
      const nC = normalizeCanvasPointToBlock(c.x, c.y, anchorBlock, 0.55);
      const pts = [nA, nB, nC, nA];
      return {
        smartShape: {
          kind: 'triangle',
          points: pts,
          confidence: 0.88,
        },
        representativePoints: pts,
      };
    }
  }

  // Candidate B: Rectangle / Square (clean hug around 4 box edges & clearly closer to box than ellipse)
  if (meanBoxErr <= 0.18 && (meanBoxErr < meanEllipseErr * 0.82 || corners.length === 4)) {
    const aspect = Math.min(bboxW, bboxH) / Math.max(1, Math.max(bboxW, bboxH));
    const isSquare = aspect >= 0.84;
    const finalW = isSquare ? (bboxW + bboxH) / 2 : bboxW;
    const finalH = isSquare ? finalW : bboxH;
    const left = cx - finalW / 2;
    const top = cy - finalH / 2;
    const right = cx + finalW / 2;
    const bottom = cy + finalH / 2;

    const tl = normalizeCanvasPointToBlock(left, top, anchorBlock, 0.55);
    const tr = normalizeCanvasPointToBlock(right, top, anchorBlock, 0.55);
    const br = normalizeCanvasPointToBlock(right, bottom, anchorBlock, 0.55);
    const bl = normalizeCanvasPointToBlock(left, bottom, anchorBlock, 0.55);
    const pts = [tl, tr, br, bl, tl];

    return {
      smartShape: {
        kind: isSquare ? 'square' : 'rectangle',
        points: pts,
        confidence: Math.max(0.75, 1 - meanBoxErr),
      },
      representativePoints: pts,
    };
  }

  // Candidate C: Circle / Ellipse
  if (meanEllipseErr <= 0.2) {
    const aspect = Math.min(rx, ry) / Math.max(1, Math.max(rx, ry));
    const isCircle = aspect >= 0.84;
    const finalRx = isCircle ? (rx + ry) / 2 : rx;
    const finalRy = isCircle ? finalRx : ry;

    const normCx = (cx - anchorBlock.left) / Math.max(1, anchorBlock.width);
    const normCy = (cy - anchorBlock.top) / Math.max(1, anchorBlock.height);
    const normRx = finalRx / Math.max(1, anchorBlock.width);
    const normRy = finalRy / Math.max(1, anchorBlock.height);

    // Sample 32 perimeter points for accurate Por Traço eraser hit-testing
    const rep: PenPoint[] = [];
    for (let i = 0; i <= 32; i++) {
      const ang = (i / 32) * Math.PI * 2;
      rep.push({
        x: normCx + normRx * Math.cos(ang),
        y: normCy + normRy * Math.sin(ang),
        pressure: 0.55,
      });
    }

    return {
      smartShape: {
        kind: isCircle ? 'circle' : 'ellipse',
        cx: normCx,
        cy: normCy,
        rx: normRx,
        ry: normRy,
        confidence: Math.max(0.76, 1 - meanEllipseErr),
      },
      representativePoints: rep,
    };
  }

  return null;
}

/**
 * Allows live endpoint/size adjustment if the user continues dragging the pen
 * right after a shape snaps while still holding contact with the screen.
 */
export function adjustSnappedShapeWithPointer(
  smartShape: SmartShapeGeometry,
  pointerX: number,
  pointerY: number,
  anchorBlock: BlockRect
): {
  smartShape: SmartShapeGeometry;
  representativePoints: PenPoint[];
} | null {
  if (smartShape.kind === 'line' && smartShape.points && smartShape.points.length >= 2) {
    const startNorm = smartShape.points[0];
    const startX = anchorBlock.left + startNorm.x * anchorBlock.width;
    const startY = anchorBlock.top + startNorm.y * anchorBlock.height;
    let ex = pointerX;
    let ey = pointerY;
    const angleDeg = (Math.atan2(ey - startY, ex - startX) * 180) / Math.PI;
    if (Math.abs(angleDeg) <= 6 || Math.abs(Math.abs(angleDeg) - 180) <= 6) {
      ey = startY;
    } else if (Math.abs(Math.abs(angleDeg) - 90) <= 6) {
      ex = startX;
    }
    const nEnd = normalizeCanvasPointToBlock(ex, ey, anchorBlock, 0.55);
    return {
      smartShape: { ...smartShape, points: [startNorm, nEnd] },
      representativePoints: [startNorm, nEnd],
    };
  }

  if (smartShape.kind === 'arrow' && smartShape.points && smartShape.points.length >= 2) {
    const startNorm = smartShape.points[0];
    const startX = anchorBlock.left + startNorm.x * anchorBlock.width;
    const startY = anchorBlock.top + startNorm.y * anchorBlock.height;
    const finalLen = dist2D(startX, startY, pointerX, pointerY);
    if (finalLen < 16) return null;
    const wingLen = Math.max(10, Math.min(22, finalLen * 0.18));
    const theta = Math.atan2(pointerY - startY, pointerX - startX);
    const wingAngle = (30 * Math.PI) / 180;
    const nTip = normalizeCanvasPointToBlock(pointerX, pointerY, anchorBlock, 0.55);
    const nLeft = normalizeCanvasPointToBlock(
      pointerX - wingLen * Math.cos(theta - wingAngle),
      pointerY - wingLen * Math.sin(theta - wingAngle),
      anchorBlock,
      0.55
    );
    const nRight = normalizeCanvasPointToBlock(
      pointerX - wingLen * Math.cos(theta + wingAngle),
      pointerY - wingLen * Math.sin(theta + wingAngle),
      anchorBlock,
      0.55
    );
    return {
      smartShape: {
        ...smartShape,
        points: [startNorm, nTip],
        arrowHeadLeft: { x: nLeft.x, y: nLeft.y },
        arrowHeadRight: { x: nRight.x, y: nRight.y },
      },
      representativePoints: [startNorm, nTip, nLeft, nTip, nRight],
    };
  }

  if (
    (smartShape.kind === 'circle' || smartShape.kind === 'ellipse') &&
    smartShape.cx !== undefined &&
    smartShape.cy !== undefined
  ) {
    const cx = anchorBlock.left + smartShape.cx * anchorBlock.width;
    const cy = anchorBlock.top + smartShape.cy * anchorBlock.height;
    const distR = dist2D(cx, cy, pointerX, pointerY);
    if (distR < 10) return null;
    const nextRx =
      smartShape.kind === 'circle'
        ? distR
        : Math.max(10, Math.abs(pointerX - cx));
    const nextRy =
      smartShape.kind === 'circle'
        ? distR
        : Math.max(10, Math.abs(pointerY - cy));
    const normRx = nextRx / Math.max(1, anchorBlock.width);
    const normRy = nextRy / Math.max(1, anchorBlock.height);
    const rep: PenPoint[] = [];
    for (let i = 0; i <= 32; i++) {
      const ang = (i / 32) * Math.PI * 2;
      rep.push({
        x: smartShape.cx + normRx * Math.cos(ang),
        y: smartShape.cy + normRy * Math.sin(ang),
        pressure: 0.55,
      });
    }
    return {
      smartShape: { ...smartShape, rx: normRx, ry: normRy },
      representativePoints: rep,
    };
  }

  return null;
}
