"use client";
import { Link } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black z-50 font-['Fragment_Mono']">
      <div className="flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/type.svg"
            alt="Kepler22b Logo"
            className="h-16 sm:h-20"
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex flex-1 justify-center h-full items-center mr-[150px] space-x-0">
          {["/", "/about", "/whitelist", "/blog"].map((path, i) => (
            <div
              key={path}
              className={`relative h-full flex items-center group ${
                i !== 0 ? "-ml-5" : ""
              }`}
            >
              <div
                className="h-full flex items-center px-10 relative transition-all duration-300 group-hover:bg-white"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
                }}
              >
                <Link
                  href={path}
                  className="text-gray-300 text-[18px] group-hover:text-black relative z-10"
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").replace("whitelist", "Whitepaper")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Login button */}
        <div className="hidden lg:flex items-center h-full">
          <div className="relative h-full flex items-center group -ml-5">
            <div
              className="h-full flex items-center px-6 relative transition-all duration-600 group-hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
              }}
            >
              <Link
                href="/login"
                className="text-gray-300 group-hover:text-black relative z-10"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className={`lg:hidden bg-black text-white px-6 py-4 space-y-3 
      transition-opacity duration-700 opacity-0 animate-fadein`}
        >
          <Link href="/" className="block text-lg">
            Home
          </Link>
          <Link href="/about" className="block text-lg">
            About
          </Link>
          <Link href="/whitelist" className="block text-lg">
            Whitepaper
          </Link>
          <Link href="/blog" className="block text-lg">
            Blog
          </Link>
          <Link href="/login" className="block text-lg">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
