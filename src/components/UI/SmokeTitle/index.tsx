"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmokeTitleProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  className?: string;
}

const SmokeTitle: React.FC<SmokeTitleProps> = ({ text, tag = "h2", className = "" }) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const letters = containerRef.current.querySelectorAll(".smoke-letter");
    if (letters.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          filter: "blur(12px)",
          scale: 1.4,
          y: 20,
          skewX: 10,
          transformOrigin: "50% 50%",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          y: 0,
          skewX: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Animation triggers when title top reaches 85% of viewport height
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const Component = tag as any;
  const lines = text.split("\n");

  return (
    <Component ref={containerRef} className={className}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split(" ").map((word, wordIdx) => {
            const isHighlighted = word.startsWith("[") && word.endsWith("]");
            const cleanWord = isHighlighted ? word.slice(1, -1) : word;

            const wordsInLine = line.split(" ");

            return (
              <span
                key={wordIdx}
                className={`inline-block whitespace-nowrap ${isHighlighted ? "text-[#E1B77E]" : ""}`}
              >
                {cleanWord.split("").map((char, charIdx) => (
                  <span key={charIdx} className="smoke-letter inline-block origin-center">
                    {char}
                  </span>
                ))}
                {/* Add a space after the word, unless it's the last word of the line */}
                {wordIdx < wordsInLine.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
};

export default SmokeTitle;
