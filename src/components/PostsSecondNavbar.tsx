"use client";

import React from "react";
import BackButton from "./ui/BackButton";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { PostsSecondNavItems } from "@/constants";
import PostsButton from "./ui/PostsButton";

const PostsSecondNavbar = () => {
  const router = useRouter();
  return (
    <div className="flex sm:justify-between justify-center w-full items-center pt-20 pb-2 px-3 sm:space-x-2 max-sm:space-y-2 sm:flex-row flex-col">
      <div className="flex w-full sm:w-fit justify-between sm:justify-start items-center gap-2">
        <BackButton onBtnClick={() => router.push("/posts")} />
        <div className="flex gap-1">
          {PostsSecondNavItems.map((item, idx) => (
            <div key={idx} className="">
              <PostsButton
                buttonName={item.name}
                target={item.target}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default PostsSecondNavbar;
