// components/auth/GitHubLoginButton.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function GitHubLoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signIn("github", {
        callbackUrl: "/posts",
        redirect: false,
      });

      if (result?.error) {
        console.error("Login failed:", result.error);
      } else if (result?.ok) {
        router.push("/posts");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };
   const gitIcon = () => {return (<FaGithub className="size-6 text-black dark:text-white" />)}
  return (
    <Button
      variant={"expandIcon"}
      type="button"
      iconPlacement="hide-from-right"
      onClick={handleLogin}
      disabled={isLoading || !!session}
      className="w-full dark:bg-black-600/50  bg-white-800/80  text-black dark:text-white py-2 px-4 rounded-md hover:bg-black dark:hover:white transition disabled:opacity-30 border-[1px] electric-lightning-effect dark:border-blue-500/30 border-blue-800/30 "
      Icon={gitIcon}
    >
      {isLoading ? "Signing in..." : "Sign in with GitHub"}
    </Button>
  );
}
