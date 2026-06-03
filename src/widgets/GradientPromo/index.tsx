"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GradientPromo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const frame3Ref = useRef<HTMLDivElement>(null);
  const frame4Ref = useRef<HTMLDivElement>(null);
  const epiluRef = useRef<HTMLDivElement>(null);
  const nurveRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([frame3Ref.current, frame4Ref.current], {
        opacity: 0,
        scale: 1.3,
        y: -10,
      });

      gsap.set(epiluRef.current, {
        opacity: 0,
        y: 100,
      });

      gsap.set(nurveRef.current, {
        opacity: 0,
        scale: 0.7,
        y: 10,
      });

      gsap.set(headlineRef.current, {
        opacity: 0,
        y: 50,
      });

      // Non-scrubbed entry timeline for Epilu and Nurve
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          toggleActions: "play none none reverse",
        }
      });

      entryTl.to(epiluRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2, // slower animation
        ease: "power2.out",
      })
        .to(headlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }, "<") // Start at the same time as Epilu
        .to(nurveRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }, "<"); // Start at the same time as Epilu

      // Independent infinite rotation so it doesn't break the timeline duration
      gsap.to(nurveRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%", // Pin for slightly longer
          pin: true,
          scrub: 1, // Smooth scrubbing on scroll
        }
      });

      // Add a small scroll delay so the frames wait for Epilu to finish
      tl.to({}, { duration: 0.5 })
        // Animate frame3 and frame4 scrubbed by scroll
        .to(frame3Ref.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        })
        .to(frame4Ref.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.7"); // Start 0.7s before frame3 finishes

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[linear-gradient(to_right,var(--color-secondary)_0%,var(--color-primary)_60%)]">
      {/* Background Frames */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img src="/groups/bg_frame_01.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div ref={frame3Ref} style={{ opacity: 0 }} className="absolute inset-0 w-full h-full pointer-events-none">
        <img src="/groups/bg_frame_03.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div ref={frame4Ref} style={{ opacity: 0 }} className="absolute inset-0 w-full h-full pointer-events-none">
        <img src="/groups/bg_frame_04.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content Layer */}
      <div className="absolute top-[15%] md:top-[25%] left-0 w-full z-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-6xl mx-auto">
            {/* Left side text */}
            <div className="max-w-2xl">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed font-sans drop-shadow-md">
                Your AI companion for epilepsy awareness, guidance, and support—available anytime through WhatsApp.
              </p>
            </div>
            
            {/* Right side buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="px-8 py-4 bg-white text-neutral-950 rounded-full font-bold text-sm tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300">
                Ask Epilu
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Story
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={epiluRef} style={{ opacity: 0 }} className="absolute bottom-[-130px] lg:bottom-[-110px] xxl:bottom-[-130px] left-0 w-full flex justify-center items-end z-10 pointer-events-none">
        <img
          src="/groups/epilu.png"
          alt="Epilu"
          className="w-[70%] md:w-[48%] object-contain relative z-10"
        />
        <img
          ref={nurveRef}
          src="/groups/nerve.png"
          alt="Nurve"
          className="absolute w-[40%] md:w-[8%] object-contain z-10 top-[23%] right-[25%]"
          style={{ opacity: 0 }}
        />
        {/* <img
          src="/groups/headline.svg"
          alt="Nurve"
          className="absolute w-[80%] md:w-[40%] object-contain z-0 top-[-120px] left-[50%] translate-x-[-50%]"
        /> */}
        <div ref={headlineRef} style={{ opacity: 0 }} className="absolute w-[80%] md:w-[33%] lg:w-[40%] xxl:w-[40%] object-contain z-0 lg:top-[-100px] xxl:top-[-140px] left-[47%] translate-x-[-50%]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" viewBox="0 0 779 347" fill="none">
            <defs>
              <linearGradient id="flowing-gradient" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="var(--color-secondary)" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="var(--color-secondary)" />
                <stop offset="100%" stopColor="#ffffff" />
                <animate attributeName="x1" values="0%;-100%" dur="3s" repeatCount="indefinite" />
                <animate attributeName="x2" values="200%;100%" dur="3s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
            <path d="M420.718 297.094C618.2 269.691 770.895 194.172 761.771 128.417C752.646 62.6626 585.158 31.5724 387.676 58.9754C190.193 86.3784 37.4986 161.898 46.6228 227.652C55.747 293.407 223.235 324.497 420.718 297.094Z" stroke="url(#flowing-gradient)" strokeWidth="20" strokeMiterlimit="10" />
            <style>
              {`
                .dot-pulse {
                  transform-origin: center;
                  transform-box: fill-box;
                  animation: dotPulse 1.5s infinite ease-in-out alternate;
                }
                .dot-pulse:nth-of-type(even) {
                  animation-delay: 0.75s;
                }
                @keyframes dotPulse {
                  0% { transform: scale(1); }
                  100% { transform: scale(0.5); }
                }
              `}
            </style>
            <path className="dot-pulse" d="M6.29999 246.1C9.77938 246.1 12.6 243.279 12.6 239.8C12.6 236.321 9.77938 233.5 6.29999 233.5C2.82059 233.5 0 236.321 0 239.8C0 243.279 2.82059 246.1 6.29999 246.1Z" fill="white" />
            <path className="dot-pulse" d="M38.5 282.1C40.7643 282.1 42.5999 280.264 42.5999 278C42.5999 275.736 40.7643 273.9 38.5 273.9C36.2356 273.9 34.4 275.736 34.4 278C34.4 280.264 36.2356 282.1 38.5 282.1Z" fill="white" />
            <path className="dot-pulse" d="M246.1 36.7C248.364 36.7 250.2 34.8644 250.2 32.6C250.2 30.3356 248.364 28.5 246.1 28.5C243.836 28.5 242 30.3356 242 32.6C242 34.8644 243.836 36.7 246.1 36.7Z" fill="white" />
            <path className="dot-pulse" d="M563.1 13.2C566.745 13.2 569.7 10.2451 569.7 6.60001C569.7 2.95493 566.745 0 563.1 0C559.455 0 556.5 2.95493 556.5 6.60001C556.5 10.2451 559.455 13.2 563.1 13.2Z" fill="white" />
            <path className="dot-pulse" d="M771.8 184.3C774.064 184.3 775.9 182.464 775.9 180.2C775.9 177.936 774.064 176.1 771.8 176.1C769.536 176.1 767.7 177.936 767.7 180.2C767.7 182.464 769.536 184.3 771.8 184.3Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default GradientPromo;
