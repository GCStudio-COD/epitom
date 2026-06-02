"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmokeTitle from "@/src/components/UI/SmokeTitle";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Drug-resistant epilepsy",
    description: "Advanced medical and dietary evaluations for patients whose seizures are not controlled by standard anti-seizure medications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v5M12 16h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pediatric epilepsy",
    description: "Specialized, compassionate care and tailored treatment plans for infants, children, and adolescents dealing with epilepsy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
        <circle cx="12" cy="7" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c-3 0-5 2-5 5v5h10v-5c0-3-2-5-5-5z" />
        <path d="M19 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Epilepsy surgery",
    description: "Precision neurosurgical evaluations and interventions, including minimally invasive laser therapy and structural resections.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "SEEG",
    description: "Stereoelectroencephalography mapping using deep brain electrodes to precisely localize where seizures originate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-9 4 18 3-12h5" />
        <circle cx="9" cy="3" r="1.5" fill="currentColor" />
        <circle cx="13" cy="21" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Neuro-modulation",
    description: "State-of-the-art brain stimulation therapies, including VNS, RNS, and DBS, to regulate abnormal electrical patterns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path d="M4 6c1-1.5 3-1.5 4 0s3 1.5 4 0 3-1.5 4 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Rehabilitation",
    description: "Comprehensive physical, occupational, and cognitive therapies designed to enhance quality of life and independence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h4v-4h4v-4h4v-4h4" />
        <circle cx="18" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Ketogenic therapy",
    description: "Scientifically monitored high-fat, low-carbohydrate dietary programs designed to treat drug-resistant seizures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
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
      className="relative z-5 [clip-path:inset(0)] w-full bg-white text-neutral-900 h-[80vh] lg:h-screen flex flex-col justify-center font-sans overflow-hidden"
    >
      {/* Light ambience glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Swiper Header Row */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-4 lg:mb-8">
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
          className="flex gap-6 overflow-visible w-full no-scrollbar"
          style={{ willChange: "transform" }}
        >
          {services.map((service) => (
            <div
              key={service.number}
              className="swiper-card shrink-0 w-full lg:w-[calc((100%-48px)/3)] snap-align-start bg-white border border-neutral-200/80 hover:border-primary/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-primary/5 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_35px_rgba(87,42,101,0.06)] h-[340px]"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                {/* Gold Icon Box */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-primary group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(87,42,101,0.08)] transition-all duration-300 relative z-10">
                  {service.icon}
                </div>
                <span className="text-xs font-bold text-neutral-400 tracking-wider">
                  {service.number}
                </span>
              </div>

              {/* Card Body */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {service.description}
                </p>
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
