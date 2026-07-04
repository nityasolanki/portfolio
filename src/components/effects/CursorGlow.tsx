"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * A soft iridescent light that trails the cursor and swells over
 * interactive elements. Desktop-only progressive enhancement:
 * - touch devices (no fine pointer) never mount it
 * - reduced-motion users never mount it
 * Spring physics (not direct tracking) is what makes it feel fluid —
 * the light has weight and catches up to you.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.5 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      // Swell when hovering anything interactive
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(217,70,239,0.14), rgba(139,92,246,0.08) 45%, transparent 70%)",
      }}
      animate={{
        width: active ? 220 : 140,
        height: active ? 220 : 140,
        opacity: active ? 1 : 0.75,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  );
}
