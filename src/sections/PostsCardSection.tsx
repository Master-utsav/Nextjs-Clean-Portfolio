"use client";
import PostsButton from "@/components/ui/PostsButton";
import { blogCardImageUrl, PostsSecondNavItems } from "@/constants";
import { Image } from "@nextui-org/react";
import React from "react";

const PostsCardSection = ({ typeName }: { typeName: string }) => {
  const PostsSectionName = PostsSecondNavItems.filter(
    (item) => item.name === typeName
  )[0];
  const target = PostsSectionName.target;
  const name = PostsSectionName.name;
  const icon = PostsSectionName.icon;
  return (
    <div  className="w-full flex flex-col gap-4 sm:px-0 px-2">
      <div className="w-fit">
        <PostsButton buttonName={name} target={target} icon={icon} type="fixed"/>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {name === "article" &&
          blogCardImageUrl.map((item, idx) => (
            <div key={idx} className="sm:w-80 w-full object-cover">
              <Image
                key={idx}
                src={item}
                isBlurred 
                className="object-cover aspect-video"
                alt={name + "-" + idx}
              />
            </div>
          ))}
        {name === "notes" &&
          blogCardImageUrl.map((item, idx) => (
            <div key={idx} className="sm:w-80 w-full object-cover">
              <Image
                key={idx}
                src={item}
                isBlurred 
                className="object-cover aspect-video"
                alt={name + "-" + idx}
              />
            </div>
          ))}
        {name === "poetry" &&
          blogCardImageUrl.map((item, idx) => (
            <div key={idx} className="sm:w-80 w-full object-cover">
              <Image
                key={idx}
                src={item}
                isBlurred 
                className="object-cover aspect-video"
                alt={name + "-" + idx}
              />
            </div>
          ))}
        {name === "quote" &&
          blogCardImageUrl.map((item, idx) => (
            <div key={idx} className="sm:w-80 w-full object-cover">
              <Image
                key={idx}
                src={item}
                isBlurred 
                className="object-cover aspect-video"
                alt={name + "-" + idx}
              />
            </div>
          ))}
        {name === "story" &&
          blogCardImageUrl.map((item, idx) => (
            <div key={idx} className="sm:w-80 w-full object-cover">
              <Image
                key={idx}
                src={item}
                isBlurred 
                className="object-cover aspect-video"
                alt={name + "-" + idx}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsCardSection;
