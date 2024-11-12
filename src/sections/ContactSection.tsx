"use client";
import ContactText from "@/components/ContactText";
import { LampContainer } from "@/components/ui/LampContainer";
import { motion, useInView } from "framer-motion";
import React, { useState, useEffect } from "react";
import MobilePhone from "@/components/ui/MobilePhone";
import CallComponent from "@/components/CallComponenet";
import CallAcceptPopUp from "@/components/CallAcceptPopUp";
import CallRejectPopUp from "@/components/CallRejectPopUp";

const ContactSection = () => {
  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: false, amount: 0.1 });
  const [showMobilePhone, setShowMobilePhone] = useState(false);
  const [response, setResponse] = useState<"ACCEPT" | "REJECT" | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (titleInView) {
      const timeoutId = setTimeout(() => {
        setShowMobilePhone(true);
        setResponse(null);
        setIsClicked(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      setShowMobilePhone(false);
      setResponse(null);
      setIsClicked(false);
    }
  }, [titleInView]);

  useEffect(() => {
    if (response) {
        setShowMobilePhone(false);
    }
  }, [response]);

  const handleClickCheck = (data: "ACCEPT" | "REJECT") => {
    setTimeout(() => {
      setResponse(data);
    }, 1200)
    setIsClicked(true);
  };

  const renderContent = () => {
    if (response === "ACCEPT") return <CallAcceptPopUp />;
    if (response === "REJECT") return <CallRejectPopUp />;
    return null;
  };
  
  return (
    <section
      id="contact"
      ref={titleRef}
      className="min-h-screen w-full relative overflow-hidden text-center flex justify-center flex-col sm:py-8 space-y-4 items-center font-[family-name:var(--font-maven-pro)]"
    >
      {/* Conditional rendering for response */}
      {response ? (
        <motion.div
          initial={{ scale: 0.2 }}
          animate={titleInView ? { scale: 1 } : {scale : 0}}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="w-full items-center text-white text-5xl flex justify-center flex-col p-2"
        >
          {renderContent()}
        </motion.div>
      ) : (
        <>
          {/* For small screens */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0,
              duration: 1,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className="w-full min-h-screen relative items-center overflow-hidden flex sm:hidden justify-center flex-col"
          >
            <motion.div
              initial={{ opacity: 0.5, y: 100 }}
              animate={showMobilePhone ? { opacity: 0 , y: 100 , height : 0} : titleInView ? { opacity: 1, y: 0} : { opacity: 0.5, y: 100 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeInOut",
              }}
              className={`bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl `}
            >
              <ContactText titleInView={titleInView} />
            </motion.div>
   
            {showMobilePhone && (
              <MobilePhone
                className="relative"
                isInView={titleInView}
                isClicked={isClicked}
              >
                <CallComponent onClicked={handleClickCheck} />
              </MobilePhone>
            )}
          </motion.div>

          {/* For large screens */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={isClicked ? { opacity: 0, y: -100 } : titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: isClicked ? 1 : 0,
              duration: isClicked ? 2 : 2,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className="relative h-full w-full item-center text-center sm:flex hidden justify-center flex-col"
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
                <MobilePhone
                  className="relative"
                  isInView={titleInView}
                  isClicked={isClicked}
                >
                  <CallComponent onClicked={handleClickCheck} />
                </MobilePhone>
              )}
            </LampContainer>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default ContactSection;
