"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import NormalTooltip from "@/components/ui/NormalTooltip";
import ScrollDown from "@/components/ScollDown";
import { Button } from "@/components/ui/button";
import { IoIosMail } from "react-icons/io";
import { gmailLink, resumeLink } from "@/lib/service";
import { LinkHoverPreview } from "@/components/ui/LinkHoverPreview";
import {TechLinks} from "@/constants"
import LocationPopUp from "@/components/ui/LocationPopUp";

const ExternalLinkIcon = () => {
  return <ExternalLink className="size-4" />;
};
const MailIcon = () => {
  return <IoIosMail className="size-6 dark:text-black-200 text-white-800" />;
};

const HeroSection = () => {
  
  const handleMailClick = () => {
    window.location.href = gmailLink(); 
  };

  return (
    <section
      id="home"
      className="min-h-screen max-w-5xl text-center flex justify-center flex-col space-y-4 items-center md:pt-24 pt-28 font-[family-name:var(--font-maven-pro)]"
    >
      <div className="flex flex-col sm:gap-6 gap-2 justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)]"
        >
          Crafting{" "}
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
            <span className="relative z-10">Experiences</span>
          </motion.span>{" "}
          in{" "}
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
            <span className="relative z-10">Web</span>
          </motion.span>
          ,{" "}
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
            <span className="relative z-10">Mobile</span>
          </motion.span>
          , and{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Blockchain</span>
          </motion.span>
        </motion.h1>
        <div className="sm:text-lg text-base text-center font-medium text-gray-800 dark:text-gray-200 sm:max-w-2xl w-full leading-relaxed mt-3 font-[family-name:var(--font-assistant)]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            I’m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              Utsav Jaiswal
            </span>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            a Full Stack Developer with expertise in{" "}
            <LinkHoverPreview url={TechLinks.reactjs} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              React.js
            </LinkHoverPreview>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <LinkHoverPreview url={TechLinks.typescript} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              TypeScript
            </LinkHoverPreview>
            ,
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <LinkHoverPreview url={TechLinks.nodejs} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Node.js
            </LinkHoverPreview>
            , and
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <LinkHoverPreview url={TechLinks.expo} className="underline decoration-blue-500 dark:decoration-blue-400 font-semibold">
              Expo
            </LinkHoverPreview>
            .
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {" "}
            I build applications that <span className="italic">
              connect
            </span>, <span className="italic">inspire</span>, and{" "}
            <span className="italic">push the boundaries</span> of what&apos;s
            possible.
          </motion.span>
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-center items-center font-[family-name:var(--font-assistant)]">
       
          <Button
            variant="expandIcon"
            Icon={MailIcon}
            iconPlacement="left"
            onClick={handleMailClick}
            className="rounded-md dark:text-black text-white bg-black-200 dark:bg-white-700 hover:bg-black dark:hover:bg-white text-base transition-all delay-100 duration-500 ease-in-out"
          >
            Connect
          </Button>
   
        <Link href={resumeLink()} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Button
              variant="expandIcon"
              className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
              iconPlacement="hide-from-right"
              Icon={ExternalLinkIcon}
            >
              Resume
            </Button>
          </a>
        </Link>
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
        <LocationPopUp/>
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
      <NormalTooltip text="scroll down" placement="bottom">
        <ScrollDown navigateTo="#tech" />
      </NormalTooltip>
    </section>
  );
};

export default HeroSection;
