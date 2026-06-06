"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      const threshold = 8; // 8px buffer to prevent layout jitter

      // 1. Background appearance
      const triggerHeight = window.innerHeight * 0.3;
      if (currentScrollY > triggerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Show/Hide on scroll
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Scrolling down
          if (!isOpen) {
            setIsVisible(false);
          }
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "bg-gradient-to-b from-black to-transparent py-4" : "bg-transparent py-6"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Animated Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer focus:outline-hidden group"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ${isOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-neutral-950/98 backdrop-blur-md z-40 flex flex-col justify-between p-8 md:p-12 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 space-y-12">
          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-300 hover:text-white transition-colors duration-250"
            >
              Home
            </Link>
            <Link
              href="/find-center"
              onClick={() => setIsOpen(false)}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-300 hover:text-white transition-colors duration-250"
            >
              Find Care
            </Link>
            <Link
              href="/patient-resources"
              onClick={() => setIsOpen(false)}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-300 hover:text-white transition-colors duration-250"
            >
              Patient Resources
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-300 hover:text-white transition-colors duration-250"
            >
              About Us
            </Link>
          </nav>
        </div>

        {/* Footer info in dropdown */}
        <div className="text-center text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Elite Neurosurgical Center. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar for Mobile */}
      {!isOpen && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[420px] bg-neutral-950/90 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl px-3 py-2 flex items-center justify-between z-50 md:hidden transition-all duration-300">
          {/* Home Link */}
          <a
            href="#home"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer shrink-0"
            aria-label="Home"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>

          {/* Find Care Button */}
          <a
            href="#network"
            className="flex-1 mx-2 py-2.5 rounded-full text-center text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/10 text-white hover:bg-white/20 hover:border-white/20 transition-all cursor-pointer"
          >
            Find Care
          </a>

          {/* Ask Epilu Button */}
          <a
            href="/ask-epilu"
            className="flex-1 py-2.5 rounded-full text-center text-xs font-bold uppercase tracking-wider bg-[#E1B77E] border border-[#E1B77E] text-neutral-950 hover:bg-[#d0a66d] hover:border-[#d0a66d] transition-all cursor-pointer"
          >
            Ask Epilu
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
