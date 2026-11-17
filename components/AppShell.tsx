'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  BookOpen,
  Bookmark,
  ClipboardCheck,
  Home,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
} from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { useStudy, type AppSection } from '@/lib/study-store';
import {
  FullscreenToggleButton,
  OfflineIndicator,
  PWAInstallButton,
  PWAProvider,
  ServiceWorkerRegister,
} from './PWAComponents';
import { HomeView } from './HomeView';
import { SimuladosView } from './SimuladosView';
import { QuestionBankView } from './QuestionBankView';
import { AnalyticsView } from './AnalyticsView';
import { MyStudyView } from './MyStudyView';

const NAV_ITEMS: Array<{
  id: AppSection;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: 'inicio', label: 'Início', shortLabel: 'Início', icon: Home },
  { id: 'simulados', label: 'Simulados', shortLabel: 'Simulados', icon: ClipboardCheck },
  { id: 'questoes', label: 'Banco de Questões', shortLabel: 'Questões', icon: BookOpen },
  { id: 'desempenho', label: 'Desempenho', shortLabel: 'Desempenho', icon: BarChart3 },
  { id: 'meu-estudo', label: 'Meu Estudo', shortLabel: 'Estudo', icon: Bookmark },
];

export const AppShell: React.FC = () => {
  const {
    isReady,
    theme,
    toggleTheme,
    activeSection,
    setActiveSection,
    activeAttempt,
  } = useStudy();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const activeNavLabel =
    NAV_ITEMS.find((item) => item.id === activeSection)?.label ?? 'UFRR Study';

  const themeLabel = theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro';

  return (
    <PWAProvider>
      <MotionConfig reducedMotion="user">
        <ServiceWorkerRegister />
        <OfflineIndicator />

        <div className="min-h-screen min-h-dvh flex flex-col md:flex-row bg-[#FAF9F6] dark:bg-[#0D1117] text-neutral-900 dark:text-neutral-100">
          {/* Landscape Tablet / Desktop Compact Sidebar Rail */}
          <aside
            aria-label="Navegação principal"
            className={`hidden md:flex flex-col justify-between border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11161D] sticky top-0 h-screen h-dvh pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] shrink-0 transition-[width] duration-200 ${
              sidebarCollapsed ? 'w-[76px]' : 'w-[228px]'
            }`}
          >
            <div className="p-3 space-y-6">
              {/* Brand Zone + Collapse Control */}
              <div className="flex items-center justify-between gap-2 px-1.5 pt-1">
                {!sidebarCollapsed && (
                  <span className="font-display text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50 whitespace-nowrap shrink-0">
                    UFRR Study
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setSidebarCollapsed((c) => !c)}
                  aria-label={
                    sidebarCollapsed
                      ? 'Expandir barra lateral'
                      : 'Recolher barra lateral'
                  }
                  className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {sidebarCollapsed ? (
                    <PanelLeftOpen className="w-4 h-4" />
                  ) : (
                    <PanelLeftClose className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSection(item.id)}
                      aria-current={active ? 'page' : undefined}
                      aria-label={item.label}
                      className={`w-full min-h-[44px] px-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors whitespace-nowrap ${
                        active
                          ? 'bg-blue-600/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-neutral-100'
                      }`}
                    >
                      <Icon className="w-[18px] h-[18px] shrink-0" />
                      {!sidebarCollapsed && (
                        <span className="truncate">{item.label}</span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Controls: Active Attempt & Theme */}
            <div className="p-3 space-y-2 border-t border-neutral-100 dark:border-neutral-800">
              {activeAttempt && !sidebarCollapsed && (
                <button
                  type="button"
                  onClick={() => setActiveSection('simulados')}
                  className="w-full min-h-[40px] px-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-xs font-medium text-blue-700 dark:text-blue-300 text-left truncate"
                >
                  Simulado ativo · Retomar
                </button>
              )}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={themeLabel}
                className="w-full min-h-[44px] px-3 rounded-xl text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-3 transition-colors whitespace-nowrap"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 shrink-0" />
                ) : (
                  <Sun className="w-4 h-4 shrink-0" />
                )}
                {!sidebarCollapsed && (
                  <span>{theme === 'light' ? 'Modo escuro' : 'Modo claro'}</span>
                )}
              </button>
            </div>
          </aside>

          {/* Content Column (Desktop/Tablet Global Utility Header + Portrait Mobile Header + Viewport) */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Desktop & Landscape Tablet Slim Header (always accessible in Fullscreen) */}
            <header
              aria-label="Barra superior da plataforma"
              className="hidden md:flex sticky top-0 z-30 min-h-[48px] pt-[env(safe-area-inset-top)] px-4 sm:px-6 lg:px-8 border-b border-neutral-200/75 dark:border-neutral-800/75 bg-[#FAF9F6]/85 dark:bg-[#0D1117]/85 backdrop-blur-md items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 min-w-0 text-xs text-neutral-500 dark:text-neutral-400">
                {sidebarCollapsed && (
                  <>
                    <span className="font-display font-bold text-neutral-900 dark:text-neutral-50 whitespace-nowrap">
                      UFRR Study
                    </span>
                    <span aria-hidden="true">·</span>
                  </>
                )}
                <span className="font-medium text-neutral-700 dark:text-neutral-300 truncate">
                  {activeNavLabel}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <PWAInstallButton />
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={themeLabel}
                  title={themeLabel}
                  className="min-h-[38px] sm:min-h-[40px] min-w-[38px] sm:min-w-[40px] px-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {theme === 'light' ? (
                    <Moon className="w-3.5 h-3.5" />
                  ) : (
                    <Sun className="w-3.5 h-3.5" />
                  )}
                </button>
                <FullscreenToggleButton />
              </div>
            </header>

            {/* Portrait Tablet / Mobile Compact Top Header */}
            <header
              aria-label="Cabeçalho móvel"
              className="md:hidden sticky top-0 z-30 min-h-[calc(52px+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] px-4 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#11161D]/90 backdrop-blur-md flex items-center justify-between gap-3"
            >
              <span className="font-display text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50 whitespace-nowrap shrink-0">
                UFRR Study
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <PWAInstallButton />
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={themeLabel}
                  title={themeLabel}
                  className="min-h-[38px] min-w-[38px] rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#151B23] flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.97] transition-all"
                >
                  {theme === 'light' ? (
                    <Moon className="w-3.5 h-3.5" />
                  ) : (
                    <Sun className="w-3.5 h-3.5" />
                  )}
                </button>
                <FullscreenToggleButton />
              </div>
            </header>

            {/* Main Scrollable Viewport */}
            <main className="flex-1 min-w-0 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8 py-6 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
              {!isReady ? (
                <div className="mx-auto max-w-6xl space-y-6 animate-pulse">
                  <div className="h-36 rounded-2xl bg-neutral-200/70 dark:bg-neutral-800/50" />
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[0, 1, 2, 3].map((k) => (
                      <div
                        key={k}
                        className="h-28 rounded-2xl bg-neutral-200/70 dark:bg-neutral-800/50"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {activeSection === 'inicio' && <HomeView />}
                    {activeSection === 'simulados' && <SimuladosView />}
                    {activeSection === 'questoes' && <QuestionBankView />}
                    {activeSection === 'desempenho' && <AnalyticsView />}
                    {activeSection === 'meu-estudo' && <MyStudyView />}
                  </motion.div>
                </AnimatePresence>
              )}
            </main>
          </div>

          {/* Portrait / Mobile Bottom Tab Bar (Thumb Zone + Safe Area Bottom) */}
          <nav
            aria-label="Navegação inferior"
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-[calc(4rem+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)] border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#11161D]/95 backdrop-blur-md grid grid-cols-5 items-center px-1"
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`min-h-[48px] flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
                    active
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="truncate max-w-[68px]">{item.shortLabel}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </MotionConfig>
    </PWAProvider>
  );
};
