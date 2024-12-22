import MyName from "@/components/MyName";
import type { Metadata } from "next";
import PostsNavbar from "@/components/PostsNavbar";
import { isAdminSessionCookie, isSessionCookie } from "@/lib/session";

export const metadata: Metadata = {
  title: "Master Utsav | Blog Posts",
  description:
    "Explore insightful blog posts, and articles on web development, React.js, TypeScript, Node.js, and more. Master the skills to build full-stack applications with Utsav Jaiswal.",
  keywords: [
    "Utsav Jaiswal",
    "Utsav Jaiswal blog",
    "Utsav Jaiswal articles",
    "Utsav Jaiswal notes",
    "Utsav Jaiswal posts",
    "posts",
    "notes",
    "quotes",
    "web development",
    "React.js",
    "TypeScript",
    "Node.js",
    "full stack development",
    "programming tutorials",
  ],
  openGraph: {
    title: "Master Utsav - Blog Posts",
    description:
      "Dive into a collection of blog posts, articles, notes covering React.js, TypeScript, Node.js, web development tips, and full-stack development tutorials by Utsav Jaiswal.",
    url: "https://masterutsav.in",
    images: [
      {
        url: "https://masterutsav.in/images/my_picture_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Utsav Jaiswal - Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UtsavJaiswal",
    title: "Master Utsav | Blog Posts",
    description:
      "Explore tutorials, blogs, and insights on React.js, TypeScript, and Node.js by Utsav Jaiswal.",
    images: "https://masterutsav.in/images/my_picture_logo.jpg",
  },
};

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
      {modal}
    </div>
  );
}
