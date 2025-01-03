"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeProvider";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { theme } = useTheme();
  return (
    <motion.div
      className={cn(
        "relative min-h-screen flex flex-col items-start justify-center overflow-hidden dark:bg-[#121212] bg-[#f5f5f5] w-full rounded-md z-0",
        className
      )}
    >
      <div
        className="relative pt-40 flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 "
      >
        <motion.div
          initial={{ opacity: 0.5, width: "5rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic ${
            theme === "dark" ? "from-white-800" : "from-blue-400/50"
          }  via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]`}
        >
          <div className="absolute  w-[100%] left-0 dark:bg-[#121212] bg-[#f5f5f5] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 dark:bg-[#121212] bg-[#f5f5f5]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "5rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent ${
            theme === "dark" ? "to-white-800" : "to-blue-400/50"
          } 
           text-white [--conic-position:from_290deg_at_center_top]`}
        >
          <div className="absolute  w-40 h-[100%] right-0 dark:bg-[#121212] bg-[#f5f5f5]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 dark:bg-[#121212] bg-[#f5f5f5] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 dark:bg-[#121212] bg-[#f5f5f5] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className={`absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full ${
            theme === "dark" ? "bg-white-800" : "bg-blue-400"
          } opacity-50 blur-3xl`}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className={`absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full ${
            theme === "dark" ? "bg-white" : "bg-blue-500/30"
          }  blur-2xl`}
        ></motion.div>
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className={`absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] ${
            theme === "dark" ? "bg-white" : "bg-blue-500"
          }`}
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-[#121212] bg-[#f5f5f5] "></div>
      </div>

      <div className="h-full relative z-50 -translate-y-64 flex flex-col items-center px-5">
        {children}
      </div>
    </motion.div>
  );
};
