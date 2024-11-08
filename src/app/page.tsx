import HeroSection from "@/sections/HeroSection";
import Navbar from "@/components/Navbar";
import TechSection from "@/sections/TechSection";
import ProjectSection from "@/sections/ProjectSection";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212]">
      <main className="max-w-7xl w-full flex flex-col gap-8 items-center">
        <Navbar />
        <HeroSection/>
        <TechSection/>
        <ProjectSection/>
        <HeroSection/>
        <HeroSection/>
      </main>
    </div>
  );
}
