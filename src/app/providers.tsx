'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { NextUIProvider } from '@nextui-org/react';
import { LoadingSection } from "@/sections/LoadingSection";
import { motion, AnimatePresence } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || loading) return (
    <motion.div
      key="loading"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <LoadingSection />
    </motion.div>
  );

  return (
    <NextUIProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AnimatePresence>
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </NextUIProvider>
  );
}
