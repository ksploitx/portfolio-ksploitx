import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "autolingo",
    slug: "autolingo",
    codename: "AUTOLINGO",
    title: "AutoLingo",
    description:
      "Zero-config localization for Flutter apps. Go from English-only to 20+ languages in under 5 minutes — no ARB files to write, no translation keys to manage. Published on pub.dev.",
    longDescription:
      "AutoLingo is a developer-first CLI tool built in Dart that streamlines the tedious process of managing multilingual support in Flutter applications. Powered by Lingo.dev, it auto-generates ARB files, handles translation key extraction, and provides a seamless workflow for maintaining translations across multiple locales. Published and maintained on pub.dev.",
    tech: ["Dart", "Flutter", "CLI", "pub.dev"],
    githubUrl: "https://github.com/ksploitx/autolingo",
    liveUrl: "https://pub.dev/packages/autolingo",
    coverImage: "/images/cover-autolingo.png",
    featured: true,
    status: "DEPLOYED",
  },
  {
    id: "ace",
    slug: "ace",
    codename: "ACE",
    title: "Autism Care EcoSystem",
    description:
      "Flutter & Supabase mobile app bridging parents and clinicians. AI-driven game-based developmental assessments (M-CHAT, emotion recognition, eye contact), real-time therapy tracking, and progress dashboards for continuous autism care.",
    longDescription:
      "ACE is a comprehensive mobile platform for autism care. It provides AI-powered screening via M-CHAT assessments, emotion recognition games using Google ML Kit and TensorFlow, real-time therapy action tracking, clinical messaging between doctors and parents, and AI-generated session summaries via OpenRouter. Built with Flutter and Supabase with edge functions.",
    tech: ["Flutter", "Dart", "Supabase", "PyTorch", "TensorFlow", "LangChain"],
    githubUrl: "https://github.com/mro-nerd/SolveIt",
    coverImage: "/images/cover-ace.png",
    featured: true,
    status: "DEVELOPED",
  },
  {
    id: "weave",
    slug: "weave",
    codename: "WEAVE",
    title: "Weave",
    description:
      "High-performance, multi-agent LLM orchestration system designed for reliability and observability. Robust framework for managing complex agentic workflows with strict token budget enforcement, detailed tool/agent execution logging, and automated evaluation tracking.",
    longDescription:
      "Weave is a high-performance, multi-agent LLM orchestration system designed for reliability and observability. It provides a robust framework for managing complex agentic workflows with strict token budget enforcement, detailed tool/agent execution logging, and automated evaluation tracking. Built with FastAPI, LangGraph, and Celery for scalable agent orchestration.",
    tech: ["Python", "FastAPI", "LangGraph", "Celery", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/ksploitx/weave",
    coverImage: "/images/cover-weave.png",
    featured: true,
    status: "DEVELOPED",
  },
  {
    id: "data-sanity",
    slug: "data-sanity",
    codename: "DATA_SANITY",
    title: "Data Sanity",
    description:
      "RAG-ready AI dataset pipeline with LLM-powered data cleaning and Exa semantic search integration. Transforms raw data into high-quality, vectorized datasets for ML workflows.",
    longDescription:
      "Data Sanity is an end-to-end data preparation pipeline designed for AI/ML workflows. It leverages LangChain for intelligent data cleaning, FastAPI for the serving layer, pgvector for efficient vector storage, and Exa's semantic search API for contextual data enrichment. The pipeline ensures datasets are RAG-ready with minimal manual intervention.",
    tech: ["Python", "LangChain", "FastAPI", "pgvector", "Exa"],
    githubUrl: "https://github.com/ksploitx/DataSanity",
    coverImage: "/images/cover-datasanity.png",
    featured: true,
    status: "WIP",
  },
  {
    id: "pi-sentinel",
    slug: "pi-sentinel",
    codename: "PI_SENTINEL",
    title: "Pi Sentinel",
    description:
      "Raspberry Pi-based network vulnerability scanner with live CVE matching. Real-time threat detection powered by WebSockets and Aircrack-ng integration.",
    longDescription:
      "Pi Sentinel transforms a Raspberry Pi into a portable network security auditing station. It performs automated vulnerability scanning, cross-references findings with live CVE databases, and streams results in real-time via WebSockets. The Flask-based dashboard provides an intuitive interface for monitoring network health and identifying attack vectors.",
    tech: ["Python", "Flask", "Aircrack-ng", "WebSockets", "Raspberry Pi"],
    githubUrl: "https://github.com/ksploitx/PiSentinel",
    coverImage: "/images/cover-pisentinel.png",
    featured: true,
    status: "DEPLOYED",
  },
  {
    id: "ksploitx-portfolio",
    slug: "ksploitx-portfolio",
    codename: "KSPLOITX://",
    title: "KSPLOITX Portfolio",
    description:
      "Hacker-terminal themed developer portfolio built with Next.js 16, Framer Motion, and TypeScript. Features matrix rain effects, interactive photo clusters, GitHub contribution heatmap, resume preview modal, and a full-screen terminal overlay.",
    longDescription:
      "A high-performance developer portfolio with a dark hacker-terminal aesthetic. Built on Next.js 16 with Turbopack, featuring scroll-driven Framer Motion animations, a dynamic photo cluster with corner-bracket hover effects, GitHub contribution heatmap integration, interactive resume preview with PDF embed, skill matrix with branded SVG icons, and a responsive timeline. Designed for maximum visual impact and engagement.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/ksploitx/portfolio-ksploitx",
    liveUrl: "https://ksploitx.pages.dev",
    coverImage: "/images/cover-portfolio.png",
    featured: true,
    status: "DEPLOYED",
  },
  {
    id: "vital-vault",
    slug: "vital-vault",
    codename: "VITAL_VAULT",
    title: "Vital Vault",
    description:
      "AI-powered health companion app that securely manages health records, analyzes reports using Qwen AI, tracks medicines, syncs wearable data, and offers chat-based health insights with cryptographic vault security.",
    longDescription:
      "VitalVault is a comprehensive health management platform built with Flutter and Firebase. Features include AI-driven medical report analysis, one-touch report digitization, medicine tracking, wearable data sync, SOS alerts, and nearby hospital discovery. All health data is protected with a cryptographic vault layer for maximum security.",
    tech: ["Flutter", "Firebase", "pgvector", "Exa", "LangChain"],
    githubUrl: "https://github.com/ksploitx/Vital-Vault",
    featured: true,
    status: "ARCHIVED",
  },
];
