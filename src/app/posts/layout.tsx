import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Utsav | Blog and Articles",
  description:
    "Explore insightful blog posts, tutorials, and articles on web development, React.js, TypeScript, Node.js, and more. Master the skills to build full-stack applications with Utsav Jaiswal.",
  keywords: [
    "Utsav Jaiswal",
    "blog",
    "articles",
    "web development",
    "React.js",
    "TypeScript",
    "Node.js",
    "full stack development",
    "programming tutorials",
  ],
  openGraph: {
    title: "Master Utsav - Web Development Blog",
    description:
      "Dive into a collection of blog posts and articles covering React.js, TypeScript, Node.js, web development tips, and full-stack development tutorials by Utsav Jaiswal.",
    url: "https://masterutsav.in",
    images: [
      {
        url: "https://masterutsav.in/images/my_picture_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Utsav Jaiswal - Web Developer and Blogger",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UtsavJaiswal",
    title: "Master Utsav | Blog and Articles",
    description:
      "Explore tutorials, blogs, and insights on React.js, TypeScript, and Node.js by Utsav Jaiswal.",
    images: "https://masterutsav.in/images/my_picture_logo.jpg",
  },
};

export default function PostLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className={`antialiased scrollbar-custom overflow-x-hidden relative`}>
      {children}
      {modal}
    </div>
  );
}
