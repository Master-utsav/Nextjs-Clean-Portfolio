"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { RiScrollToBottomLine } from 'react-icons/ri'

interface ScrollDownProps {
    navigateTo: string;
}
const ScrollDown: React.FC<ScrollDownProps> = ({navigateTo}) => {
//   const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

  return (
    <Link
        href={navigateTo}
        className="pt-12 flex flex-col  items-center space-y-1 h-28 relative"
        // onMouseEnter={() => setShowTooltip(true)}
        // onMouseLeave={() => setShowTooltip(false)}
    >
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <RiScrollToBottomLine className="text-3xl dark:text-white text-black-200 blur-[0.5px]" />
        </motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: [0, 40, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="w-0.5 dark:bg-blue-500 bg-blue-800 blur-[0.5px]"
        />
      </Link>
  )
}

export default ScrollDown
