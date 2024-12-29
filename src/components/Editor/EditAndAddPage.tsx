"use client";
import React, { useActionState } from "react";
import MarkdownEditor from "../ui/markDownEditor";
import { Input } from "@nextui-org/react";
import { useTheme } from "@/context/ThemeProvider";
import { addNewPost } from "@/actions/formActions";
import { Button } from "../ui/button";
import AuthFormButton from "../ui/AuthFormButton";
import QuoteForm from "../forms/QuoteForm";


const EditAndAddPage = ({ type }: { type: string }) => {
  const [markdown, setMarkdown] = React.useState<string>("");
  const [addFormData, setAddFormData] = React.useState<{
    [key: string]: { value: string };
  }>({
    title: { value: "" },
    description: { value: "" },
    image: { value: "https://masterutsav.in/my_picture_logo.jpg" },
    content: { value: "" },
  });
  const { theme } = useTheme();
  const [state, addFormAction] = useActionState(addNewPost, undefined);
  const [upload, setUpload] = React.useState<"FILE" | "LINK">("LINK");

  function handleMarkdown(val: string) {
    setMarkdown(val);
    setAddFormData((prev) => ({
      ...prev,
      content: { value: val },
    }));
  }

  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start py-5">
      <p>Type of editor is {type}</p>
      {type === "quote" && <QuoteForm/>}
      <form action={addFormAction} className="w-full flex flex-col gap-4">
        <Input
          variant="underlined"
          type="text"
          label="Title"
          id="title"
          name="title"
          value={addFormData["title"].value}
          color={theme === "dark" ? "primary" : "default"}
          className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
            state?.errors?.title ? "border-red-500" : "border-gray-300"
          }`}
          onChange={(e) =>
            setAddFormData((prev) => ({
              ...prev,
              [e.target.name]: { value: e.target.value },
            }))
          }
        />
        <Input
          variant="underlined"
          type="text"
          label="Description"
          id="description"
          name="description"
          value={addFormData["description"].value}
          color={theme === "dark" ? "primary" : "default"}
          className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
            state?.errors?.description ? "border-red-500" : "border-gray-300"
          }`}
          onChange={(e) =>
            setAddFormData((prev) => ({
              ...prev,
              [e.target.name]: { value: e.target.value },
            }))
          }
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
          onChange={(e) =>
            setAddFormData((prev) => ({
              ...prev,
              [e.target.name]: { value: e.target.value },
            }))
          }
        />
        ) : (
          <Input
            variant="underlined"
            type="text"
            label="Image Link"
            id="image"
            name="image"
            value={addFormData["image"].value}
            color={theme === "dark" ? "primary" : "default"}
            className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
              state?.errors?.image ? "border-red-500" : "border-gray-300"
            }`}
            onChange={(e) =>
              setAddFormData((prev) => ({
                ...prev,
                [e.target.name]: { value: e.target.value },
              }))
            }
          />
        )}
        <MarkdownEditor markdown={markdown} setMarkdown={handleMarkdown} />
        <AuthFormButton pendingText="...submitting..." text="submit form"/>
      </form>
    </div>
  );
};

export default EditAndAddPage;
