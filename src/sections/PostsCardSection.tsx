"use client";
import { SiNotion } from "react-icons/si";
import { getQuoteData, Quote } from "@/actions/getPostsData";
import QuoteCards from "@/components/cards/QuoteCards";
import PostsButton from "@/components/ui/PostsButton";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import { blogCardImageUrl, PostsSecondNavItems } from "@/constants";
import { Image } from "@nextui-org/react";
import { useRouter ,  usePathname} from "next/navigation";
import React, { useEffect, useState } from "react";

const PostsCardSection = ({ typeName }: { typeName: string }) => {
  const [quoteData , setQuoteData] = useState<Quote []>([]);
  const PostsSectionName = PostsSecondNavItems.filter(
    (item) => item.name === typeName
  )[0];
  const target = PostsSectionName.target;
  const name = PostsSectionName.name;
  const icon = PostsSectionName.icon;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchPostsData = async () => {
      setQuoteData(await getQuoteData());
    }
    fetchPostsData();
  }, [typeName])
  
  return (
    <div className="max-w-7xl flex flex-col gap-4 sm:px-0 px-2">
      <div className="w-full justify-between items-center flex">
        <div className="w-fit">
          <PostsButton
            buttonName={name}
            target={target}
            icon={icon}
            type="fixed"
            isActive={pathname === target}
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
        {name === "notes" && (
          <div
            onClick={() => router.push("/posts/notes")}
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 cursor-pointer group p-5 rounded-2xl border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect bg-white/80 dark:bg-black-200/90 backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black">
                  <SiNotion className="w-3.5 h-3.5" />
                  Notion Notes
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                  PGCP-AC
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                  DAC Module
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold dark:text-white text-black font-[family-name:var(--font-salsa)] group-hover:text-blue-500 transition-colors">
                PGCP-AC Notes by utsav jaiswal
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-[family-name:var(--font-maven-pro)]">
                Comprehensive DAC Module study notes & documentation embedded directly from Notion.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md">
                View Notion Notes ↗
              </button>
            </div>
          </div>
        )}
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
        {name === "quote" && (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 w-full">
            <QuoteCards type="" quoteData={quoteData} />
          </div>
        )}
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
