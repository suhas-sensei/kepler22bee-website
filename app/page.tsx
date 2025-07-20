import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import Data from "./components/sections/Data";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Data />
      
    </div>
  );
}
