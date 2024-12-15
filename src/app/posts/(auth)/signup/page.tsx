"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schema/zodSchema";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { useTheme } from "@/context/ThemeProvider";
import { IoSend } from "react-icons/io5";
import axios from "axios"
import  BackButton  from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

type signupFormInputs = z.infer<typeof signupSchema>;

export default function SignPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupFormInputs>({
    resolver: zodResolver(signupSchema),
  });
  const {theme} = useTheme();
  const router = useRouter();

  const onSubmit = async (data: signupFormInputs) => {
    console.log(data);
    try {
        const response = await axios.post("/api/v1/user/signup" , data , {
          headers:{
            "Content-Type": "application/json",
          }
        })
        console.log(response.data)
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <section className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full min-h-screen dark:bg-grid-white-500/[0.2] bg-grid-black-500/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white 
       dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,_#F5F5F5)]"></div>
      <motion.div
        initial={{ scale: 0.9, y: -100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 100 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm dark:bg-black/5 p-8 rounded-lg shadow-md w-full max-w-md electric-lightning-effect
        ransition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 relative"
      >
        <div className="absolute top-2 right-2">
          <ModeToggle/>
        </div>
        <div className="absolute top-2 left-2">
          <BackButton onBtnClick={() => router.push("/posts")}/>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-4xl text-3xl font-bold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)]"
        >
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
            <span className="relative z-10">SignUp</span>
          </motion.span>{" "}
          now
        </motion.h1>

        {/* Username Field */}
        <div className="mb-2">
          <Input
            variant="underlined"
            type="text"
            label="Username"
            id="username"
            {...register("username")}
            color={theme === "dark" ? "primary" : "default"}
            className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-2">
          <Input
            variant="underlined"
            type="email"
            label="Email"
            id="email"
            {...register("email")}
            color={theme === "dark" ? "primary" : "default"}
            className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <Input
            variant="underlined"
            type="password"
            label="Password"
            id="password"
            {...register("password")}
            color={theme === "dark" ? "primary" : "default"}
            className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col gap-2">
          <Link href={"/posts/login"} className="w-full text-end text-sm text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-900 dark:hover:text-blue-500 font-[family-name:var(--font-accent)]">
                  {"Already have an account?"}
                </Link>
          <Button
            variant={"expandIcon"}
            type="submit"
            iconPlacement="right"
            className="w-full dark:bg-blue-600/50  bg-blue-600/60  text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition disabled:opacity-30"
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            Icon={IoSend}
          >
            {isSubmitting ? "signing in..." : "Sign up"}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
