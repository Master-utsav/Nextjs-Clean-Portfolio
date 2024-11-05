"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/ThemeBtn";
import { NavItems } from "@/constants";

const Navbar: React.FC = () => {

    return (
        <nav className="max-w-7xl fixed top-0 mx-auto flex justify-between  items-center gap-12 content-center bg-black-200/10 drop-shadow-sm border-[1px] dark:border-blue-500/30 border-blue-800/30 p-2 rounded-md mt-2 ">
            <Link href={"/"} className="text-3xl font-bold ">
                <Image
                    className="object-cover rounded-full size-12 border-[1px] dark:border-blue-500 border-blue-800 electric-lightning-effect "
                    src="https://res.cloudinary.com/course-yuga/image/upload/v1729615601/userImages/ofe64eafmsstzlspi8op.png"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
            </Link>
            <ul className="flex gap-4">
                {NavItems.map((item , i ) => (
                    <li key={i}>
                        <Link href={item.path} className="nav-item-effect text-black dark:text-white text-base font-thin font-[family-name:var(--font-maven-pro)]">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ModeToggle/>
        </nav>
    )
     
}

export default Navbar