"use client";

import CustomAboutModal from "@/components/CustomAboutModal";
import { Button } from "@/components/ui/button";
import { AboutData } from "@/constants";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import React from "react";

export interface ModalContent {
  startTimeline: string;
  endTimeline: string;
  title: string;
  content: {
    name: string;
    logo: string;
    description: string;
  }[];
}

const AboutSection: React.FC = () => {
  const titleRef = React.useRef(null);
  const [isFloatingCardsOpen, setisFloatingCardsOpen] = React.useState(false);
  const titleInView = useInView(titleRef, { once: false, amount: 0.2 });
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [
    currentModalContent,
    setCurrentModalContent,
  ] = React.useState<ModalContent | null>(null);

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  const handleOpenModalClick = (id: number) => {
    setIsModalOpen((prev) => !prev);
    const clickedAboutData = AboutData.find((item) => item.id === id);

    if (clickedAboutData) {
      setCurrentModalContent({
        startTimeline: clickedAboutData.startTime,
        endTimeline: clickedAboutData.endTime,
        title: clickedAboutData.title,
        content: clickedAboutData.content.map((item) => ({
          name: item.name,
          logo: item.logo,
          description: item.description,
        })),
      });
    }
  };

  function handleClosingModal() {
    setIsModalOpen((prev) => !prev);
    setCurrentModalContent(null);
  }

  return (
    <section
      ref={titleRef}
      id="about"
      className={`min-h-screen relative max-w-6xl text-center flex justify-center flex-col py-8 space-y-4 items-center font-[family-name:var(--font-maven-pro)]`}
    >
      <div
        ref={titleRef}
        className="flex flex-col sm:gap-6 gap-2 relative justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in"
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

      <AnimatePresence mode="wait">
      {isFloatingCardsOpen ? (
        <div className=" px-1 bg-transparent max-w-lg py-1 justify-center items-center flex flex-col gap-4">
            {AboutData.map((item, idx) => (
              <motion.div
                key={item.id}
                className="w-full flex flex-col sm:flex-row sm:gap-4 gap-2 justify-between items-center rounded-lg p-2 backdrop-blur-lg bg-white-700/60 dark:bg-black-600/60 shadow-lg relative border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: idx * 0.1,
                }}
              >
                <div className="max-sm:w-full w-1/4 text-sm text-gray-500 dark:text-gray-300 flex justify-center items-center sm:flex-col flex-row sm:gap-0 gap-3 font-[family-name:var(--font-assistant)]">
                  <div className="font-semibold max-sm:w-2/5 text-center">
                    {item.startTime}
                  </div>
                  <div className="font-semibold max-sm:w-1/6 text-center">
                    -
                  </div>
                  <div className="font-semibold max-sm:w-2/5 text-center">
                    {item.endTime}
                  </div>
                </div>

                <div className="sm:w-[1px] sm:h-10 w-[90%] h-[1px] bg-blue-800 dark:bg-blue-500/60" />

                <h1 className="w-[60%] text-xl font-semibold dark:text-blue-300 text-blue-800 font-[family-name:var(--font-salsa)]">
                  {item.title}
                </h1>

                <div>
                  <Button
                    variant="gooeyRight"
                    className="sm:w-14 sm:h-14 w-[90%] rounded-full flex items-center justify-center bg-gradient-to-r dark:from-blue-500 from-blue-800 dark:to-blue-800 to-blue-500 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                    onClick={() => handleOpenModalClick(item.id)}
                  >
                    <span className="text-white font-[family-name:var(--font-accent)] sm:text-sm text-base">
                      Details
                    </span>
                  </Button>
                </div>
              </motion.div>
            ))}

          {isModalOpen && currentModalContent ? (
            <CustomAboutModal
              currentModalContent={currentModalContent}
              onClose={handleClosingModal}
            />
          ): ""}

          <Link href={"/#about"} className="w-full max-w-lg relative flex justify-center items-center">
            <div className="absolute inset-0 flex items-center justify-center pulse-effect-collapse z-0" />
            <Button
              variant="gooeyRight"
              className="w-full max-w-xs flex items-center justify-center rounded-lg p-3 dark:bg-black-200 bg-[#f5f5f5] shadow-md transition-transform transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 scale-collapse-btn z-10"
              onClick={() => {
                setisFloatingCardsOpen((prev) => !prev);
              }}
            >
              <span className="text-black dark:text-white font-[family-name:var(--font-accent)] text-base">
                Collapse all
              </span>
            </Button>
          </Link>
        </div>
      ) : (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center pulse-effect" />
          <Button
            variant="gooeyRight"
            className="w-32 h-32 scale-about-btn rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 shadow-md transition-transform transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-600"
            onClick={() => {
              setisFloatingCardsOpen((prev) => !prev);
            }}
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
      )}
    </AnimatePresence>
    </section>
  );
};

export default AboutSection;
