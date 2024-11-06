import { Button } from '@nextui-org/react'
import React from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link'
// import {Socials} from '@/constants/index'

//?? tell me if anything else you want 

const HeroSection = () => {
  return (
    <section className="max-h-[80%] max-w-5xl text-center flex justify-center flex-col space-y-4 items-center md:pt-24 pt-28 font-[family-name:var(--font-maven-pro)]">
      <div className='flex flex-col gap-1 justify-center items-center'>
        {/* //Todo : add your name and your description */}
        <h1 className='text-5xl font-bold '>I am Utsav Jaiswal</h1>
        <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisic</h1>
      </div>
      <div className='flex flex-row gap-4 justify-center items-center'>
        <Button variant='shadow' className='rounded-md dark:text-black text-white bg-black-200 dark:bg-white-600 hover:bg-black dark:hover:bg-white text-base '>Connect</Button>
        <Button variant='bordered'  className='electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600 dark:hover:bg-black hover:bg-white text-base'>Resume <ExternalLink className='size-4'/></Button>
      </div>
      <div className='flex flex-row gap-4 justify-center items-center'> 
          {/* {
          Socials.map((item, i) => (
            <Link href={item.path} key={i} className="nav-item-effect text-black dark:text-white text-base font-thin font-[family-name:var(--font-maven-pro)]">
              <div>{item.icon}</div>
            </Link>
          ))
          } */}
           <Link href={"/"}  className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600 dark:hover:bg-black hover:bg-white text-base">
           <FaGithub className="size-4"/>
           </Link>
           <Link href={"/"}  className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600 dark:hover:bg-black hover:bg-white text-base">
           <FaLinkedinIn className="size-4"/>
           </Link>
           <Link href={"/"}  className="p-2 electric-lightning-effect rounded-md dark:bg-black-200 bg-white-600 dark:hover:bg-black hover:bg-white text-base">
           <BsTwitterX className="size-4"/>
           </Link>
      </div>
    </section>
  )
}

export default HeroSection
