import { GraduationCap, School } from "lucide-react";
import { education, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";

const icons = [GraduationCap, School];

/*
 * Education and certifications in one strip: degree and school get
 * glass cards with aurora titles, certs read as a compact pill
 * texture beside them — coursework shouldn't outweigh education.
 */
export function Credentials() {
  return (
    <section id="credentials" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          number="05"
          eyebrow="education"
          title="Where I"
          accent="learned"
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          <Stagger className="space-y-5">
            {education.map((entry, i) => {
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem
                  key={i}
                  className="glass block rounded-2xl rounded-tl-sm p-6"
                >
                  <Icon size={20} strokeWidth={1.5} className="text-fuchsia-soft" />
                  <p className="text-aurora mt-4 font-display text-xl font-medium">
                    {entry.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {entry.detail}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.15}>
            <p className="font-mono text-[11px] tracking-[0.2em] text-fg-faint">
              // certifications
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {certifications.map((cert) => (
                <Chip key={cert} className="px-4 py-2">
                  {cert}
                </Chip>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
