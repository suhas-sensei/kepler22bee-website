"use client";
import React from "react";
import Image from "next/image";
import { FaDesktop } from "react-icons/fa";

const games = [
  {
    name: "BlockRooms",
    image: "./gametileFinal.png",
    platforms: [<FaDesktop key="d" />],
    widthClass: "lg:w-[50%]",
    height: "450px",
  },
  {
    name: "[Redacted]",
    image: "./preVid.mp4",
    platforms: [],
    widthClass: "lg:w-[45%]",
    height: "450px",
  },
  {
    name: "[Redacted]",
    image: "./pre1.jpg",
    platforms: [],
    widthClass: "lg:w-[30%]",
    height: "280px",
  },
  {
    name: "[Redacted]",
    image: "./pre2.jpg",
    platforms: [],
    widthClass: "lg:w-[30%]",
    height: "280px",
  },
  {
    name: "[Redacted]",
    image: "https://source.unsplash.com/600x400/?cardgame,magic",
    platforms: [],
    widthClass: "lg:w-[30%]",
    height: "280px",
  },
];

const getBlurClass = (index: number): string => {
  if (index === 0) return "";
  const levels = ["blur-sm", "blur", "blur-md", "blur-lg", "blur-xl"];
  return levels[index - 1] || "blur-xl";
};

const GameGrid = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen py-10 px-1 flex justify-center">
      <div className="max-w-screen-2xl w-full">
        <h2 className="text-white text-4xl font-bold mb-8">Games</h2>

        <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center">
          {games.map((game, index) => {
            const isVideo = game.image.endsWith(".mp4");
            const blurClass = getBlurClass(index);

            return (
              <div
                key={index}
                className={`relative w-full ${game.widthClass} rounded-lg overflow-hidden group border border-transparent transition-all duration-300 hover:border-white hover:border-2 hover:bg-gradient-to-r hover:from-white/30 hover:to-white/10 shadow-xl hover:shadow-white/20`}
                style={{ height: game.height }}
              >
                {isVideo ? (
                  <video
                    src={game.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover ${blurClass}`}
                  />
                ) : (
                  <Image
                    src={game.image}
                    alt={game.name}
                    className={`w-full h-full object-cover ${blurClass}`}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-white text-2xl font-semibold">
                    {game.name}
                  </h3>
                  <div className="flex gap-2 mt-2 text-white opacity-80 text-sm">
                    {game.platforms.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameGrid;
