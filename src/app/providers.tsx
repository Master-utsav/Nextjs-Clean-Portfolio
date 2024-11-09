'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { NextUIProvider } from '@nextui-org/react';
import { LoadingSection } from "@/sections/LoadingSection";


export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set this to true once we’re sure theme is loaded
  }, []);

  if (!mounted) {
    return (
      <LoadingSection/>
    );
  }; 

  return (
    <NextUIProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
