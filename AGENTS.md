# AGENTS.md — ksploitx portfolio

Guidance for AI coding agents (Cursor, Windsurf, Antigravity, etc.) working on this repo. Read this before making changes.

## Project

Personal developer portfolio for Khushneet Singh (brand: **ksploitx**). B.Tech CSE grad. Live at `ksploitx.pages.dev`, mirrored to a `github.io` URL, moving to custom domain `ksploitx.dev` (Porkbun, `og:url` already points there).

## Stack (confirmed versions)

- **Framework:** Next.js 16.2.4, App Router, static export mode
- **React:** 19.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 — **CSS-based config**, no `tailwind.config.ts`. Theme lives in `src/app/globals.css` under `@theme inline { ... }`.
- **Animation:** Framer Motion ^12.38.0
- **Icons:** lucide-react, Devicon, Simple Icons (for skill/tech badges)
- **Utilities:** clsx, tailwind-merge
- **Fonts:** Inter (`--font-inter`), Space Grotesk (`--font-space-grotesk`), Geist Mono (`--font-geist-mono`) — all loaded via `next/font/google` in `layout.tsx`

## File structure

```
src/
  app/
    layout.tsx        # root layout, metadata, font vars
    page.tsx
    globals.css        # theme tokens (@theme inline) + all custom CSS (~1300 lines)
    icon.tsx            # dynamic 96x96 "KX" monogram favicon (ImageResponse)
    apple-icon.tsx
    robots.ts
  components/
    Navbar.tsx
    sections/            # Hero, About, Skills, Projects, Contact
    ui/                  # ProjectCard, SectionWrapper, SkillBadge, Terminal
  data/
    projects.ts          # project entries — see below
    about.ts
    skills.ts
    skillIcons.ts
  types/index.ts         # Project type etc.
  utils/basePath.ts       # helper for resolving asset/image paths under NEXT_PUBLIC_BASE_PATH
public/
  images/, placeholders/, docs/ (resume PDF), cover-portfolio.png, favicon.ico, apple-icon.png
.github/workflows/deploy-gh-pages.yml
```

No `wrangler.toml` — Cloudflare Pages is configured directly via the Cloudflare dashboard as a **Pages** project, not a Worker, and not via wrangler config in-repo.

## Design language — do not drift from this

Dark hacker-terminal aesthetic. Confirmed design tokens (`globals.css`):

- `--color-background: #131313`
- `--color-foreground: #e5e5e5`
- `--color-surface: #1a1a1a`, `--color-surface-container: #0f0f0f`
- `--color-accent: #00ff88` (neon green), `--color-accent-cyan: #00d4ff`
- `--color-muted: #666666`, `--color-muted-light: #999999`
- `--color-border: #2a2a2a`

Signature effects already implemented — preserve these, don't "clean up" or simplify them away:

- Full-page `.scanline-overlay` (repeating-linear-gradient scanlines, fixed, `z-index: 9999`, non-interactive)
- `.glow-green` text-shadow glow used for accent text
- Terminal/typing effect in `Terminal.tsx`
- Corner-bracket hover effects on the photo cluster in the About/Hero area
- Sharp edges — avoid rounded corners / soft shadows unless explicitly asked

## Deployment — dual target, non-negotiable constraints

Two build targets from one codebase:

