"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/about";
import { ExternalLink } from "lucide-react";
import { TimelineItem } from "@/types";

/* ── Inline SVG Icons ──────────────────────────────── */

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function DocumentIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ── Link Icon Resolver ────────────────────────────── */

function CardIcon({
  type,
  size = 14,
}: {
  type: string;
  size?: number;
}) {
  switch (type) {
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "github":
      return <GithubIcon size={size} />;
    case "twitter":
      return <TwitterIcon size={size} />;
    case "document":
      return <DocumentIcon size={size} />;
    default:
      return <ExternalLink size={size} />;
  }
}

/* ── Main Component ────────────────────────────────── */

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-muted tracking-widest">
            // SECTION_04
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-1">
            SYSTEM_LOG
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 md:-translate-x-px" />

          {timeline.map((item, index) => (
            <TimelineEntry
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Timeline Entry ────────────────────────────────── */

function TimelineEntry({
  item,
  index,
  isLeft,
}: {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}) {
  const typeLabels: Record<TimelineItem["type"], string> = {
    education: "// EDUCATION",
    achievement: "// ACHIEVEMENT",
    experience: "// EXPERIENCE",
    research: "// RESEARCH",
  };

  const typeColors: Record<TimelineItem["type"], string> = {
    education: "text-accent-cyan",
    achievement: "text-accent",
    experience: "text-yellow-400",
    research: "text-purple-400",
  };

  const renderImages = () => {
    if (!item.images || item.images.length === 0) return null;

    if (item.imageLayout === "banner") {
      return (
        <div className="mt-4 mb-4 w-full h-32 md:h-40 border-2 border-dashed border-accent/40 flex items-center justify-center bg-background/50 rounded-md relative overflow-hidden group-hover:border-accent transition-colors duration-300">
          <span className="font-mono text-sm text-accent/60 tracking-widest absolute z-0">[ IMAGE ]</span>
          {item.images[0] && (
            <img src={item.images[0]} alt="Banner" className="w-full h-full object-cover relative z-10" onError={(e) => e.currentTarget.style.display = 'none'} />
          )}
        </div>
      );
    }

    if (item.imageLayout === "scattered") {
      return (
        <div className="mt-6 mb-8 relative h-40 md:h-48 flex items-center justify-center">
          {item.images.map((img, i) => {
            const randomRotate = (i % 2 === 0 ? 1 : -1) * (4 + (i * 3));
            const randomTranslateX = (i % 2 === 0 ? -1 : 1) * (i * 10);
            return (
              <div
                key={i}
                style={{ 
                  transform: `translate(${randomTranslateX}px, 0) rotate(${randomRotate}deg)`, 
                  zIndex: i 
                }}
                className="absolute w-28 h-28 md:w-36 md:h-36 border border-border bg-background flex items-center justify-center shadow-2xl transition-all duration-300 hover:!translate-x-0 hover:!translate-y-0 hover:!rotate-0 hover:scale-110 hover:!z-50"
              >
                <div className="w-[90%] h-[90%] border border-dashed border-accent/30 flex items-center justify-center bg-surface relative overflow-hidden">
                  <span className="font-mono text-[10px] text-accent/50 tracking-wider absolute z-0">[ IMAGE ]</span>
                  <img src={img} alt="Gallery" className="w-full h-full object-cover relative z-10" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (item.imageLayout === "stacked") {
      return (
        <div className="mt-4 mb-4 flex gap-4 overflow-x-auto pb-2">
          {item.images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-36 h-48 border-2 border-dashed border-accent/40 flex items-center justify-center bg-background/50 rounded-sm hover:border-accent hover:bg-accent/5 transition-all duration-300 relative overflow-hidden">
              <span className="font-mono text-xs text-accent/60 tracking-widest text-center px-2 absolute z-0">[ IMAGE ]</span>
              <img src={img} alt="Document" className="w-full h-full object-cover relative z-10" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const cardContent = (
    <div className="timeline-card bg-surface border border-border p-5 md:p-6 hover:border-accent/30 transition-all duration-300 group relative flex flex-col h-full">
      {/* Type Label */}
      <span
        className={`font-mono text-[10px] tracking-widest uppercase ${typeColors[item.type]} opacity-70`}
      >
        {typeLabels[item.type]}
      </span>

      {/* Title */}
      <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mt-2 mb-1 group-hover:text-accent transition-colors duration-300">
        {item.title}
      </h3>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-1">
        <p className="font-mono text-xs text-accent-cyan/80">
          {item.subtitle}
        </p>
      </div>

      {/* Date */}
      <p className="font-mono text-[11px] text-muted mb-4">{item.date}</p>

      {/* Description */}
      <p className="text-sm text-muted-light leading-relaxed mb-2">
        {item.description}
      </p>

      {/* Image Gallery */}
      {renderImages()}

      {/* Spacer */}
      <div className="flex-grow min-h-[16px]" />

      {/* Bottom Row: Pill Buttons */}
      {(item.links && item.links.length > 0) ? (
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border/50">
          {item.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent hover:bg-accent/10 hover:border-accent/60 hover:shadow-[0_0_15px_rgba(0,255,159,0.2)] transition-all duration-300 group/btn"
            >
              <span className="group-hover/btn:scale-110 transition-transform duration-300">
                <CardIcon type={link.icon} size={18} />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wide">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      ) : (
        /* Legacy fallback */
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {item.linkIcon && (
              <span className="inline-flex items-center justify-center w-7 h-7 border border-border text-muted-light group-hover:border-accent/40 group-hover:text-accent transition-all duration-200">
                <CardIcon type={item.linkIcon as any} size={14} />
              </span>
            )}
            {item.githubUrl && (
              <button
                type="button"
                className="inline-flex items-center justify-center w-7 h-7 border border-border text-muted-light hover:border-accent hover:text-accent transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(item.githubUrl, "_blank", "noopener,noreferrer");
                }}
              >
                <GithubIcon size={14} />
              </button>
            )}
          </div>
          {item.hoverLabel && (
            <span className="font-mono text-[10px] text-muted opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 tracking-wider">
              {item.hoverLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative flex items-start mb-12 last:mb-0">
      {/* Node */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

      {/* Card - Mobile: always right, Desktop: alternating */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        {cardContent}
      </motion.div>
    </div>
  );
}
