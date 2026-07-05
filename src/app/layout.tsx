import type { Metadata } from "next";
import { Syne, Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { person, socials } from "@/data/portfolio";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { SmoothScroll } from "@/components/effects/SmoothScroll";

/*
 * All four faces load through next/font: self-hosted at build time,
 * zero external requests, zero layout shift (size-adjusted fallbacks).
 * Each exposes a CSS variable consumed by the @theme tokens.
 */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

/*
 * The full name lives here (and only here + footer) so recruiters
 * searching it find the site; visible headings use the first name only.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://nityasolanki.vercel.app"),
  title: `${person.fullName} | ${person.role}`,
  description:
    "AI engineer building LLM applications, agentic workflows, RAG pipelines and real-time voice AI. LangGraph, FastAPI, Qdrant, Deepgram.",
  keywords: [
    "AI Engineer",
    "LLM",
    "Agentic AI",
    "RAG",
    "Machine Learning",
    "LangGraph",
    "Voice AI",
    person.fullName,
  ],
  openGraph: {
    title: `${person.fullName} | ${person.role}`,
    description:
      "AI engineer building agentic systems, RAG pipelines and real-time voice AI.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.fullName} | ${person.role}`,
    description:
      "AI engineer building agentic systems, RAG pipelines and real-time voice AI.",
  },
};

/** JSON-LD Person schema — lets search engines connect the site,
 *  the GitHub and the LinkedIn into one entity. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.fullName,
  jobTitle: person.role,
  email: person.email,
  sameAs: [socials.github, socials.linkedin],
  knowsAbout: [
    "Large Language Models",
    "Agentic AI",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "Voice AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrument.variable} ${manrope.variable} ${jetbrains.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <CursorGlow />
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
