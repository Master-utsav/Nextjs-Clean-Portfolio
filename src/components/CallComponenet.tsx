import Image from "next/image";
import React from "react";
import MyName from "@/components/MyName";
import { motion } from "framer-motion"; 
import { Button } from "@nextui-org/react";

const CallComponenet = ({
  onClicked,
}: {
  onClicked: (data: "ACCEPT" | "REJECT") => void;
}) => {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[20rem] h-[34rem] p-6 mx-auto text-center flex justify-center flex-col space-y-4 items-center font-[family-name:var(--font-assistant)]  rounded-lg shadow-md dark:text-white text-black"
    >
      {/* Profile Picture and Name */}
      <div className="relative justify-center items-center flex flex-col">
        <Image
          width={100}
          height={100}
          src={"/images/my_picture_logo.jpg"}
          alt="my-pic"
          priority
          className="object-cover rounded-full border-[4px] size-28 border-gray-300 z-10 "
        />
        <Image
          width={100}
          height={100}
          src={"/images/my_picture_logo.jpg"}
          alt="my-pic"
          priority
          className="absolute inset-0 blur-xl z-0 object-cover rounded-full border-[4px] size-28"
        />
        <MyName className="size-20 font-semibold" />

        {/* Call Status */}
        <p className="text-green-400 text-base">Incoming Call...</p>
      </div>

      {/* Call Action Buttons */}
      <div className="flex space-x-6 pt-12">
        <Button
          variant="shadow"
          onClick={() => onClicked("REJECT")}
          className="w-full h-full bg-red-600/30  text-white rounded-full px-6 py-3 font-medium text-lg scale-about-btn"
        >
          Decline
        </Button>
        <Button
          variant="shadow"
          onClick={() => onClicked("ACCEPT")}
          className="w-full h-full bg-green-700  text-white rounded-full px-6 py-3 font-medium text-lg scale-about-btn"
        >
          Accept
        </Button>
      </div>
    </motion.div>
  );
};

export default CallComponenet;
