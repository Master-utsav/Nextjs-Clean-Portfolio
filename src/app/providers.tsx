'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { NextUIProvider } from '@nextui-org/react';
import { LoadingSection } from "@/sections/LoadingSection";


export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true); 

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  if (!mounted) {
    return <LoadingSection/>; 
  }

  if (loading) {
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
