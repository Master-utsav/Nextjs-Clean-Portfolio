import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import NormalTooltip from "@/components/ui/NormalTooltip";
import { Button } from "@/components/ui/button";

const LocationPopUp = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30"
      >
        <NormalTooltip text="Indore, India" placement="bottom">
          <IoLocationOutline className="size-6  dark:text-white text-black" />
        </NormalTooltip>
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        className="w-fit p-2"
      >
        <ModalContent className="rounded-lg border-[1px] electric-lightning-effect dark:border-blue-500/30 border-blue-800/30 flex flex-col justify-start items-start text-start">
          <ModalBody className="">
            <div className="flex w-full gap-2 justify-start items-center">
              <IoLocationOutline className="size-6 dark:text-white text-black" />
              <span className="text-base font-medium font-[family-name:var(--font-salsa)]">
                Indore,
              </span>
            <span className="text-lg  font-semibold font-[family-name:var(--font-assistant)]">
              India
            </span>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LocationPopUp;
