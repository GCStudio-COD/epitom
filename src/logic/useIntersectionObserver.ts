import { useState, useEffect, RefObject } from "react";

interface IntersectionObserverProps {
  targetRef: RefObject<Element | null>;
  repeat?: boolean;
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  targetRef,
  repeat = false,
  threshold = 0,
  root = null,
  rootMargin = "0px",
}: IntersectionObserverProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    // If repeat is false and it has already intersected, do nothing
    if (!repeat && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (repeat) {
          setIsIntersecting(entry.isIntersecting);
        } else if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Stop observing once intersected if we don't repeat
          observer.unobserve(currentTarget);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [targetRef, repeat, threshold, root, rootMargin, isIntersecting]);

  return { isIntersecting };
};

