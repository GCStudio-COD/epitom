"use client";

import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-[#150D1B] dark:bg-[#150D1B] border-t border-[#EFE6DD] dark:border-neutral-800 py-16 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">

          {/* Brand Column (Left) */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            {/* Logo and Name */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Epitome Logo" className="h-10 w-auto mr-3" />

            </div>

            {/* Description */}
            <p className="text-base text-[#8B7060] dark:text-neutral-400 font-light leading-relaxed max-w-sm">
              Your space to heal, grow, and feel understood. Offering compassionate, personalized epilepsy and neurological care to guide life's challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-5 pt-2">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C0E24] dark:text-neutral-300 hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C0E24] dark:text-neutral-300 hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C0E24] dark:text-neutral-300 hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C0E24] dark:text-neutral-300 hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-base font-semibold tracking-wider text-[#1C0E24] dark:text-neutral-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8B7060] dark:text-neutral-400 hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base font-semibold tracking-wider text-[#1C0E24] dark:text-neutral-100">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-[#8B7060] dark:text-neutral-400">
              <div>
                <h4 className="font-semibold text-[#1C0E24] dark:text-neutral-200 text-sm">Email</h4>
                <a
                  href="mailto:hello@epitomecare.com"
                  className="hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200 font-light"
                >
                  hello@epitomecare.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-[#1C0E24] dark:text-neutral-200 text-sm">Phone</h4>
                <a
                  href="tel:+11234567890"
                  className="hover:text-[#572a65] dark:hover:text-[#e687ec] transition-colors duration-200 font-light"
                >
                  +1 (123) 456-7890
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-[#1C0E24] dark:text-neutral-200 text-sm">Office Hours:</h4>
                <p className="font-light">Mon–Sat, 9 AM – 7 PM</p>
              </div>
            </div>
          </div>

          {/* Visit Us Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="flex items-center text-base font-semibold tracking-wider text-[#1C0E24] dark:text-neutral-100">
              <span className="mr-2">📍</span> Visit Us
            </h3>
            <div className="space-y-2 text-sm text-[#8B7060] dark:text-neutral-400">
              <h4 className="font-semibold text-[#1C0E24] dark:text-neutral-200 text-sm">Address</h4>
              <p className="leading-relaxed font-light">
                Epitome Care Center<br />
                123 Tranquil Avenue Wellness<br />
                City, CA 90210
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#EFE6DD] dark:border-neutral-800 w-full" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm text-[#9C897B] dark:text-neutral-500 font-light tracking-wide space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Epitome. All rights reserved.
          </div>
          <div>
            Design by GC Studio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
