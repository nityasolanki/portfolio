import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export — the site has no server logic, so we ship plain
  // HTML/CSS/JS deployable to any static host (Vercel, Netlify, GitHub Pages).
  output: "export",
  // next/image's optimization server doesn't exist in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
