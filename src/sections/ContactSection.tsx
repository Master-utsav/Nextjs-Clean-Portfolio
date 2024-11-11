"use client";
import ContactText from "@/components/ContactText";
import { LampContainer } from "@/components/ui/LampContainer";
import { motion, useInView } from "framer-motion";
import React from "react";

const ContactSection = () => {
  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: false, amount: 0.4 });

  return (
    <section
      id="contact"
      ref={titleRef}
      className={`min-h-screen relative w-full text-center flex justify-center flex-col sm:py-8 space-y-4 items-center font-[family-name:var(--font-maven-pro)]`}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0,
          duration: 2,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="relative text-center flex sm:hidden justify-center flex-col"
      >
        <ContactText titleInView={titleInView} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={titleInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0,
          duration: 2,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="relative sm:w-full text-center sm:flex hidden justify-center flex-col"
      >
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <ContactText titleInView={titleInView} />
          </motion.div>
        </LampContainer>
      </motion.div>
    </section>
  );
};

export default ContactSection;
