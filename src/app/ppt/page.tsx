"use client";
import { pptLink } from "@/lib/service";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Ppt() {
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);

  const ExternalLinkIcon = () => {
    return <ExternalLink className="size-4" />;
  };

  const password = process.env.NEXT_PUBLIC_PASSWORD!;
  const handleInputChange = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setInputValue(value);
    setIsInputValid(value === password);
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="max-w-xl justify-center items-center flex flex-col gap-3 mt-4">
        <label>
          Enter your <span className="font-ubuntu font-semibold">Password</span>{" "}
          for downloading the PPT.
        </label>
        <input
          type="password"
          value={inputValue}
          onChange={handleInputChange}
          className={`p-1 border-[2px] rounded-md w-full focus:outline-none text-gray-900 dark:text-white dark:bg-gray-700 bg-gray-100 ${
            isInputValid ? "border-green-500" : "border-red-300"
          }`}
        />
        {isInputValid ? (
          <Link href={pptLink()} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
                iconPlacement="hide-from-right"
                Icon={ExternalLinkIcon}
              >
                Minor Project Course Yuga
              </Button>
            </a>
          </Link>
        ) : (
          <Button
            disabled
            variant="expandIcon"
            className="electric-lightning-effect rounded-md text-gray-400 bg-gray-300/30 text-base transition-all delay-100 duration-500 ease-in-out border-[1px] border-gray-400/30"
          >
            Minor Project Course Yuga
          </Button>
        )}
      </div>
    </section>
  );
}
