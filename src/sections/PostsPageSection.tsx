"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NormalTooltip from "@/components/ui/NormalTooltip";
import ScrollDown from "@/components/ScollDown";
import { LinkHoverPreview } from "@/components/ui/LinkHoverPreview";
import { PostsLinks, PostsSecondNavItems } from "@/constants";

const PostsPageSection = () => {
  return (
    <section
      id="postspage"
      className="min-h-screen max-w-5xl text-center flex justify-center flex-col space-y-4 items-center  max-md:pt-28 font-[family-name:var(--font-maven-pro)]"
    >
      <div className="flex flex-col sm:gap-2 gap-1 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)]"
        >
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15  dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Unleashing</span>
          </motion.span>{" "}
          the{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Power</span>
          </motion.span>{" "}
          of{" "}
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
            <span className="relative z-10">words</span>
          </motion.span>
        </motion.h1>
        <div className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-8 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Dive into a {" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              world
            </span>
            {" "} where{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              tech
            </span>
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            insights meet{" "}
            <LinkHoverPreview
              url={PostsLinks.article}
              className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
            >
              poetic
            </LinkHoverPreview>{" "}
            musings.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Explore thought-provoking{" "}
            <LinkHoverPreview
              url={PostsLinks.article}
              className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
            >
              articles 
            </LinkHoverPreview>{" "}
            on technology,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            heartfelt {" "}
            <LinkHoverPreview
              url={PostsLinks.poetry}
              className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
            >
              poetry
            </LinkHoverPreview>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >captivating  {" "}
            <LinkHoverPreview
              url={PostsLinks.story}
              className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
            >
              stories
            </LinkHoverPreview>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
          >profound {" "}
            and{" "}
            <LinkHoverPreview
              url={PostsLinks.quote}
              className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
            >
              quotes
            </LinkHoverPreview>
            .
          </motion.span>
          </div>
          <div className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {" "}
            <span className="italic">
                Looking for structured knowledge?{"  "}
            </span>
            Head over to the
            <span className="italic">
            {" "}
              <LinkHoverPreview
                url={PostsLinks.notes}
                className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
              >
                notes 
              </LinkHoverPreview>{" "}section{" "}
            </span>
            to uncover a{" "}
            <span className="italic">treasure trove of wisdom.</span>
            Let&apos;s{" "}
            <LinkHoverPreview
              url={"https://masterutsav.in/images/linkedin.png"}
              actualUrl="https://linkedin.com/in/master-utsav"
              className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
            >
              connect
            </LinkHoverPreview>{" "}
            through words!
          </motion.span>
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-center items-center p-1">
        {PostsSecondNavItems.map((item , idx) => (
          <Link
            key={idx}
            href={item.target}
            className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30  "
          >
            <NormalTooltip text={item.name} placement="bottom">
              <item.icon className="size-5 dark:text-white text-black"/>
            </NormalTooltip>
          </Link>
        ))}
      </div>
      <NormalTooltip text="scroll down" placement="bottom">
        <ScrollDown navigateTo="#posts" />
      </NormalTooltip>
    </section>
  );
};

export default PostsPageSection;
