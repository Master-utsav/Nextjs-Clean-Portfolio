import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "src", "posts", "quotes", "days.quote.md");

        const quoteMdData = fs.readFileSync(filePath, "utf-8");

        const quoteData = matter(quoteMdData);
        const quotes = quoteData.data.days;

        return NextResponse.json({ success: true, message: "Data fetched", data: quotes }, { status: 200 });
    } catch (error) {
        console.error("Error reading file:", error);
        return NextResponse.json({ success: false, message: "Error fetching data" }, { status: 500 });
    }
}
