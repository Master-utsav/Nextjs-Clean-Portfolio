"use client";

import React from "react";
import ScrollDown from "@/components/ScollDown";
import NormalTooltip from "@/components/ui/NormalTooltip";
import { motion } from "framer-motion";
import ProjectBar from "@/components/ProjectBar";
import ProjectsContainer from "@/components/ProjectsContainer";
import { useInView } from "framer-motion";
import { LinkHoverPreview } from "@/components/ui/LinkHoverPreview";
import { TechLinks } from "@/constants";
const ProjectSection: React.FC = () => {
  const sectionRef = React.useRef(null);
  const titleRef = React.useRef(null);
  // const paragraphRef = React.useRef(null);

  const titleInView = useInView(titleRef, { once: false, amount: 0.2 });
  // const paraInView = useInView(paragraphRef, { once: false, amount: 0.2 });

  return (
    <section
      ref={sectionRef}      
      id="projects"
      className="min-h-screen max-w-6xl text-center flex justify-center flex-col pt-20 space-y-4 items-center font-[family-name:var(--font-maven-pro)]"
    >
      <div ref={titleRef} className="flex flex-col sm:gap-6 gap-2 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] z-0"
        >
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={titleInView ? { width: "100%" }: {}}
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
              animate={titleInView ? { width: "100%" }: {}}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Stack</span>
          </motion.span>
        </motion.h1>
        <div
        // ref={paragraphRef}
        className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay :0.2 }}
          >
            Discover powerful{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              Full Stack
            </span>{" "}
            solutions,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            blending the versatility of{" "}
            <LinkHoverPreview url={TechLinks.nextjs} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Next.js
            </LinkHoverPreview>{" "}
            and the dynamism of{" "}
            <LinkHoverPreview url={TechLinks.reactjs} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              React
            </LinkHoverPreview>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            enhanced with{" "}
            <LinkHoverPreview url={TechLinks.typescript} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              TypeScript
            </LinkHoverPreview>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <LinkHoverPreview url={TechLinks.threejs} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Three.js
            </LinkHoverPreview>
            , and the fluidity of{" "}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <LinkHoverPreview url={TechLinks.framer} className="whitespace-nowrap underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Framer Motion
            </LinkHoverPreview>{" "}
            animations.
          </motion.span>
        </div>

        <div
        // ref={paragraphRef}
        className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 1 }}
          >
            On the backend, experience the reliability of{" "}
            <LinkHoverPreview url={TechLinks.nodejs} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Node.js
            </LinkHoverPreview>{" "}
            with{" "}
            <LinkHoverPreview url={TechLinks.mongodb} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              MongoDB
            </LinkHoverPreview>{" "}
            for seamless data management,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            while utilizing{" "}
            <LinkHoverPreview url={TechLinks.redis} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Redis
            </LinkHoverPreview>{" "}
            for caching and{" "}
            <LinkHoverPreview url={TechLinks.firebase} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Firebase
            </LinkHoverPreview>{" "}
            for authentication.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {" "}
            I build projects that <span className="italic">engage</span>,{" "}
            <span className="italic">inspire</span>, and{" "}
            <span className="italic">elevate the user experience</span>.
          </motion.span>
        </div>
      </div>
      <div className="md:flex hidden">
        <ProjectBar />
      </div>
      <div className="flex md:hidden justify-center items-center flex-col bg-transparent">
        <ProjectsContainer/>
      </div>
      <NormalTooltip text="scroll down" placement="bottom">
        <ScrollDown navigateTo="#postspage" />
      </NormalTooltip>
    </section>
  );
};

export default ProjectSection;
