"use client";
import { pptLink } from "@/lib/service";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Ppt() {
  console.log("inside ppt comp");

  const ExternalLinkIcon = () => {
    return <ExternalLink className="size-4" />;
  };
  
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <Link href={pptLink()} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Button
            variant="expandIcon"
            className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
            iconPlacement="hide-from-right"
            Icon={ExternalLinkIcon}
          >
            Minor Project Course Yuga
          </Button>
        </a>
      </Link>
    </section>
  );
}
