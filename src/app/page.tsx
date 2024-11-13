import HeroSection from "@/sections/HeroSection";
import Navbar from "@/components/Navbar";
import TechSection from "@/sections/TechSection";
import ProjectSection from "@/sections/ProjectSection";
import MyName from "@/components/MyName";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";


export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] relative w-full">
      <main className="max-w-7xl w-full flex flex-col gap-8 items-center">
        <Navbar />
        <HeroSection/>
        <TechSection/>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <FooterSection/>
      </main>
      <MyName className="sm:inline-block hidden fixed bottom-0 right-2 w-20  rounded-lg bg-transparent"/>
    </div>
  );
}
