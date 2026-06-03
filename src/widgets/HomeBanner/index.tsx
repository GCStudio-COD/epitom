"use client";

import React, { useRef } from "react";
import { useLenis } from "lenis/react";
import Button from "@/src/components/UI/Button";

interface HomeBannerProps {
  data?: {
    title?: string;
    subtitle?: string;
    find_center_link?: {
      url: string;
      text: string;
    };
    patient_resources_link?: {
      url: string;
      text: string;
    };
  };
  [key: string]: unknown;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ data }) => {
  const title = data?.title || "Redefining\nEpilepsy Care";
  const subtitle = data?.subtitle || "Advanced diagnostics, world-class epilepsy surgery, AI-powered support, and a nationwide network dedicated to helping people live seizure-free.";
  const bgRef = useRef<HTMLDivElement>(null);

  // Smooth parallax scroll using Lenis (applied to background wrapper only for high performance)
  useLenis(({ scroll }) => {
    if (bgRef.current) {
      bgRef.current.style.transform = `translate3d(0, -${scroll * 0.35}px, 0)`;
    }
  });

  return (
    <div
      id="home"
      className="sticky top-0 w-full h-screen z-0 font-sans overflow-hidden"
      style={{
        fontFamily: "'Figtree', 'Noto Sans', sans-serif"
      }}
    >
      {/* Parallax Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform scale-125"
        style={{
          backgroundImage: `url('/banner.jpeg')`,
        }}
      />

      <div className="absolute inset-0 bg-neutral-950/20 z-1" />

      {/* Content wrapper - left aligned */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-20 z-10 [&>.container]:my-0">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 text-white">
            <div className="flex flex-col items-start text-left space-y-6 max-w-full md:max-w-[60%]">

              {/* Heading */}
              <h1 className="h1 font-bold tracking-tight text-white mb-2 drop-shadow-md leading-[1.1] whitespace-pre-line">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl font-normal text-neutral-300 leading-relaxed drop-shadow-sm">
                {subtitle}
              </p>
            </div>

            {/* Action Button - Right aligned on desktop */}
            <div className="flex shrink-0 pb-2">
              <Button
                href={data?.find_center_link?.url || "/find-center"}
                variant="outline-white"
                size="lg"
                className="shadow-lg shadow-cyan-950/30 hover:shadow-cyan-950/50 transition-all duration-300 whitespace-nowrap"
              >
                Find Care
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
