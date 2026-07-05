import { person, socials } from "@/data/portfolio";
import { AuroraBlobs } from "@/components/effects/AuroraBlobs";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { GradientButton } from "@/components/ui/GradientButton";
import { SocialLinks } from "@/components/ui/SocialLinks";

/**
 * The closer: one centered stage, one CTA. No contact form by design —
 * recruiters click mailto or copy the address, so both are offered.
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-36">
      <AuroraBlobs />

      <div className="relative mx-auto w-full max-w-3xl px-6 text-center">
        <span
          aria-hidden
          className="text-ghost pointer-events-none absolute -top-10 right-6 select-none font-display text-[6rem] leading-none sm:text-[7.5rem]"
        >
          06
        </span>

        <Stagger>
          <StaggerItem className="block font-mono text-xs tracking-[0.2em] text-fg-faint">
            /contact
          </StaggerItem>

          <StaggerItem className="mt-5 block font-display text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s build something{" "}
            <em className="text-aurora font-serif italic">together</em>
          </StaggerItem>

          <StaggerItem className="mx-auto mt-7 block max-w-xl leading-relaxed text-fg-muted">
            Open to AI engineering and forward-deployed roles — or just a good
            conversation about agents, retrieval and voice AI.
          </StaggerItem>

          <StaggerItem className="mt-11 flex flex-col items-center gap-6">
            <GradientButton href={socials.email}>say hello</GradientButton>
            <a
              href={socials.email}
              className="font-mono text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {person.email}
            </a>
            <SocialLinks />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
