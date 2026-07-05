import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

/*
 * Bento mosaic: the two deepest capability areas get wide cards on top,
 * three supporting areas below. Capabilities are the claim (title +
 * serif blurb), tools are the evidence (neutral chips) — deliberately
 * no progress bars or percentages, which carry zero information.
 */
const layout = [
  { span: "md:col-span-3", corner: "rounded-br-sm" },
  { span: "md:col-span-3", corner: "rounded-bl-sm" },
  { span: "md:col-span-2", corner: "rounded-tr-sm" },
  { span: "md:col-span-2", corner: "rounded-bl-sm" },
  { span: "md:col-span-2", corner: "rounded-tl-sm" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          number="02"
          eyebrow="skills"
          title="What I work"
          accent="with"
        />

        <Stagger className="grid gap-5 md:grid-cols-6">
          {skillGroups.map((group, i) => (
            <StaggerItem
              key={group.title}
              className={cn(
                "glass group relative block overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(139,92,246,0.14)]",
                layout[i].span,
                layout[i].corner
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-14 right-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <h3 className="font-display text-lg font-medium text-fg">
                {group.title}
              </h3>
              <p className="mt-1 font-serif text-[15px] italic text-fg-faint">
                {group.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
