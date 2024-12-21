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
    "I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build applications that connect, inspire, and push the boundaries of what's possible.",
  keywords: [
    "utsav",
    "utsav jaiswal",
    "full stack developer",
    "react.js developer",
  ],

  // OG) is a protocol used to standardize the way websites represent their content when shared on social media platforms or other external websites.
  openGraph: {
    title: "Master Utsav - Full Stack Developer",
    description:
      "Discover Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build innovative applications that connect and inspire.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
