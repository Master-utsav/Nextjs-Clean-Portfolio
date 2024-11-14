"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { LoadingSection } from "@/sections/LoadingSection";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || loading)
    return (
      <motion.div
        key="loading"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="px-4 bg-[#121212]"
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
