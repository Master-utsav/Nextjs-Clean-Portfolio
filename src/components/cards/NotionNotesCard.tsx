"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiNotion } from "react-icons/si";
import {
  FiCopy,
  FiCheck,
  FiBookOpen,
  FiCode,
  FiLayers,
  FiCheckCircle,
  FiArrowUpRight
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface NotionNotesCardProps {
  title?: string;
  description?: string;
  notionUrl?: string;
  author?: string;
  tags?: string[];
}

export default function NotionNotesCard({
  title = "PGCP-AC Notes by utsav jaiswal",
  description = "Comprehensive DAC Module & PGCP-AC study material, notes, code snippets, and documentation.",
  notionUrl = "https://charmed-earthworm-0aa.notion.site/DAC-Module-3c5ad890c7cb80b3a9fae986c2dca490",
  author = "utsav jaiswal",
  tags = ["PGCP-AC", "DAC Module", "Notion Workspace", "C++ & DSA", "Web Dev"],
}: NotionNotesCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(notionUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto rounded-2xl border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect bg-white/90 dark:bg-black-200/90 backdrop-blur-md shadow-2xl overflow-hidden"
    >
      {/* Notion Cover Header */}
      <div className="h-44 md:h-52 w-full relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 overflow-hidden flex items-end p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/40 pointer-events-none" />
        
        {/* Floating Notion Icon Badge */}
        <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/10">
          <SiNotion className="w-4 h-4 text-white" />
          <Link href={notionUrl} className="cursor-pointer hover:text-blue-500 transition-colors duration-300" target="_blank">Notion Workspace</Link>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border-2 border-white/20 flex items-center justify-center text-3xl md:text-4xl text-black dark:text-white">
            <Image
              src={"/images/my_picture_logo.png"}
              alt="Notion Notes"
              width={100}
              height={100}
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="text-white drop-shadow-md">
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase opacity-90">
              Study Notes & References
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold font-[family-name:var(--font-salsa)] tracking-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Card Content & Action Section */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Tags & Author Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <FiBookOpen className="w-4 h-4 text-blue-500" />
            <span>Created by <strong className="text-gray-800 dark:text-gray-200 font-semibold">{author}</strong></span>
          </div>
        </div>

        {/* Description & Overview */}
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-[family-name:var(--font-maven-pro)] leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 flex items-start gap-3">
              <FiCode className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Structured Topics</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Comprehensive DAC modules & technical subjects</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 flex items-start gap-3">
              <FiLayers className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Code & Diagrams</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Detailed illustrations, notes & source code</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Always Updated</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Synced directly with live Notion workspace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {copied ? (
              <>
                <FiCheck className="w-4 h-4 text-green-500" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4" />
                <span>Copy Notion Link</span>
              </>
            )}
          </button>

          <a
            href={notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Open PGCP-AC Notes in Notion</span>
            <FiArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
