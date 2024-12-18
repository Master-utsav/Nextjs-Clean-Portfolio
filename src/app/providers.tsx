"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { LoadingSection } from "@/sections/LoadingSection";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import HeroSection from "@/sections/HeroSection";
import PostsPageSection from "@/sections/PostsPageSection";
// import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [islocation, setIsLocation] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    setIsLocation(location.pathname.startsWith("/posts"))

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // const lenis = new Lenis({
    //   duration: 1.2,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   smoothWheel: true,
    // });

    // Request animation frame loop for Lenis
    // function raf(time: number) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    // requestAnimationFrame(raf);

    // Clean up timer and Lenis instance on component unmount
    return () => {
      clearTimeout(timer);
      // lenis.destroy();
    };
  }, []);

  if (!mounted || loading)
    return (
      <>
        <Head>
          <title>Loading - Master Utsav</title>
          <meta
            name="description"
            content="Loading the content. Please wait as the application initializes."
          />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <motion.div
          key="loading"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="px-4 bg-[#121212]"
        >
        {!islocation ? <LoadingSection /> : <LoadingSection /> }  
          <div className="hidden">
            <HeroSection/>
            <PostsPageSection/>
          </div>
        </motion.div>
      </>
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
