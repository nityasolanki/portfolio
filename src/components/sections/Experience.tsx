import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/*
 * Vertical timeline: an iridescent thread (fading at both ends) with a
 * glowing node per stop. Entries take the room they deserve — Linkites
 * carries detail, the others stay light. No cards here on purpose:
 * after the Skills bento, the eye needs a quieter texture.
 */
export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          number="03"
          eyebrow="experience"
          title="Where I've"
          accent="worked"
        />

        <div className="relative ml-1">
          <div
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-px bg-[linear-gradient(to_bottom,transparent,#8b5cf6,#d946ef,#22d3ee,transparent)] opacity-40"
          />

          <Stagger className="space-y-14">
            {experience.map((job) => (
              <StaggerItem key={job.company} className="relative block pl-10">
                <span
                  aria-hidden
                  className="absolute -left-[4.5px] top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet to-fuchsia shadow-[0_0_12px_rgba(217,70,239,0.55)]"
                />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-medium text-fg">
                    {job.company}
                  </h3>
                  <span className="font-serif text-lg italic text-fg-muted">
                    {job.role}
                  </span>
                  <span className="ml-auto font-mono text-xs tracking-[0.12em] text-fg-faint">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 32)}
                      className="flex gap-3 text-[15px] leading-relaxed text-fg-muted"
                    >
                      <span aria-hidden className="mt-1.5 text-[9px] text-fuchsia/50">
                        ✦
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
