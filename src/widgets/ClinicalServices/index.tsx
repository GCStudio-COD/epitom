"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmokeTitle from "@/src/components/UI/SmokeTitle";

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Drug-resistant epilepsy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v5M12 16h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pediatric epilepsy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <circle cx="12" cy="7" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c-3 0-5 2-5 5v5h10v-5c0-3-2-5-5-5z" />
        <path d="M19 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Epilepsy surgery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "SEEG",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-9 4 18 3-12h5" />
        <circle cx="9" cy="3" r="1.5" fill="currentColor" />
        <circle cx="13" cy="21" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Neuro-modulation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path d="M4 6c1-1.5 3-1.5 4 0s3 1.5 4 0 3-1.5 4 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Rehabilitation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h4v-4h4v-4h4v-4h4" />
        <circle cx="18" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Ketogenic therapy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-[#E1B77E]">
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="12" cy="6" r="3" />
        <path d="M8.5 16.5l2-8M15.5 16.5l-2-8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ClinicalServices: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const swiper = swiperRef.current;
    const section = sectionRef.current;
    if (!swiper || !section) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return swiper.scrollWidth - swiper.clientWidth;
      };

      gsap.to(swiper, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          id: "clinical-scroll",
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-5 [clip-path:inset(0)] w-full bg-white text-neutral-900 h-[50vh] min-h-[450px] lg:h-[70vh] flex flex-col justify-center font-sans overflow-hidden"
    >
      {/* Light ambience glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Swiper Header Row */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 lg:mb-[70px]">
          <SmokeTitle
            tag="h2"
            className="h2 font-bold tracking-tight text-neutral-900 mb-2"
            text="Clinical [Services]"
          />
          <p className="text-base sm:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
            Delivering comprehensive epilepsy care through clinical excellence, advanced diagnostics, research, education, and global collaboration.
          </p>
        </div>

        {/* Horizontal Swiper Row */}
        <div
          ref={swiperRef}
          className="flex gap-0 overflow-visible w-full no-scrollbar"
          style={{ willChange: "transform" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="swiper-card shrink-0 w-full lg:w-1/3 snap-align-start px-6 lg:px-8 flex flex-col justify-between transition-all duration-300 group cursor-pointer h-[180px] border-r border-neutral-300 last:border-r-0"
            >
              {/* Header */}
              <div className="mb-4">
                {/* Clean Icon Box */}
                <div className="inline-block p-3 rounded-2xl bg-neutral-50 text-primary transition-all duration-300 relative z-10 group-hover:scale-105 group-hover:bg-primary/5">
                  {service.icon}
                </div>
              </div>

              {/* Body */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-800 group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ClinicalServices;
