"use client";

import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#262626] text-white pt-24 pb-16 font-sans border-t-0 rounded-t-[40px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full min-h-[220px]">
            <div className="space-y-6">
              <div className="flex items-center">
                <img src="/logo.png" alt="Epitome Logo" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
                Your space to heal, grow, and feel understood. Offering compassionate, personalized epilepsy and neurological care to guide life's challenges.
              </p>
            </div>
            
            <div className="mt-12 md:mt-auto flex flex-col gap-1">
              <p className="text-[13px] font-semibold text-white tracking-wide">
                &copy;{new Date().getFullYear()} Epitome. All rights reserved.
              </p>
              <p className="text-[12px] font-medium text-neutral-400 tracking-wide">
                Design by GC Studio
              </p>
            </div>
          </div>

          {/* Links Columns container */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-[13px] font-bold tracking-wide text-white">Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Newsroom</Link></li>
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="text-[13px] font-bold tracking-wide text-white">Products</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">World Model</Link></li>
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Hive</Link></li>
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Robotics</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="text-[13px] font-bold tracking-wide text-white">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">Cookie Settings</Link></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h3 className="text-[13px] font-bold tracking-wide text-white">Socials</h3>
              <div className="flex items-center space-x-3">
                {/* Instagram */}
                <a href="#" className="text-white hover:text-white transition-colors border border-white rounded-[10px] p-2" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-white hover:text-white transition-colors border border-white rounded-[10px] p-2" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                </a>
                {/* X */}
                <a href="#" className="text-white hover:text-white transition-colors border border-white rounded-[10px] p-2" aria-label="X">
                   <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Youtube */}
                <a href="#" className="text-white hover:text-white transition-colors border border-white rounded-[10px] p-2" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
