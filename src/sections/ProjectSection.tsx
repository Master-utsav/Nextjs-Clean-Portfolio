"use client";

import React from "react";
import ScrollDown from "@/components/ScollDown";
import NormalTooltip from "@/components/ui/NormalTooltip";
import { motion } from "framer-motion";
import ProjectBar from "@/components/ProjectBar";
import { ProjectsData } from "@/constants";
import ProjectCards from "@/components/ProjectCards";

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen max-w-6xl text-center flex justify-center flex-col pt-20 space-y-4 items-center font-[family-name:var(--font-maven-pro)]"
    >
      <div className="flex flex-col sm:gap-6 gap-2 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] z-0"
        >
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Projects</span>
          </motion.span>{" "}
          based on my{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Stack</span>
          </motion.span>
        </motion.h1>
        <p className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Discover powerful{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              Full Stack
            </span>{" "}
            solutions,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            blending the versatility of{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Next.js
            </span>{" "}
            and the dynamism of{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              React
            </span>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            enhanced with{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              TypeScript
            </span>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Three.js
            </span>
            , and the fluidity of{" "}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Framer Motion
            </span>{" "}
            animations.
          </motion.span>
        </p>

        <p className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            On the backend, experience the reliability of{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Node.js
            </span>{" "}
            with{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              MongoDB
            </span>{" "}
            for seamless data management,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            while utilizing{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Redis
            </span>{" "}
            for caching and{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Firebase
            </span>{" "}
            for authentication.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            {" "}
            I build projects that <span className="italic">engage</span>,{" "}
            <span className="italic">inspire</span>, and{" "}
            <span className="italic">elevate the user experience</span>.
          </motion.span>
        </p>
      </div>
      <div className="md:flex hidden">
        <ProjectBar />
      </div>
      <div className="flex md:hidden justify-center items-center gap-4 flex-col">
        {ProjectsData.map((project) => (
          <ProjectCards item={project} key={project.id} />
        ))}
      </div>
      <NormalTooltip text="scroll down" placement="bottom">
        <ScrollDown navigateTo="#about" />
      </NormalTooltip>
    </section>
  );
};

export default ProjectSection;
