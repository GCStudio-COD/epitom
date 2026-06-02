"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LenisScrollProps {
  children: React.ReactNode;
}

// Sub-component to link Lenis scroll updates directly into GSAP ScrollTrigger
const ScrollTriggerSync: React.FC = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Update ScrollTrigger on every Lenis scroll tick
    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScrollTrigger);

    // Refresh ScrollTrigger calculations
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", updateScrollTrigger);
    };
  }, [lenis]);

  return null;
};

const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
  const options = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical" as const,
    gestureDirection: "vertical" as const,
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis
      root
      options={options}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
};

export default LenisScroll;
