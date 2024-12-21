"use client";

import { logout } from "@/app/actions/authActions";
import { Button } from "@/components/ui/button";
import CloseButton from "@/components/ui/CloseButton";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutModal() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isPending , setIsPending] = useState<boolean>(false);
  const router = useRouter();
  async function handleLogout() {
    setIsPending(true);
    const response = await logout();
    if (response.success) {
      setIsPending(false);
      setTimeout(() => {
        setIsOpen(!isOpen);
        router.replace("/posts");
      }, 1000);
    }else{
      setIsPending(false);
    }
  }
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
          setIsOpen(!isOpen);
          router.back();
        }}
        placement="center"
        className="rounded-lg electric-lightning-effect bg-white/80 backdrop-blur-xl dark:bg-black/10 sm:p-8 p-3 shadow-md w-full max-w-md  transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 overflow-hidden"
        closeButton={CloseButton}
        classNames={{
          closeButton:
            "dark:hover:bg-transparent hover:bg-transparent dark:bg-transparent bg-transparent",
        }}
      >
        <ModalContent className="space-y-3">
          <div className="absolute top-2 left-2">
            <ModeToggle />
          </div>
          <ModalHeader>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
              className="sm:max-w-3xl w-full sm:text-4xl text-3xl font-bold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] px-2 "
            >want to{" "}
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
          </ModalHeader>

          <ModalFooter className="flex flex-col gap-2">
            <Button
              variant={"gooeyLeft"}
              className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50"
              onClick={handleLogout}
              disabled={isPending}
            >
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
