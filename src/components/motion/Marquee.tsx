/**
 * Infinite drift strip — a living divider between sections.
 * Server component: motion is the CSS `marquee` keyframe (translateX
 * to -50% over a track holding two copies of the content = seamless loop).
 * The moving copy is aria-hidden; screen readers get a static list.
 */
export function Marquee({ items }: { items: readonly string[] }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center font-display text-sm tracking-wider text-fg-faint"
        >
          <span className="px-6">{item}</span>
          <span className="text-fuchsia/50">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-full select-none overflow-hidden border-y border-white/[0.06] py-3.5">
      <p className="sr-only">{items.join(", ")}</p>
      <div aria-hidden className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
