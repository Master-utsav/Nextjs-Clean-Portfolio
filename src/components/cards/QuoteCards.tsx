"use client";

import { Quote } from "@/actions/getPostsData";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const QuoteCards = ({
  type,
  quoteData,
}: {
  type: "all" | "";
  quoteData: Quote[];
}) => {
  const data = type === "all" ? [...quoteData].reverse() : quoteData.slice(0, 4);

  return (
    <div className="flex flex-wrap gap-4 w-full items-stretch justify-start">
      {data.map((quote, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -3 }}
          className="relative flex flex-col justify-between p-5 rounded-2xl border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 flex-1 min-w-[260px] sm:max-w-[340px]"
        >
          {/* Subtle Quote Background Icon */}
          <div className="absolute top-3 right-3 text-blue-500/10 dark:text-blue-400/10 text-3xl pointer-events-none select-none">
            <FaQuoteRight />
          </div>

          <div className="space-y-3 relative z-10">
            <div className="text-blue-600 dark:text-blue-400 text-base">
              <FaQuoteLeft />
            </div>

            <blockquote className="text-sm sm:text-base font-[family-name:var(--font-maven-pro)] dark:text-gray-100 text-gray-800 leading-relaxed italic">
              {quote.content.split("\n").map((line, idx) =>
                line.trim() !== "" ? (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ) : null
              )}
            </blockquote>
          </div>

          <div className="pt-3 mt-3 border-t border-blue-500/10 dark:border-blue-400/10 flex justify-end items-center relative z-10">
            <span className="font-[family-name:var(--font-salsa)] font-bold text-sm sm:text-base dark:text-blue-300 text-blue-800 tracking-wide">
              — {quote.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default QuoteCards;
