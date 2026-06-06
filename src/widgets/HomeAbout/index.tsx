"use client";

import React from "react";
import SmokeTitle from "@/src/components/UI/SmokeTitle";

const HomeAbout: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-white py-16 md:py-24 lg:py-[100px] font-sans overflow-hidden">
      {/* Container wrapper */}
      <div className="container relative z-10">

        {/* Large Heading */}
        <div className="max-w-4xl mb-12 md:mb-24 lg:mb-[70px]">
          <SmokeTitle
            tag="h2"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[6rem] font-bold tracking-tighter text-neutral-900 leading-[1.05] md:leading-[1]"
            text={"Hope Beyond\n[Seizures]"}
          />
        </div>

        {/* Paragraph section */}
        <div className="">
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-normal text-neutral-500 leading-relaxed tracking-wide">
            Comprehensive epilepsy care powered by advanced technology, expert specialists, and evidence-based treatment pathways.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mt-24 md:mt-32">
          <p className="text-xl md:text-2xl font-medium text-black mb-10">Our Partners</p>
          <div className="relative w-full overflow-hidden">
            {/* Gradient masks for smooth fade at edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee opacity-80 hover:opacity-100 transition-opacity duration-300 will-change-transform">
              {/* Group 1 */}
              <div className="flex items-center justify-center gap-16 md:gap-24 px-8 md:px-12">
                <img src="/partners/INDIAN INSTITUTE OF TECHNOLOGY MADRAS 2001.jpeg" alt="IIT Madras" className="h-20 md:h-28 w-auto object-contain" />
                <img src="/partners/NIT 2001.svg" alt="NIT" className="h-16 md:h-24 w-auto object-contain" />
                <img src="/partners/PENN 2001.jpeg" alt="Penn" className="h-20 md:h-28 w-auto object-contain" />
                <img src="/partners/SEIN 2001.svg" alt="SEIN" className="h-20 md:h-28 w-auto object-contain" />
                <img src="/partners/STONY BROOK 2001 .SVG" alt="Stony Brook" className="h-20 md:h-28 w-auto object-contain" />
              </div>
              {/* Group 2 (Duplicate for infinite scroll) */}
              <div className="flex items-center justify-center gap-16 md:gap-24 px-8 md:px-12">
                <img src="/partners/INDIAN INSTITUTE OF TECHNOLOGY MADRAS 2001.svg" alt="IIT Madras" className="h-20 md:h-28 w-auto object-contain" />
                <img src="/partners/NIT 2001.svg" alt="NIT" className="h-16 md:h-24 w-auto object-contain" />
                <img src="/partners/PENN 2001.svg" alt="Penn" className="h-20 md:h-28 w-auto object-contain" />
                <img src="/partners/SEIN 2001.svg" alt="SEIN" className="h-20 md:h-28 w-auto object-contain" />
                <img src="/partners/STONY BROOK 2001 .SVG" alt="Stony Brook" className="h-20 md:h-28 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
