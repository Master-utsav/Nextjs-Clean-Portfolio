"use server";

import { POSTS_API } from "@/lib/env";
import axios from "axios";

export interface Quote {
    name: string;
    content: string
}

export async function getQuoteData(){
  const result = await axios.get(`${POSTS_API}/quote`);
  if (!result.data.success) {
    throw new Error(result.data.message);
  }
  const transformedData = result.data.data.map((item: Quote) => ({
    name: item.name,
    content: item.content,
  }));

  return transformedData
}