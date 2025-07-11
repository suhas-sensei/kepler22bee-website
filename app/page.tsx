import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
