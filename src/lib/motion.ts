import type { Variants } from "motion/react";

/**
 * The single easing curve used across the whole site.
 * Fast start, long soft landing — physical, never bouncy.
 */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Standard scroll reveal: fade + rise + de-blur ("focuses in"). */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Parent orchestrator: children with `reveal` variants fire 80ms apart. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Viewport config shared by every scroll-triggered animation:
 *  fire once, when a quarter of the element is visible. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
