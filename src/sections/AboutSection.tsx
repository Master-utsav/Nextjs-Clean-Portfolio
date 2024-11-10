"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import React from "react";

const AboutSection: React.FC = () => {
  const titleRef = React.useRef(null);

  const titleInView = useInView(titleRef, { once: false, amount: 0.2 });

  return (
    <section
      ref={titleRef}
      id="about"
      className="min-h-screen max-w-6xl text-center flex justify-center flex-col pt-20 space-y-4 items-center font-[family-name:var(--font-maven-pro)]"
    >
      <div
        ref={titleRef}
        className="flex flex-col sm:gap-6 gap-2 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.68, -0.6, 0.32, 1.6],
          }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] z-0"
        >
          Why{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100%" } : {}}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10"> Master Utsav</span>
          </motion.span>
          , not{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100%" } : {}}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Utsav Jaiswal </span>
          </motion.span>{" "}
          ???
        </motion.h1>
      </div>
      <div className="relative w-32 h-32">
    <div className="absolute inset-0 flex items-center justify-center pulse-effect" />
      <Button
        variant="gooeyRight"
        className="w-32 h-32 scale-about-btn rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 shadow-md transition-transform transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-600"
      >
        <span className="text-white font-bold text-sm font-[family-name:var(--font-assistant)]">
          Want to Know
        </span>
        <span className="text-blue-950 font-[family-name:var(--font-salsa)] text-lg">
          About
        </span>
        <span className="text-white font-bold text-sm font-[family-name:var(--font-assistant)] underline decoration-blue-300 dark:decoration-blue-500">
          Master?
        </span>
      </Button>
      </div>
      
    </section>
  );
};

export default AboutSection;
