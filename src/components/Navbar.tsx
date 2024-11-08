"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/ThemeBtn";
import { NavItems } from "@/constants";
import PersonalBadge from "./ui/PersonalBadge";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(true);
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

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="max-w-7xl fixed top-0 mx-auto flex justify-between  items-center gap-12 content-center bg-white-600/30  dark:bg-black-200/10 drop-shadow-sm border-[1px] dark:border-blue-500/30 border-blue-800/30 p-2 rounded-md mt-2 z-50 backdrop-blur-lg"
      >
        <Link href={"/"} className="text-3xl font-bold ">
          <PersonalBadge />
        </Link>
        <ul className="flex gap-4">
          {NavItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className="nav-item-effect text-black dark:text-white text-base font-thin font-[family-name:var(--font-maven-pro)]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
