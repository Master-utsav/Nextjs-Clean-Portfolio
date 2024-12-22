import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { LoadingSection } from "@/sections/LoadingSection";

const salsa = localFont({
  src: "./fonts/Salsa-Regular.ttf",
  variable: "--font-salsa",
  weight: "100 900",
});

const mavenPro = localFont({
  src: "./fonts/MavenPro-VariableFont_wght.ttf",
  variable: "--font-maven-pro",
  weight: "100 900",
});

const assistant = localFont({
  src: "./fonts/Assistant-VariableFont_wght.ttf",
  variable: "--font-assistant",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Master Utsav",
  description:
    "I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build applications that connect, inspire, and push the boundaries of what's possible. I posts notes, articles, quotes, story, poetry on my /posts handle.",
  keywords: [
    "utsav",
    "utsav jaiswal",
    "master utsav jaiswal",
    "react.js developer",
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

  // OG) is a protocol used to standardize the way websites represent their content when shared on social media platforms or other external websites.
  openGraph: {
    title: "Master Utsav - Full Stack Developer",
    description:
      "Discover Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build innovative applications that connect and inspire. I posts notes, articles, quotes, story, poetry on my /posts handle.",
    url: "https://masterutsav.in",
    images: [
      {
        url: "https://masterutsav.in/images/my_picture_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Utsav Jaiswal - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UtsavJaiswal",
    title: "Master Utsav",
    description:
      "I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build applications that connect, inspire, and push the boundaries of what's possible. I posts notes, articles, quotes, story, poetry on my /posts handle.",
    images: "https://masterutsav.in/images/my_picture_logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: ["Posts", "Notes", "Articles", "Quotes"],
              url: [
                "https://masterutsav.in/posts",
                "https://masterutsav.in/posts/notes",
                "https://masterutsav.in/posts/articles",
                "https://masterutsav.in/posts/quotes",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://masterutsav.in",
              },
              description:
                "Navigate through the main sections of Master Utsav's website, including Posts, Notes, Articles, and Quotes.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Posts",
                    item: "https://masterutsav.in/posts",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Notes",
                    item: "https://masterutsav.in/posts/notes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Articles",
                    item: "https://masterutsav.in/posts/articles",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Quotes",
                    item: "https://masterutsav.in/posts/quotes",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${salsa.variable} ${mavenPro.variable} ${assistant.variable} antialiased scrollbar-custom overflow-x-hidden`}
      >
        <NextUIProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <LoadingSection />
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
