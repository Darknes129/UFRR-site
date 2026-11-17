export type DisplayModeKind = 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser';

export interface FullscreenDocumentLike {
  fullscreenEnabled?: boolean;
  webkitFullscreenEnabled?: boolean;
  fullscreenElement?: Element | null;
  webkitFullscreenElement?: Element | null;
  exitFullscreen?: () => Promise<void> | void;
  webkitExitFullscreen?: () => Promise<void> | void;
}

export interface FullscreenElementLike {
  requestFullscreen?: (options?: FullscreenOptions) => Promise<void> | void;
  webkitRequestFullscreen?: () => Promise<void> | void;
}

export interface FullscreenSupportInfo {
  supported: boolean;
  reason?: string;
}

export interface FullscreenActionResult {
  ok: boolean;
  reason?: 'unsupported' | 'blocked';
  message?: string;
}

export interface DisplayModeInfo {
  isStandalone: boolean;
  displayMode: DisplayModeKind;
}

export function getActiveFullscreenElement(
  doc: FullscreenDocumentLike | null | undefined
): Element | null {
  if (!doc) return null;
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

export function getFullscreenSupport(
  doc: FullscreenDocumentLike | null | undefined,
  rootEl: FullscreenElementLike | null | undefined
): FullscreenSupportInfo {
  if (!doc || !rootEl) {
    return {
      supported: false,
      reason: 'Documento indisponível para ativação de tela cheia.',
    };
  }

  const hasStandardMethod = typeof rootEl.requestFullscreen === 'function';
  const hasWebkitMethod = typeof rootEl.webkitRequestFullscreen === 'function';

  if (!hasStandardMethod && !hasWebkitMethod) {
    return {
      supported: false,
      reason: 'Este navegador não oferece suporte à API nativa de tela cheia.',
    };
  }

  if (doc.fullscreenEnabled === false && doc.webkitFullscreenEnabled !== true) {
    return {
      supported: false,
      reason: 'O modo tela cheia está bloqueado pela política atual do navegador.',
    };
  }

  if (doc.webkitFullscreenEnabled === false && !hasStandardMethod) {
    return {
      supported: false,
      reason: 'O modo tela cheia está desabilitado neste navegador.',
    };
  }

  return { supported: true };
}

export async function requestElementFullscreen(
  rootEl: FullscreenElementLike | null | undefined,
  doc: FullscreenDocumentLike | null | undefined
): Promise<FullscreenActionResult> {
  const support = getFullscreenSupport(doc, rootEl);
  if (!support.supported || !rootEl) {
    return {
      ok: false,
      reason: 'unsupported',
      message: support.reason,
    };
  }

  try {
    if (typeof rootEl.requestFullscreen === 'function') {
      try {
        await rootEl.requestFullscreen({ navigationUI: 'hide' });
      } catch {
        // Retry without navigationUI options in case browser rejects the dictionary
        await rootEl.requestFullscreen();
      }
      return { ok: true };
    }

    if (typeof rootEl.webkitRequestFullscreen === 'function') {
      await rootEl.webkitRequestFullscreen();
      return { ok: true };
    }

    return {
      ok: false,
      reason: 'unsupported',
      message: 'API de tela cheia não disponível.',
    };
  } catch (err) {
    const detail =
      err instanceof Error && err.message
        ? err.message
        : 'O navegador bloqueou a ativação de tela cheia.';
    return {
      ok: false,
      reason: 'blocked',
      message: detail,
    };
  }
}

export async function exitDocumentFullscreen(
  doc: FullscreenDocumentLike | null | undefined
): Promise<FullscreenActionResult> {
  if (!doc) {
    return { ok: false, reason: 'unsupported' };
  }

  const activeEl = getActiveFullscreenElement(doc);
  if (!activeEl) {
    return { ok: true };
  }

  try {
    if (typeof doc.exitFullscreen === 'function') {
      await doc.exitFullscreen();
      return { ok: true };
    }
    if (typeof doc.webkitExitFullscreen === 'function') {
      await doc.webkitExitFullscreen();
      return { ok: true };
    }
    return { ok: false, reason: 'unsupported' };
  } catch (err) {
    return {
      ok: false,
      reason: 'blocked',
      message: err instanceof Error ? err.message : 'Não foi possível sair da tela cheia.',
    };
  }
}

export function getFullscreenNextAction(
  isFullscreen: boolean
): 'enter' | 'exit' {
  return isFullscreen ? 'exit' : 'enter';
}

export interface WindowMatchMediaLike {
  matchMedia?: (query: string) => { matches: boolean };
  navigator?: { standalone?: boolean; userAgent?: string };
}

export function detectDisplayMode(
  win: WindowMatchMediaLike | null | undefined
): DisplayModeInfo {
  if (!win) {
    return { isStandalone: false, displayMode: 'browser' };
  }

  const iosStandalone = win.navigator?.standalone === true;
  if (iosStandalone) {
    return { isStandalone: true, displayMode: 'standalone' };
  }

  const mm = typeof win.matchMedia === 'function' ? win.matchMedia.bind(win) : null;
  if (mm) {
    if (mm('(display-mode: standalone)').matches) {
      return { isStandalone: true, displayMode: 'standalone' };
    }
    if (mm('(display-mode: fullscreen)').matches) {
      return { isStandalone: true, displayMode: 'fullscreen' };
    }
    if (mm('(display-mode: minimal-ui)').matches) {
      return { isStandalone: false, displayMode: 'minimal-ui' };
    }
  }

  return { isStandalone: false, displayMode: 'browser' };
}

export function isIOSUserAgent(userAgent: string): boolean {
  return /iphone|ipad|ipod/i.test(userAgent);
}

export function isAndroidUserAgent(userAgent: string): boolean {
  return /android/i.test(userAgent);
}
