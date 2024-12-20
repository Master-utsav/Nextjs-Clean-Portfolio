"use client";

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";
import { IoSend } from "react-icons/io5";

const AuthFormButton = ({pendingText , text}: {pendingText: string , text: string}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={"expandIcon"}
      type="submit"
      iconPlacement="right"
      className="w-full dark:bg-blue-600/50  bg-blue-600/60  text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition disabled:opacity-30"
      disabled={pending}
      Icon={IoSend}
    >
      {pending ? pendingText : text}
    </Button>
  );
};

export default AuthFormButton;
