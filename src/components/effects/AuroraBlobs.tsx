import { cn } from "@/lib/utils";

/**
 * Ambient morphing gradient blobs — the "ink in water" backdrop.
 * Server component: the motion is pure CSS (see blob-morph keyframes),
 * so this ships zero JavaScript and animates on the GPU compositor.
 */
export function AuroraBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="animate-blob absolute -top-32 right-[10%] h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(217,70,239,0.16),transparent_65%)] blur-3xl" />
      <div className="animate-blob-slow absolute top-[20%] -left-40 h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_65%)] blur-3xl" />
      <div className="animate-blob absolute -right-24 bottom-[-10%] h-[22rem] w-[22rem] bg-[radial-gradient(circle,rgba(34,211,238,0.10),transparent_65%)] blur-3xl [animation-delay:-11s]" />
    </div>
  );
}
