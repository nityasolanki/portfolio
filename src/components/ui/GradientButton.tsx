import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * Pill CTA in two voices:
 *  - primary: iridescent gradient fill + glow on hover (one per view, max)
 *  - ghost: hairline border, quiet
 * Both are magnetic on desktop via the Magnetic primitive.
 */
export function GradientButton({
  href,
  children,
  variant = "primary",
  className,
}: GradientButtonProps) {
  return (
    <Magnetic>
      <a
        href={href}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300",
          variant === "primary"
            ? "bg-gradient-to-r from-violet to-fuchsia text-white hover:shadow-[0_0_28px_rgba(217,70,239,0.35)]"
            : "border border-white/15 text-fg hover:border-white/35 hover:bg-white/5",
          className
        )}
      >
        {children}
      </a>
    </Magnetic>
  );
}
