"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GradientPromo = () => {
  const sectionRef = useRef<any>(null);
  const epiluRef = useRef<any>(null);
  const nerveRef = useRef<any>(null);
  const headLineRef = useRef<any>(null);
  const textItemRef = useRef<any>(null);
  const bgFrame1Ref = useRef<any>(null);
  const bgFrame3Ref = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(epiluRef.current, { y: 100, opacity: 0 });
      gsap.set(nerveRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(headLineRef.current, { y: 50, opacity: 0 });
      gsap.set(textItemRef.current, { y: 50, opacity: 0, filter: "blur(10px)" });
      gsap.set([bgFrame1Ref.current, bgFrame3Ref.current], { scale: 1.5, opacity: 0 });

      // Non-scrubbed entrance animations
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          toggleActions: "play none none reverse"
        }
      });

      entryTl.to(epiluRef.current, { y: 0, opacity: 1, duration: 1 }, 0)
        .to(nerveRef.current, { scale: 1, opacity: 1, duration: 1 }, 0)
        .to(headLineRef.current, { y: 0, opacity: 1, duration: 1 }, 1)
        .to(textItemRef.current, { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 });

      // Scrubbed timeline for backgrounds
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", // Pin for scrolling duration
          pin: true,
          scrub: 1, // Smooth scrubbing
        }
      });

      // Wait a moment before backgrounds come in while scrolling
      scrubTl.to({}, { duration: 0.2 })
             .to(bgFrame1Ref.current, { scale: 1, opacity: 1, duration: 1 })
             .to(bgFrame3Ref.current, { scale: 1, opacity: 1, duration: 1 });

      // Continuous independent rotation for nerve.png
      gsap.to(nerveRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "linear",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative md:h-screen w-full overflow-hidden bg-[linear-gradient(to_right,var(--color-secondary)_0%,var(--color-primary)_60%)]">
      {/* Background Frames */}
      <div ref={bgFrame1Ref} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image src="/groups/bg_frame_01.png" alt="Background Frame 1" fill className="object-cover" />
      </div>
      <div ref={bgFrame3Ref} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image src="/groups/bg_frame_03.png" alt="Background Frame 3" fill className="object-cover" />
      </div>

      <div className="absolute bottom-[-90px] left-0 w-full">
        <div className="container">
          <div className="relative z-10 m-auto mt-auto flex lg:max-w-[75%] xl:max-w-[50%] 2xl:max-w-[53%] w-full">
            <Image ref={epiluRef} src="/groups/epilu.png" alt="Epilu" width={800} height={400} className="w-full h-auto object-contain z-2" />
            <div ref={nerveRef} className="absolute right-0 lg:max-w-[15%] xl:max-w-[13%] lg:top-[23%] xl:top-[26%]">
              <Image src="/groups/nerve.png" alt="Nerve" width={800} height={400} className="w-full h-auto object-contain" />
            </div>
            <div ref={headLineRef} className="head-line absolute inset-0 w-[90%] top-[-17%] pointer-events-none z-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779 347" fill="none" className="w-full h-auto object-contain">
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
                <path d="M6.29999 246.1C9.77938 246.1 12.6 243.279 12.6 239.8C12.6 236.321 9.77938 233.5 6.29999 233.5C2.82059 233.5 0 236.321 0 239.8C0 243.279 2.82059 246.1 6.29999 246.1Z" fill="white" />
                <path d="M38.5 282.1C40.7643 282.1 42.5999 280.264 42.5999 278C42.5999 275.736 40.7643 273.9 38.5 273.9C36.2356 273.9 34.4 275.736 34.4 278C34.4 280.264 36.2356 282.1 38.5 282.1Z" fill="white" />
                <path d="M246.1 36.7C248.364 36.7 250.2 34.8644 250.2 32.6C250.2 30.3356 248.364 28.5 246.1 28.5C243.836 28.5 242 30.3356 242 32.6C242 34.8644 243.836 36.7 246.1 36.7Z" fill="white" />
                <path d="M563.1 13.2C566.745 13.2 569.7 10.2451 569.7 6.60001C569.7 2.95493 566.745 0 563.1 0C559.455 0 556.5 2.95493 556.5 6.60001C556.5 10.2451 559.455 13.2 563.1 13.2Z" fill="white" />
                <path d="M771.8 184.3C774.064 184.3 775.9 182.464 775.9 180.2C775.9 177.936 774.064 176.1 771.8 176.1C769.536 176.1 767.7 177.936 767.7 180.2C767.7 182.464 769.536 184.3 771.8 184.3Z" fill="white" />
              </svg>
            </div>
            <div ref={textItemRef} className="text-item absolute w-[65%] left-[50%] translate-x-[-50%] top-[-46%] z-0">
              <p className="text-center text-[30px] font-light mb-3">Meet</p>
              <Image src="/groups/epilu-text.svg" alt="Epilu" width={800} height={400} className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientPromo;
