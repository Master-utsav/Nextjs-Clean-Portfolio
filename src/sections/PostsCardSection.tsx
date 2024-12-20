"use client";
import QuoteCards from "@/components/cards/QuoteCards";
import PostsButton from "@/components/ui/PostsButton";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import { blogCardImageUrl, PostsSecondNavItems } from "@/constants";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const PostsCardSection = ({ typeName }: { typeName: string }) => {
  const PostsSectionName = PostsSecondNavItems.filter(
    (item) => item.name === typeName
  )[0];
  const target = PostsSectionName.target;
  const name = PostsSectionName.name;
  const icon = PostsSectionName.icon;
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-4 sm:px-0 px-2">
      <div className="w-full justify-between items-center flex">
        <div className="w-fit">
          <PostsButton
            buttonName={name}
            target={target}
            icon={icon}
            type="fixed"
          />
        </div>
        <div className="w-fit">
          <ViewMoreButton onBtnClick={() => router.push(target)} />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 relative">
        {name === "article" &&
          blogCardImageUrl.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-76 w-full object-cover rounded-lg border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect flex flex-col gap-2"
            >
              <Image
                key={idx}
                src={item.src}
                isBlurred
                className="object-cover aspect-video rounded-lg"
                alt={item.alt}
              />
              <h1 className="font-[family-name:var(--font-salsa)] dark:text-white text-black text-lg text-pretty px-1 pb-2">
                {item.title}
              </h1>
            </div>
          ))}
        {name === "notes" &&
          blogCardImageUrl.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-76 w-full object-cover rounded-lg border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect flex flex-col gap-2"
            >
              <Image
                key={idx}
                src={item.src}
                isBlurred
                className="object-cover aspect-video rounded-lg"
                alt={item.alt}
              />
              <h1 className="font-[family-name:var(--font-salsa)] dark:text-white text-black text-lg text-pretty px-1 pb-2">
                {item.title}
              </h1>
            </div>
          ))}
        {name === "poetry" &&
          blogCardImageUrl.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-76 w-full object-cover rounded-lg border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect flex flex-col gap-2"
            >
              <Image
                key={idx}
                src={item.src}
                isBlurred
                className="object-cover aspect-video rounded-lg"
                alt={item.alt}
              />
              <h1 className="font-[family-name:var(--font-salsa)] dark:text-white text-black text-lg text-pretty px-1 pb-2">
                {item.title}
              </h1>
            </div>
          ))}
        {name === "quote" && <QuoteCards type=""/>}
        {name === "story" &&
          blogCardImageUrl.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-76 w-full object-cover rounded-lg border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect flex flex-col gap-2"
            >
              <Image
                key={idx}
                src={item.src}
                isBlurred
                className="object-cover aspect-video rounded-lg"
                alt={item.alt}
              />
              <h1 className="text-start font-[family-name:var(--font-salsa)] dark:text-white text-black text-lg text-pretty px-1 pb-2">
                {item.title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsCardSection;
