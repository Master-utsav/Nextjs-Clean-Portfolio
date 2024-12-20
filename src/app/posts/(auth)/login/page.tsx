"use client";

import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { useTheme } from "@/context/ThemeProvider";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { login } from "@/app/actions/authActions";
import AuthFormButton from "@/components/ui/AuthFormButton";

export default function LoginPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [userData, setUserData] = useState<{
    [key: string]: { value: string };
  }>({
    identity: { value: "" },
    password: { value: "" },
  });
  const [state, loginAction] = useActionState(login, undefined);

  useEffect(() => {
    if (state && state?.success) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.success]);

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
        className="bg-white/5 backdrop-blur-sm dark:bg-black/5 p-8 rounded-lg shadow-md w-full max-w-md electric-lightning-effect
        ransition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 relative"
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
            <span className="relative z-10">Login</span>
          </motion.span>{" "}
          now
        </motion.h1>

        <form action={loginAction}>
          {/* Username Field */}
          <div className="mb-2">
            <Input
              variant="underlined"
              type="text"
              label="Username or Email"
              id="username"
              value={userData["identity"].value}
              name="identity"
              color={theme === "dark" ? "primary" : "default"}
              className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                state?.errors.identity ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [e.target.name]: { value: e.target.value },
                }))
              }
            />
            {state && state?.errors.identity?.[0] && (
              <p className="text-red-500 text-xs mt-1">
                {state?.errors.identity?.[0]}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <Input
              variant="underlined"
              type="password"
              label="Password"
              id="password"
              name="password"
              value={userData["password"].value}
              color={theme === "dark" ? "primary" : "default"}
              className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                state?.errors.password ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [e.target.name]: { value: e.target.value },
                }))
              }
            />
            {state && state?.errors.identity?.[0] && (
              <p className="text-red-500 text-xs mt-1">
                {state?.errors.identity?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={"/posts/signup"}
              className="w-full text-end text-sm text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-900 dark:hover:text-blue-500 font-[family-name:var(--font-accent)]"
            >
              {"Don't have an account?"}
            </Link>
            <AuthFormButton pendingText="Logging in..." text="Login" />
            {state && state?.serverError && (
              <p className="text-red-500 text-xs mt-1">{state?.serverError}</p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
