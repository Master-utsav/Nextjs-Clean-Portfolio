"use client";
import React from "react";

const ContactSection = () => {
  const titleRef = React.useRef(null);
  return (
    <section
      ref={titleRef}
      id="contact"
      className={`min-h-screen relative max-w-6xl text-center flex justify-center flex-col py-8 space-y-4 items-center font-[family-name:var(--font-maven-pro)]`}
    >
      <div>this is the contact page</div>

    </section>
  );
};

export default ContactSection;
