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
  const title = data?.title || "Advancing Hope Beyond Seizures";
  const subtitle = data?.subtitle || "Integrating world-class neurosurgery, AI-driven diagnostics, and human-centric care to redefine the limits of clinical possibility.";
  const bannerRef = useRef<HTMLDivElement>(null);

  // Smooth parallax scroll using Lenis
  useLenis(({ scroll }) => {
    if (bannerRef.current) {
      bannerRef.current.style.transform = `translate3d(0, -${scroll * 0.35}px, 0)`;
    }
  });

  return (
    <div
      ref={bannerRef}
      className="sticky top-0 w-full h-screen bg-cover bg-center bg-no-repeat z-0 will-change-transform font-sans"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop')`,
        fontFamily: "'Figtree', 'Noto Sans', sans-serif"
      }}
    >
      {/* Premium dark medical-gradient overlay for rich depth and contrast */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-900/80 to-transparent z-1" />
      <div className="absolute inset-0 bg-neutral-950/20 z-1" />

      {/* Content wrapper - left aligned */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 z-10 [&>.container]:my-0">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 text-white">
            <div className="flex flex-col items-start text-left space-y-6 max-w-full md:max-w-[60%]">

              {/* Heading */}
              <h1 className="h1 font-bold tracking-tight text-white mb-2 drop-shadow-md leading-[1.1]">
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
