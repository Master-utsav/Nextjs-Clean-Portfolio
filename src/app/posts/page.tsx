"use client"
import MyName from "@/components/MyName";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import AboutSection from "@/sections/AboutSection";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

export default function Post() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full">
      <main className="max-w-7xl w-full flex flex-col gap-2 items-center">
        <div className="flex flex-row gap-4 justify-center items-center font-[family-name:var(--font-assistant)] py-10">
        <Link href={"/"} >
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
                iconPlacement="hide-from-right"
                Icon={FaHome}
              >
                Home
              </Button>
          </Link>
          <Link href={"/posts/login"} >
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
                iconPlacement="hide-from-right"
                Icon={AiOutlineLogin}
              >
                Login
              </Button>
          </Link>
          <ModeToggle/>
        </div>
        <h1 className="md:text-5xl text-3xl font-bold font-[family-name:var(--font-salsa)] text-black dark:text-white">Latest Blog Posts</h1>
        <AboutSection/>
      </main>
      <MyName className="sm:inline-block hidden fixed bottom-0 right-2 w-20 rounded-lg bg-transparent" />
    </div>
  );
}
