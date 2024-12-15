import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "@/components/ui/button";

const BackButton = ({ onBtnClick }: { onBtnClick: () => void }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onBtnClick}
      className="dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect dark:bg-black-200 bg-white-600/30"
    >
      <MdKeyboardBackspace className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white text-black" />
      <span className="sr-only">Back Button</span>
    </Button>
  );
}

export default BackButton;
