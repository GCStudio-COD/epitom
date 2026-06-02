"use client";

import React from "react";
import SmokeTitle from "@/src/components/UI/SmokeTitle";

const HomeAbout: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-[#FAF8F5] py-16 md:py-24 lg:py-36 font-sans overflow-hidden">
      {/* Container wrapper */}
      <div className="container relative z-10">

        {/* Large Heading */}
        <div className="max-w-4xl mb-12 md:mb-24 lg:mb-32">
          <SmokeTitle
            tag="h2"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold tracking-tighter text-neutral-900 leading-[1.05] md:leading-[1]"
            text={"Hope Beyond\n[Seizures]"}
          />
        </div>

        {/* Paragraph section */}
        <div className="">
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-neutral-500 leading-relaxed tracking-wide">
            Comprehensive epilepsy care powered by advanced technology, expert specialists, and evidence-based treatment pathways.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
