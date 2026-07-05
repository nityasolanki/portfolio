import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Social share card (LinkedIn, X, WhatsApp, Slack), rendered from JSX
 * at build time via satori — no hand-exported PNG to keep in sync.
 * Fonts are bundled in src/assets/fonts so builds never need network.
 * Satori has no blur filter, so the aurora glows are soft radial
 * gradients instead of blurred blobs.
 */
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nitya — AI engineer building systems that think, speak & retrieve";

const fontsDir = path.join(process.cwd(), "src", "assets", "fonts");

export default async function OpengraphImage() {
  const [syne, instrument, jetbrains] = await Promise.all([
    readFile(path.join(fontsDir, "syne-600.ttf")),
    readFile(path.join(fontsDir, "instrument-serif-italic.ttf")),
    readFile(path.join(fontsDir, "jetbrains-mono-400.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#060509",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(217,70,239,0.22), transparent 45%), radial-gradient(circle at 5% 80%, rgba(139,92,246,0.24), transparent 45%), radial-gradient(circle at 95% 90%, rgba(34,211,238,0.16), transparent 40%)",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 26,
            letterSpacing: "0.14em",
            color: "#9C97A8",
          }}
        >
          hi, i&apos;m Nitya — ai engineer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 36,
            fontFamily: "Syne",
            fontSize: 84,
            lineHeight: 1.12,
            color: "#F4F2F7",
          }}
        >
          <div style={{ display: "flex" }}>I build AI systems that</div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                backgroundImage:
                  "linear-gradient(95deg, #A78BFA, #E879F9, #22D3EE)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              think, speak
            </span>
            <span style={{ margin: "0 22px" }}>&amp;</span>
            <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}>
              retrieve
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            letterSpacing: "0.12em",
            color: "#6E6880",
          }}
        >
          nityasolanki.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Syne", data: syne, style: "normal" as const },
        { name: "Instrument Serif", data: instrument, style: "italic" as const },
        { name: "JetBrains Mono", data: jetbrains, style: "normal" as const },
      ],
    }
  );
}
