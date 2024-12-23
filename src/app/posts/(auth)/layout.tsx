"use client";

import AuthProvider from "@/components/providers/AuthProvider";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <section className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full min-h-screen dark:bg-grid-white-500/[0.2] bg-grid-black-500/[0.2]">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white 
     dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,_#F5F5F5)]"
        ></div>
        {children}
      </section>
    </AuthProvider>
  );
}
