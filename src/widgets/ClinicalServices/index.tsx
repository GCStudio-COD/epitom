"use client";

import React from "react";
import SmokeTitle from "@/src/components/UI/SmokeTitle";

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const services: ServiceItem[] = [
  {
    title: "Drug-resistant epilepsy",
    icon: <img src="/icons/Drug-Resistant%20Epilepsy.svg" alt="Drug-resistant epilepsy" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Pediatric epilepsy",
    icon: <img src="/icons/Pediatric%20Epilepsy.svg" alt="Pediatric epilepsy" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-1"
  },
  {
    title: "Epilepsy surgery",
    icon: <img src="/icons/Epilepsy%20Surgery.svg" alt="Epilepsy surgery" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-1"
  },
  {
    title: "SEEG",
    icon: <img src="/icons/SEEG.svg" alt="SEEG" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-2"
  },
  {
    title: "Neuro-modulation",
    icon: <img src="/icons/Neuro-modulation.svg" alt="Neuro-modulation" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-1"
  },
  {
    title: "Rehabilitation",
    icon: <img src="/icons/Rehabilitation.svg" alt="Rehabilitation" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-1"
  },
  {
    title: "Ketogenic therapy",
    icon: <img src="/icons/Ketogenic%20Therapy.svg" alt="Ketogenic therapy" className="w-12 h-12 md:w-16 md:h-16 object-contain" />,
    className: "md:col-span-2"
  },
];

const ClinicalServices: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-5 w-full bg-white text-neutral-900 py-24 flex flex-col justify-center font-sans overflow-hidden"
    >
      {/* Light ambience glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SmokeTitle
            tag="h2"
            className="h2 font-bold tracking-tight text-neutral-900 mb-4"
            text="Clinical [Services]"
          />
          <p className="text-base sm:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
            Delivering comprehensive epilepsy care through clinical excellence, advanced diagnostics, research, education, and global collaboration.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-neutral-50 rounded-[32px] p-8 border border-neutral-200 hover:shadow-2xl hover:border-neutral-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden relative ${service.className || ""}`}
            >
              {/* Subtle gradient hover effect on card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
              
              {/* Header */}
              <div className="mb-4 relative z-10">
                {/* Icon Box */}
                <div className="inline-block p-4 rounded-[24px] bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Body */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 group-hover:text-[#572a65] transition-colors leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClinicalServices;
