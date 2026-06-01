import { useLenis } from "lenis/react";
import { useCallback } from "react";

export const useToggleLenis = () => {
  const lenis = useLenis();

  const lenisStart = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  const lenisStop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  return {
    lenisStart,
    lenisStop,
    lenis,
  };
};
