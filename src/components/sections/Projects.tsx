import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

const blobTints = [
  "bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_65%)]",
  "bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_65%)]",
  "bg-[radial-gradient(circle,rgba(217,70,239,0.14),transparent_65%)]",
];

/*
 * Each project is an alternating asymmetric composition: the glass card
 * carries the what (title, story, outcome/tech chips), the open column
 * carries the how (technical highlights) — skimmers and close readers
 * get served by the same section. A morphing blob drifts behind each.
 */
export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          number="04"
          eyebrow="projects"
          title="Things I've"
          accent="built"
        />

        <div className="space-y-24">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <article
                className={cn(
                  "relative items-center gap-10 md:flex md:gap-14",
                  project.align === "right" && "md:flex-row-reverse"
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "animate-blob pointer-events-none absolute -top-16 -z-10 h-72 w-72 blur-3xl",
                    project.align === "right" ? "right-0" : "left-0",
                    blobTints[i % blobTints.length]
                  )}
                />

                <div className="glass group rounded-2xl rounded-bl-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(139,92,246,0.16)] md:w-[55%]">
                  <p className="font-mono text-xs tracking-[0.14em] text-cyan-soft">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium text-fg">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                    {project.blurb}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.outcomes.map((o) => (
                      <Chip key={o} variant="outcome">
                        {o}
                      </Chip>
                    ))}
                    {project.stack.map((t) => (
                      <Chip key={t} variant="tech">
                        {t}
                      </Chip>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] text-fg-muted transition-colors duration-300 hover:text-fg"
                  >
                    view code
                    <ArrowUpRight
                      size={14}
                      className="text-fuchsia transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>

                <div className="mt-8 md:mt-0 md:w-[45%]">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-fg-faint">
                    // under the hood
                  </p>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((h) => (
                      <li
                        key={h.slice(0, 32)}
                        className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                      >
                        <span aria-hidden className="mt-1 text-[9px] text-fuchsia/50">
                          ✦
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
