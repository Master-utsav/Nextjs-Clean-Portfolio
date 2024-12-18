"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { IconType } from "react-icons/lib";

const PostsButton = ({
  icon,
  target,
  buttonName,
  type,
}: {
  icon: IconType;
  target: string;
  buttonName: string;
  type?: "fixed";
}) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  useEffect(() => {
    setIsActive(target === location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Link href={target} className="w-full relative">
      {type === "fixed" ? (
        <Button
        variant={"expandIcon"}
        className={`w-full electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 text-base transition-all delay-100 duration-500 ease-in-out   dark:hover:bg-black-100 hover:bg-white-600/50 flex font-[family-name:var(--font-assistant)]  ${
          isActive
            ? "border-[2px] dark:border-blue-500/60 border-blue-800/60"
            : "border-[1px] dark:border-blue-500/30 border-blue-800/30"
        }`}
        iconPlacement="end-icon"
        Icon={icon}
        iconButtonName={buttonName}
      /> 
      ) : (
        <>
          <Button
            variant="expandIcon"
            className={`w-full electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 text-base transition-all delay-100 duration-500 ease-in-out   dark:hover:bg-black-100 hover:bg-white-600/50 sm:flex hidden font-[family-name:var(--font-assistant)]  ${
              isActive
                ? "border-[2px] dark:border-blue-500/60 border-blue-800/60"
                : "border-[1px] dark:border-blue-500/30 border-blue-800/30"
            }`}
            iconPlacement="right"
            Icon={icon}
          >
            {buttonName}
          </Button>
          <Button
            variant="expandIcon"
            className={`w-full electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:hover:bg-black-100 hover:bg-white-600/50 sm:hidden font-[family-name:var(--font-assistant)] p-2 flex ${
              isActive
                ? "border-[2px] dark:border-blue-500/60 border-blue-800/60"
                : "border-[1px] dark:border-blue-500/30 border-blue-800/30"
            }`}
            Icon={icon}
            iconPlacement="fixed-icon"
            iconButtonName={buttonName}
          />
        </>
      )}
    </Link>
  );
};

export default PostsButton;
