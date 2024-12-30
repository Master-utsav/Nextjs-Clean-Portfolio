"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Input } from "@nextui-org/react";
import React, { useActionState } from "react";
import AutoGrowTextArea from "../ui/AutoGrowTextArea";
import { articleForm } from "@/actions/formActions";
import AuthFormButton from "../ui/AuthFormButton";
import { Button } from "../ui/button";
import MarkdownEditor from "../ui/markDownEditor";

const ArticleForm = () => {
  const [articleFormData, setArticleFormData] = React.useState<{
    [key: string]: { val: string };
  }>({
    title: { val: "1" },
    description: { val: "" },
    content : {val: ""},
  });
  const [image , setImage] = React.useState<File | string>("");
  const [markdown, setMarkdown] = React.useState<string>("");
  const [upload, setUpload] = React.useState<"FILE" | "LINK">("LINK");
  const { theme } = useTheme();
  const [state, quoteStateActions] = useActionState(articleForm, undefined);

  function handleDescriptionData(val: string) {
    setArticleFormData((prev) => ({ ...prev, description: { val } }));
  }
  function handleMarkdown(val: string){
    setMarkdown(val);
  }

  return (
    <form action={quoteStateActions} className="w-full flex flex-col gap-4 justify-center items-center">
      <Input
        variant="underlined"
        type="text"
        label="Title"
        id="title"
        name="title"
        value={articleFormData["title"].val}
        color={theme === "dark" ? "primary" : "default"}
        className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
          state?.errors?.title ? "border-red-500" : "border-gray-300"
        }`}
        onChange={(e) =>
          setArticleFormData((prev) => ({
            ...prev,
            [e.target.name]: { val: e.target.value },
          }))
        }
      />
      <AutoGrowTextArea
        placeholder="Add the description of the article"
        OnTextArea={handleDescriptionData}
        name="description"
        textAreaValue={articleFormData["description"].val}
      />
      <div className="w-full flex justify-center items-center gap-2">
          <Button
            variant="gooeyLeft"
            className="w-full dark:bg-blue-600/50 bg-blue-600/60 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition disabled:opacity-30"
            disabled={upload === "LINK"}
            onClick={() => setUpload("LINK")}
          >
            Paste an Image Link
          </Button>
          <Button
            variant="gooeyLeft"
            className="w-full dark:bg-blue-600/50 bg-blue-600/60 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition disabled:opacity-30"
            disabled={upload === "FILE"}
            onClick={() => setUpload("FILE")}
          >
            Upload an Image File
          </Button>
        </div>
        {upload === "FILE" ? (
                  <input
                  // variant="underlined"
                  type="file"
                  // label="Image Link"
                  id="image"
                  name="image"
                  color={theme === "dark" ? "primary" : "default"}
                  className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                    state?.errors?.image ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const file = e.target.files[0]; 
                      const url = URL.createObjectURL(file); 
                      setImage(url);
                    }
                  }}
                />
                ) : (
                  <Input
                    variant="underlined"
                    type="text"
                    label="Image Link"
                    id="image"
                    name="image"
                    value={image as string}
                    color={theme === "dark" ? "primary" : "default"}
                    className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                      state?.errors?.image ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={(e) => setImage(e.target.value)}
                  />
                )}
      <MarkdownEditor markdown={markdown} setMarkdown={handleMarkdown} name="content"/>
      <AuthFormButton pendingText="submtting..." text="submit" />
    </form>
  );
};

export default ArticleForm;
