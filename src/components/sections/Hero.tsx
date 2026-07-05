import { ArrowDown } from "lucide-react";
import { person, heroHeadline, marqueeItems } from "@/data/portfolio";
import { AuroraBlobs } from "@/components/effects/AuroraBlobs";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Marquee } from "@/components/motion/Marquee";
import { GradientButton } from "@/components/ui/GradientButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils";

const wordStyles = {
  sans: "font-display",
  serif: "font-serif italic",
  "serif-aurora": "font-serif italic text-aurora",
} as const;

/**
 * Server component: all copy renders as static HTML for crawlers.
 * The choreography — pill, eyebrow, each headline word, tagline, CTAs,
 * 80ms apart — is one Stagger sequence firing on page load.
 */
export function Hero() {
  // Flatten styled segments into individually animatable words.
  const words = heroHeadline.flatMap((seg) =>
    seg.text.split(" ").map((word) => ({ word, style: seg.style }))
  );

  return (
    <section id="home" className="relative flex min-h-screen flex-col">
      <AuroraBlobs />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pt-28 pb-20">
        <Stagger mode="load">
          <StaggerItem className="block font-mono text-xs tracking-[0.14em] text-fg-muted">
            hi, i&apos;m {person.firstName} — {person.role.toLowerCase()}
          </StaggerItem>

          <h1 className="mt-5 max-w-3xl text-[2.6rem] font-medium leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            {words.map(({ word, style }, i) => (
              <StaggerItem
                key={`${word}-${i}`}
                className={cn("mr-[0.24em] inline-block", wordStyles[style])}
              >
                {word}
              </StaggerItem>
            ))}
          </h1>

          <StaggerItem className="mt-7 block max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {person.tagline}
          </StaggerItem>

          <StaggerItem className="mt-11 flex flex-wrap items-center gap-5">
            <GradientButton href="#projects">View projects</GradientButton>
            <GradientButton href="#contact" variant="ghost">
              Get in touch
            </GradientButton>
            <SocialLinks className="ml-2" />
          </StaggerItem>
        </Stagger>
      </div>

      <div className="pointer-events-none mb-8 flex justify-center">
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-fg-faint">
          scroll
          <ArrowDown size={13} className="animate-bounce" />
        </span>
      </div>

      <Marquee items={marqueeItems} />
    </section>
  );
}
