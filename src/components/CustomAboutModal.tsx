import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ModalContent } from "@/sections/AboutSection";
import {motion } from "framer-motion";

const CustomAboutModal = ({
  currentModalContent,
  onClose,
}: {
  currentModalContent: ModalContent;
  onClose: () => void;
}) => {
  return (
      <div className="h-screen fixed inset-0 w-full flex justify-center items-center bg-[#f5f5f5]/40 dark:bg-[#121212]/40 backdrop-blur-lg p-8 rounded-lg shadow-lg z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            ease: [0.85, 0, 0.15, 1],
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="max-w-lg p-2 h-4/5 relative rounded-lg flex flex-col gap-1 justify-center items-center backdrop-blur-lg dark:bg-black-200/80 bg-white-800/50 border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect z-10 "
        >
          <div className="flex flex-col gap-4 z-10 h-[90%] ">
            <div className="w-full text-base sm:text-xl text-gray-500 dark:text-gray-300 flex justify-center items-center flex-col sm:flex-row sm:gap-3 font-[family-name:var(--font-assistant)] ">
              <div className="font-semibold max-sm:w-2/5 text-center">
                {currentModalContent.startTimeline}
              </div>
              <div className="font-semibold max-sm:w-1/6 text-center">-</div>
              <div className="font-semibold max-sm:w-2/5 text-center">
                {currentModalContent.endTimeline}
              </div>
            </div>
            <div className="h-4/5 relative overflow-y-scroll bg-transparent scrollbar-custom reounded-lg space-y-2 px-1">
            {/* <div className="h-4/5 fixed inset-0 bg-gradient-to-t from-black-200/70 via-transparent to-black-200/70 to- z-10"/> */}
            {currentModalContent.content.map((item, idx) => (
                <div
                key={idx}
                className="w-full text-base dark:bg-black-300/50 bg-white-800  rounded-lg p-1 z-0"
                >
                <div className="flex gap-2 items-center relative">
                  <Image
                    width={100}
                    height={100}
                    src={item.logo}
                    alt={item.name}
                    className="sm:size-14  size-12 object-cover rounded-lg p-1 z-10"
                    />
                  <Image
                    width={100}
                    height={100}
                    src={item.logo}
                    alt={item.name}
                    className="absolute sm:size-16 size-12 object-cover rounded-lg p-1 blur-lg z-0"
                    />
                  <div className="w-[1px] h-16 bg-blue-800 dark:bg-blue-500/60" />
                  <h1 className="sm:text-xl text-lg text-center font-semibold dark:text-blue-300 text-blue-800 font-[family-name:var(--font-salsa)]">
                    {item.name}
                  </h1>
                </div>
                <p className="font-[family-name:var(--font-accent)] dark:text-white-700 text-black-300 sm:text-base text-sm">
                  {item.description}
                </p>
              </div>
            ))}
            </div>
          </div>
          <div className="w-full max-w-lg overflow-hidden relative flex justify-center items-center">
            <div className="absolute inset-0 flex items-center justify-center pulse-effect-collapse z-0" />
            <Button
              variant="gooeyRight"
              className="w-full max-w-xs flex items-center justify-center rounded-lg p-3 dark:bg-black-200/80 bg-white-800/50 shadow-md transition-transform transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 scale-collapse-btn z-10"
              onClick={onClose}
            >
              <span className="text-black dark:text-white font-[family-name:var(--font-accent)] text-base">
                Close
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
  );
};

export default CustomAboutModal;
