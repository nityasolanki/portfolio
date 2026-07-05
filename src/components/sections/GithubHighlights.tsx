import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { githubHighlights, socials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { GradientButton } from "@/components/ui/GradientButton";

const languageTints: Record<string, string> = {
  Python: "bg-cyan",
  "Jupyter Notebook": "bg-violet",
};

/*
 * The second shelf: breadth repos as compact, terminal-flavored cards —
 * deliberately smaller than the featured projects (size = hierarchy).
 * The section's real goal is the profile click-through at the bottom.
 */
export function GithubHighlights() {
  return (
    <section id="github" className="relative py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          number="05"
          eyebrow="github"
          title="More on"
          accent="GitHub"
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {githubHighlights.map((repo, i) => (
            <StaggerItem key={i} className="block">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex h-full flex-col rounded-xl rounded-tr-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <FolderGit2 size={18} strokeWidth={1.5} className="text-fg-faint" />
                  <ArrowUpRight
                    size={15}
                    className="text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-soft"
                  />
                </div>
                <p className="mt-4 font-mono text-sm text-fg">{repo.name}</p>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-fg-muted">
                  {repo.description}
                </p>
                <p className="mt-5 flex items-center gap-2 font-mono text-[11px] text-fg-faint">
                  <span
                    aria-hidden
                    className={`h-2 w-2 rounded-full ${languageTints[repo.language] ?? "bg-fg-faint"}`}
                  />
                  {repo.language}
                </p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <GradientButton href={socials.github} variant="ghost">
            view full profile
            <ArrowUpRight size={15} className="text-fuchsia" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
