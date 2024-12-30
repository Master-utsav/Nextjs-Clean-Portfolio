"use client";
import React from "react";
import QuoteForm from "../forms/QuoteForm";
import ArticleForm from "../forms/ArticleForm";


const EditAndAddPage = ({ type }: { type: string }) => {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start py-5">
      <p>Type of editor is {type}</p>
      {type === "quote" && <QuoteForm/>}
      {type === "article" && <ArticleForm/>}
    </div>
  );
};

export default EditAndAddPage;
