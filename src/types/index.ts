export interface Project {
  id: string;
  slug: string;
  codename: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  containImage?: boolean;
  featured: boolean;
  status: "DEPLOYED" | "WIP" | "ARCHIVED" | "DEVELOPED";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface TimelineLink {
  url: string;
  label: string;
  icon: "linkedin" | "github" | "twitter" | "document" | "external";
}

export interface TimelineItem {
  id: string;
  type: "education" | "achievement" | "experience" | "research";
  title: string;
  subtitle: string;
  date: string;
  description: string;
  imageUrl?: string;
  link?: string;
  linkIcon?: "linkedin" | "github" | "document" | "external";
  hoverLabel?: string;
  githubUrl?: string;
  links?: TimelineLink[];
  images?: string[];
  imageLayout?: "banner" | "scattered" | "stacked";
}
