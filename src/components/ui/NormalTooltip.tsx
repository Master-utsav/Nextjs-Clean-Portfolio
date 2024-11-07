import { Tooltip } from "@nextui-org/react";
import React from "react";

interface NormalTooltipProps {
  text: string;
  children: React.ReactNode;
  placement: "bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start";
}

const NormalTooltip: React.FC<NormalTooltipProps> = ({ text, children, placement }) => {
  return (
    <Tooltip
      showArrow
      placement={placement}
      content={text}
      classNames={{
        base: [
          "before:bg-blue-500/20 dark:before:bg-blue-800/20 overflow-hidden",
        ],
        content: [
          "py-1 px-3 shadow-xl",
          "text-white",
          "bg-blue-600/20",
          "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
          "font-[family-name:var(--font-salsa)]",
        ],
      }}
    >
      <span>{children}</span>
    </Tooltip>
  );
};

export default NormalTooltip;
