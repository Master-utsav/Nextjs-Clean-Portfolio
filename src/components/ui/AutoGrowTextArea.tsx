"use client";

import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useEffect, useRef } from "react";

export default function AutoGrowTextArea({
  OnTextArea,
  textAreaValue,
  placeholder,
  name,
}: {
  OnTextArea: (data: string) => void;
  textAreaValue: string;
  placeholder: string;
  name: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const defaultRows = 1;
  const maxRows = undefined; 

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto"; 
    OnTextArea(textarea.value); 
  };

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto"; // Reset height to recalculate
      const style = window.getComputedStyle(textarea);
      const borderHeight =
        parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
      const paddingHeight =
        parseInt(style.paddingTop) + parseInt(style.paddingBottom);

      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = maxRows
        ? lineHeight * maxRows + borderHeight + paddingHeight
        : Infinity;

      const newHeight = Math.min(
        textarea.scrollHeight + borderHeight,
        maxHeight
      );
      textarea.style.height = `${newHeight}px`; // Set new height
    }
  }, [maxRows, textAreaValue]); // Re-run height calculation whenever textAreaValue changes

  return (
    <div className="space-y-2 w-full rounded-lg">
      <Textarea
        id="textarea-19"
        placeholder={placeholder}
        ref={textareaRef}
        name={name}
        value={textAreaValue}
        onChange={handleInput}
        rows={defaultRows}
        className=" w-full rounded-md text-gray-900 dark:text-gray-100  resize-none hide-scrollbar focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
      />
    </div>
  );
}
