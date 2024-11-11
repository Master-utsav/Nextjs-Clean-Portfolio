"use client";
import ContactText from "@/components/ContactText";
import { LampContainer } from "@/components/ui/LampContainer";
import { motion, useInView } from "framer-motion";
import React, { useState, useEffect } from "react";
import MobilePhone from "@/components/ui/MobilePhone";
import CallComponenet from "@/components/CallComponenet";

const ContactSection = () => {
  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: false, amount: 0.1 });
  const [showMobilePhone, setShowMobilePhone] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setTimeout(() => setShowMobilePhone(true), 2000);
    } else {
      setShowMobilePhone(false);
    }
  }, [titleInView]);

  return (
    <section
      id="contact"
      ref={titleRef}
      className={`min-h-screen relative w-full text-center flex justify-center flex-col sm:py-8 space-y-4 items-center font-[family-name:var(--font-maven-pro)]`}
    >
      {/* For small screens */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0,
          duration: 1,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="w-full min-h-screen overflow-hidden relative text-center flex sm:hidden justify-center flex-col"
      >
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          animate={!showMobilePhone ? { opacity: 1, y: 0 } : { opacity: 0 }}
          exit={{ opacity: 0, y: -500 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <ContactText titleInView={titleInView} />
        </motion.div>
        {showMobilePhone && (
          <MobilePhone className="relative" isInView={titleInView} isClicked={false}>
            <CallComponenet />
          </MobilePhone>
        )}
      </motion.div>

      {/* For large screens */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0,
          duration: 1,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="relative h-full sm:w-full text-center sm:flex hidden justify-center flex-col"
      >
        <LampContainer className="flex flex-col items-center justify-center py-10 px-5 sm:px-10 relative">
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            animate={!showMobilePhone ? { opacity: 1, y: 0 } : { opacity: 0 }}
            exit={{ opacity: 0, y: -500 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <ContactText titleInView={titleInView} />
          </motion.div>

          {showMobilePhone && (
            <MobilePhone className="relative" isInView={titleInView} isClicked={false}>
              <CallComponenet />
            </MobilePhone>
          )}
        </LampContainer>
      </motion.div>
    </section>
  );
};

export default ContactSection;
