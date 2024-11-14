import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/next';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
  title: "Master utsav",
  description: "I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build applications that connect, inspire, and push the boundaries of what's possible.",
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
        <Providers>
          {children}
          <Analytics/>
      </Providers>
      </body>
    </html>
  );
}
