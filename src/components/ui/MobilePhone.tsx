"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { GoUnmute , GoMute} from "react-icons/go";

const MobilePhone = ({
  className,
  children,
  isInView,
  isClicked,
}: {
  className: string;
  children: React.ReactNode;
  isInView: boolean;
  isClicked: boolean;
}) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const vibrationTimeline = useRef<gsap.core.Timeline>();
  const [isVibrating, setIsVibrating] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleAnimationComplete = () => {
    if (!isClicked && phoneRef.current) {
      vibrationTimeline.current = gsap
        .timeline({ repeat: -1 })
        .to(phoneRef.current, { x: -1, duration: 0.05 })
        .to(phoneRef.current, { x: 1, duration: 0.05 })
        .to(phoneRef.current, { x: 0, duration: 0.05 });

      setIsVibrating(true);
    }
  };

  useEffect(() => {
    if (isClicked && vibrationTimeline.current) {
      vibrationTimeline.current.kill();
      gsap.to(phoneRef.current, { x: 0 });
      setIsVibrating(false);
    }
  }, [isClicked]);

  const handleMuteClick = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 1;
        audioRef.current.muted = isMuted;
      } else {
        audioRef.current.volume = 0;
        audioRef.current.muted = isMuted;
      }
    }
  };

  return (
    <motion.div
    ref={phoneRef}
    initial={{ x: 2000, rotate: "170deg", height: "0rem" }}
    animate={
      isInView && !isClicked
        ? { x: 0, rotate: 0, height: "34rem"}
        : isClicked
        ? {x: 2000, height: "34rem" }
        : {}
    }
    transition={{
      delay: isClicked ? 0 : 1,
      duration: isClicked ? 2 : 2,
      ease: isClicked ? "easeIn" : [0.68, -0.55, 0.27, 1.55],
    }}
      onAnimationComplete={handleAnimationComplete}
      className={cn(
        "max-w-[22rem] overflow-hidden relative mx-auto border-4 border-[#6C6C6C] p-2 md:p-3 bg-[#222222] rounded-[30px] shadow-2xl",
        className
      )}
    >
      {isVibrating && (
        <audio
          ref={audioRef}
          src="/audio/cell_phone_vibrate.mp3"
          autoPlay
          loop
          controls
          muted={isMuted}
          className="absolute left-5 z-10 top-2 hidden"
        />
      )}

      <div className="h-full w-full object-cover overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 z-[5]">
        {children}
        <button
          onClick={handleMuteClick}
          className="absolute top-4 right-4 p-2 bg-transparent text-white rounded-full"
        >
          {isMuted ? <GoMute className="size-6 dark:text-white-700 text-black-200"/> : <GoUnmute className="size-6 dark:text-white-700 text-black-200"/>}
        </button>
      </div>
    </motion.div>
  );
};

export default MobilePhone;
