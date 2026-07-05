import { Award, GraduationCap } from "lucide-react";
import { achievements, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";

const icons = [Award, GraduationCap];

/*
 * Certifications and achievements merged into one strip: achievements
 * get the weight (glass cards, aurora title), certs read as a compact
 * pill texture — six entry-level certs shouldn't outrank one
 * international olympiad rank.
 */
export function Credentials() {
  return (
    <section id="credentials" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          number="06"
          eyebrow="credentials"
          title="Honors &"
          accent="learning"
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          <Stagger className="space-y-5">
            {achievements.map((a, i) => {
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem
                  key={a.title}
                  className="glass block rounded-2xl rounded-tl-sm p-6"
                >
                  <Icon size={20} strokeWidth={1.5} className="text-fuchsia-soft" />
                  <p className="text-aurora mt-4 font-display text-xl font-medium">
                    {a.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {a.detail}
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
