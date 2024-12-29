"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Input } from "@nextui-org/react";
import React, { useActionState } from "react";
import AutoGrowTextArea from "../ui/AutoGrowTextArea";
import { qouteForm } from "@/actions/formActions";
import AuthFormButton from "../ui/AuthFormButton";

const QuoteForm = () => {
  const [quoteFormData, setQuoteFormData] = React.useState<{
    [key: string]: { val: string };
  }>({
    day: { val: "1" },
    quote: { val: "Nothing is impossible." },
  });
  const { theme } = useTheme();
  const [state, quoteStateActions] = useActionState(qouteForm, undefined);
  function handleQuoteData(val: string) {
    setQuoteFormData((prev) => ({ ...prev, quote: { val } }));
  }
  return (
    <form action={quoteStateActions} className="w-full flex flex-col gap-2 justify-center items-center">
      <Input
        variant="underlined"
        type="text"
        label="Title"
        id="title"
        name="day"
        value={quoteFormData["day"].val}
        color={theme === "dark" ? "primary" : "default"}
        className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
          state?.errors?.day ? "border-red-500" : "border-gray-300"
        }`}
        onChange={(e) =>
          setQuoteFormData((prev) => ({
            ...prev,
            [e.target.name]: { val: e.target.value },
          }))
        }
      />
      <AutoGrowTextArea
        placeholder="quote of the day"
        OnTextArea={handleQuoteData}
        name="quote"
        textAreaValue={quoteFormData["quote"].val}
      />
      <AuthFormButton pendingText="submtting..." text="submit" />
    </form>
  );
};

export default QuoteForm;
