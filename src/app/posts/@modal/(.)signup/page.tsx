"use client";

import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { useTheme } from "@/context/ThemeProvider";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CloseButton from "@/components/ui/CloseButton";
import { signup } from "@/app/actions/authActions";
import AuthFormButton from "@/components/ui/AuthFormButton";
import FormToast from "@/components/ui/FormToast";

export default function SignupModal() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [state, signupAction] = useActionState(signup, undefined);
  const [userData, setUserData] = useState<{
    [key: string]: { value: string };
  }>({
    username: { value: "" },
    email: { value: "" },
    password: { value: "" },
  });
  
  useEffect(() => {
    if (state?.success) {
      router.prefetch("/posts/login");
      setTimeout(() => {
        router.push("/posts/login");
      }, 1000);
      setIsOpen(!isOpen);
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
          defaultOpen
          isOpen={isOpen}
          onOpenChange={() => {
            setIsOpen(!isOpen)
            router.back();
          }}
          placement="center"
          className="rounded-lg electric-lightning-effect bg-white/80 backdrop-blur-xl dark:bg-black/10 sm:p-8 p-3 shadow-md w-full max-w-md  transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 overflow-hidden"
          closeButton={CloseButton}
          classNames={{closeButton: "dark:hover:bg-transparent hover:bg-transparent dark:bg-transparent bg-transparent"}}
        >
          <ModalContent>
          <form action={signupAction}>
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
                  <span className="relative z-10">Sign Up</span>
                </motion.span>{" "}
                now
              </motion.h1>
            </ModalHeader>

            <ModalBody>
          {/* Username Field */}
          <div className="mb-2">
            <Input
              variant="underlined"
              type="text"
              label="Username"
              id="username"
              name="username"
              value={userData["username"].value}
              color={theme === "dark" ? "primary" : "default"}
              className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                state?.errors.username ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [e.target.name]: { value: e.target.value },
                }))
              }
            />
            {state && state?.errors?.username?.[0] && (
              <p className="text-red-500 text-xs mt-1">
                {state?.errors?.username?.[0]}
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
              name="email"
              value={userData["email"].value}
              color={theme === "dark" ? "primary" : "default"}
              className={`w-full rounded-md text-gray-900 dark:text-gray-100 ${
                state?.errors.email ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  [e.target.name]: { value: e.target.value },
                }))
              }
            />
            {state && state?.errors?.email?.[0] && (
              <p className="text-red-500 text-xs mt-1">
                {state?.errors?.email?.[0]}
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
            {state && state?.errors?.password?.[0] && (
              <p className="text-red-500 text-xs mt-1">
                {state?.errors?.email?.[0]}
              </p>
            )}
          </div>
            </ModalBody>

            <ModalFooter className="flex flex-col gap-2">
            <FormToast success={state && state?.success} message={state && state?.message}/>
            <AuthFormButton pendingText="Signing in..." text="Sign up" />
            </ModalFooter>
          </form>
          </ModalContent>
        </Modal>
      </motion.div>
  );
}
