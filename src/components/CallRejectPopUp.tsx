"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import { gmailLink } from "@/lib/service";
import Link from "next/link";
import ThankingText from "@/components/ThankingText";

const CallRejectPopUp = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleSubmitFunction(val: boolean) {
    setIsSubmitted(val);
  }
  return !isSubmitted ? (
    <motion.div
      initial={{ scale: 0.3, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 12 }}
      className="max-w-xl h-fit border-[1px] border-blue-800/30 dark:border-blue-500/30 rounded-lg backdrop-blur-3xl dark:bg-[#121212]/50 bg-[#f5f5f5]/50 p-4 flex flex-col gap-2 justify-center items-center overflow-hidden electric-lightning-effect"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.68, -0.6, 0.32, 1.6],
        }}
        className="w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] z-0"
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
          <span className="relative z-10">Why</span>
        </motion.span>
        , you{" "}
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
          <span className="relative z-10 text-red-400/50">rejected</span>
        </motion.span>{" "}
        my{" "}
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
          <span className="relative z-10">call</span>
        </motion.span>
        ? 🥲
      </motion.h1>
      <p className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Now send your{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-300">
            Feedback
          </span>{" "}
          and
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          directly{" "}
          <Link
            href={gmailLink()}
            className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold"
          >
            mail
          </Link>{" "}
          me.
        </motion.span>{" "}
      </p>
      <FeedbackForm onSubmitted={handleSubmitFunction} />
    </motion.div>
  ) : (
    <ThankingText />
  );
};

export default CallRejectPopUp;
