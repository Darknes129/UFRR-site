'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Activity,
  ArrowLeftRight,
  Eraser,
  Hand,
  Highlighter,
  PenTool,
  Redo2,
  Settings2,
  Sparkles,
  Trash2,
  Undo2,
  X,
} from 'lucide-react';
import {
  ANNOTATION_HIGHLIGHTER_COLORS,
  ANNOTATION_PEN_COLORS,
  ANNOTATION_WIDTHS,
  classifyHardwareStylusSignal,
  clientToNormalizedPoint,
  computeStrokeSegmentWidth,
  findBlockAtPoint,
  findHitStrokeIds,
  getHighlighterLayerOpacity,
  loadAnnotationPreferences,
  normalizePressure,
  pushHistorySnapshot,
  redoHistory,
  renderAnnotationStrokeOnContext,
  renderLayeredAnnotationsOnContexts,
  saveAnnotationPreferences,
  undoHistory,
  type AnnotationPreferences,
  type AnnotationTool,
  type BlockRect,
  type StrokeHistoryState,
  type StylusHardwareGesture,
} from '@/lib/annotation-engine';
import {
  adjustSnappedShapeWithPointer,
  collectSurfaceTextWords,
  getSmartShapeLabel,
  matchHighlighterStrokeToTextLines,
  recognizePenShape,
  type CanvasPoint2D,
} from '@/lib/smart-drawing';
import type {
  EraserMode,
  PenStroke,
  Question,
  ScratchpadDocument,
} from '@/lib/types';

interface DiagnosticEventEntry {
  id: number;
  time: string;
  type: string;
  detail: string;
}

interface QuestionAnnotationSessionProps {
  question: Question;
  mode: 'study' | 'exam';
  initialDoc?: ScratchpadDocument;
  isDrawingMode: boolean;
  annotationsVisible: boolean;
  palmRejection: boolean;
  onPalmRejectionChange: (enabled: boolean) => void;
  onSave: (doc: ScratchpadDocument) => Promise<void>;
  onAnnotationsStateChange: (info: {
    strokeCount: number;
    saveState: 'idle' | 'saving' | 'saved';
  }) => void;
  onExitDrawingMode: () => void;
  children: React.ReactNode;
}

function measureSurfaceBlocks(surface: HTMLDivElement): {
  canvasRect: DOMRect;
  blocks: BlockRect[];
  blockMap: Map<string, BlockRect>;
  rootBlock: BlockRect;
} {
  const canvasRect = surface.getBoundingClientRect();
  const rootBlock: BlockRect = {
    id: 'question-root',
    left: 0,
    top: 0,
    width: Math.max(1, canvasRect.width),
    height: Math.max(1, canvasRect.height),
  };
  const blocks: BlockRect[] = [];
  const blockMap = new Map<string, BlockRect>([[rootBlock.id, rootBlock]]);

  const nodes = surface.querySelectorAll<HTMLElement>('[data-annotation-block]');
  nodes.forEach((el) => {
    const id = el.dataset.annotationBlock;
    if (!id || id === 'question-root') return;
    const r = el.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return;
    const rect: BlockRect = {
      id,
      left: r.left - canvasRect.left,
      top: r.top - canvasRect.top,
      width: r.width,
      height: r.height,
    };
    blocks.push(rect);
    blockMap.set(id, rect);
  });

  return { canvasRect, blocks, blockMap, rootBlock };
}

