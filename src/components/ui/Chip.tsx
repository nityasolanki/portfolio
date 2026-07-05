import { cn } from "@/lib/utils";

type ChipProps = {
  children: React.ReactNode;
  /**
   * neutral — skills, quiet lists
   * outcome — violet, measurable results ("<1s latency")
   * tech    — cyan, technologies ("LangGraph")
   * The violet/cyan split is a site-wide semantic: outcomes vs tools.
   */
  variant?: "neutral" | "outcome" | "tech";
  className?: string;
};

const variants = {
  neutral: "border-white/10 bg-white/[0.03] text-fg-muted",
  outcome: "border-violet-soft/30 bg-violet/15 text-violet-pale",
  tech: "border-cyan/25 bg-cyan/10 text-cyan-soft",
} as const;

export function Chip({ children, variant = "neutral", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs leading-relaxed",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
