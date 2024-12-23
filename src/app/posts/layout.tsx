import MyName from "@/components/MyName";
import type { Metadata } from "next";
import PostsNavbar from "@/components/PostsNavbar";
import { isAdminSessionCookie, isSessionCookie } from "@/lib/session";
import { PostLayoutMetadata } from "@/metaData/postLayout.metadata";
import AuthProvider from "@/components/providers/AuthProvider";

export const metadata: Metadata = PostLayoutMetadata;

export default async function PostLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className={`antialiased scrollbar-custom overflow-x-hidden relative`}>
      <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full overflow-hidden">
        <main className="w-full flex flex-col gap-2 items-center">
          <PostsNavbar isAdmin={await isAdminSessionCookie()} isLoggedIn={await isSessionCookie()}/>
          {children}
        </main>
        <MyName className="sm:inline-block hidden fixed bottom-0 right-2 w-20 rounded-lg bg-transparent" />
      </div>
      <AuthProvider>
      {modal}
    </AuthProvider>
    </div>
  );
}
