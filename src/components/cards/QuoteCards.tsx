"use client";

import { Quote } from "@/actions/getPostsData";

const QuoteCards = ({
  type,
  quoteData,
}: {
  type: "all" | "";
  quoteData: Quote[];
}) => {
  
  const data = type === "all" ? quoteData.reverse() : quoteData.slice(0, 4);

  return data.map((quote, index) => (
    <div
      key={index}
      className="relative flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg  w-full border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect flex-col gap-2 justify-between"
    >
      <blockquote className="sm:text-lg text-base border-l-4 pl-3 rounded-tl-md rounded-bl-md dark:border-l-blue-500/50 border-l-blue-800/50  font-[family-name:var(--font-maven-pro)] dark:text-white text-black text-pretty">
        {quote.content.split("\n").map(
          (line, index) =>
            line.trim() !== "" && (
              <span key={index}>
                {line}
                <br />
              </span>
            )
        )}
      </blockquote>
      <footer className="text-right font-[family-name:var(--font-salsa)] font-semibold text-lg dark:text-white-700 text-black-300">
        {quote.name}
      </footer>
    </div>
  ));
};

export default QuoteCards;
