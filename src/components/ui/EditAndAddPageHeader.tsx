"use client";

import { motion } from 'framer-motion'
import React from 'react'

const EditAndAddPageHeader = ({slug="none"} : {slug?: string}) => {
  return (
    <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          className="sm:max-w-3xl w-full sm:text-4xl text-3xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)]"
        >
          Add new{" "}
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
            <span className="relative z-10">{slug.charAt(0).toUpperCase() + slug.slice(1)}</span>
          </motion.span>{" "}page.
          </motion.h1>
  )
}

export default EditAndAddPageHeader
