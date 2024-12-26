// import { getServerSession } from "next-auth";
"use client";

import { PostsSecondNavItems } from "@/constants";
import { Link } from "lucide-react";
// import { useSession } from "next-auth/react";
import { usePathname , useRouter } from "next/navigation";
import { FiPlusCircle } from "react-icons/fi";
import SearchBar from "./SearchBar";
import BackButton from "./ui/BackButton";
import PostsButton from "./ui/PostsButton";
// import AuthProvider from "./providers/AuthProvider";
import { Button } from "./ui/button";
import { Session } from "next-auth";

const PostsSecondNavbar = ({session} : {session: Session | null}) => {
    const router = useRouter();
    const pathname = usePathname();
    // const {data : session} = useSession();
    return (
      <div className="flex sm:justify-between  justify-center w-full items-center pt-24 pb-2 px-3 sm:space-x-2 max-sm:space-y-2 sm:flex-row flex-col">
        <div className="flex w-full sm:w-fit justify-between sm:justify-start items-center gap-2">
          <BackButton onBtnClick={() => router.push("/posts")} />
          <div className="flex gap-1">
            {PostsSecondNavItems.map((item, idx) => (
              <div key={idx} className="">
                <PostsButton
                  buttonName={item.name}
                  target={item.target}
                  icon={item.icon}
                  isActive={pathname === item.target}
                />
              </div>
            ))}
            {!!session?.user && session.user.role === process.env.NEXT_PUBLIC_GMAIL  && 
             <Link href={"/posts/add-posts"}>
              <Button
                variant="expandIcon"
                className="electric-lightning-effect rounded-md dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50 block sm:hidden p-2"
                Icon={FiPlusCircle}
                iconButtonName="Add Posts"
                iconPlacement="fixed-icon"
                />
              </Link>
            }
          </div>
        </div>
        <SearchBar />
      </div>
    );
 }

//  export default (() => (
//    <AuthProvider>
//      <PostsSecondNavbar />
//    </AuthProvider>
//  )) as typeof PostsSecondNavbar;

 export default PostsSecondNavbar;
