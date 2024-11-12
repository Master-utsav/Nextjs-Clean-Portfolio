import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import NormalTooltip from "@/components/ui/NormalTooltip";

const ThankingText = () => {
  return (
    <section className="h-fit max-w-5xl text-center flex justify-center flex-col space-y-4 items-center md:pt-24 pt-28 font-[family-name:var(--font-maven-pro)]">
      <div className="flex flex-col sm:gap-6 gap-2 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)]"
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
            <span className="relative z-10">Thank You</span>
          </motion.span>{" "}
          for Your{" "}
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
            <span className="relative z-10">Feedback</span>
          </motion.span>{" "}
          and Support!
        </motion.h1>
        <p className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            I truly appreciate your{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              feedback
            </span>{" "}
            and the time you took to share your thoughts.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Let’s{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              stay connected
            </span>{" "}
            and continue to grow together!
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Follow me on my social channels below to{" "}
            <span className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              stay updated
            </span>{" "}
            on future projects.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {" "}
            Your support means a lot and keeps me motivated!
          </motion.span>{" "}
        </p>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center p-1">
        <Link
          href={"https://github.com/Master-utsav"}
          className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30"
        >
          <NormalTooltip text="github" placement="bottom">
            <FaGithub className="size-4 dark:text-white text-black" />
          </NormalTooltip>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/master-utsav"}
          className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30"
        >
          <NormalTooltip text="linkedin" placement="bottom">
            <FaLinkedinIn className="size-4 dark:text-white text-black" />
          </NormalTooltip>
        </Link>
        <Link
          href={"https://x.com/masterutsav01"}
          className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30"
        >
          <NormalTooltip text="twitter" placement="bottom">
            <BsTwitterX className="size-4 dark:text-white text-black" />
          </NormalTooltip>
        </Link>
        <Link
          href={"https://www.instagram.com/master_utsav"}
          className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30"
        >
          <NormalTooltip text="instagram" placement="bottom">
            <FaInstagram className="size-4 dark:text-white text-black" />
          </NormalTooltip>
        </Link>
      </div>
    </section>
  );
};

export default ThankingText;
