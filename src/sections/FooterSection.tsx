"use client";

import {motion, useInView } from 'framer-motion'
import Link from 'next/link';
import React from 'react'

const FooterSection = () => {
    const footRef = React.useRef(null)
    const isFooterInView = useInView(footRef,{ once: false ,  amount : 0})

  return (
    <section 
    id='footer'
    ref={footRef}
    className='max-w-md overflow-hidden border-t-[1px] dark:border-t-blue-500/30 border-t-blue-800/30 py-2 flex flex-col justify-center items-center'>
      <motion.p
      initial={{y: 100 , opacity: 0}}
      animate={isFooterInView ? {y: 0 , opacity : 1} : {y: 100 , opacity : 0}}
      transition={{delay: 0.2, duration : 0.5, type: "spring", stiffness : 120, damping: 12}}
      className='font-[family-name:var(--font-assistant) dark:text-white-700 text-black-600 text-sm text-center'
      >
        © 2024 Master Utsav | All right reserved
      </motion.p>
      <motion.span
      initial={{y: 100 , opacity: 0}}
      animate={isFooterInView ? {y: 0 , opacity : 1} : {y: 100 , opacity : 0}}
      transition={{delay: 0.2, duration : 0.5, type: "spring", stiffness : 120, damping: 12}}
      className='font-[family-name:var(--font-assistant) dark:text-white-700 text-black-600 text-sm text-center'
      >
        UI/UX Designer : {" "}
        <Link href={"/"} className='underline decoration-blue-500 dark:decoration-blue-400 font-semibold'>master utsav</Link>
      </motion.span>
      <motion.span
      initial={{y: 100 , opacity: 0}}
      animate={isFooterInView ? {y: 0 , opacity : 1} : {y: 100 , opacity : 0}}
      transition={{delay: 0.2, duration : 0.5, type: "spring", stiffness : 120, damping: 12}}
      className='font-[family-name:var(--font-assistant) dark:text-white-700 text-black-600 text-sm text-center'
      >
        Developer : {" "}
        <Link href={"/"} className='underline decoration-blue-500 dark:decoration-blue-400 font-semibold'>master utsav</Link>
      </motion.span>
    </section>
  )
}

export default FooterSection
