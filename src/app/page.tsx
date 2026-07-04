import { AuroraBlobs } from "@/components/effects/AuroraBlobs";
import { person } from "@/data/portfolio";

/**
 * Temporary token-test page — replaced section by section in Phase 7.
 * Verifies: fonts, aurora tokens, glass recipe, ghost numerals, grain.
 */
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <AuroraBlobs />

      <span className="font-mono text-xs tracking-[0.14em] text-fg-muted">
        hi, i&apos;m {person.firstName} — design system check
      </span>

      <h1 className="max-w-2xl text-center font-display text-5xl font-medium leading-[1.12] tracking-tight">
        I build AI systems that{" "}
        <em className="text-aurora font-serif italic">think, speak</em>{" "}
        &amp; <em className="font-serif italic">retrieve</em>
      </h1>

      <div className="glass rounded-2xl rounded-bl-sm px-6 py-4">
        <p className="text-sm text-fg-muted">
          Glass surface · squared corner signature · grain overlay active
        </p>
      </div>

      <span className="text-ghost pointer-events-none absolute bottom-10 right-10 font-display text-9xl font-medium">
        00
      </span>
    </main>
  );
}
