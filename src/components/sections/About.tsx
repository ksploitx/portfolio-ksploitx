"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/about";
import { ExternalLink } from "lucide-react";
import { TimelineItem } from "@/types";
import { getImagePath } from "@/utils/basePath";

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
    <section id="about" className="syslog-section">
      <div className="syslog-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="syslog-header"
        >
          <span className="syslog-section-label">
            // SECTION_04
          </span>
          <h2 className="syslog-title">
            SYSTEM_LOG
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="syslog-timeline">
          {/* Vertical Line */}
          <div className="syslog-timeline-line" />

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

  const renderImages = () => {
    if (!item.images || item.images.length === 0) return null;

    /* ── Banner (Education) ── */
    if (item.imageLayout === "banner") {
      return (
        <div className="syslog-img-banner">
          {item.images[0] && (
            <img
              src={getImagePath(item.images[0])}
              alt="Banner"
              className="syslog-banner-img"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}
        </div>
      );
    }

    /* ── Scattered / Polaroid (Achievement & Experience) ── */
    if (item.imageLayout === "scattered") {
      const count = item.images.length;
      // Smaller polaroids when more images so they fit inside the card
      const polaroidSize = count <= 3 ? 260 : 220;
      const polaroidSizeMobile = count <= 3 ? 200 : 170;
      const offsetStep = count <= 3 ? 80 : 65;

      return (
        <div
          className="syslog-img-scattered"
          style={{
            ["--polaroid-size" as string]: `${polaroidSize}px`,
            ["--polaroid-size-mobile" as string]: `${polaroidSizeMobile}px`,
          }}
        >
          {item.images.map((img, i) => {
            const rotations = [-6, 4, -3, 5];
            const rotate = rotations[i % rotations.length];
            const center = (count - 1) / 2;
            const offsetX = (i - center) * offsetStep;
            // Edge images behind center for a nice fan effect
            const distFromCenter = Math.abs(i - center);
            const zIdx = count - Math.round(distFromCenter);
            return (
              <div
                key={i}
                style={{
                  transform: `translateX(${offsetX}px) rotate(${rotate}deg)`,
                  zIndex: zIdx,
                }}
                className="syslog-polaroid"
              >
                <img
                  src={getImagePath(img)}
                  alt="Gallery"
                  className="syslog-polaroid-img"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            );
          })}
        </div>
      );
    }

    /* ── Stacked / Grid (Research) ── */
    if (item.imageLayout === "stacked") {
      return (
        <div className="syslog-img-grid">
          {item.images.map((img, i) => (
            <div key={i} className="syslog-grid-card">
              <img
                src={getImagePath(img)}
                alt="Document"
                className="syslog-grid-img"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const cardContent = (
    <div className="syslog-card">
      {/* Type Label */}
      <span className="syslog-entry-label">
        {typeLabels[item.type]}
      </span>

      {/* Title */}
      <h3 className="syslog-entry-title">
        {item.title}
      </h3>

      {/* Subtitle */}
      <p className="syslog-entry-subtitle">
        {item.subtitle}
      </p>

      {/* Date */}
      <p className="syslog-entry-date">{item.date}</p>

      {/* Description */}
      <p className="syslog-entry-body">
        {item.description}
      </p>

      {/* Image Gallery */}
      {renderImages()}

      {/* Spacer */}
      <div style={{ flexGrow: 1, minHeight: 16 }} />

      {/* Bottom Row: Pill Buttons */}
      {item.links && item.links.length > 0 && (
        <div className="syslog-links">
          {item.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="syslog-link-btn"
            >
              <span className="syslog-link-icon">
                <CardIcon type={link.icon} size={16} />
              </span>
              <span className="syslog-link-label">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="syslog-entry">
      {/* Node — green square */}
      <div className="syslog-node" />

      {/* Card - Mobile: always right, Desktop: alternating */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        className={`syslog-card-wrapper ${isLeft ? "syslog-card-left" : "syslog-card-right"}`}
      >
        {cardContent}
      </motion.div>
    </div>
  );
}
