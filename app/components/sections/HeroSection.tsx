"use client";
import { useEffect, useState } from "react";

// Dummy Intro component (replace with actual import if it exists elsewhere)
function Intro() {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg p-6 text-black max-w-xs">
      <h3 className="text-xl font-bold mb-2">Welcome!</h3>
      <p className="text-sm">
        Discover our work and vision as you scroll. Let’s create something
        amazing together!
      </p>
    </div>
  );
}

export default function MainHeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Show intro component after scrolling 200px
      setShowIntro(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('bg.png')",
          transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-['Geist_Mono']">
            Kepler22bee
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200">
            Architectural Visualization Studio
          </p>
        </div>
      </div>

      {/* Floating Intro Component */}
      <div
        className={`fixed top-1/2 right-8 transform -translate-y-1/2 z-20 transition-all duration-700 ease-out ${
          showIntro
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <Intro />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Extended content to enable scrolling */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-gray-900 min-h-screen">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 font-['Geist_Mono']">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Creating immersive architectural experiences through
                cutting-edge 3D visualization and virtual reality technologies.
              </p>
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 font-['Geist_Mono']">
                Our Process
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                From concept to completion, we transform architectural designs
                into photorealistic visualizations that bring spaces to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
