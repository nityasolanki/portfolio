"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scrolling — gives the whole page a weighted, fluid feel
 * instead of the browser's stepped wheel scroll.
 * Skipped entirely for reduced-motion users (native scroll is kept),
 * which also re-enables the CSS scroll-behavior fallback for anchors.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1, // catch-up factor: lower = more "weight"
      anchors: true, // handle #section links through Lenis
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
