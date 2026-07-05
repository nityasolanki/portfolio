import { person } from "@/data/portfolio";

/**
 * One quiet line. The full name appears here (and in metadata) only —
 * visible headings use the first name by preference.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="font-mono text-[11px] tracking-[0.12em] text-fg-faint">
          © 2026 {person.fullName}
        </p>
        <p className="text-xs text-fg-faint">
          designed &amp; built by Nitya <span className="text-fuchsia/60">✦</span>
        </p>
        <a
          href="#home"
          className="font-mono text-[11px] tracking-[0.12em] text-fg-muted transition-colors duration-300 hover:text-fg"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
