"use client";

import React from "react";
import Button from "@/src/components/UI/Button";

const AskEpilu: React.FC = () => {
  return (
    <section className="w-full py-[50px] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 w-full">
          {/* Left side text */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-900 leading-tight">
              Your AI companion for epilepsy awareness, guidance, and support—available anytime through WhatsApp.
            </p>
          </div>

          {/* Right side buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button variant="primary" size="lg">
              Ask Epilu
            </Button>
            <Button variant="secondary" size="lg" href="#" className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskEpilu;
