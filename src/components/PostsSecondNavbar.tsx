"use client";

import React from "react";
import BackButton from "./ui/BackButton";
import SearchBar from "./SearchBar";
import { useRouter , usePathname} from "next/navigation";
import { PostsSecondNavItems } from "@/constants";
import PostsButton from "./ui/PostsButton";
import { FiPlusCircle } from "react-icons/fi";
import { Button } from "./ui/button";
import Link from "next/link";

const PostsSecondNavbar = ({isAdmin} : {isAdmin: boolean}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex sm:justify-between  justify-center w-full items-center pt-24 pb-2 px-3 sm:space-x-2 max-sm:space-y-2 sm:flex-row flex-col">
      <div className="flex w-full sm:w-fit justify-between sm:justify-start items-center gap-2">
        <BackButton onBtnClick={() => router.push("/posts")} />
        <div className="flex gap-1">
          {PostsSecondNavItems.map((item, idx) => (
            <div key={idx} className="">
              <PostsButton
                buttonName={item.name}
                target={item.target}
                icon={item.icon}
                isActive={pathname === item.target}
              />
            </div>
          ))}
          { isAdmin && 
           <Link href={"/posts/add-posts"}>
            <Button
              variant="expandIcon"
              className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 block sm:hidden p-2"
              Icon={FiPlusCircle}
              iconButtonName="Add Posts"
              iconPlacement="fixed-icon"
              />
            </Link>
          }
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default PostsSecondNavbar;
