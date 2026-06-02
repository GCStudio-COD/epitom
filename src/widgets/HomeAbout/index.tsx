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
            className="h2 font-bold tracking-tight text-neutral-900 leading-[1.15] md:leading-[1.2]"
            text={"Hope Beyond\n[Seizures]"}
          />
        </div>

        {/* Scrolling text marquee section */}
        <div className="w-full">
          {/* Infinite Marquee Wrapper */}
          <div className="relative w-full overflow-hidden py-8 border-t border-b border-neutral-200/50">
            {/* Overlay gradients for fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

            <div className="marquee-track flex items-center">
              {/* Block 1 */}
              <div className="flex items-center gap-12 shrink-0 pr-12">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-neutral-500 tracking-wide">
                  Comprehensive epilepsy care powered by <span className="font-semibold text-primary">advanced technology</span>, <span className="font-semibold text-primary">expert specialists</span>, and <span className="font-semibold text-primary">evidence-based treatment pathways</span>.
                </p>
                <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 ml-4" />
              </div>

              {/* Block 2 */}
              <div className="flex items-center gap-12 shrink-0 pr-12" aria-hidden="true">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-neutral-500 tracking-wide">
                  Comprehensive epilepsy care powered by <span className="font-semibold text-primary">advanced technology</span>, <span className="font-semibold text-primary">expert specialists</span>, and <span className="font-semibold text-primary">evidence-based treatment pathways</span>.
                </p>
                <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 ml-4" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Local self-contained style block for smooth, infinite marquee scrolling */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HomeAbout;
