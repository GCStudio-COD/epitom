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
    number: "1",
    title: "Diagnosis",
    icon: (
      <img src="/icons/diagnosis.png" alt="Diagnosis" className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105 will-change-transform" />
    ),
  },
  {
    number: "2",
    title: "Treatment",
    icon: (
      <img src="/icons/treatment.png" alt="Treatment" className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105 will-change-transform" />
    ),
  },
  {
    number: "3",
    title: "Evaluation",
    icon: (
      <img src="/icons/evaluation.png" alt="Evaluation" className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105 will-change-transform" />
    ),
  },
  {
    number: "4",
    title: "Advanced Care",
    icon: (
      <img src="/icons/adcanced-care.png" alt="Advanced Care" className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-105 will-change-transform" />
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
        <div className="flex flex-col items-start text-left w-full mb-10 lg:mb-12">
          <SmokeTitle
            tag="h2"
            className="h2 font-bold text-neutral-900 mb-4"
            text={"Every [Seizure]\nHas a Path [Forward]"}
          />
          <p className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed w-full max-w-[80%]">
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
              className="swiper-card shrink-0 w-[83.33%] lg:w-[calc((100%-72px)/4)] snap-align-start bg-white border border-[#C2C1C0] hover:border-primary/40 rounded-[40px] p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-primary/5 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(87,42,101,0.06)] h-[340px]"
            >
              {/* Badge (Top Left aligned naturally via flexbox or absolute positioning within relative card bounds) */}
              <div className="w-full flex justify-start mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E1B77E] text-white flex items-center justify-center font-bold text-xs tracking-wider">
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
