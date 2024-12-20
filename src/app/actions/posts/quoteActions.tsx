"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getposts() {
  try {
    const filePath = path.join(process.cwd(), "src", "posts", "quotes", "days.quote.md");

    // Log the file path for debugging
    console.log("Resolved Path:", filePath);

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const quoteMdData = fs.readFileSync(filePath, "utf-8");
    const quoteData = matter(quoteMdData);
    const quotes = quoteData.data.days;

    return {
      success: true,
      data: quotes,
      message: "Data fetched successfully",
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      message: `Internal server error: ${error}`,
    };
  }
}
