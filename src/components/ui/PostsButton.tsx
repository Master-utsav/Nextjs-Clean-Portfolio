import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { IconType } from "react-icons/lib";


const PostsButton = ({
  icon,
  target,
  buttonName,
}: {
  icon: IconType;
  target: string;
  buttonName: string;
}) => {

  return (
    <Link href={target} className="w-full relative">
      <Button
        variant="expandIcon"
        className="w-full electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 sm:flex hidden font-[family-name:var(--font-assistant)]"
        iconPlacement="right"
        Icon={icon} 
      >
        {buttonName}
      </Button>
      <Button
        variant="expandIcon"
        className="w-full electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 sm:hidden font-[family-name:var(--font-assistant)] p-2 flex"
        Icon={icon}
        iconPlacement="fixed-icon"
        iconButtonName={buttonName}
       />
       
    </Link>
  );
};

export default PostsButton;
