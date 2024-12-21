"use client";

// import { getposts } from "@/app/actions/posts/quoteActions";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface Quote {
  name: string;
  content: string;
}

const QuoteCards = ({ type }: { type: "all" | "" }) => {
  const [quoteData, setQuoteData] = useState<Quote[]>([]);

  const getData = useCallback(async () => {
    try {
      const result = await axios.get("/api/v1/posts/quote");
      if(!result.data.success){
        throw new Error(result.data.message)
      }
      const transformedData = result.data.data.map((item: Quote) => ({
        name: item.name,
        content: item.content,
      }));
      if (type === "all") {
        setQuoteData(transformedData.reverse());
      } else {
        setQuoteData(transformedData.slice(0, 4));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [type]); 

  useEffect(() => {
    getData();
  }, [getData]);

  return quoteData.map((quote, index) => (
    <div
      key={index}
      className="relative flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect flex-col gap-2 justify-between"
    >
      <blockquote className="text-lg border-l-4 pl-3 rounded-tl-md rounded-bl-md dark:border-l-blue-500/50 border-l-blue-800/50  font-[family-name:var(--font-maven-pro)] dark:text-white text-black text-pretty">
        {quote.content.split("\n").map((line, index) => (
          line.trim() !== "" && ( 
            <span key={index}>
              {line}
              <br />
            </span>
          )
        ))}
      </blockquote>
      <footer className="text-right font-[family-name:var(--font-salsa)] font-semibold text-lg dark:text-white-700 text-black-300">
        {quote.name}
      </footer>
    </div>
  ));
};

export default QuoteCards;
