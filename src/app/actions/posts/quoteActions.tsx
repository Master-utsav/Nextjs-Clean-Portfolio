"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getposts() {
    try {
        const filePath = path.join(process.cwd(), "src", "posts", "quotes", "days.quote.md");

        const quoteMdData = fs.readFileSync(filePath, "utf-8");

        const quoteData = matter(quoteMdData);
        const quotes = quoteData.data.days;

        return {
            success: true,
            data : quotes,
            message : "data fetched successfully"
        }
    } catch (error) {
        return {
            success: false,
            data : [],
            message : `Internal server error : ${error}`
        }
    }
}
