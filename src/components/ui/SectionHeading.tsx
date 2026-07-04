import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Ghost numeral rendered behind the heading ("01", "02", ...). */
  number: string;
  /** Mono eyebrow label, rendered as /eyebrow. */
  eyebrow: string;
  /** Main title in Syne. */
  title: string;
  /** Final word(s) in Instrument Serif italic with the aurora gradient. */
  accent?: string;
  className?: string;
};

/**
 * The editorial header every section opens with: oversized outlined
 * numeral behind, mono eyebrow, display title with a serif accent.
 * Consistency here is what makes the page read as one composition.
 */
export function SectionHeading({
  number,
  eyebrow,
  title,
  accent,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("relative mb-14", className)}>
      <span
        aria-hidden
        className="text-ghost pointer-events-none absolute -top-12 right-0 select-none font-display text-[6rem] leading-none sm:text-[7.5rem]"
      >
        {number}
      </span>
      <p className="font-mono text-xs tracking-[0.2em] text-fg-faint">
        /{eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
        {title}
        {accent && (
          <>
            {" "}
            <em className="text-aurora font-serif italic">{accent}</em>
          </>
        )}
      </h2>
    </Reveal>
  );
}
