"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/utils/basePath";

const HERO_PHOTOS = [
  {
    src: "/images/hero-speaking-2.jpg",
    alt: "Khushneet Singh — Speaking at event",
    rotate: -3,
    zIndex: 30,
    offsetX: "5%",
    offsetY: "2%",
    label: "// SPEAKING",
  },
  {
    src: "/images/hero-speaking.jpg",
    alt: "Khushneet Singh — Speaking at AICTE IDEA Lab",
    rotate: 4,
    zIndex: 25,
    offsetX: "45%",
    offsetY: "8%",
    label: "// WORKSHOP",
  },
  {
    src: "/images/hero-amd.jpg",
    alt: "Khushneet Singh — AMD Slingshot Event",
    rotate: -1,
    zIndex: 20,
    offsetX: "25%",
    offsetY: "-6%",
    label: "// AMD_SLINGSHOT",
  },
  {
    src: "/images/hero-speaking-3.jpg",
    alt: "Khushneet Singh — Conference Presentation",
    rotate: 3,
    zIndex: 15,
    offsetX: "55%",
    offsetY: "-4%",
    label: "// CONFERENCE",
  },
  {
    src: "/images/hero-hackathon.jpg",
    alt: "Khushneet Singh — Hackathon",
    rotate: -4,
    zIndex: 12,
    offsetX: "60%",
    offsetY: "34%",
    label: "// HACKATHON",
  },
  {
    src: "/images/hero-amd-friends.jpg",
    alt: "Khushneet Singh — With AMD friends",
    rotate: 2,
    zIndex: 18,
    offsetX: "8%",
    offsetY: "36%",
    label: "// SQUAD",
  },
  {
    src: "/images/hero-kiosk.jpg",
    alt: "Khushneet Singh — Kiosk Demo",
    rotate: -5,
    zIndex: 14,
    offsetX: "38%",
    offsetY: "38%",
    label: "// KIOSK_DEMO",
  },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソ>_{}[]|/\\ABCDEF";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(19, 19, 19, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff88";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.globalAlpha = Math.random() * 0.4 + 0.1;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="matrix-rain"
        aria-hidden="true"
      />

      {/* Content — Two Column Layout */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* ── LEFT COLUMN: Terminal + Headline + CTA ── */}
          <div className="flex-1 w-full lg:max-w-[55%]">
            {/* System Ready Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-2 h-2 bg-accent animate-pulse inline-block" />
              <span className="font-mono text-xs text-accent/70 tracking-widest">
                ■ SYSTEM_READY // 2026
              </span>
            </motion.div>

            {/* Terminal Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="font-mono text-sm text-accent glow-green mb-3"
            >
              <span>&gt; ksploitx_</span>
              <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink align-middle" />
            </motion.div>

            {/* Name — Prominent Display */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mb-3"
            >
              <div className="hero-name">
                <span className="hero-name-first">KHUSHNEET</span>
                <span className="hero-name-last">SINGH</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[0.95] mb-4 tracking-tight"
            >
              THE
              <br />
              <span className="text-gradient-green">SIGNAL</span> IN
              <br />
              THE NOISE<span className="text-accent-cyan">.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-muted-light text-sm md:text-base max-w-xl leading-relaxed mb-5 font-light"
            >
              Full-stack developer and AI engineer building intelligent systems
              at the intersection of security, machine learning, and scalable
              architecture. From embedded hardware to cloud-native deployments.
            </motion.p>

            {/* GitHub Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mb-6"
            >
              <div className="github-heatmap-container">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent/70">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-mono text-[11px] text-accent/60 tracking-widest uppercase">
                    CONTRIBUTION_MAP
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/00ff88/ksploitx"
                  alt="GitHub Contribution Heatmap"
                  className="github-heatmap"
                />
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-row gap-4 flex-wrap"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-cyan text-background font-mono text-sm font-semibold hover:opacity-90 transition-opacity duration-200 tracking-wider"
              >
                VIEW_PROJECTS →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-mono text-sm hover:bg-accent/10 transition-colors duration-200 tracking-wider"
              >
                INIT_CONTACT
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Photo Cluster ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
            className="flex-1 w-full lg:max-w-[45%] relative hidden md:block"
          >
            <div className="photo-cluster">
              {HERO_PHOTOS.map((photo, index) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: photo.rotate,
                  }}
                  transition={{
                    delay: 1.0 + index * 0.15,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="photo-frame"
                  style={{
                    zIndex: photo.zIndex,
                    left: photo.offsetX,
                    top: photo.offsetY,
                  }}
                >
                  {/* Corner Brackets — Hacker Style */}
                  <span className="corner-bracket corner-tl" />
                  <span className="corner-bracket corner-tr" />
                  <span className="corner-bracket corner-bl" />
                  <span className="corner-bracket corner-br" />

                  {/* Photo */}
                  <div className="photo-inner">
                    <Image
                      src={getImagePath(photo.src)}
                      alt={photo.alt}
                      width={320}
                      height={400}
                      className="photo-image"
                      loading="eager"
                      priority={true}
                    />
                  </div>

                  {/* Label Tag */}
                  <span className="photo-label">
                    {photo.label}
                  </span>
                </motion.div>
              ))}

              {/* Decorative scan line accent */}
              <div className="photo-cluster-scanline" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
