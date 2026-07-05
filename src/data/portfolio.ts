/**
 * Single source of truth for all site content.
 * Updating the portfolio = editing this file; components never hold copy.
 * Note: visible headings use the first name only — the full name appears
 * exclusively in SEO metadata (layout.tsx) and the footer small print.
 */

export const person = {
  firstName: "Nitya",
  fullName: "Nitya Solanki", // metadata + footer only, never headings
  role: "AI Engineer",
  location: "Indore, India",
  email: "nityaasolanki@gmail.com",
  tagline:
    "Working across LLM applications, agentic workflows, RAG pipelines and real-time voice AI — shipping production systems end to end.",
  availability: "Open to AI & forward-deployed roles",
} as const;

export const socials = {
  github: "https://github.com/nityasolanki",
  linkedin: "https://www.linkedin.com/in/nitya-solanki/",
  email: `mailto:nityaasolanki@gmail.com`,
} as const;

/**
 * The hero headline, as styled segments so the component can split it
 * into individually animated words while keeping copy out of JSX.
 * "sans" = Syne, "serif" = Instrument italic, "serif-aurora" = + gradient.
 */
export type HeadlineSegment = {
  text: string;
  style: "sans" | "serif" | "serif-aurora";
};

export const heroHeadline: HeadlineSegment[] = [
  { text: "I build AI systems that", style: "sans" },
  { text: "think, speak", style: "serif-aurora" },
  { text: "&", style: "sans" },
  { text: "retrieve", style: "serif" },
];

export const marqueeItems = [
  "LLMs",
  "Agentic AI",
  "RAG systems",
  "Voice AI",
  "Machine learning",
  "Prompt engineering",
  "Vector search",
] as const;

export const about = {
  paragraphs: [
    "I'm a computer science graduate who fell for the part of AI where models stop being demos and start doing real work — agents that answer live phone calls, retrieval pipelines that cite their sources, tools that chain themselves together.",
    "Most recently I built production AI at Linkites Infotech — LLM applications end to end: FastAPI backends, Qdrant vector stores, LangGraph orchestration, Dockerized deployments.",
    "Before engineering, a founder's-office stint taught me to break ambiguous problems into plans and to work directly with the people who own them — habits that matter as much in the field as in the codebase.",
  ],
  facts: [
    { label: "Degree", value: "B.Tech Computer Science" },
    { label: "Recently", value: "AI/ML @ Linkites" },
    { label: "Focus", value: "Agents · RAG · Voice AI" },
  ],
} as const;

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "LLMs & agents",
    blurb: "Orchestrating models into systems that act",
    skills: [
      "LangChain",
      "LangGraph",
      "Tool calling",
      "Prompt engineering",
      "Groq API",
      "LLaMA 3.x / 4-Scout",
    ],
  },
  {
    title: "RAG & retrieval",
    blurb: "Answers with citations, not hallucinations",
    skills: [
      "Qdrant",
      "Hybrid search (BM25 + dense)",
      "Cross-encoder reranking",
      "Query expansion",
      "Semantic chunking",
      "Sentence-Transformers",
    ],
  },
  {
    title: "Voice & real-time",
    blurb: "Sub-second conversations over live phone lines",
    skills: [
      "Deepgram Nova-3 / Aura-2",
      "Twilio Media Streams",
      "WebSockets",
      "Barge-in handling",
    ],
  },
  {
    title: "ML & data",
    blurb: "The foundations under the applications",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "HuggingFace",
      "Pandas",
      "NumPy",
      "Plotly",
    ],
  },
  {
    title: "Backend & infra",
    blurb: "Shipping it, not just training it",
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQL",
      "Docker",
      "AWS (EC2, S3)",
      "Git",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Linkites Infotech",
    role: "AI/ML",
    period: "2026",
    bullets: [
      "Built production AI apps with LLMs, RAG pipelines and LangGraph agentic workflows.",
      "Built and optimized a PDF-based RAG system (FastAPI, Qdrant, Groq, LangGraph) with semantic chunking and cross-document retrieval.",
      "Designed an AI voice support agent with Deepgram STT/TTS, Twilio and Groq — scalable backend on FastAPI, PostgreSQL and Docker.",
    ],
  },
  {
    company: "OneHash",
    role: "Founder's Office Intern",
    period: "Jan 2025 — May 2025",
    bullets: [
      "Investor research, competitor benchmarking and market analysis supporting fundraising decisions.",
      "Broke ambiguous, high-priority problems into action plans alongside the founders.",
    ],
  },
  {
    company: "Advanced Studies Club",
    role: "Editor",
    period: "Mar 2023 — Dec 2023",
    bullets: [
      "Curated and edited the university's weekly research publication.",
    ],
  },
];

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  blurb: string;
  highlights: string[];
  outcomes: string[]; // violet chips — measurable results
  stack: string[]; // cyan chips — technologies
  github: string;
  align: "left" | "right";
};

