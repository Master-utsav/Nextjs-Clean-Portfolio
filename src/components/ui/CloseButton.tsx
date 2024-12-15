import { MdClose } from "react-icons/md";
import { Button } from "@/components/ui/button";
import React from "react";

const CloseBtn: React.FC = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect dark:bg-black-200 bg-white-600/30"
    >
      <MdClose className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white text-black" />
      <span className="sr-only">Close Button</span>
    </Button>
  );
}

const CloseButton: React.ReactNode = (
    <span className="flex justify-end items-center w-full h-full">
        <CloseBtn/>
    </span>
)

export default CloseButton;