export const QuestionAnnotationSession: React.FC<QuestionAnnotationSessionProps> = ({
  question,
  mode,
  initialDoc,
  isDrawingMode,
  annotationsVisible,
  palmRejection,
  onPalmRejectionChange,
  onSave,
  onAnnotationsStateChange,
  onExitDrawingMode,
  children,
}) => {
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const docId = `q-overlay-${question.id}`;
  const initialStrokes = useMemo(
    () => initialDoc?.strokes ?? [],
    [initialDoc]
  );

  const [history, setHistory] = useState<StrokeHistoryState>(() => ({
    past: [],
    present: initialStrokes,
    future: [],
  }));
  const [prefs, setPrefs] = useState<AnnotationPreferences>(() =>
    loadAnnotationPreferences()
  );
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [confirmClear, setConfirmClear] = useState(false);
  const [showPenSettings, setShowPenSettings] = useState(false);
  const [capturingShortcut, setCapturingShortcut] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [diagnosticLogs, setDiagnosticLogs] = useState<DiagnosticEventEntry[]>([]);
  const [bridgeDetected, setBridgeDetected] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [smartFeedback, setSmartFeedback] = useState<string | null>(null);
  const [activeSmartKind, setActiveSmartKind] = useState<string | null>(null);

  const contentRootRef = useRef<HTMLDivElement | null>(null);
  const highlighterCommittedCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const highlighterActiveCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const committedCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const penActiveCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const hoverCursorRef = useRef<HTMLDivElement | null>(null);

  const activeStrokeRef = useRef<PenStroke | null>(null);
  const isStrokeErasingRef = useRef(false);
  const erasePreviewStrokesRef = useRef<PenStroke[] | null>(null);
  const activeTouchesRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const prevTwoFingerYRef = useRef<number | null>(null);

  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdAnchorClientRef = useRef<{ x: number; y: number } | null>(null);
  const morphRafRef = useRef<number>(0);
  const smartSnappedRef = useRef(false);
  const smartMorphProgressRef = useRef(1);
  const smartFeedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefsRef = useRef(prefs);
  const strokesRef = useRef<PenStroke[]>(history.present);
  const dirtyRef = useRef(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onSaveRef = useRef(onSave);
  const docMetaRef = useRef({
    docId,
    targetId: question.id,
    title: `Anotações · ${question.originalCode}`,
  });

  useEffect(() => {
    prefsRef.current = prefs;
  }, [prefs]);

  useEffect(() => {
    onSaveRef.current = onSave;
  }, [onSave]);

  useEffect(() => {
    docMetaRef.current = {
      docId,
      targetId: question.id,
      title: `Anotações · ${question.originalCode}`,
    };
  }, [docId, question.id, question.originalCode]);

  useEffect(() => {
    strokesRef.current = history.present;
  }, [history.present]);

  useEffect(() => {
    onAnnotationsStateChange({
      strokeCount: history.present.length,
      saveState,
    });
  }, [history.present.length, onAnnotationsStateChange, saveState]);

  const updatePrefs = useCallback(
    (updater: (prev: AnnotationPreferences) => AnnotationPreferences) => {
      setPrefs((prev) => {
        const next = updater(prev);
        saveAnnotationPreferences(next);
        return next;
      });
    },
    []
  );

  const buildDocPayload = useCallback((strokes: PenStroke[]): ScratchpadDocument => {
    const surface = surfaceRef.current;
    const rect = surface?.getBoundingClientRect();
    return {
      id: docMetaRef.current.docId,
      scope: 'question-overlay',
      targetId: docMetaRef.current.targetId,
      title: docMetaRef.current.title,
      strokes,
      pageWidth: Math.round(rect?.width || 800),
      pageHeight: Math.round(rect?.height || 900),
      updatedAt: new Date().toISOString(),
    };
  }, []);

  const schedulePersist = useCallback(
    (nextStrokes: PenStroke[]) => {
      dirtyRef.current = true;
      setSaveState('saving');
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(async () => {
        dirtyRef.current = false;
        await onSaveRef.current(buildDocPayload(nextStrokes));
        setSaveState('saved');
      }, 240);
    },
    [buildDocPayload]
  );

  // Flush unsaved strokes cleanly when switching questions or unmounting
  useEffect(() => {
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      if (smartFeedbackTimerRef.current) clearTimeout(smartFeedbackTimerRef.current);
      cancelAnimationFrame(morphRafRef.current);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      if (dirtyRef.current) {
        dirtyRef.current = false;
        void onSaveRef.current(buildDocPayload(strokesRef.current));
      }
    };
  }, [buildDocPayload]);

  const syncCanvasResolution = useCallback(
    (canvas: HTMLCanvasElement, cssWidth: number, cssHeight: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const targetW = Math.max(1, Math.round(cssWidth * dpr));
      const targetH = Math.max(1, Math.round(cssHeight * dpr));
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      return ctx;
    },
    []
  );

  const redrawCommitted = useCallback(
    (overrideStrokes?: PenStroke[]) => {
      const surface = surfaceRef.current;
      const penCanvas = committedCanvasRef.current;
      const hiCanvas = highlighterCommittedCanvasRef.current;
      if (!surface || (!penCanvas && !hiCanvas)) return;

      const { canvasRect, blockMap, rootBlock } = measureSurfaceBlocks(surface);
      const penCtx = penCanvas
        ? syncCanvasResolution(penCanvas, canvasRect.width, canvasRect.height)
        : null;
      const hiCtx = hiCanvas
        ? syncCanvasResolution(hiCanvas, canvasRect.width, canvasRect.height)
        : null;

      if (penCtx) penCtx.clearRect(0, 0, canvasRect.width, canvasRect.height);
      if (hiCtx) hiCtx.clearRect(0, 0, canvasRect.width, canvasRect.height);

      const dark = document.documentElement.classList.contains('dark');
      const list = overrideStrokes ?? strokesRef.current;
      renderLayeredAnnotationsOnContexts(
        hiCtx,
        penCtx,
        list,
        blockMap,
        rootBlock,
        dark
      );
    },
    [syncCanvasResolution]
  );

  const redrawActive = useCallback(
    (stroke: PenStroke | null, morphProgress?: number) => {
      const surface = surfaceRef.current;
      const penActiveCanvas = penActiveCanvasRef.current;
      const hiActiveCanvas = highlighterActiveCanvasRef.current;
      if (!surface) return;

      const { canvasRect, blockMap, rootBlock } = measureSurfaceBlocks(surface);
      const penCtx = penActiveCanvas
        ? syncCanvasResolution(penActiveCanvas, canvasRect.width, canvasRect.height)
        : null;
      const hiCtx = hiActiveCanvas
        ? syncCanvasResolution(hiActiveCanvas, canvasRect.width, canvasRect.height)
        : null;

      if (penCtx) penCtx.clearRect(0, 0, canvasRect.width, canvasRect.height);
      if (hiCtx) hiCtx.clearRect(0, 0, canvasRect.width, canvasRect.height);

      if (!stroke) return;
      const dark = document.documentElement.classList.contains('dark');
      const progress = morphProgress ?? smartMorphProgressRef.current;
      if (stroke.tool === 'highlighter') {
        if (hiCtx) {
          renderAnnotationStrokeOnContext(
            hiCtx,
            stroke,
            blockMap,
            rootBlock,
            dark,
            { forceOpaqueHighlighter: true, morphProgress: progress }
          );
        }
      } else if (penCtx) {
        renderAnnotationStrokeOnContext(penCtx, stroke, blockMap, rootBlock, dark, {
          morphProgress: progress,
        });
      }
    },
    [syncCanvasResolution]
  );

  // Redraw committed canvas whenever history, visibility, or layout geometry changes
  useEffect(() => {
    redrawCommitted();
  }, [history.present, annotationsVisible, redrawCommitted]);

  useEffect(() => {
    const surface = surfaceRef.current;
    if (!surface || typeof ResizeObserver === 'undefined') return;
    let rafId = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        redrawCommitted();
        redrawActive(activeStrokeRef.current);
      });
    });
    observer.observe(surface);
    const blockEls = surface.querySelectorAll('[data-annotation-block]');
    blockEls.forEach((el) => observer.observe(el));

    const handleViewportChange = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        redrawCommitted();
        redrawActive(activeStrokeRef.current);
      });
    };
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);
    document.addEventListener('fullscreenchange', handleViewportChange);
    document.addEventListener('webkitfullscreenchange', handleViewportChange);
    window.visualViewport?.addEventListener('resize', handleViewportChange);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('orientationchange', handleViewportChange);
      document.removeEventListener('fullscreenchange', handleViewportChange);
      document.removeEventListener('webkitfullscreenchange', handleViewportChange);
      window.visualViewport?.removeEventListener('resize', handleViewportChange);
    };
  }, [redrawActive, redrawCommitted]);

  // Sync theme state & re-tint ink automatically on Light/Dark theme switch
  useEffect(() => {
    const syncTheme = () => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDarkTheme(dark);
    };
    syncTheme();
    if (typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver(() => {
      syncTheme();
      redrawCommitted();
      redrawActive(activeStrokeRef.current);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, [redrawActive, redrawCommitted]);

  const togglePenAndEraser = useCallback(() => {
    updatePrefs((prev) => {
      if (prev.tool === 'eraser') {
        return { ...prev, tool: prev.lastInkTool };
      }
      const nextLastInk =
        prev.tool === 'highlighter' ? 'highlighter' : prev.lastInkTool;
      return {
        ...prev,
        lastInkTool: nextLastInk,
        tool: 'eraser',
      };
    });
  }, [updatePrefs]);

  // Keyboard shortcuts (Ctrl/Cmd+Z, Ctrl/Cmd+Y, Shift+Ctrl+Z, configurable Pen/Eraser key)
  // AND optional modular native bridge listener (`ufrr-stylus-gesture` / `window.__UFRR_STYLUS_BRIDGE__`)
  useEffect(() => {
    if (!isDrawingMode) return;

    const bridge = window.__UFRR_STYLUS_BRIDGE__;
    let cleanupBridge: (() => void) | undefined;
    Promise.resolve().then(() => {
      setBridgeDetected(Boolean(bridge));
    });

    if (bridge?.onGesture) {
      cleanupBridge = bridge.onGesture((gesture: StylusHardwareGesture) => {
        if (gesture === 'double_press' || gesture === 'barrel_secondary') {
          togglePenAndEraser();
        }
      });
    }

    const handleCustomGesture = (ev: Event) => {
      const detail = (ev as CustomEvent<{ gesture?: StylusHardwareGesture }>).detail;
      if (
        detail?.gesture === 'double_press' ||
        detail?.gesture === 'barrel_secondary'
      ) {
        togglePenAndEraser();
      }
    };
    window.addEventListener('ufrr-stylus-gesture', handleCustomGesture);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (capturingShortcut) {
        e.preventDefault();
        const keyVal = e.key.toLowerCase();
        if (keyVal !== 'escape') {
          updatePrefs((prev) => ({ ...prev, shortcutKey: keyVal }));
        }
        setCapturingShortcut(false);
        return;
      }

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          setHistory((prev) => {
            const next = redoHistory(prev);
            if (next !== prev) schedulePersist(next.present);
            return next;
          });
        } else {
          setHistory((prev) => {
            const next = undoHistory(prev);
            if (next !== prev) schedulePersist(next.present);
            return next;
          });
        }
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        setHistory((prev) => {
          const next = redoHistory(prev);
          if (next !== prev) schedulePersist(next.present);
          return next;
        });
        return;
      }

      if (
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        e.key.toLowerCase() === prefs.shortcutKey.toLowerCase()
      ) {
        e.preventDefault();
        togglePenAndEraser();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      cleanupBridge?.();
      window.removeEventListener('ufrr-stylus-gesture', handleCustomGesture);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    capturingShortcut,
    isDrawingMode,
    prefs.shortcutKey,
    schedulePersist,
    togglePenAndEraser,
    updatePrefs,
  ]);

  // Temporary live Stylus Diagnostic capture (only when diagnostic panel is explicitly open)
  useEffect(() => {
    if (!diagnosticOpen) return;

    const pushLog = (type: string, detail: string) => {
      const now = new Date();
      const time = now.toTimeString().slice(0, 8);
      setDiagnosticLogs((prev) => [
        { id: Date.now() + Math.random(), time, type, detail },
        ...prev.slice(0, 9),
      ]);
    };

    const onPointerEvent = (e: PointerEvent) => {
      if (e.type === 'pointermove' && e.buttons === 0 && e.button === -1) return;
      const coalesced =
        typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents().length : 1;
      pushLog(
        e.type,
        `ptr=${e.pointerType} btn=${e.button} btns=${e.buttons} p=${e.pressure.toFixed(2)} tilt=(${e.tiltX},${e.tiltY}) coal=${coalesced}`
      );
    };

    const onKey = (e: KeyboardEvent) => {
      pushLog('keydown', `key="${e.key}" code=${e.code}`);
    };

    window.addEventListener('pointerdown', onPointerEvent, { capture: true });
    window.addEventListener('pointerup', onPointerEvent, { capture: true });
    window.addEventListener('auxclick', onPointerEvent as EventListener, {
      capture: true,
    });
    window.addEventListener('keydown', onKey, { capture: true });

    return () => {
      window.removeEventListener('pointerdown', onPointerEvent, { capture: true });
      window.removeEventListener('pointerup', onPointerEvent, { capture: true });
      window.removeEventListener('auxclick', onPointerEvent as EventListener, {
        capture: true,
      });
      window.removeEventListener('keydown', onKey, { capture: true });
    };
  }, [diagnosticOpen]);

  const updateHoverCursor = (
    clientX: number,
    clientY: number,
    pointerType: string,
    visible: boolean
  ) => {
    const el = hoverCursorRef.current;
    const surface = surfaceRef.current;
    if (!el || !surface) return;
    if (!visible || prefs.tool === 'hand' || (pointerType === 'touch' && palmRejection)) {
      el.style.opacity = '0';
      return;
    }
    const rect = surface.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const size =
      prefs.tool === 'eraser'
        ? Math.max(12, prefs.penWidth * 4)
        : prefs.tool === 'highlighter'
          ? computeStrokeSegmentWidth('highlighter', prefs.highlighterWidth, {
              pressure: 0.5,
            })
          : Math.max(6, prefs.penWidth * 2);
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
    el.style.opacity = '1';
  };

  const eraseAtClientPoint = (clientX: number, clientY: number) => {
    const surface = surfaceRef.current;
    if (!surface) return;
    const { canvasRect, blockMap, rootBlock } = measureSurfaceBlocks(surface);
    const canvasX = clientX - canvasRect.left;
    const canvasY = clientY - canvasRect.top;
    const baseList = erasePreviewStrokesRef.current ?? strokesRef.current;
    const hitIds = findHitStrokeIds(
      baseList,
      canvasX,
      canvasY,
      Math.max(10, prefs.penWidth * 3.4),
      blockMap,
      rootBlock
    );
    if (hitIds.length === 0) return;
    const hitSet = new Set(hitIds);
    const filtered = baseList.filter((s) => !hitSet.has(s.id));
    erasePreviewStrokesRef.current = filtered;
    redrawCommitted(filtered);
  };

  const clearSmartTimers = useCallback(() => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    cancelAnimationFrame(morphRafRef.current);
    holdAnchorClientRef.current = null;
  }, []);

  const showSmartFeedbackBadge = useCallback((label: string) => {
    if (smartFeedbackTimerRef.current) clearTimeout(smartFeedbackTimerRef.current);
    setSmartFeedback(label);
    smartFeedbackTimerRef.current = setTimeout(() => {
      setSmartFeedback(null);
    }, 2400);
  }, []);

  const triggerSmartHoldRecognition = useCallback(() => {
    holdTimerRef.current = null;
    const active = activeStrokeRef.current;
    const surface = surfaceRef.current;
    const currentPrefs = prefsRef.current;
    if (!active || !surface || smartSnappedRef.current) return;
    if (!currentPrefs.smartDrawingEnabled) return;
    if (active.tool === 'highlighter' && !currentPrefs.smartHighlighterEnabled) return;
    if (active.tool === 'pen' && !currentPrefs.smartShapesEnabled) return;
    if (active.tool === 'eraser' || active.points.length < 2) return;

    const { canvasRect, blockMap, rootBlock } = measureSurfaceBlocks(surface);
    const anchorBlock =
      (active.anchorBlockId ? blockMap.get(active.anchorBlockId) : undefined) ??
      rootBlock;

    const rawCanvasPts: CanvasPoint2D[] = active.points.map((pt) => ({
      x: anchorBlock.left + pt.x * anchorBlock.width,
      y: anchorBlock.top + pt.y * anchorBlock.height,
      pressure: pt.pressure,
      tiltX: pt.tiltX,
      tiltY: pt.tiltY,
    }));

    let recognized:
      | { smartShape: NonNullable<PenStroke['smartShape']>; representativePoints: PenStroke['points'] }
      | null = null;

    if (active.tool === 'highlighter') {
      const wordBoxes = contentRootRef.current
        ? collectSurfaceTextWords(contentRootRef.current, canvasRect)
        : [];
      const widthPx = computeStrokeSegmentWidth('highlighter', active.baseWidth, {
        pressure: 0.5,
      });
      recognized = matchHighlighterStrokeToTextLines(
        rawCanvasPts,
        wordBoxes,
        blockMap,
        rootBlock,
        widthPx,
        anchorBlock
      );
    } else if (active.tool === 'pen') {
      recognized = recognizePenShape(rawCanvasPts, anchorBlock);
    }

    if (!recognized) return;

    smartSnappedRef.current = true;
    active.rawPoints = active.points.map((p) => ({ ...p }));
    active.points = recognized.representativePoints;
    active.smartShape = recognized.smartShape;
    setActiveSmartKind(recognized.smartShape.kind);
    showSmartFeedbackBadge(getSmartShapeLabel(recognized.smartShape.kind));

    try {
      if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
        navigator.vibrate(8);
      }
    } catch {
      // Ignore environments without vibration permission
    }

    // Smooth 130ms morph animation directly inside the active layer while stylus remains down
    const durationMs = 130;
    const startTime = performance.now();
    smartMorphProgressRef.current = 0;

    const animateMorph = (now: number) => {
      if (!activeStrokeRef.current || activeStrokeRef.current.id !== active.id) {
        smartMorphProgressRef.current = 1;
        return;
      }
      const rawT = Math.min(1, (now - startTime) / durationMs);
      const eased = 1 - Math.pow(1 - rawT, 3);
      smartMorphProgressRef.current = eased;
      redrawActive(active, eased);
      if (rawT < 1) {
        morphRafRef.current = requestAnimationFrame(animateMorph);
      } else {
        smartMorphProgressRef.current = 1;
      }
    };

    cancelAnimationFrame(morphRafRef.current);
    morphRafRef.current = requestAnimationFrame(animateMorph);
  }, [redrawActive, showSmartFeedbackBadge]);

  const armSmartHoldTimer = useCallback(
    (clientX: number, clientY: number) => {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      const active = activeStrokeRef.current;
      const currentPrefs = prefsRef.current;
      if (!active || smartSnappedRef.current || !currentPrefs.smartDrawingEnabled) return;
      if (active.tool === 'highlighter' && !currentPrefs.smartHighlighterEnabled) return;
      if (active.tool === 'pen' && !currentPrefs.smartShapesEnabled) return;
      if (active.tool === 'eraser') return;

      holdAnchorClientRef.current = { x: clientX, y: clientY };
      holdTimerRef.current = setTimeout(
        triggerSmartHoldRecognition,
        currentPrefs.smartHoldDurationMs
      );
    },
    [triggerSmartHoldRecognition]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingMode || prefs.tool === 'hand') return;

    // Palm rejection: ignore single-finger touch, track >=2 fingers for smooth pan-scroll
    if (palmRejection && e.pointerType === 'touch') {
      activeTouchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activeTouchesRef.current.size >= 2) {
        clearSmartTimers();
        const pts = Array.from(activeTouchesRef.current.values());
        prevTwoFingerYRef.current = (pts[0].y + pts[1].y) / 2;
      }
      return;
    }

    const hwSignal = classifyHardwareStylusSignal(
      {
        pointerType: e.pointerType,
        button: e.button,
        buttons: e.buttons,
        pressure: e.pressure,
        tiltX: e.tiltX,
        tiltY: e.tiltY,
      },
      prefs.secondaryBarrelToggle
    );

    if (hwSignal === 'secondary_barrel_toggle') {
      e.preventDefault();
      togglePenAndEraser();
      return;
    }

    // Ignore non-primary mouse buttons unless stylus hardware eraser tip is active
    if (e.button !== 0 && hwSignal !== 'eraser_tip') {
      return;
    }

    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Synthetic PointerEvents or browsers where capture is unavailable
    }

    const surface = surfaceRef.current;
    if (!surface) return;

    const effectiveTool: AnnotationTool =
      hwSignal === 'eraser_tip' ? 'eraser' : prefs.tool;

    if (effectiveTool === 'eraser' && prefs.eraserMode === 'stroke') {
      clearSmartTimers();
      isStrokeErasingRef.current = true;
      erasePreviewStrokesRef.current = strokesRef.current;
      eraseAtClientPoint(e.clientX, e.clientY);
      return;
    }

    clearSmartTimers();
    smartSnappedRef.current = false;
    smartMorphProgressRef.current = 1;
    setActiveSmartKind(null);
    setSmartFeedback(null);

    const { canvasRect, blocks, rootBlock } = measureSurfaceBlocks(surface);
    const canvasX = e.clientX - canvasRect.left;
    const canvasY = e.clientY - canvasRect.top;
    const anchorBlock = findBlockAtPoint(canvasX, canvasY, blocks, rootBlock);
    const pressure = normalizePressure(e.pointerType, e.pressure, e.buttons);
    const pt = clientToNormalizedPoint(
      e.clientX,
      e.clientY,
      canvasRect,
      anchorBlock,
      pressure,
      e.tiltX,
      e.tiltY
    );

    const baseWidth =
      effectiveTool === 'highlighter' ? prefs.highlighterWidth : prefs.penWidth;
    const color =
      effectiveTool === 'highlighter' ? prefs.highlighterColor : prefs.penColor;

    const stroke: PenStroke = {
      id: `ov-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      tool: effectiveTool as PenStroke['tool'],
      color,
      baseWidth,
      opacity:
        effectiveTool === 'highlighter'
          ? getHighlighterLayerOpacity(isDarkTheme)
          : 1,
      points: [pt],
      anchorBlockId: anchorBlock.id,
      anchorWidth: anchorBlock.width,
      anchorHeight: anchorBlock.height,
      ...(effectiveTool === 'eraser' ? { eraserMode: 'precision' } : {}),
    };

    activeStrokeRef.current = stroke;
    if (stroke.tool === 'eraser') {
      redrawCommitted([...strokesRef.current, stroke]);
    } else {
      redrawActive(stroke, 1);
      armSmartHoldTimer(e.clientX, e.clientY);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingMode || prefs.tool === 'hand') return;

    if (palmRejection && e.pointerType === 'touch') {
      if (activeTouchesRef.current.has(e.pointerId)) {
        activeTouchesRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (activeTouchesRef.current.size >= 2) {
          const pts = Array.from(activeTouchesRef.current.values());
          const avgY = (pts[0].y + pts[1].y) / 2;
          if (prevTwoFingerYRef.current !== null) {
            const deltaY = avgY - prevTwoFingerYRef.current;
            window.scrollBy({ top: -deltaY, behavior: 'auto' });
          }
          prevTwoFingerYRef.current = avgY;
        }
      }
      return;
    }

    // Hover preview when pen or mouse moves without pressing down
    if (!activeStrokeRef.current && !isStrokeErasingRef.current && e.buttons === 0) {
      updateHoverCursor(e.clientX, e.clientY, e.pointerType, true);
      return;
    }

    updateHoverCursor(e.clientX, e.clientY, e.pointerType, false);

    const nativeEvt = e.nativeEvent as PointerEvent;
    const coalesced =
      typeof nativeEvt.getCoalescedEvents === 'function'
        ? nativeEvt.getCoalescedEvents()
        : [nativeEvt];
    const events = coalesced.length > 0 ? coalesced : [nativeEvt];

    if (isStrokeErasingRef.current) {
      e.preventDefault();
      for (const ev of events) {
        eraseAtClientPoint(ev.clientX, ev.clientY);
      }
      return;
    }

    const active = activeStrokeRef.current;
    const surface = surfaceRef.current;
    if (!active || !surface) return;
    e.preventDefault();

    const { canvasRect, blockMap, rootBlock } = measureSurfaceBlocks(surface);
    const anchorBlock =
      (active.anchorBlockId ? blockMap.get(active.anchorBlockId) : undefined) ??
      rootBlock;

    // Once snapped while pen stays down: allow live endpoint/size adjustment for geometric Pen shapes,
    // while keeping snapped Smart Highlighter capsules cleanly locked onto the recognized text lines.
    if (smartSnappedRef.current && active.smartShape) {
      if (active.tool === 'pen') {
        const lastEvt = events[events.length - 1];
        const canvasX = lastEvt.clientX - canvasRect.left;
        const canvasY = lastEvt.clientY - canvasRect.top;
        const anchorClient = holdAnchorClientRef.current;
        if (
          !anchorClient ||
          Math.hypot(lastEvt.clientX - anchorClient.x, lastEvt.clientY - anchorClient.y) >= 2
        ) {
          const adjusted = adjustSnappedShapeWithPointer(
            active.smartShape,
            canvasX,
            canvasY,
            anchorBlock
          );
          if (adjusted) {
            holdAnchorClientRef.current = { x: lastEvt.clientX, y: lastEvt.clientY };
            active.smartShape = adjusted.smartShape;
            active.points = adjusted.representativePoints;
            cancelAnimationFrame(morphRafRef.current);
            smartMorphProgressRef.current = 1;
            redrawActive(active, 1);
          }
        }
      }
      return;
    }

    for (const ev of events) {
      const pressure = normalizePressure(ev.pointerType, ev.pressure, ev.buttons);
      const pt = clientToNormalizedPoint(
        ev.clientX,
        ev.clientY,
        canvasRect,
        anchorBlock,
        pressure,
        ev.tiltX,
        ev.tiltY
      );
      const last = active.points[active.points.length - 1];
      const dxPx = (pt.x - last.x) * Math.max(1, anchorBlock.width);
      const dyPx = (pt.y - last.y) * Math.max(1, anchorBlock.height);
      if (Math.hypot(dxPx, dyPx) >= 0.8) {
        active.points.push(pt);
      }
    }

    if (active.tool === 'eraser') {
      redrawCommitted([...strokesRef.current, active]);
    } else {
      redrawActive(active, 1);
      const lastEvt = events[events.length - 1];
      const holdAnchor = holdAnchorClientRef.current;
      // Only re-arm the stillness timer when the stylus moves >5px from the hold anchor
      if (
        !holdAnchor ||
        Math.hypot(lastEvt.clientX - holdAnchor.x, lastEvt.clientY - holdAnchor.y) > 5
      ) {
        armSmartHoldTimer(lastEvt.clientX, lastEvt.clientY);
      } else if (!holdTimerRef.current) {
        armSmartHoldTimer(holdAnchor.x, holdAnchor.y);
      }
    }
  };

  const finishInteraction = (e?: React.PointerEvent<HTMLCanvasElement>) => {
    if (e && e.pointerType === 'touch') {
      activeTouchesRef.current.delete(e.pointerId);
      if (activeTouchesRef.current.size < 2) {
        prevTwoFingerYRef.current = null;
      }
      if (palmRejection) return;
    }

    clearSmartTimers();
    smartSnappedRef.current = false;
    smartMorphProgressRef.current = 1;
    setActiveSmartKind(null);

    if (isStrokeErasingRef.current) {
      isStrokeErasingRef.current = false;
      const preview = erasePreviewStrokesRef.current;
      erasePreviewStrokesRef.current = null;
      if (preview && preview.length !== strokesRef.current.length) {
        setHistory((prev) => pushHistorySnapshot(prev, preview));
        schedulePersist(preview);
      } else {
        redrawCommitted();
      }
      return;
    }

    const active = activeStrokeRef.current;
    if (!active) return;
    activeStrokeRef.current = null;
    redrawActive(null, 1);

    const nextStrokes = [...strokesRef.current, active];
    setHistory((prev) => pushHistorySnapshot(prev, nextStrokes));
    redrawCommitted(nextStrokes);
    schedulePersist(nextStrokes);
  };

  const handleUndo = () => {
    setHistory((prev) => {
      const next = undoHistory(prev);
      if (next !== prev) schedulePersist(next.present);
      return next;
    });
  };

  const handleRedo = () => {
    setHistory((prev) => {
      const next = redoHistory(prev);
      if (next !== prev) schedulePersist(next.present);
      return next;
    });
  };

  const handleConfirmClearAll = () => {
    setConfirmClear(false);
    if (history.present.length === 0) return;
    setHistory((prev) => pushHistorySnapshot(prev, []));
    schedulePersist([]);
  };

  const selectTool = (nextTool: AnnotationTool) => {
    setConfirmClear(false);
    updatePrefs((prev) => ({
      ...prev,
      tool: nextTool,
      lastInkTool:
        nextTool === 'pen' || nextTool === 'highlighter'
          ? nextTool
          : prev.lastInkTool,
    }));
  };

  const activeWidthVal =
    prefs.tool === 'highlighter' ? prefs.highlighterWidth : prefs.penWidth;

  return (
    <>
      {/* Floating Compact Annotation Toolbar */}
      {isDrawingMode && (
        <div
          role="toolbar"
          aria-label="Barra de ferramentas de anotação na questão"
          className={`sticky ${
            mode === 'exam'
              ? 'top-[calc(52px+env(safe-area-inset-top)+5.5rem)] md:top-[calc(48px+env(safe-area-inset-top)+5.25rem)]'
              : 'top-[calc(52px+env(safe-area-inset-top)+0.5rem)] md:top-[calc(48px+env(safe-area-inset-top)+0.5rem)]'
          } z-20 mt-4 rounded-2xl border border-neutral-200/90 dark:border-neutral-700/80 bg-white/95 dark:bg-[#151B23]/95 backdrop-blur-md shadow-sm px-3 py-2 space-y-2`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Primary Tools */}
            <div className="flex flex-wrap items-center gap-1">
              <button
                type="button"
                onClick={() => selectTool('pen')}
                aria-label="Caneta"
                aria-pressed={prefs.tool === 'pen'}
                className={`min-h-[40px] px-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  prefs.tool === 'pen'
                    ? 'bg-neutral-900 dark:bg-blue-600 text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <PenTool className="w-4 h-4" />
                <span>Caneta</span>
              </button>

              <button
                type="button"
                onClick={() => selectTool('highlighter')}
                aria-label="Marca-texto"
                aria-pressed={prefs.tool === 'highlighter'}
                className={`min-h-[40px] px-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  prefs.tool === 'highlighter'
                    ? 'bg-amber-500 text-neutral-950'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Highlighter className="w-4 h-4" />
                <span>Marca-texto</span>
              </button>

              <button
                type="button"
                onClick={() => selectTool('eraser')}
                aria-label="Borracha"
                aria-pressed={prefs.tool === 'eraser'}
                className={`min-h-[40px] px-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  prefs.tool === 'eraser'
                    ? 'bg-neutral-900 dark:bg-blue-600 text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Eraser className="w-4 h-4" />
                <span>Borracha</span>
              </button>

              <button
                type="button"
                onClick={togglePenAndEraser}
                aria-label={`Alternar Caneta e Borracha (atalho ${prefs.shortcutKey.toUpperCase()})`}
                title={`Alternar Caneta ↔ Borracha (tecla ${prefs.shortcutKey.toUpperCase()})`}
                className="min-h-[40px] px-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1.5"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {prefs.tool === 'eraser' ? 'Ir p/ Caneta' : 'Ir p/ Borracha'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => selectTool('hand')}
                aria-label="Ferramenta Mão para rolar e marcar alternativas"
                aria-pressed={prefs.tool === 'hand'}
                title="Permite rolar a página e clicar nas alternativas sem desenhar"
                className={`min-h-[40px] px-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  prefs.tool === 'hand'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Hand className="w-4 h-4" />
                <span className="hidden sm:inline">Rolar</span>
              </button>
            </div>

            {/* Colors / Widths or Eraser Mode */}
            <div className="flex flex-wrap items-center gap-2">
              {prefs.tool === 'eraser' ? (
                <div className="flex items-center gap-1 bg-neutral-100 dark:bg-[#10151C] p-1 rounded-xl">
                  {(['stroke', 'precision'] as EraserMode[]).map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() =>
                        updatePrefs((prev) => ({ ...prev, eraserMode: em }))
                      }
                      aria-pressed={prefs.eraserMode === em}
                      className={`min-h-[32px] px-2.5 rounded-lg text-xs font-medium transition-colors ${
                        prefs.eraserMode === em
                          ? 'bg-white dark:bg-[#1C232D] text-neutral-900 dark:text-neutral-100 shadow-xs'
                          : 'text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      {em === 'stroke' ? 'Por traço' : 'Precisão'}
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 px-1">
                    {(prefs.tool === 'highlighter'
                      ? ANNOTATION_HIGHLIGHTER_COLORS
                      : ANNOTATION_PEN_COLORS
                    ).map((swatch) => {
                      const activeColor =
                        prefs.tool === 'highlighter'
                          ? prefs.highlighterColor
                          : prefs.penColor;
                      const isActive = activeColor === swatch.value;
                      return (
                        <button
                          key={swatch.value}
                          type="button"
                          onClick={() =>
                            updatePrefs((prev) =>
                              prev.tool === 'highlighter'
                                ? { ...prev, highlighterColor: swatch.value }
                                : { ...prev, penColor: swatch.value, tool: 'pen' }
                            )
                          }
                          aria-label={`Cor ${swatch.label}`}
                          aria-pressed={isActive}
                          className={`w-6 h-6 rounded-full border transition-transform ${
                            isActive
                              ? 'scale-110 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-[#151B23] border-transparent'
                              : 'border-neutral-300 dark:border-neutral-700'
                          }`}
                          style={{ backgroundColor: swatch.value }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-0.5 border-l border-neutral-200 dark:border-neutral-800 pl-2">
                    {ANNOTATION_WIDTHS.map((w) => {
                      const val =
                        prefs.tool === 'highlighter'
                          ? w.highlighterValue
                          : w.penValue;
                      const isSelected = Math.abs(activeWidthVal - val) < 0.2;
                      return (
                        <button
                          key={w.label}
                          type="button"
                          onClick={() =>
                            updatePrefs((prev) =>
                              prev.tool === 'highlighter'
                                ? { ...prev, highlighterWidth: w.highlighterValue }
                                : { ...prev, penWidth: w.penValue }
                            )
                          }
                          aria-label={`Espessura ${w.label}`}
                          aria-pressed={isSelected}
                          className={`min-h-[34px] px-2 rounded-lg text-xs font-medium ${
                            isSelected
                              ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white'
                              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                          }`}
                        >
                          {w.label}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* History, Visibility, Clear, Stylus Config & Done */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleUndo}
                disabled={history.past.length === 0}
                aria-label="Desfazer anotação"
                className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-35"
              >
                <Undo2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleRedo}
                disabled={history.future.length === 0}
                aria-label="Refazer anotação"
                className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-35"
              >
                <Redo2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setConfirmClear((v) => !v)}
                disabled={history.present.length === 0}
                aria-label="Limpar anotações desta questão"
                className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 disabled:opacity-35"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowPenSettings((v) => !v)}
                aria-label="Configurações da caneta e atalhos"
                aria-expanded={showPenSettings}
                className={`min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center ${
                  showPenSettings
                    ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Settings2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onExitDrawingMode}
                aria-label="Concluir desenho e voltar à leitura"
                className="min-h-[40px] px-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>

          {/* Inline Clear All Confirmation (Undoable!) */}
          {confirmClear && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
              <span className="text-neutral-700 dark:text-neutral-200 font-medium">
                Limpar todas as anotações desta questão? (Você poderá desfazer)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmClear(false)}
                  className="min-h-[36px] px-3 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmClearAll}
                  className="min-h-[36px] px-3 rounded-lg bg-red-600 text-white font-medium"
                >
                  Confirmar limpeza
                </button>
              </div>
            </div>
          )}

          {/* Stylus Settings, Palm Rejection, Shortcuts & Hardware Diagnostic */}
          {showPenSettings && (
            <div className="pt-2.5 border-t border-neutral-100 dark:border-neutral-800 space-y-3 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onPalmRejectionChange(!palmRejection)}
                    aria-pressed={palmRejection}
                    className={`min-h-[36px] px-3 rounded-xl border text-xs font-medium flex items-center gap-1.5 ${
                      palmRejection
                        ? 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                        : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    <Hand className="w-3.5 h-3.5" />
                    {palmRejection
                      ? 'Rejeição de palma ativa (1 dedo ignorado · 2 dedos rolam)'
                      : 'Toque livre (dedo também desenha)'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setCapturingShortcut((c) => !c)}
                    className="min-h-[36px] px-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium"
                  >
                    {capturingShortcut
                      ? 'Pressione a tecla desejada...'
                      : `Atalho Caneta/Borracha: [${prefs.shortcutKey.toUpperCase()}]`}
                  </button>

                  <label className="min-h-[36px] inline-flex items-center gap-2 px-2 cursor-pointer text-neutral-700 dark:text-neutral-300">
                    <input
                      type="checkbox"
                      checked={prefs.secondaryBarrelToggle}
                      onChange={(e) =>
                        updatePrefs((prev) => ({
                          ...prev,
                          secondaryBarrelToggle: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 rounded accent-blue-600"
                    />
                    Botão secundário (button 2) alterna borracha
                  </label>
                </div>

                <button
                  type="button"
                  onClick={() => setDiagnosticOpen((d) => !d)}
                  className="min-h-[36px] px-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium flex items-center gap-1.5"
                >
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  <span>{diagnosticOpen ? 'Fechar diagnóstico' : 'Diagnóstico da caneta'}</span>
                </button>
              </div>

              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#10151C]/80 p-3 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-semibold text-neutral-800 dark:text-neutral-200">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Desenho Inteligente (pressionar e segurar no final do traço)</span>
                  </div>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-neutral-700 dark:text-neutral-200 font-medium">
                    <input
                      type="checkbox"
                      checked={prefs.smartDrawingEnabled}
                      onChange={(e) =>
                        updatePrefs((prev) => ({
                          ...prev,
                          smartDrawingEnabled: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 rounded accent-blue-600"
                    />
                    Ativar correção automática
                  </label>
                </div>

                {prefs.smartDrawingEnabled && (
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex flex-wrap items-center gap-4">
                      <label className="inline-flex items-center gap-2 cursor-pointer text-neutral-700 dark:text-neutral-300">
                        <input
                          type="checkbox"
                          checked={prefs.smartHighlighterEnabled}
                          onChange={(e) =>
                            updatePrefs((prev) => ({
                              ...prev,
                              smartHighlighterEnabled: e.target.checked,
                            }))
                          }
                          className="w-4 h-4 rounded accent-amber-500"
                        />
                        Marca-texto inteligente (ajusta ao texto)
                      </label>

                      <label className="inline-flex items-center gap-2 cursor-pointer text-neutral-700 dark:text-neutral-300">
                        <input
                          type="checkbox"
                          checked={prefs.smartShapesEnabled}
                          onChange={(e) =>
                            updatePrefs((prev) => ({
                              ...prev,
                              smartShapesEnabled: e.target.checked,
                            }))
                          }
                          className="w-4 h-4 rounded accent-blue-600"
                        />
                        Formas na caneta (linhas, círculos, setas...)
                      </label>
                    </div>

                    <label className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                      <span>Tempo de pausa:</span>
                      <input
                        type="range"
                        min={300}
                        max={900}
                        step={50}
                        value={prefs.smartHoldDurationMs}
                        onChange={(e) =>
                          updatePrefs((prev) => ({
                            ...prev,
                            smartHoldDurationMs: Number(e.target.value),
                          }))
                        }
                        aria-label="Tempo de pausa para desenho inteligente"
                        className="w-24 accent-blue-600"
                      />
                      <span className="font-mono tabular-nums text-[11px] font-medium w-12 text-right">
                        {prefs.smartHoldDurationMs} ms
                      </span>
                    </label>
                  </div>
                )}
              </div>

              <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                <strong>Compatibilidade Xiaomi Focus Pen Pro (HyperOS):</strong> no navegador,{' '}
                <code>pointerType=&quot;pen&quot;</code>, pressão, inclinação, hover e{' '}
                <code>getCoalescedEvents()</code> funcionam diretamente. Já o gesto de{' '}
                <em>double press</em> no corpo da caneta é interceptado pelo HyperOS para apps nativos
                (como Mi Canvas) e não é exposto como evento web padrão; use o botão rápido, o atalho de
                teclado (ou Key Mapper) ou uma ponte WebView nativa (<code>ufrr-stylus-gesture</code>).
                {bridgeDetected && ' Ponte nativa detectada neste ambiente.'}
              </p>

              {diagnosticOpen && (
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#10151C] p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      Monitor temporário de eventos (não salvo)
                    </span>
                    <button
                      type="button"
                      onClick={() => setDiagnosticLogs([])}
                      className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Limpar log
                    </button>
                  </div>
                  <p className="text-[11px] text-neutral-500">
                    Toque ou faça dois toques na caneta sobre esta janela para inspecionar quais sinais o navegador realmente recebe do dispositivo.
                  </p>
                  {diagnosticLogs.length === 0 ? (
                    <p className="font-mono text-[11px] text-neutral-400 py-1">
                      Aguardando eventos de ponteiro ou teclado...
                    </p>
                  ) : (
                    <ul className="space-y-1 max-h-36 overflow-y-auto font-mono text-[11px] text-neutral-700 dark:text-neutral-300">
                      {diagnosticLogs.map((entry) => (
                        <li key={entry.id}>
                          <span className="text-neutral-400">{entry.time}</span>{' '}
                          <span className="text-blue-600 dark:text-blue-400">{entry.type}</span>{' '}
                          <span>{entry.detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Subtle status micro-row */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-500 dark:text-neutral-400 pt-0.5">
            <div className="flex items-center gap-2">
              <span>
                {prefs.tool === 'hand'
                  ? 'Modo Rolar: toque ou arraste para rolar e responder'
                  : palmRejection
                    ? 'Caneta escreve · 1 dedo ignorado · 2 dedos rolam'
                    : 'Caneta e toque desenham sobre a questão'}
              </span>
              {smartFeedback && (
                <span
                  data-testid={`question-smart-feedback-${question.id}`}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium"
                >
                  <Sparkles className="w-3 h-3" />
                  {smartFeedback}
                </span>
              )}
            </div>
            <span className="tabular-nums">
              {saveState === 'saving'
                ? 'Salvando anotações...'
                : saveState === 'saved'
                  ? 'Salvo automaticamente'
                  : `${history.present.length} ${
                      history.present.length === 1 ? 'traço' : 'traços'
                    }`}
            </span>
          </div>
        </div>
      )}

      {/* Question Content Surface with 5-Layer Anchored Annotation Stack */}
      <div
        ref={surfaceRef}
        data-annotation-block="question-root"
        data-testid={`question-annotation-surface-${question.id}`}
        className="relative isolate"
      >
        {/* LAYER 1 (z-[1]): Highlighter Layer — rendered BEHIND text & formulas, isolated group opacity prevents crossing buildup */}
        <div
          aria-hidden="true"
          data-testid={`question-overlay-highlighter-layer-${question.id}`}
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden transition-opacity duration-150"
          style={{
            opacity: annotationsVisible ? getHighlighterLayerOpacity(isDarkTheme) : 0,
          }}
        >
          <canvas
            ref={highlighterCommittedCanvasRef}
            data-testid={`question-overlay-highlighter-committed-${question.id}`}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <canvas
            ref={highlighterActiveCanvasRef}
            data-testid={`question-overlay-highlighter-active-${question.id}`}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
        </div>

        {/* LAYER 2 (z-[2]): Question Content (text, bold, formulas, tables, SVG graphics, alternatives) */}
        <div
          ref={contentRootRef}
          data-testid={`question-overlay-content-${question.id}`}
          className="relative z-[2]"
        >
          {children}
        </div>

        {/* LAYER 3 (z-[3]): Pen Ink Layer (committed + active) — rendered ABOVE text */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-[3] overflow-hidden transition-opacity duration-150 ${
            annotationsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <canvas
            ref={committedCanvasRef}
            data-testid={`question-overlay-committed-${question.id}`}
            data-strokes={history.present.length}
            data-smart-strokes={history.present.filter((s) => Boolean(s.smartShape)).length}
            data-highlighter-strokes={
              history.present.filter((s) => s.tool === 'highlighter').length
            }
            data-pen-strokes={
              history.present.filter((s) => s.tool === 'pen').length
            }
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <canvas
            ref={penActiveCanvasRef}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
        </div>

        {/* LAYER 4 (z-[4]): Transparent Pointer Capture & Stylus Hover Preview */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[4] overflow-hidden"
        >
          <canvas
            ref={activeCanvasRef}
            data-testid={`question-overlay-active-${question.id}`}
            data-drawing-mode={isDrawingMode ? 'true' : 'false'}
            data-tool={prefs.tool}
            data-active-smart-kind={activeSmartKind ?? ''}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishInteraction}
            onPointerCancel={finishInteraction}
            onPointerLeave={() => {
              if (hoverCursorRef.current) hoverCursorRef.current.style.opacity = '0';
            }}
            onContextMenu={(e) => {
              if (isDrawingMode && prefs.tool !== 'hand') e.preventDefault();
            }}
            className={`absolute inset-0 h-full w-full select-none ${
              isDrawingMode && prefs.tool !== 'hand'
                ? 'pointer-events-auto touch-none cursor-crosshair'
                : 'pointer-events-none touch-auto'
            }`}
          />

          <div
            ref={hoverCursorRef}
            className="pointer-events-none absolute left-0 top-0 rounded-full border border-neutral-900/50 dark:border-white/60 bg-blue-500/10 opacity-0 transition-opacity duration-75"
          />
        </div>
      </div>
    </>
  );
};
