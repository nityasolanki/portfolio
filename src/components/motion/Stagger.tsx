"use client";

import { motion, useReducedMotion } from "motion/react";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * "load"  — animate as soon as the page mounts (hero, above the fold)
   * "scroll" — animate when scrolled into view (everything else)
   */
  mode?: "load" | "scroll";
};

/**
 * Orchestrator: every `StaggerItem` descendant fires 80ms after the
 * previous one. The parent owns *when*, the items own *how* — that
 * split is what keeps the choreography consistent site-wide.
 */
export function Stagger({ children, className, mode = "scroll" }: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      {...(mode === "load"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: viewportOnce })}
    >
      {children}
    </motion.div>
  );
}

/**
 * A child of Stagger. Rendered as a <span> so it's valid inside
 * headings and paragraphs; pass `block`/`inline-block`/`flex` via
 * className to control layout.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span className={className} variants={reveal}>
      {children}
    </motion.span>
  );
}
