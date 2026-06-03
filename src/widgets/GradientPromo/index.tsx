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
  const meetTextRef = useRef<HTMLHeadingElement>(null);
  const svgTextContainerRef = useRef<HTMLDivElement>(null);

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

      gsap.set([meetTextRef.current, svgTextContainerRef.current], {
        opacity: 0,
        y: -30,
        filter: "blur(12px)",
      });

      // Non-scrubbed entry timeline for Epilu and Nurve
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          toggleActions: "play none none reverse",
          onEnter: () => { },
          onLeaveBack: () => { }
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
        }, "<")
        .to([meetTextRef.current, svgTextContainerRef.current], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
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
      {/* Top Center Epilu Text */}
      <div className="absolute top-[30px] md:top-[10%] left-0 w-full flex flex-col items-center justify-center z-0 pointer-events-none gap-4">
        <h2 ref={meetTextRef} className="text-3xl md:text-5xl font-light text-white tracking-wide">Meet.</h2>
        <div ref={svgTextContainerRef} className="w-[80%] sm:w-[50%] md:w-[19%] lg:w-[22%] xxl:w-[25%] flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" version="1.1" viewBox="0 0 1098.9 476.6" className="w-full h-auto object-contain">
            <defs>
              <style>
                {`
                  .epilu-st0, .epilu-st1, .epilu-st2 {
                    fill: none;
                    stroke: #fff;
                    stroke-miterlimit: 10;
                  }

                  .epilu-st0, .epilu-st2 {
                    stroke-width: 81px;
                  }

                  .epilu-st1 {
                    stroke-width: 75px;
                  }

                  .epilu-st3 {
                    fill: #fff;
                  }

                  .epilu-st2 {
                    stroke-linecap: round;
                  }
                `}
              </style>
            </defs>
            <g id="qWvQj4.tif">
              <image id="Layer_11" data-name="Layer_1" width="776" height="303" transform="translate(1395.4 445.5)" xlinkHref="Epilu text-1.png" />
            </g>
            <polyline className="epilu-st1" points="232.1 54.6 43.9 54.6 43.9 330.8 234.1 330.8" />
            <line className="epilu-st1" x1="233.1" y1="194.3" x2="61.1" y2="194.3" />
            <line className="epilu-st1" x1="319.6" y1="89.5" x2="319.6" y2="469.5" />
            <line className="epilu-st1" x1="589.4" y1="99.9" x2="589.4" y2="372.8" />
            <line className="epilu-st2" x1="587.9" y1="44.6" x2="588.7" y2="44" />
            <line className="epilu-st1" x1="704" y1="18.6" x2="704" y2="372.8" />
            <line className="epilu-st2" x1="816.6" y1="139" x2="817.4" y2="138.4" />
            <path className="epilu-st0" d="M815.9,199.9v22.8c0,59.6,51.8,107.9,115.8,107.9h0c63.9,0,115.8-48.3,115.8-107.9v-26" />
            <line className="epilu-st2" x1="1047.8" y1="138.6" x2="1047.4" y2="138.8" />
            <path className="epilu-st3" d="M340.9,176.9c2.1-24.2,13.1-47.5,32-64.1,16.3-14.4,39.5-21.2,61.2-19.1,41.8,3.7,70,29.2,84.7,67.4,13.5,36.3,14.2,74.5,8.4,112.1-2.4,14-5.4,27.4-11.8,40.4-10.5,21.5-29.1,39.2-51.4,48.2-21,8.5-44.8,7.6-65.5.4-25.8-8.6-48.2-27.5-55.4-54.3-2.5-8.9-3.1-17.5-3-26.5,0-2.6.3-5.9,0-8.4,4.1,4,6.9,9.1,10.4,13.4,8.3,11.4,20.3,21.9,32.8,25.6,13.6,4.3,33.3,4.7,46.4-1,8.3-3.7,13.9-10.1,18.1-17.8,3.6-7,4.6-15.1,5.5-23.1,1.3-11.5,2-23.3,2.2-34.9.2-23.3-.8-54.4-13.3-74.3-1.8-2.7-3.9-5.1-6.4-7.2-6.9-4.8-14.4-8.7-22-10.4-27.1-6-53.9,15.6-73,33.6h0Z" />
          </svg>
        </div>
      </div>

      {/* Background Frames */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img src="/groups/bg_frame_01.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div ref={frame3Ref} style={{ opacity: 0 }} className="absolute inset-0 w-full h-full pointer-events-none will-change-transform">
        <img src="/groups/bg_frame_03.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div ref={frame4Ref} style={{ opacity: 0 }} className="absolute inset-0 w-full h-full pointer-events-none will-change-transform">
        <img src="/groups/bg_frame_04.png" alt="" className="w-full h-full object-cover" />
      </div>



      <div ref={epiluRef} style={{ opacity: 0 }} className="absolute bottom-[-130px] lg:bottom-[-90px] xxl:bottom-[-130px] left-0 w-full flex justify-center items-end z-10 pointer-events-none will-change-transform">
        <img
          src="/groups/epilu.png"
          alt="Epilu"
          className="w-[70%] md:w-[40%] xxl:w-[48%] object-contain relative z-10"
        />
        <img
          ref={nurveRef}
          src="/groups/nerve.png"
          alt="Nurve"
          className="absolute w-[40%] md:w-[7%] xxl:w-[8%] object-contain z-10 top-[23%] right-[29%] xxl:top-[23%] xxl:right-[30%] will-change-transform"
          style={{ opacity: 0 }}
        />
        {/* <img
          src="/groups/headline.svg"
          alt="Nurve"
          className="absolute w-[80%] md:w-[40%] object-contain z-0 top-[-120px] left-[50%] translate-x-[-50%]"
        /> */}
        <div ref={headlineRef} style={{ opacity: 0 }} className="absolute w-[80%] md:w-[33%] lg:w-[36%] xxl:w-[40%] object-contain z-0 lg:top-[-90px] xxl:top-[-140px] left-[47%] translate-x-[-50%] will-change-transform">
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
