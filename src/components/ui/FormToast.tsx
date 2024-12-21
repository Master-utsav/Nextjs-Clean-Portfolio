import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";

const FormToast = ({
  success,
  message,
}: {
  success?: boolean;
  message?: string;
}) => {
    if(success === undefined || message === undefined){
        return null;
    }
  return (
    <div
      className={`w-full px-3 py-0 rounded-lg bg-transparent flex justify-start items-center gap-4 border-[1px] ${
        success ? "border-green-500" : "border-red-500"
      }`}
    >
      {success ? (
        <FaRegCheckCircle className="size-6 text-green-500" />
      ) : (
        <RxCrossCircled className="size-6 text-red-500" />
      )}
      <div className="flex justify-start items-start flex-col">
        <h1
          className={`font-[family-name:var(--font-salsa)] text-base ${
            success ? "text-green-500" : "text-red-500"
          } `}
        >
          {success ? "Success" : "Error"}
        </h1>
        <span
          className={`font-[family-name:var(--font-assistance)] text-sm ${
            success ? "text-green-500/80" : "text-red-500/80"
          } `}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default FormToast;
