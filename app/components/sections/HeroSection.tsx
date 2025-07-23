"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    }
  }, []);

  return (
    <div className="relative w-full sm:h-screen h-[60vh] bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-full object-cover"
      >
        <source src="/FinalWebVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-10 bg-white/70 hover:bg-white/90 p-3 rounded-full shadow-lg transition"
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </div>
  );
};

export default HeroSection;
