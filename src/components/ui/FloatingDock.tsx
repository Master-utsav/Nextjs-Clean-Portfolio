"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import ProjectCards from "@/components/ProjectCards";
import { ProjectsData } from "@/constants";

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { id: number; icon: React.ReactNode }[];
  desktopClassName?: string;
}) => {
  return <FloatingDockDesktop items={items} className={desktopClassName} />;
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { id: number; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "mx-auto hidden md:flex h-10 gap-4 items-end rounded-2xl bg-white dark:bg-black-300 px-4 pb-3 backdrop-blur-lg shadow-md",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.id} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ id, icon }: { id: number; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-80, 50, 80], [60, 100, 60]);
  const heightTransform = useTransform(distance, [-80, 50, 80], [60, 100, 60]);

  const width = useSpring(widthTransform, {
    mass: 0.5,
    stiffness: 300,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.5,
    stiffness: 300,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(Infinity);
      }}
      className="aspect-square mb-2 rounded-full shadow-sm bg-[#F5F5F5] dark:bg-[#121212] flex items-center justify-center relative "
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="p-1 whitespace-pre rounded-md bg-white border dark:bg-black-200/95 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 bottom-16 w-fit text-xs z-10 backdrop-blur-3xl"
          >
            <ProjectCards
              item={
                ProjectsData.find((item) => item.id === id) ?? ProjectsData[0]
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        className={`flex items-center justify-center z-20 rounded-full size-12 `}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
