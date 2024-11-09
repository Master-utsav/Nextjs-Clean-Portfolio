"use client";

import React from 'react'
import Image from "next/image"
import { motion, useInView } from 'framer-motion';

interface TechCardsProps {
    itemArray: {
        name: string;
        src: string;
        description: string;
    }[];
    title: string;
}
const TechCards: React.FC<TechCardsProps> = ({itemArray , title}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false });
  const inGlow = useInView(ref, { once: false ,  amount: 0.8 });
  return (
    <motion.div 
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 0.5 }}
    className="w-full flex flex-col gap-4 group">
        <h1
          className=" w-fit px-2 rounded-md text-3xl dark:text-white-700 text-black-500 font-bold  bg-blue-500/15 dark:bg-blue-200/10 font-[family-name:var(--font-salsa)] shadow-md dark:shadow-blue-600/10 shadow-blue-800/10 tracking-wide py-2"
        >
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {itemArray.map((item, idx) => (
            <div
              key={idx}
              className="relative flex items-center sm:flex-row flex-col gap-2 p-4 border-[1px] dark:border-blue-500/30 border-blue-800/30 rounded-lg electric-lightning-effect  "
            >
              <Image
                className={`sm:size-14 size-16  rounded-md dark:invert mix-blend-luminosity ${inGlow ? "dark:invert-0 mix-blend-darken dark:mix-blend-normal" : "" }  p-1 transition-colors delay-100 contrast-110 brightness-105 z-10`}
                height={200}
                width={200}
                quality={75}
                priority 
                src={item.src}
                alt="React Native + Expo"
              />

              <Image
                className={`absolute opacity-50 group-hover:opacity-80 z-0 sm:size-14 size-16  rounded-md dark:invert mix-blend-luminosity ${inGlow ? "dark:invert-0 mix-blend-darken dark:mix-blend-normal" : "" }  p-1 transition-colors delay-100 contrast-110 brightness-105 blur-lg`}
                height={200}
                width={200}
                quality={75}
                priority 
                src={item.src}
                alt="React Native + Expo"
              />
              <div className="flex flex-col justify-start border-l-[1px] pl-3 border-transparent dark:border-l-white-500/40 border-l-black-500/50
               dark:group-hover:border-l-blue-500/40 group-hover:border-l-blue-800/30 transition-all ease-out">
                <h1 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-300 from-blue-800 dark:to-blue-800 to-blue-300 font-[family-name:var(--font-salsa)]">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-[family-name:var(--font-assistant)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
  )
}

export default TechCards
