import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import Data from "./components/sections/Data";
import GameGrid from "./components/sections/Game";
import Waitlist from "./components/sections/Waitlist"; // Renamed for clarity

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Data />
      <GameGrid />

      {/* 🔽 GlowingDots only inside this scroll-visible section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <Waitlist />
      </section>
    </div>
  );
}
