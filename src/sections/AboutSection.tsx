"use client";

import { Button } from "@/components/ui/button";
import { AboutData } from "@/constants";
import { motion, useInView } from "framer-motion";
import React from "react";
import Image from "next/image"

interface ModalContent {
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
  const [currentModalContent, setCurrentModalContent] = React.useState<ModalContent | null>(null);
  
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
      className="min-h-screen relative max-w-6xl text-center flex justify-center flex-col pt-20 space-y-4 items-center font-[family-name:var(--font-maven-pro)] "
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
      {!isFloatingCardsOpen && (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center pulse-effect" />
          <Button
            variant="gooeyRight"
            className="w-32 h-32 scale-about-btn rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 shadow-md transition-transform transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-600"
            onClick={() => {setisFloatingCardsOpen((prev) => !prev)}}
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

      {isFloatingCardsOpen && (
        <div className=" px-1 bg-transparent max-w-lg py-1 justify-center items-center flex flex-col gap-4">
          {AboutData.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col sm:flex-row sm:gap-4 gap-2 justify-between items-center rounded-lg p-2 backdrop-blur-lg bg-white-700/60 dark:bg-black-600/60 shadow-lg relative border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect"
            >
              <div className="max-sm:w-full w-1/4 text-sm text-gray-500 dark:text-gray-300 flex justify-center items-center sm:flex-col flex-row sm:gap-0 gap-3 font-[family-name:var(--font-assistant)]">
                <div className="font-semibold max-sm:w-2/5 text-center">
                  {item.startTime}
                </div>
                <div className="font-semibold max-sm:w-1/6 text-center">-</div>
                <div className="font-semibold max-sm:w-2/5 text-center">
                  {item.endTime}
                </div>
              </div>

              <div className="sm:w-[1px] sm:h-10 w-[90%] h-[1px] bg-blue-800 dark:bg-blue-500/60" />

              <h1 className="w-[60%] text-xl font-semibold dark:text-blue-300 text-blue-800 font-[family-name:var(--font-salsa)]">
                {item.title}
              </h1>

              <div>
                {/* Button to open modal */}
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
            </div>
          ))}

          {isModalOpen && currentModalContent &&
            <div className="h-screen fixed top-0 w-full flex justify-center items-center bg-[#f5f5f5]/40 dark:bg-[#121212]/40 backdrop-blur-lg p-8 rounded-lg shadow-lg z-20">
              <div className="max-w-lg p-2 rounded-lg flex flex-col gap-1 justify-center items-center backdrop-blur-lg dark:bg-black-200/80 bg-white-800/50 border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect z-10 ">
                <div className="flex flex-col gap-4 z-10 ">
                    <div className="w-full text-base sm:text-xl text-gray-500 dark:text-gray-300 flex justify-center items-center flex-col sm:flex-row sm:gap-3 font-[family-name:var(--font-assistant)] ">
                        <div className="font-semibold max-sm:w-2/5 text-center">
                          {currentModalContent.startTimeline}
                        </div>
                        <div className="font-semibold max-sm:w-1/6 text-center">-</div>
                        <div className="font-semibold max-sm:w-2/5 text-center">
                          {currentModalContent.endTimeline}
                        </div>
                    </div>
                    {currentModalContent.content.map((item, idx) => (
                      <div key={idx} className="w-full text-base dark:bg-black-300/50 bg-white-800  rounded-lg p-1">
                        <div className="flex gap-2 items-center relative">
                          <Image
                          width={100}
                          height={100}
                          src={item.logo}
                          alt={item.name}
                          className="size-16 object-cover rounded-lg p-1 z-10"
                          />
                          <Image
                          width={100}
                          height={100}
                          src={item.logo}
                          alt={item.name}
                          className="absolute size-16 object-cover rounded-lg p-1 blur-lg z-0"
                          />
                           <div className="w-[1px] h-16 bg-blue-800 dark:bg-blue-500/60" />
                           <h1 className="text-xl text-center font-semibold dark:text-blue-300 text-blue-800 font-[family-name:var(--font-salsa)]">
                              {item.name}
                            </h1>
                        </div>
                        <p className="font-[family-name:var(--font-accent)] dark:text-white-700 text-black-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                    </div>
                  <Button
                    color="danger"
                    variant="shine"
                    onClick={handleClosingModal}
                  >
                    Close
                  </Button>
                </div>
            </div>
          }
          <div className="w-full max-w-lg relative flex justify-center items-center">
            <div className="absolute inset-0 flex items-center justify-center pulse-effect-collapse z-0" />
            <Button
              variant="gooeyRight"
              className="w-full max-w-xs flex items-center justify-center rounded-lg p-3 dark:bg-black-200 bg-[#f5f5f5] shadow-md transition-transform transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 scale-collapse-btn z-10"
              onClick={() => {setisFloatingCardsOpen((prev) => !prev)}}
            >
              <span className="text-black dark:text-white font-[family-name:var(--font-accent)] text-base">
                Collapse all
              </span>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
