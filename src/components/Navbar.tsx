"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ui/ThemeBtn";
import { NavItems } from "@/constants";
import PersonalBadge from "@/components/ui/PersonalBadge";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import MyName from "@/components/MyName";
import MenuBar from "@/components/ui/MenuBar";

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMobileNavOpen]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current <= 10) {
      setVisible(true);
    } else {
      const direction = current - prevScrollY.current;
      setVisible(direction < 0);
      prevScrollY.current = current;
    }
  });

  function handleNavbarClick() {
    setIsMobileNavOpen((prev) => !prev);
  }

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.nav
        key="desktop"
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-7xl max-sm:w-[90%] fixed top-0 mx-auto flex justify-between items-center max-sm:gap-3 gap-12 content-center bg-white-600/30 dark:bg-black-200/10 drop-shadow-sm border-[1px] dark:border-blue-500/30 border-blue-800/30 p-2 rounded-md mt-2 z-50 backdrop-blur-lg"
      >
        <Link href={"/"} className="flex gap-3 text-3xl font-bold">
          <PersonalBadge />
          <div className="max-sm:flex items-center hidden">
            <MyName className="w-20 h-10" />
          </div>
        </Link>
        <ul className="sm:flex gap-4 hidden">
          {NavItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={`nav-item-effect text-black dark:text-white text-base font-thin font-[family-name:var(--font-maven-pro)]`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:flex hidden">
          <ModeToggle />
        </div>
        <div className="max-sm:flex hidden justify-center items-center gap-2 w-fit relative">
          <ModeToggle />
          <div className="w-8 h-8 object-cover flex items-center justify-center">
            <MenuBar onClickBar={handleNavbarClick} isOpen={isMobileNavOpen} />
          </div>
        </div>
      </motion.nav>
      {isMobileNavOpen && (
        <motion.nav
          key="mobile"
          initial={{ x: 600, opacity: 1 }}
          animate={{ x: 0 }}
          exit={{ x: 600 }}
          transition={{
            duration: 1,
            ease: [0.85, 0, 0.15, 1],
          }}
          className="fixed sm:hidden flex-col w-full h-screen overflow-hidden justify-center items-center backdrop-blur-lg dark:bg-[#121212]/80 bg-[#f5f5f5]/80 z-30"
        >
          <motion.ul
            className="flex justify-center items-center flex-col h-full gap-12"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {NavItems.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.5 }}
              >
                <Link
                  href={item.path}
                  className="nav-item-effect text-4xl text-[#121212] dark:text-[#f5f5f5] font-thin font-[family-name:var(--font-salsa)]"
                  onClick={handleLinkClick} 
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
