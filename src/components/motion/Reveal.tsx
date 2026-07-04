"use client";

import { motion, useReducedMotion } from "motion/react";
import { reveal, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait after entering the viewport. */
  delay?: number;
};

/**
 * The site's standard scroll reveal: fade + rise + de-blur, fired once
 * when a quarter of the element scrolls into view.
 * Reduced-motion users get the content immediately, statically.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={reveal}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
