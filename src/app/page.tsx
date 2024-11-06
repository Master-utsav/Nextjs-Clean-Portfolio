import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212]">
      <main className="max-w-7xl w-full flex flex-col gap-8 items-center">
        <Navbar />
        <HeroSection/>
      </main>
    </div>
  );
}
