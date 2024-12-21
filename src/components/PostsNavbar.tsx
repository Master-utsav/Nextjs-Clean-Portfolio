"use client";

import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import PersonalBadge from "@/components/ui/PersonalBadge";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import MyName from "@/components/MyName";
import { FaHome } from "react-icons/fa";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/ThemeBtn";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import axios from "axios"

const PostsNavbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const prevScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current <= 10) {
      setVisible(true);
    } else {
      const direction = current - prevScrollY.current;
      setVisible(direction < 0);
      prevScrollY.current = current;
    }
  });

  const loggedInCallBack = useCallback(async () => {
    try {
      const response = await axios.get("/api/v1/user/checkSession");
      setIsLoggedIn(response.data.success);
    } catch {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    loggedInCallBack();
  }, [loggedInCallBack]);

  return (
    <AnimatePresence>
      <motion.nav
        key="desktop"
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-7xl max-sm:w-[95%] fixed top-0 mx-auto flex justify-between items-center max-sm:space-x-3 space-x-20 content-center bg-white-600/30 dark:bg-black-200/10 drop-shadow-sm border-[1px] dark:border-blue-500/30 border-blue-800/30 p-2 rounded-md mt-2 z-50 backdrop-blur-lg"
      >
        <Link href={"/"} className="flex gap-3 text-3xl font-bold">
          <PersonalBadge />
          <div className="flex items-center">
            <MyName className="w-20 h-10" />
          </div>
        </Link>
        <div className="flex flex-row gap-1">
          <Link href={"/"}>
            <Button
              variant="expandIcon"
              className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 sm:flex hidden font-[family-name:var(--font-assistant)]"
              iconPlacement="right"
              Icon={FaHome}
            >
              Home
            </Button>
            <Button
              variant="expandIcon"
              className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 block sm:hidden p-2"
              Icon={FaHome}
              iconButtonName="Home"
              iconPlacement="fixed-icon"
            ></Button>
          </Link>
          {!isLoggedIn ? (
            <Link href={"/posts/login"}>
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 sm:flex hidden font-[family-name:var(--font-assistant)]"
                iconPlacement="right"
                Icon={AiOutlineLogin}
              >
                Login
              </Button>
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 block sm:hidden p-2"
                Icon={AiOutlineLogin}
                iconButtonName="Login"
                iconPlacement="fixed-icon"
              ></Button>
            </Link>
          ) : (
            <Link href={"/posts/logout"}>
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 sm:flex hidden font-[family-name:var(--font-assistant)]"
                iconPlacement="right"
                Icon={AiOutlineLogout}
              >
                Logout
              </Button>
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 block sm:hidden p-2"
                Icon={AiOutlineLogout}
                iconButtonName="Logout"
                iconPlacement="fixed-icon"
              ></Button>
            </Link>
          )}

          <ModeToggle />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default PostsNavbar;
