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
    icon: <img src="/icons/Drug-Resistant%20Epilepsy.svg" alt="Drug-resistant epilepsy" className="w-16 h-16 object-contain" />
  },
  {
    title: "Pediatric epilepsy",
    icon: <img src="/icons/Pediatric%20Epilepsy.svg" alt="Pediatric epilepsy" className="w-16 h-16 object-contain" />
  },
  {
    title: "Epilepsy surgery",
    icon: <img src="/icons/Epilepsy%20Surgery.svg" alt="Epilepsy surgery" className="w-16 h-16 object-contain" />
  },
  {
    title: "SEEG",
    icon: <img src="/icons/SEEG.svg" alt="SEEG" className="w-16 h-16 object-contain" />
  },
  {
    title: "Neuro-modulation",
    icon: <img src="/icons/Neuro-modulation.svg" alt="Neuro-modulation" className="w-16 h-16 object-contain" />
  },
  {
    title: "Rehabilitation",
    icon: <img src="/icons/Rehabilitation.svg" alt="Rehabilitation" className="w-16 h-16 object-contain" />
  },
  {
    title: "Ketogenic therapy",
    icon: <img src="/icons/Ketogenic%20Therapy.svg" alt="Ketogenic therapy" className="w-16 h-16 object-contain" />
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
      className="relative z-5 [clip-path:inset(0)] w-full bg-white text-neutral-900 h-[50vh] min-h-[450px] lg:h-[95vh] xxl:h-[70vh] flex flex-col justify-center font-sans overflow-hidden"
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
