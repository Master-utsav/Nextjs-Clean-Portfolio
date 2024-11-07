import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import TechSection from "@/components/TechSection";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212]">
      <main className="max-w-7xl w-full flex flex-col gap-8 items-center">
        <Navbar />
        <HeroSection/>
        <TechSection/>
      </main>
    </div>
  );
}
