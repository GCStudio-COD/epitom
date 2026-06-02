"use client";

import React, { useRef, useState } from "react";
import SmokeTitle from "@/src/components/UI/SmokeTitle";

interface ApproachStep {
  number: string;
  title: string;
  icon: React.ReactNode;
}

const steps: ApproachStep[] = [
  {
    number: "01",
    title: "Diagnosis",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="w-24 h-24 text-primary transition-transform duration-300 group-hover:scale-105">
        <circle cx="60" cy="40" r="22" />
        <path d="M42 58 L20 80" strokeLinecap="round" strokeWidth="5" />
        <path d="M38 52 A 22 22 0 0 1 52 38" opacity="0.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Treatment",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="w-24 h-24 text-primary transition-transform duration-300 group-hover:scale-105">
        <path d="M22 55 L45 32 C51 26, 61 26, 67 32 C73 38, 73 48, 67 54 L44 77 C38 83, 28 83, 22 77 C16 71, 16 61, 22 55 Z" strokeLinecap="round" />
        <line x1="33" y1="66" x2="56" y2="43" strokeLinecap="round" />
        <path d="M31 49 h8 M35 45 v8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M68 62 C68 72, 60 80, 50 80 C40 80, 40 72, 50 62 C60 52, 68 52, 68 62 Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Evaluation",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="w-24 h-24 text-primary transition-transform duration-300 group-hover:scale-105">
        <line x1="50" y1="25" x2="50" y2="80" strokeLinecap="round" />
        <path d="M35 80 h30" strokeLinecap="round" strokeWidth="4" />
        <path d="M40 80 L44 74 h12 L56 80" strokeLinejoin="round" />
        <line x1="25" y1="35" x2="75" y2="35" strokeLinecap="round" strokeWidth="4" />
        <circle cx="50" cy="22" r="4" fill="currentColor" />
        <line x1="25" y1="35" x2="15" y2="55" strokeLinecap="round" />
        <line x1="25" y1="35" x2="35" y2="55" strokeLinecap="round" />
        <path d="M12 55 L25 61 L38 55 Z" strokeLinejoin="round" />
        <line x1="75" y1="35" x2="65" y2="55" strokeLinecap="round" />
        <line x1="75" y1="35" x2="85" y2="55" strokeLinecap="round" />
        <path d="M62 55 L75 61 L88 55 Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Advanced Care",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="w-24 h-24 text-primary transition-transform duration-300 group-hover:scale-105">
        <path d="M50 82 C50 82, 18 58, 18 36 C18 22, 28 12, 40 12 C46 12, 48 14, 50 16 C52 14, 54 12, 60 12 C72 12, 82 22, 82 36 C82 58, 50 82, 50 82 Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 32 L62 36 v12 C62 56, 50 63, 50 63 C50 63, 38 56, 38 48 v-12 Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const Approach: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const index = Math.round(target.scrollLeft / target.clientWidth);
    setActiveIndex(index);
  };

  const scrollToCard = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.scrollTo({
        left: index * swiperRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const prevCard = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToCard(nextIndex);
  };

  const nextCard = () => {
    const nextIndex = Math.min(steps.length - 1, activeIndex + 1);
    scrollToCard(nextIndex);
  };

  return (
    <section className="relative w-full bg-white text-neutral-900 py-16 md:py-24 font-sans overflow-hidden">
      {/* Subtle brand ambience glows */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-50/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-50/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <SmokeTitle
            tag="h2"
            className="h2 font-bold tracking-tight text-neutral-900 mb-4"
            text="Every Seizure Has a [Path] Forward"
          />
          <p className="text-base sm:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
            From first diagnosis to advanced surgical evaluation, our structured epilepsy care pathway ensures every patient receives the right treatment at the right time.
          </p>
        </div>

        {/* Carousel Row */}
        <div
          ref={swiperRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto lg:overflow-visible w-full no-scrollbar snap-x snap-mandatory lg:snap-none pb-6 lg:pb-0"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="swiper-card shrink-0 w-full lg:w-[calc((100%-72px)/4)] snap-align-start bg-white border border-neutral-200/80 hover:border-primary/40 rounded-[40px] p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-primary/5 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(87,42,101,0.06)] h-[340px]"
            >
              {/* Badge (Top Left aligned naturally via flexbox or absolute positioning within relative card bounds) */}
              <div className="w-full flex justify-start mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs tracking-wider">
                  {step.number}
                </div>
              </div>

              {/* Icon Container */}
              <div className="flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Step Title */}
              <div className="mt-auto">
                <h3 className="text-lg md:text-xl font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors leading-tight">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex lg:hidden justify-start items-center gap-4 mt-8">
          <button
            onClick={prevCard}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 active:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous card"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>


          <button
            onClick={nextCard}
            disabled={activeIndex === steps.length - 1}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 active:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next card"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => { window.location.href = "/pathway"; }}
            className="ml-auto mr-2 px-4 py-2 bg-primary text-white rounded-[300px] hover:bg-primary/80 transition-colors"
            aria-label="Explore Pathway"
          >
            Explore Pathway
          </button>
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

export default Approach;
