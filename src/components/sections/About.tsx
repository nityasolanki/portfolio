import { about } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Two reading speeds: narrative paragraphs for readers, a glass
 * quick-facts card for skimmers. Asymmetric 1.4:1 grid keeps the
 * organic, editorial rhythm established in the hero.
 */
export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading number="01" eyebrow="about" title="A little about" accent="me" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Stagger className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <StaggerItem
                key={i}
                className="block leading-relaxed text-fg-muted"
              >
                {p}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <dl className="glass rounded-2xl rounded-bl-sm p-7">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={
                    i < about.facts.length - 1
                      ? "border-b border-white/[0.06] pb-4 mb-4"
                      : ""
                  }
                >
                  <dt className="font-mono text-[11px] tracking-[0.16em] text-fg-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
