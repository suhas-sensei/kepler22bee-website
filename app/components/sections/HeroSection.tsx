"use client";
import React, { useState, useEffect } from "react";
import Intro from "../layout/Intro";

export default function MainHeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowIntro(currentScrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-top bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('hero1.png')",
          backgroundSize: "100% auto",
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-12">
        <div className="text-center text-white">
          <h1
            className="text-6xl lg:text-8xl font-bold mb-8 font-['Geist_Mono'] transition-all duration-500"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
              transform: `translateY(${Math.min(scrollY / 4, 50)}px)`,
            }}
          >
            Kepler22bee
          </h1>
          <p
            className="text-xl lg:text-2xl text-gray-200 transition-opacity duration-500"
            style={{
              opacity: Math.max(0, 1 - scrollY / 350),
            }}
          >
            Fully On-chain Gaming Studio
          </p>
        </div>
      </div>

      {/* Floating Intro Component */}
      <div
        className={`fixed top-1/2 right-8 transform -translate-y-1/2 z-20 transition-all duration-2000 ease-out ${
          showIntro && scrollY < 900
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

      <div className="relative z-10 bg-gradient-to-b from-transparent to-gray-900 min-h-screen">
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
        <div
          className="fixed inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/banner.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: Math.min(1, (scrollY - 600) / 300),
            pointerEvents: scrollY > 600 ? "auto" : "none",
            zIndex: 5,
          }}
        />

        <div
          className="container mx-auto px-6 py-20 ml-[10%]"
          style={{
            opacity: Math.min(1, (scrollY - 300) / 300),
            position: scrollY > 600 ? "fixed" : "relative",
            top: scrollY > 600 ? "50%" : "auto",
            transform: scrollY > 600 ? "translateY(-50%)" : "none",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-row">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 font-['Geist_Mono']">
                Our Stack
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Creating immersive Gaming experiences with a focus on
                decentralization and community-driven development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
