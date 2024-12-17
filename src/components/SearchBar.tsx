import { Input} from "@nextui-org/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
       <div className="relative w-full flex justify-end items-end">
        <Input
          type="text" 
          placeholder="Search"
          variant="bordered"
          classNames={{input : "bg-transparent dark:bg-transparent w-[85%]" , inputWrapper : "border-none rounded-md"}}
          className="max-w-lg electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30 transition-all delay-100 ring-none outline-none duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 font-[family-name:var(--font-salsa)] text-pretty relative"
        />
         <AiOutlineSearch className="size-5 absolute top-[0.65rem] right-2"/>
       </div>
  );
};

export default SearchBar;
