"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navLinks } from "@/data/portfolio";
import { EASE } from "@/lib/motion";

/**
 * Glass navbar that slides in only after the visitor scrolls past the
 * hero — on load, the hero owns the screen. Lenis still emits native
 * scroll events, so a plain listener works.
 */
export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : -72, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-ink/70 backdrop-blur-xl"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5"
      >
        <a href="#home" className="font-display text-[15px] font-medium text-fg">
          nitya<span className="text-fuchsia">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-fg transition-all duration-300 hover:border-white/35 hover:bg-white/5"
        >
          contact
        </a>
      </nav>
    </motion.header>
  );
}
