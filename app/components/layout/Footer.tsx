"use client";
import Image from "next/image";

import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0a0a0a] text-white px-8 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-700 pb-6">
        <div className="flex items-center gap-2">
          <Image src="./k2blogo.png" alt="Kepler Labs" className="h-8" />
        </div>
        <nav className="flex flex-wrap gap-4 md:gap-6">
          <a href="#" className="hover:underline font-semibold">
            SECURITY
          </a>
          <a href="#" className="hover:underline font-semibold">
            LEGAL
          </a>
          <a href="#" className="hover:underline font-semibold">
            LEADERSHIP
          </a>
          <a href="#" className="hover:underline font-semibold">
            CANDIDATE PRIVACY
          </a>
          <a href="#" className="hover:underline font-semibold">
            TERMS OF SERVICE
          </a>
          <a href="#" className="hover:underline font-semibold">
            PRIVACY NOTICE
          </a>
          <a href="#" className="hover:underline font-semibold">
            PLAYER SUPPORT
          </a>

          <a href="#" className="hover:underline font-semibold">
            ACCESSIBILITY
          </a>
        </nav>
        <div className="flex gap-4 text-lg">
          <a href="https://x.com/_BlockRooms">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs gap-2">
        <div className="flex items-center gap-2">
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <span>|</span>
          <span>© 2025 Kepler Labs, Inc. All Rights Reserved.</span>
        </div>
        <button
          onClick={scrollToTop}
          className="text-blue-400 font-semibold hover:underline"
        >
          TO THE SURFACE ▲
        </button>
      </div>
    </footer>
  );
};

export default Footer;
