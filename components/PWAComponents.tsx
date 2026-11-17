'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { Download, Maximize, Minimize, Smartphone, WifiOff, X } from 'lucide-react';
import {
  detectDisplayMode,
  exitDocumentFullscreen,
  getActiveFullscreenElement,
  getFullscreenSupport,
  isAndroidUserAgent,
  isIOSUserAgent,
  requestElementFullscreen,
  type DisplayModeInfo,
} from '@/lib/fullscreen';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface PWAContextValue {
  isStandalone: boolean;
  displayMode: DisplayModeInfo['displayMode'];
  isInstallable: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  promptInstall: () => Promise<boolean>;
}

const DEFAULT_PWA_CONTEXT: PWAContextValue = {
  isStandalone: false,
  displayMode: 'browser',
  isInstallable: false,
  isIOS: false,
  isAndroid: false,
  promptInstall: async () => false,
};

const PWAContext = createContext<PWAContextValue>(DEFAULT_PWA_CONTEXT);

export function usePWA() {
  return useContext(PWAContext);
}

const noopSubscribe = () => () => {};

function subscribeDisplayMode(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  const queries = [
    '(display-mode: standalone)',
    '(display-mode: fullscreen)',
    '(display-mode: minimal-ui)',
  ]
    .map((q) => (typeof window.matchMedia === 'function' ? window.matchMedia(q) : null))
    .filter((mq): mq is MediaQueryList => Boolean(mq));

  queries.forEach((mq) => mq.addEventListener?.('change', onStoreChange));
  window.addEventListener('appinstalled', onStoreChange);
  return () => {
    queries.forEach((mq) => mq.removeEventListener?.('change', onStoreChange));
    window.removeEventListener('appinstalled', onStoreChange);
  };
}

export const PWAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [installedOverride, setInstalledOverride] = useState(false);

  const detectedDisplayMode = useSyncExternalStore(
    subscribeDisplayMode,
    () => detectDisplayMode(window).displayMode,
    () => 'browser' as const
  );
  const detectedStandalone = useSyncExternalStore(
    subscribeDisplayMode,
    () => detectDisplayMode(window).isStandalone,
    () => false
  );
  const isIOS = useSyncExternalStore(
    noopSubscribe,
    () => isIOSUserAgent(window.navigator.userAgent ?? ''),
    () => false
  );
  const isAndroid = useSyncExternalStore(
    noopSubscribe,
    () => isAndroidUserAgent(window.navigator.userAgent ?? ''),
    () => false
  );

  useEffect(() => {
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const onInstalled = () => {
      setInstalledOverride(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstalledOverride(true);
        setDeferredPrompt(null);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, [deferredPrompt]);

  const value = useMemo<PWAContextValue>(
    () => ({
      isStandalone: detectedStandalone || installedOverride,
      displayMode: installedOverride ? 'standalone' : detectedDisplayMode,
      isInstallable: Boolean(deferredPrompt),
      isIOS,
      isAndroid,
      promptInstall,
    }),
    [
      deferredPrompt,
      detectedDisplayMode,
      detectedStandalone,
      installedOverride,
      isAndroid,
      isIOS,
      promptInstall,
    ]
  );

  return <PWAContext.Provider value={value}>{children}</PWAContext.Provider>;
};

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    if ('caches' in window) {
      window.caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys
              .filter(
                (k) =>
                  k === 'ufrr-study-v1' ||
                  k === 'ufrr-study-v2' ||
                  k === 'ufrr-study-v3'
              )
              .map((k) => window.caches.delete(k))
          )
        )
        .catch(() => undefined);
    }

    const hadController = Boolean(navigator.serviceWorker.controller);
    const onControllerChange = () => {
      if (!hadController) return;
      try {
        if (window.sessionStorage.getItem('ufrr-sw-reloaded-v4')) return;
        window.sessionStorage.setItem('ufrr-sw-reloaded-v4', '1');
      } catch {
        // Ignore sessionStorage errors
      }
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);

    navigator.serviceWorker
      .register('/sw.js', { updateViaCache: 'none' })
      .then((reg) => reg.update().catch(() => undefined))
      .catch(() => {
        // Non-fatal in preview environments
      });

    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
    };
  }, []);

  return null;
}

function subscribeOnline(cb: () => void) {
  window.addEventListener('online', cb);
  window.addEventListener('offline', cb);
  return () => {
    window.removeEventListener('online', cb);
    window.removeEventListener('offline', cb);
  };
}

export const OfflineIndicator: React.FC = () => {
  const isOnline = useSyncExternalStore(
    subscribeOnline,
    () => navigator.onLine,
    () => true
  );

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-20 md:bottom-5 left-4 z-50 flex items-center gap-2 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/90 px-3.5 py-2 text-xs font-medium text-amber-900 dark:text-amber-100 shadow-sm"
    >
      <WifiOff className="w-4 h-4 shrink-0" />
      <span>Modo offline — conteúdos salvos disponíveis localmente.</span>
    </div>
  );
};

