import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F6' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1117' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'UFRR Study — Preparação Integral & Medicina',
  description:
    'Plataforma tablet-first dedicada ao vestibular da UFRR com simulados oficiais, banco de questões, redação manuscrita e rascunho com caneta.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'UFRR Study',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'UFRR Study — Preparação Integral & Medicina',
    description:
      'Plataforma tablet-first dedicada ao vestibular da UFRR com simulados oficiais, banco de questões, redação manuscrita e rascunho com caneta.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UFRR Study — Preparação Integral & Medicina',
    description:
      'Plataforma tablet-first dedicada ao vestibular da UFRR com simulados oficiais, banco de questões, redação manuscrita e rascunho com caneta.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased selection:bg-blue-600/15 selection:text-blue-700 dark:selection:bg-blue-400/20 dark:selection:text-blue-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
