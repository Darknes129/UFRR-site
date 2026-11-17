'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Eraser,
  Hand,
  Highlighter,
  PenTool,
  Redo2,
  Trash2,
  Undo2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import type { PenPoint, PenStroke, PenTool as PenToolType, ScratchpadDocument } from '@/lib/types';

interface PenCanvasProps {
  docId: string;
  scope: ScratchpadDocument['scope'];
  targetId: string;
  title: string;
  initialDoc?: ScratchpadDocument;
  lined?: boolean;
  defaultPalmRejection?: boolean;
  onPalmRejectionChange?: (enabled: boolean) => void;
  onSave: (doc: ScratchpadDocument) => Promise<void>;
  minHeightClass?: string;
  showZoomControls?: boolean;
  testId?: string;
}

const INK_COLORS = [
  { label: 'Grafite', value: '#1E293B', darkValue: '#F1F5F9' },
  { label: 'Azul Caneta', value: '#1D4ED8', darkValue: '#60A5FA' },
  { label: 'Vermelho', value: '#DC2626', darkValue: '#F87171' },
  { label: 'Verde', value: '#059669', darkValue: '#34D399' },
  { label: 'Marca-texto Âmbar', value: '#F59E0B', darkValue: '#FBBF24' },
];

const STROKE_WIDTHS = [
  { label: 'Fina', value: 2 },
  { label: 'Média', value: 3.5 },
  { label: 'Larga', value: 6 },
];

function drawStrokeOnContext(
  ctx: CanvasRenderingContext2D,
  stroke: PenStroke,
  isDarkTheme: boolean
) {
  if (stroke.points.length === 0) return;

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (stroke.tool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    ctx.globalAlpha = 1;
  } else {
    ctx.globalCompositeOperation = 'source-over';
    // Adapt graphite ink visually in dark mode if default dark ink was used
    let resolvedColor = stroke.color;
    if (isDarkTheme && stroke.color === '#1E293B') {
      resolvedColor = '#F1F5F9';
    } else if (!isDarkTheme && stroke.color === '#F1F5F9') {
      resolvedColor = '#1E293B';
    }
    ctx.strokeStyle = resolvedColor;
    ctx.globalAlpha = stroke.opacity;
  }

  const pts = stroke.points;
  if (pts.length === 1) {
    const p = pts[0];
    const r = Math.max(1, (stroke.baseWidth * (0.5 + p.pressure)) / 2);
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    ctx.restore();
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

    const pressureFactor =
      stroke.tool === 'highlighter'
        ? 3.2
        : stroke.tool === 'eraser'
          ? 4.2
          : 0.65 + (curr.pressure || 0.5) * 0.85;

    ctx.lineWidth = Math.max(1.2, stroke.baseWidth * pressureFactor);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    if (next) {
      ctx.quadraticCurveTo(prev.x, prev.y, endX, endY);
    } else {
      ctx.quadraticCurveTo(prev.x, prev.y, curr.x, curr.y);
    }
    ctx.stroke();
  }

  ctx.restore();
}

export const PenCanvas: React.FC<PenCanvasProps> = (props) => {
  return <PenCanvasInner key={props.docId} {...props} />;
};

