import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { LoadingSection } from "@/sections/LoadingSection";
import CrumbScript from "@/metaData/CrumbScript";
import { MainLayoutMetadata } from "@/metaData/mainLayout.metadata";

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

export const metadata: Metadata = MainLayoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <CrumbScript/>
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
