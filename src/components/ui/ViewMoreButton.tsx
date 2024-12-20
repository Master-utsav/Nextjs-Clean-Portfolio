import { FaAnglesRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const ViewMoreButton = ({ onBtnClick }: { onBtnClick: () => void }) => {
  return (
    <Button
      variant="expandIcon"
      size="icon"
      onClick={onBtnClick}
      className="w-full electric-lightning-effect rounded-md dark:text-white text-black text-base transition-all delay-100 duration-500 ease-in-out   dark:hover:bg-black-100 hover:bg-white-600/50 flex font-[family-name:var(--font-assistant)] border-[1px] dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect dark:bg-black-200 bg-white-600/30 p-2"
      iconButtonName="View all"
      iconPlacement="end-icon"
      Icon={FaAnglesRight}
    >
    </Button>
  );
}

export default ViewMoreButton;
