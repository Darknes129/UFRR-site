'use client';

import { StudyProvider } from '@/lib/study-store';
import { AppShell } from '@/components/AppShell';

export default function Page() {
  return (
    <StudyProvider>
      <AppShell />
    </StudyProvider>
  );
}
