import React from 'react'
import Image from "next/image"

interface TechCardsProps {
    itemArray: {
        name: string;
        src: string;
        description: string;
    }[];
    title: string;
}
const TechCards: React.FC<TechCardsProps> = ({itemArray , title}) => {
  return (
    <div className="w-full flex flex-col gap-4">
        <h1
          className="innline-block w-fit px-2 rounded-md text-3xl dark:text-white-700 text-black-500 font-bold  bg-blue-500/15  dark:bg-blue-200/10 font-[family-name:var(--font-salsa)] shadow-md dark:shadow-blue-600/10 shadow-blue-800/10 tracking-wide py-2"
        >
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {itemArray.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 border-[1px] dark:border-blue-500/30 border-blue-800/30 group rounded-lg electric-lightning-effect"
            >
              <Image
                className="size-14 object-cover rounded-md dark:invert mix-blend-darken dark:mix-blend-lighten border-[1px] p-2  dark:group-hover:border-yellow-500/40 group-hover:border-blue-500 transition-all delay-100"
                height={48}
                width={48}
                src={item.src}
                alt="React Native + Expo"
              />
              <div className="flex flex-col justify-start ">
                <h1 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-300 from-blue-800 dark:to-blue-800 to-blue-300 font-[family-name:var(--font-salsa)]">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-[family-name:var(--font-assistant)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default TechCards
