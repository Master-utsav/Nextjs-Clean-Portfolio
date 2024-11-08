"use client";

import React from "react";
// import ScrollDown from "@/components/ScollDown";
// import NormalTooltip from "@/components/ui/NormalTooltip";
import { motion } from "framer-motion";
import ProjectCards from "@/components/ProjectCards";

const ProjectSection: React.FC = () => {
  // const ref = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      id="projects"
      className="min-h-screen max-w-6xl text-center flex justify-center flex-col py-8 space-y-4 items-center font-[family-name:var(--font-maven-pro)]"
    >
      <div className="flex flex-col sm:gap-6 gap-2 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] z-10"
        >
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.68, -0.6, 0.32, 1.6] }}
            />
            <span className="relative z-10">Projects</span>
          </motion.span>{" "}
          based on my{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.68, -0.6, 0.32, 1.6] }}
            />
            <span className="relative z-10">Stack</span>
          </motion.span>
        </motion.h1>
      </div>
      <ProjectCards />
      {/* <ProjectCards scrollProgress={smoothScrollProgress} /> */}
      {/* <NormalTooltip text="scroll down" placement="bottom">
        <ScrollDown navigateTo="#about" />
      </NormalTooltip> */}
    </section>
  );
};

export default ProjectSection;