export const projects: Project[] = [
  {
    slug: "agentic-voice-support",
    eyebrow: "featured — voice AI",
    title: "Agentic voice customer support",
    blurb:
      "An autonomous agent that answers real phone calls end to end — customer verification, order lookup, refunds, ticketing and email confirmations — plus proactive outbound calls for shipping delays.",
    highlights: [
      "Real-time WebSocket pipeline: Twilio → Deepgram Nova-3/Aura-2 → LangGraph, with barge-in support",
      "17 tools wired to live PostgreSQL and Qdrant RAG",
      "Containerized with Docker Compose",
    ],
    outcomes: ["<1s response latency", "17 tools", "end-to-end calls"],
    stack: ["LangGraph", "Deepgram", "Twilio", "FastAPI", "PostgreSQL", "Qdrant", "Docker"],
    github: "https://github.com/nityasolanki/agentic-voice-support",
    align: "left",
  },
  {
    slug: "pdf-rag-agent",
    eyebrow: "featured — retrieval",
    title: "PDF RAG agent",
    blurb:
      "A production-grade multi-PDF question-answering system that expands each query into variants, searches them in parallel, reranks with a cross-encoder and answers with per-source citations.",
    highlights: [
      "Semantic chunking at topic boundaries with Qdrant vector storage",
      "Cross-encoder reranking: 100 candidates → top 6",
      "Async FastAPI backend with background indexing and 10-turn memory",
    ],
    outcomes: ["100 → 6 reranked", "cited answers", "10-turn memory"],
    stack: ["FastAPI", "Qdrant", "Groq LLaMA 3.3 70B", "Sentence-Transformers", "PyPDF"],
    github: "https://github.com/nityasolanki/pdf-rag-agent",
    align: "right",
  },
  {
    slug: "ai-data-analyst",
    eyebrow: "featured — agents",
    title: "AI data analyst agent",
    blurb:
      "A tool-calling agent that lets you interrogate datasets in plain English — it picks its own tools, chains them, detects anomalies and renders interactive charts with LLM-guided interpretation.",
    highlights: [
      "Multi-tool architecture with autonomous tool selection and chaining",
      "Scikit-learn anomaly detection with conversational explanations",
      "Interactive Plotly visualizations inside a Streamlit UI",
    ],
    outcomes: ["autonomous tool chaining", "anomaly detection"],
    stack: ["LangChain", "LLaMA", "Scikit-learn", "Plotly", "Streamlit", "Pandas"],
    github: "https://github.com/nityasolanki",
    align: "left",
  },
];

export type Repo = {
  name: string;
  description: string;
  language: string;
  url: string;
};

export const githubHighlights: Repo[] = [
  {
    name: "rag-enterprise-search",
    description:
      "Hybrid BM25 + vector search over PDFs with exact page attribution and one-click summarization.",
    language: "Python",
    url: "https://github.com/nityasolanki/rag-enterprise-search",
  },
  {
    name: "stock-sentiment-analysis",
    description:
      "Stock movement prediction from social-media sentiment signals.",
    language: "Jupyter Notebook",
    url: "https://github.com/nityasolanki/stock-sentiment-analysis",
  },
  {
    name: "reddit-threat-monitor",
    description:
      "Real-time monitoring of cyber-threat keywords across Reddit with a Streamlit dashboard.",
    language: "Python",
    url: "https://github.com/nityasolanki/reddit-threat-monitor",
  },
];

export const certifications = [
  "Complete ML & Data Science Bootcamp — Udemy",
  "AWS Academy Machine Learning Foundations",
  "AWS Academy ML for Natural Language Processing",
  "AWS Academy Cloud Foundations",
  "AWS Academy Cloud Architecting",
  "Foundations: Data, Data, Everywhere — Google",
] as const;

export const achievements = [
  {
    title: "International Rank 17",
    detail: "National Cyber Olympiad (NCO), Level 2",
  },
  {
    title: "B.Tech Computer Science",
    detail: "Medi-Caps University (2021–2025)",
  },
] as const;
