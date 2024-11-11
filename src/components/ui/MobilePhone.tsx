import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const MobilePhone = ({
  className,
  children,
  isInView,
}: {
  className: string;
  children: React.ReactNode;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: 2000, rotate: "170deg" }}
      animate={isInView ? { x: 0, rotate: 0 } : { x: 2000, rotate: "170deg" }}
      transition={{
        delay: 1,
        duration: 2.4,
        ease: [0.68, -0.55, 0.27, 1.55],
      }}
      className={cn(
        "max-w-[22rem] h-[34rem] relative mx-auto border-4 border-[#6C6C6C] p-2 md:p-3 bg-[#222222] rounded-[30px] shadow-2xl",
        className
      )}
    >
      <div className="h-full w-full object-cover overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:p-2">
        {children}
      </div>
    </motion.div>
  );
};

export default MobilePhone;