const PenCanvasInner: React.FC<PenCanvasProps> = ({
  docId,
  scope,
  targetId,
  title,
  initialDoc,
  lined = false,
  defaultPalmRejection = true,
  onPalmRejectionChange,
  onSave,
  minHeightClass = 'h-[360px]',
  showZoomControls = false,
  testId = 'pen-canvas',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [strokes, setStrokes] = useState<PenStroke[]>(initialDoc?.strokes ?? []);
  const [redoStack, setRedoStack] = useState<PenStroke[]>([]);
  const [tool, setTool] = useState<PenToolType>('pen');
  const [color, setColor] = useState<string>('#1E293B');
  const [baseWidth, setBaseWidth] = useState<number>(3.5);
  const [palmRejection, setPalmRejection] = useState<boolean>(defaultPalmRejection);
  const [zoom, setZoom] = useState<number>(1);
  const [lastPointerType, setLastPointerType] = useState<string>('ready');
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');

  const activeStrokeRef = useRef<PenStroke | null>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDarkTheme = useMemo(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  }, []);

  const logicalWidth = 900;
  const logicalHeight = lined ? 1120 : 640;

  const redrawCanvas = useCallback(
    (strokeList: PenStroke[], active?: PenStroke | null) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const targetW = Math.round(logicalWidth * dpr);
      const targetH = Math.round(logicalHeight * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      const dark = document.documentElement.classList.contains('dark');
      for (const s of strokeList) {
        drawStrokeOnContext(ctx, s, dark);
      }
      if (active) {
        drawStrokeOnContext(ctx, active, dark);
      }
    },
    [logicalHeight, logicalWidth]
  );

  useEffect(() => {
    redrawCanvas(strokes, activeStrokeRef.current);
  }, [strokes, redrawCanvas, isDarkTheme]);

  // Observe theme changes on <html> to re-tint graphite ink cleanly
  useEffect(() => {
    if (typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver(() => {
      redrawCanvas(strokes, activeStrokeRef.current);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, [strokes, redrawCanvas]);

  const schedulePersist = useCallback(
    (nextStrokes: PenStroke[]) => {
      setSaveState('saving');
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(async () => {
        await onSave({
          id: docId,
          scope,
          targetId,
          title,
          strokes: nextStrokes,
          pageWidth: logicalWidth,
          pageHeight: logicalHeight,
          lined,
          updatedAt: new Date().toISOString(),
        });
        setSaveState('saved');
      }, 280);
    },
    [docId, lined, logicalHeight, logicalWidth, onSave, scope, targetId, title]
  );

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  const toCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>): PenPoint => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * logicalWidth;
    const y = ((e.clientY - rect.top) / rect.height) * logicalHeight;
    const pressure =
      e.pointerType === 'pen' && e.pressure > 0 ? e.pressure : 0.55;
    return { x, y, pressure };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // Palm rejection: when enabled, reject finger `touch` events while accepting `pen` & `mouse`
    if (palmRejection && e.pointerType === 'touch') {
      return;
    }
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture is unavailable
    }
    setLastPointerType(e.pointerType);

    const point = toCanvasPoint(e);
    const chosenColor =
      tool === 'highlighter' && color === '#1E293B' ? '#F59E0B' : color;

    const newStroke: PenStroke = {
      id: `st-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      tool,
      color: chosenColor,
      baseWidth,
      opacity: tool === 'highlighter' ? 0.34 : 1,
      points: [point],
    };

    activeStrokeRef.current = newStroke;
    redrawCanvas(strokes, newStroke);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const active = activeStrokeRef.current;
    if (!active) return;
    if (palmRejection && e.pointerType === 'touch') return;
    e.preventDefault();

    // Capture coalesced high-frequency events when supported (Xiaomi Focus Pen Pro 120Hz/240Hz)
    const nativeEvt = e.nativeEvent as PointerEvent;
    const coalesced =
      typeof nativeEvt.getCoalescedEvents === 'function'
        ? nativeEvt.getCoalescedEvents()
        : [nativeEvt];

    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    for (const ev of coalesced) {
      const x = ((ev.clientX - rect.left) / rect.width) * logicalWidth;
      const y = ((ev.clientY - rect.top) / rect.height) * logicalHeight;
      const pressure =
        ev.pointerType === 'pen' && ev.pressure > 0 ? ev.pressure : 0.55;

      const last = active.points[active.points.length - 1];
      if (!last || Math.hypot(x - last.x, y - last.y) >= 1.1) {
        active.points.push({ x, y, pressure });
      }
    }

    redrawCanvas(strokes, active);
  };

  const finishStroke = () => {
    const active = activeStrokeRef.current;
    if (!active) return;
    activeStrokeRef.current = null;
    const nextStrokes = [...strokes, active];
    setStrokes(nextStrokes);
    setRedoStack([]);
    void schedulePersist(nextStrokes);
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    const removed = strokes[strokes.length - 1];
    const next = strokes.slice(0, -1);
    setStrokes(next);
    setRedoStack((prev) => [removed, ...prev]);
    void schedulePersist(next);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const [restore, ...rest] = redoStack;
    const next = [...strokes, restore];
    setStrokes(next);
    setRedoStack(rest);
    void schedulePersist(next);
  };

  const handleClear = () => {
    if (strokes.length === 0) return;
    setStrokes([]);
    setRedoStack([]);
    void schedulePersist([]);
  };

  const togglePalmRejection = () => {
    const next = !palmRejection;
    setPalmRejection(next);
    onPalmRejectionChange?.(next);
  };

  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] overflow-hidden">
      {/* Toolbar tailored for Pen & Touch (min 44px touch targets) */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-[#11161D] px-3 py-2">
        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => setTool('pen')}
            aria-label="Ferramenta Caneta"
            aria-pressed={tool === 'pen'}
            className={`min-h-[40px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              tool === 'pen'
                ? 'bg-neutral-900 text-white dark:bg-blue-600'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800'
            }`}
          >
            <PenTool className="w-4 h-4" />
            Caneta
          </button>

          <button
            type="button"
            onClick={() => setTool('highlighter')}
            aria-label="Ferramenta Marca-texto"
            aria-pressed={tool === 'highlighter'}
            className={`min-h-[40px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              tool === 'highlighter'
                ? 'bg-amber-500 text-neutral-950'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800'
            }`}
          >
            <Highlighter className="w-4 h-4" />
            Marca-texto
          </button>

          <button
            type="button"
            onClick={() => setTool('eraser')}
            aria-label="Ferramenta Borracha"
            aria-pressed={tool === 'eraser'}
            className={`min-h-[40px] px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              tool === 'eraser'
                ? 'bg-neutral-900 text-white dark:bg-blue-600'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-800'
            }`}
          >
            <Eraser className="w-4 h-4" />
            Borracha
          </button>
        </div>

        {/* Ink Colors & Widths */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-1.5">
            {INK_COLORS.map((swatch) => {
              const active = color === swatch.value;
              return (
                <button
                  key={swatch.value}
                  type="button"
                  onClick={() => {
                    setColor(swatch.value);
                    if (tool === 'eraser') setTool('pen');
                  }}
                  aria-label={`Cor ${swatch.label}`}
                  aria-pressed={active}
                  className={`w-7 h-7 rounded-full border transition-transform flex items-center justify-center ${
                    active
                      ? 'scale-110 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-[#11161D] border-transparent'
                      : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                  style={{ backgroundColor: swatch.value }}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-1 border-l border-neutral-200 dark:border-neutral-800 pl-2">
            {STROKE_WIDTHS.map((w) => (
              <button
                key={w.label}
                type="button"
                onClick={() => setBaseWidth(w.value)}
                aria-label={`Espessura ${w.label}`}
                aria-pressed={baseWidth === w.value}
                className={`min-h-[36px] px-2.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  baseWidth === w.value
                    ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        {/* Palm Rejection, Undo/Redo, Zoom, Clear */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={togglePalmRejection}
            aria-label="Alternar rejeição de palma (apenas caneta)"
            aria-pressed={palmRejection}
            title="Quando ativo, ignora toques com os dedos na área de escrita para apoiar a mão"
            className={`min-h-[40px] px-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              palmRejection
                ? 'bg-blue-600/12 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/60 dark:hover:bg-neutral-800'
            }`}
          >
            <Hand className="w-4 h-4" />
            {palmRejection ? 'Apenas caneta/mouse' : 'Toque livre'}
          </button>

          {showZoomControls && (
            <>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.85, Math.round((z - 0.15) * 100) / 100))}
                aria-label="Reduzir zoom da folha"
                className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono tabular-nums text-neutral-500 px-1">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(1.6, Math.round((z + 0.15) * 100) / 100))}
                aria-label="Ampliar zoom da folha"
                className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={handleUndo}
            disabled={strokes.length === 0}
            aria-label="Desfazer traço"
            className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 disabled:opacity-35"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            aria-label="Refazer traço"
            className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 disabled:opacity-35"
          >
            <Redo2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={strokes.length === 0}
            aria-label="Limpar rascunho"
            className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 disabled:opacity-35"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Drawing Surface */}
      <div
        ref={containerRef}
        className={`relative w-full overflow-auto bg-[#FFFEFB] dark:bg-[#10151C] ${minHeightClass}`}
      >
        <div
          className="relative mx-auto origin-top-left"
          style={{
            width: `${100 * zoom}%`,
            aspectRatio: `${logicalWidth} / ${logicalHeight}`,
          }}
        >
          {/* Subtle paper grid or ruled essay lines */}
          {lined ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to bottom, transparent, transparent 35px, rgba(148,163,184,0.22) 35px, rgba(148,163,184,0.22) 36px)',
                backgroundPositionY: '32px',
              }}
            />
          ) : (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(148,163,184,0.45) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          )}

          <canvas
            ref={canvasRef}
            data-testid={testId}
            data-strokes={strokes.length}
            data-pointer={lastPointerType}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishStroke}
            onPointerCancel={finishStroke}
            className="relative z-10 block h-full w-full cursor-crosshair touch-none select-none"
          />
        </div>
      </div>

      {/* Subtle footer metadata */}
      <div className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs text-neutral-500 dark:text-neutral-400">
        <span>
          {strokes.length === 0
            ? 'Superfície pronta para escrita com caneta ou mouse'
            : `${strokes.length} ${strokes.length === 1 ? 'traço' : 'traços'} registrados`}
        </span>
        <span className="tabular-nums">
          {saveState === 'saving'
            ? 'Salvando localmente...'
            : saveState === 'saved'
              ? 'Salvo no dispositivo'
              : palmRejection
                ? 'Rejeição de palma ativa'
                : 'Toque e caneta ativos'}
        </span>
      </div>
    </div>
  );
};
