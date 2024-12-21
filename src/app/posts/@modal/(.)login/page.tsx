"use client";

import { motion } from "framer-motion";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { useTheme } from "@/context/ThemeProvider";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import CloseButton from "@/components/ui/CloseButton";
import Link from "next/link";
import AuthFormButton from "@/components/ui/AuthFormButton";
import { login } from "@/app/actions/authActions";
import FormToast from "@/components/ui/FormToast";

export default function LoginModal() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [userData, setUserData] = useState<{
    [key: string]: { value: string };
  }>({
    identity: { value: "" },
    password: { value: "" },
  });
  const [state, loginAction] = useActionState(login, undefined);

  useEffect(() => {
    if (state && state?.success) {
      setTimeout(() => {
        setIsOpen(!isOpen);
        router.replace("/posts");
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.success]);

  return (
    <motion.div
      initial={{ scale: 0.9, x: 500, opacity: 0 }}
      animate={{ scale: 1, x: 0, opacity: 1 }}
      exit={{ scale: 0.9, x: 500, opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          setIsOpen(!isOpen);
          router.back();
        }}
        placement="center"
        className="rounded-lg electric-lightning-effect bg-white/80 backdrop-blur-xl dark:bg-black/10 sm:p-8 p-3 shadow-md w-full max-w-md  transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 overflow-hidden relative"
        closeButton={CloseButton}
        classNames={{
          closeButton:
            "dark:hover:bg-transparent hover:bg-transparent dark:bg-transparent bg-transparent",
        }}
      >
        <ModalContent>
          <form action={loginAction}>
            <div className="absolute top-2 left-2">
              <ModeToggle />
            </div>
            <ModalHeader>
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
            </ModalHeader>

            <ModalBody>
              <div className="mb-4 text-gray-900 dark:text-gray-100">
                <Input
                  variant="underlined"
                  type="text"
                  value={userData["identity"].value}
                  name="identity"
                  label="Username or Email"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      [e.target.name]: { value: e.target.value },
                    }))
                  }
                  color={theme === "dark" ? "primary" : "default"}
                  classNames={{ errorMessage: "text-red-500 text-sm mt-1" }}
                  className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                    state?.errors.identity
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {state && state.errors.identity?.[0] && (
                  <p className="text-red-500 text-xs mt-1">
                    {state.errors.identity?.[0]}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-2 text-gray-900 dark:text-gray-100">
                <Input
                  variant="underlined"
                  type="password"
                  value={userData["password"].value}
                  label="Password"
                  name="password"
                  id="password"
                  color={theme === "dark" ? "primary" : "default"}
                  classNames={{
                    errorMessage: "text-red-500 text-sm mt-1",
                    input: "text-gray-900 dark:text-gray-100",
                  }}
                  className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                    state?.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      [e.target.name]: { value: e.target.value },
                    }))
                  }
                />
                {state && state.errors.password?.[0] && (
                  <p className="text-red-500 text-xs mt-1">
                    {state.errors.password?.[0]}
                  </p>
                )}
              </div>
            </ModalBody>

            <ModalFooter className="flex flex-col gap-2">
              <Link
                href={"/posts/signup"}
                className="w-full text-end text-sm text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-900 dark:hover:text-blue-500 font-[family-name:var(--font-accent)]"
              >
                {"Don't have an account?"}
              </Link>
              <FormToast
                success={state && state?.success}
                message={state && state?.message}
              />
              <AuthFormButton pendingText="Logging in..." text="Login" />
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