export const PWAInstallButton: React.FC = () => {
  const { isStandalone, isInstallable, isIOS, promptInstall } = usePWA();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // Never show install prompt when already running in standalone / installed PWA mode
  if (isStandalone) return null;

  if (isInstallable) {
    return (
      <button
        type="button"
        data-testid="pwa-install-btn"
        onClick={() => void promptInstall()}
        title="Instalar UFRR Study como aplicativo independente"
        aria-label="Instalar aplicativo"
        className="min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
      >
        <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
        <span className="hidden sm:inline">Instalar aplicativo</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          data-testid="pwa-install-btn"
          onClick={() => setShowIOSGuide(true)}
          title="Instalar aplicativo na Tela de Início"
          aria-label="Instalar aplicativo"
          className="min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
        >
          <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
          <span className="hidden sm:inline">Instalar aplicativo</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Instalar UFRR Study
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label="Fechar instruções de instalação"
                  className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                1. Toque no botão Compartilhar na barra do navegador.
                <br />
                2. Selecione <strong>Adicionar à Tela de Início</strong> para estudar em modo aplicativo independente e offline.
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export const FullscreenToggleButton: React.FC = () => {
  const { isStandalone, isInstallable, isAndroid, isIOS, promptInstall } = usePWA();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const syncState = () => {
      setIsFullscreen(Boolean(getActiveFullscreenElement(document)));
      const sup = getFullscreenSupport(document, document.documentElement);
      setIsSupported(sup.supported);
    };

    const onFullscreenError = () => {
      setIsFullscreen(Boolean(getActiveFullscreenElement(document)));
      setFallbackMessage(
        'Este navegador bloqueou a tela cheia nativa. Para estudar sem a barra de endereço, instale o UFRR Study como aplicativo.'
      );
    };

    syncState();
    document.addEventListener('fullscreenchange', syncState);
    document.addEventListener('webkitfullscreenchange', syncState);
    document.addEventListener('fullscreenerror', onFullscreenError);
    document.addEventListener('webkitfullscreenerror', onFullscreenError);

    return () => {
      document.removeEventListener('fullscreenchange', syncState);
      document.removeEventListener('webkitfullscreenchange', syncState);
      document.removeEventListener('fullscreenerror', onFullscreenError);
      document.removeEventListener('webkitfullscreenerror', onFullscreenError);
    };
  }, []);

  // Dismiss fallback popover when clicking outside or pressing Escape
  useEffect(() => {
    if (!fallbackMessage) return;
    const onPointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFallbackMessage(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFallbackMessage(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [fallbackMessage]);

  const handleToggleFullscreen = async () => {
    setFallbackMessage(null);

    if (isFullscreen) {
      const res = await exitDocumentFullscreen(document);
      if (!res.ok) {
        setIsFullscreen(Boolean(getActiveFullscreenElement(document)));
      }
      return;
    }

    const res = await requestElementFullscreen(document.documentElement, document);
    if (!res.ok) {
      setFallbackMessage(
        res.reason === 'unsupported'
          ? 'A API de tela cheia não está disponível neste navegador. Instale e abra o UFRR Study como aplicativo para usar sem barra de endereço.'
          : 'O navegador não autorizou a entrada automática em tela cheia nesta janela. Você pode instalar o aplicativo para estudar sem a barra de endereço.'
      );
    }
  };

  // In standalone mode when Fullscreen API isn't supported, the app is already borderless
  if (isStandalone && !isSupported) {
    return null;
  }

  const label = isFullscreen ? 'Sair da tela cheia' : 'Tela cheia';

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        data-testid="fullscreen-toggle-btn"
        onClick={() => void handleToggleFullscreen()}
        aria-pressed={isFullscreen}
        aria-label={label}
        title={label}
        className={`min-h-[38px] sm:min-h-[40px] px-2.5 sm:px-3 rounded-xl text-xs font-medium border active:scale-[0.97] transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
          isFullscreen
            ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
            : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
        }`}
      >
        {isFullscreen ? (
          <Minimize className="w-3.5 h-3.5 shrink-0" />
        ) : (
          <Maximize className="w-3.5 h-3.5 shrink-0" />
        )}
        <span className="hidden sm:inline">{label}</span>
      </button>

      {fallbackMessage && (
        <div
          role="dialog"
          aria-label="Orientação para modo aplicativo sem barra de endereço"
          data-testid="fullscreen-fallback-notice"
          className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] p-4 shadow-xl z-50 space-y-3"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
              <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Estudo sem barra de endereço (PWA)</span>
            </div>
            <button
              type="button"
              onClick={() => setFallbackMessage(null)}
              aria-label="Fechar orientação de tela cheia"
              className="min-h-[32px] min-w-[32px] rounded-lg flex items-center justify-center text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {fallbackMessage}
          </p>

          {!isStandalone && isInstallable ? (
            <button
              type="button"
              onClick={async () => {
                const ok = await promptInstall();
                if (ok) setFallbackMessage(null);
              }}
              className="w-full min-h-[40px] px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              Instalar aplicativo agora
            </button>
          ) : !isStandalone ? (
            <div className="rounded-xl bg-neutral-50 dark:bg-[#11161D] border border-neutral-200/80 dark:border-neutral-800 p-3 text-[11px] text-neutral-600 dark:text-neutral-300 space-y-1 leading-relaxed">
              <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                {isIOS
                  ? 'No Safari (iPad / iPhone):'
                  : isAndroid
                    ? 'No Xiaomi Pad 8 / Android:'
                    : 'Como abrir como aplicativo:'}
              </p>
              {isIOS ? (
                <p>Toque em Compartilhar → Adicionar à Tela de Início e abra pelo ícone criado.</p>
              ) : (
                <p>
                  Toque no menu do navegador (⋮) → <strong>Instalar aplicativo</strong> ou{' '}
                  <strong>Adicionar à tela inicial</strong>, e abra pelo ícone instalado.
                </p>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
