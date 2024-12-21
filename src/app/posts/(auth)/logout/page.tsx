"use client";

import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import { logout } from "@/app/actions/authActions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LogoutPage() {
  const [isPending , setIsPending] = useState<boolean>(false);
    const router = useRouter();
    async function handleLogout() {
      setIsPending(true);
      const response = await logout();
      if (response.success) {
        setIsPending(false);
        setTimeout(() => {
          router.replace("/posts");
        }, 1000);
      }else{
        setIsPending(false);
      }
    }

  return (
    <section className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full min-h-screen dark:bg-grid-white-500/[0.2] bg-grid-black-500/[0.2]">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white 
       dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,_#F5F5F5)]"
      ></div>
      <motion.div
        initial={{ scale: 0.9, y: -100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 100 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm dark:bg-black/5 p-8 space-y-3 rounded-lg shadow-md w-full max-w-md electric-lightning-effect transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 relativ"
      >
        <div className="absolute top-2 right-2">
          <ModeToggle />
        </div>
        <div className="absolute top-2 left-2">
          <BackButton onBtnClick={() => router.push("/posts")} />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-4xl text-3xl font-bold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] px-2"
        >
          are you{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15  dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">sure</span>
          </motion.span>{" "}
          you want to{" "}
          <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
            <motion.div
              className="absolute inset-0 bg-blue-500/15  dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.68, -0.6, 0.32, 1.6],
              }}
            />
            <span className="relative z-10">Logout</span>
          </motion.span>{" "}
          ?
        </motion.h1>
        <div className="flex flex-col gap-2">
          <Button
            variant={"gooeyLeft"}
            className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
            onClick={handleLogout}
            disabled={isPending}
          >
            Logout
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
