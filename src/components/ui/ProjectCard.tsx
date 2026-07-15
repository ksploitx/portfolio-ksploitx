"use client";

import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { TECH_ICON_MAP } from "@/data/skillIcons";
import { getImagePath } from "@/utils/basePath";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusClass =
    project.status === "DEPLOYED"
      ? "status-deployed"
      : project.status === "DEVELOPED"
        ? "status-developed"
        : project.status === "WIP"
          ? "status-wip"
          : "status-archived";

  const statusLabel =
    project.status === "DEPLOYED"
      ? "DEPLOYED"
      : project.status === "DEVELOPED"
        ? "DEVELOPED"
        : project.status === "WIP"
          ? "IN PROGRESS"
          : "RESEARCH";

  return (
    <div className="project-card group">
      {/* ── Banner / Thumbnail ── */}
      <div className="project-banner">
        {project.coverImage ? (
          <Image
            src={getImagePath(project.coverImage)}
            alt={`${project.title} banner`}
            width={640}
            height={360}
            className={`w-full h-full ${
              project.containImage ? "object-contain object-top p-2" : "object-cover"
            }`}
          />
        ) : (
          /* Generated dark banner with codename overlay */
          <div className="project-banner-fallback">
            <div className="project-banner-grid" />
            <span className="project-banner-codename">
              {project.codename}
            </span>
            {/* Accent corner marks */}
            <span className="project-banner-corner project-banner-corner-tl" />
            <span className="project-banner-corner project-banner-corner-br" />
          </div>
        )}

        {/* Top-right link icons overlay */}
        <div className="project-banner-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn project-action-btn-cyan"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 md:p-6">
        {/* Codename + Status */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-accent text-xs glow-green tracking-widest">
            {project.codename}
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${statusClass}`}
          >
            {statusLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-light text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack with Icons */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => {
            const iconUrl = TECH_ICON_MAP[t] ?? null;
            return (
              <span key={t} className="tech-pill">
                {iconUrl ? (
                  <Image
                    src={iconUrl}
                    alt={`${t} icon`}
                    width={20}
                    height={20}
                    className="tech-pill-icon"
                    unoptimized
                  />
                ) : (
                  <span className="w-2.5 h-2.5 bg-accent-cyan/60 inline-block flex-shrink-0" />
                )}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
