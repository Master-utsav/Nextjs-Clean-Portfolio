"use client";

import React from "react";
import BackButton from "./ui/BackButton";
import { useRouter } from "next/navigation";
import { AddPostsNavItems} from "@/constants";
import PostsButton from "./ui/PostsButton";
import { motion } from "framer-motion";

const PostsAddSecondNavbar = () => {
  const router = useRouter();
  return (
    <div className="flex sm:justify-between justify-center w-full items-center pt-24 pb-8 px-3 space-y-3 flex-col">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-4xl text-3xl font-bold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)]"
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
            <span className="relative z-10">Choose</span>
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
            <span className="relative z-10">Category</span>
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
            <span className="relative z-10">Blog</span>
          </motion.span>
        </motion.h1>
      <div className="flex w-full sm:w-fit justify-between sm:justify-start items-center gap-2">
        <BackButton onBtnClick={() => router.push("/posts")} />
        <div className="flex gap-1">
          {AddPostsNavItems.map((item, idx) => (
            <div key={idx} className="">
              <PostsButton
                buttonName={item.name}
                target={item.target}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsAddSecondNavbar;
