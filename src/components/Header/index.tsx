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

      // 1. Background appearance
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Show/Hide on scroll
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (!isOpen) {
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "bg-neutral-950/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
          } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Animated Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer focus:outline-hidden group"
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
    </>
  );
};

export default Header;
