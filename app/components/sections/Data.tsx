"use client";
import Image from "next/image";
import NewsSection from "./News";

const Data = () => {
  return (
    <div
      className="text-white min-h-screen p-3 sm:p-6"
      style={{
        background:
          "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(18, 2, 2, 1) 22%, rgba(15, 1, 1, 1) 52%, rgba(10, 1, 2, 1) 82%, rgba(0, 0, 0, 1) 100%) ",
      }}
    >
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            What`&apos;`s happening?
          </h1>
          <button
            className="mr-2 sm:mr-4 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded transition-all duration-300 backdrop-blur-lg hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              boxShadow:
                "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 0px 0 rgba(255, 255, 255, 0.2)",
              color: "white",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="absolute inset-0 rounded bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <span className="relative z-10 text-xs sm:text-sm md:text-base">
              SEE MORE
            </span>
          </button>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured article - Left side */}
          <div className="lg:col-span-2">
            <div className="group relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  mx-auto
                  h-[180px]
                  sm:h-[240px]
                  md:h-[300px]
                  lg:h-[380px]
                  xl:h-[450px]
                  2xl:h-[500px]
                "
              >
                <Image
                  src="/banner.png"
                  alt="Featured article"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 90vw,
                         (max-width: 1024px) 80vw,
                         (max-width: 1280px) 75vw,
                         (max-width: 1620px) 65vw,
                         50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-4 max-[410px]:translate-y-1">
                <h2 className="text-sm max-[410px]:text-[12px] sm:text-base md:text-lg lg:text-xl font-bold leading-tight break-words">
                  Fully onchain FPS game Blockroom
                </h2>
                <div className="flex flex-wrap max-[410px]:flex-col max-[410px]:items-start gap-1 sm:gap-2 mt-2">
                  <span className="bg-yellow-600 text-black px-2 py-0.5 text-[9px] sm:text-[8px] md:text-xs font-bold rounded">
                    Under Dev
                  </span>
                  <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                    SEE BLOG
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* News Section */}
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Data;