1. **Cloudflare Pages** (primary) — `ksploitx.pages.dev`, dashboard-configured Pages project.
2. **GitHub Pages mirror** — built via `.github/workflows/deploy-gh-pages.yml`, triggered on push to `main`. Sets `NEXT_PUBLIC_BASE_PATH=/${{ github.event.repository.name }}` at build time, runs `npm run build`, pushes `./out` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`, with a `.nojekyll` file added. This mirror exists because some platforms (e.g. LinkedIn's custom button field) block `*.pages.dev` URLs.

`next.config.ts` (current, working — don't casually change):

```typescript
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};
```

Implications for any code change:

- `output: "export"` + `images: { unoptimized: true }` must stay — the Next image optimizer needs a server and breaks static export.
- **Any new internal link, image src, or asset reference must go through `src/utils/basePath.ts`** (or otherwise respect `NEXT_PUBLIC_BASE_PATH`) — hardcoded root-relative paths (`/images/foo.png`) will 404 on the GitHub Pages mirror since it's served from a subpath.
- Don't introduce server-only features (API routes, server actions, middleware, ISR, dynamic route handlers without `force-static`) — the static export can't run them. Note `icon.tsx` and `robots.ts` both explicitly set `export const dynamic = 'force-static'` for this reason — follow that pattern for any new route-level metadata file.

## Favicon / metadata — already fixed, don't regress

- `icon.tsx` generates a 96×96 "KX" monogram PNG via `next/og` `ImageResponse`, `dynamic = 'force-static'`. There's also a static `/public/favicon.ico` fallback declared alongside it in `layout.tsx` metadata (`icons.icon` array with both). Keep both — the static fallback exists because dynamic icon routes were unreliable across some crawlers/redeploys.
- `cover-portfolio.png` (1200×630) is the OG/Twitter image, hardcoded to the `ksploitx.pages.dev` absolute URL in `layout.tsx`. When the custom domain (`ksploitx.dev`) goes live, this needs updating to match (currently still pointing at `.pages.dev`, not yet migrated).
- `robots.ts` currently allows all crawlers on everything (`allow: '/'`) — no sitemap configured yet.

## Projects (`src/data/projects.ts`) — current full list

Eight projects currently defined (memory/docs elsewhere may be stale — this is the live list):

1. **Weave** — multi-agent LLM orchestration (FastAPI, LangGraph, Celery, Redis, Postgres) — DEVELOPED
2. **Data Sanity** — RAG-ready dataset pipeline (LangChain, FastAPI, pgvector, Exa) — WIP
3. **AutoLingo** — Flutter localization CLI, published on pub.dev (Dart) — DEPLOYED
4. **ACE (Autism Care EcoSystem)** — Flutter/Supabase clinician-parent app w/ AI assessments — DEVELOPED
5. **Workbench RBAC** — role/permission admin panel (Next.js 14, TS, Tailwind) — DEVELOPED
6. **Support Ticket Classifier** — hybrid rule+ML+LLM ticket classifier (Python, scikit-learn, Next.js, Docker) — DEVELOPED
7. **KSPLOITX Portfolio** — this repo itself, listed as its own project entry — DEPLOYED
8. **Pi Sentinel** — Raspberry Pi network vuln scanner w/ CVE matching — DEPLOYED

Each project has: `id`, `slug`, `codename` (terminal-style all-caps label), `title`, `description`, `longDescription`, `tech[]`, `githubUrl`, optional `liveUrl`, `coverImage`, `featured`, `status` (`DEPLOYED` / `DEVELOPED` / `WIP`).

## Working conventions

- Khushneet does not hand-edit code directly — he runs prompts through an AI editor (Cursor primarily). Write instructions as a single self-contained, ready-to-paste prompt, not a multi-step manual walkthrough.
- Keep the private source repo private; public deployment via Cloudflare Pages OAuth is expected and fine.
- Prefer targeted, minimal diffs over refactors — this is a live personal site, not a greenfield project.
- Follow existing patterns in `ProjectCard.tsx` / `SkillBadge.tsx` for any new project or skill entries (cover image + tech pills + Devicon/Simple Icons badges).
- No `TODO`/`FIXME` comments currently exist in the codebase — if you leave incomplete work, flag it in the response to Khushneet rather than leaving silent TODOs.

## Open workstreams (as of last check)

- Custom domain migration to `ksploitx.dev` (Porkbun) — including updating the hardcoded OG image URL in `layout.tsx` once live
- Sitemap not yet configured (`robots.ts` has no sitemap reference)
- README.md finalization for the repo itself
- Continue polishing project cover images/tech badges across all 8 project entries
