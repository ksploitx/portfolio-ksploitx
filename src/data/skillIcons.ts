/**
 * Mapping of skill names to Devicon CDN SVG URLs.
 * Falls back to null for skills without a Devicon entry (renders ■ accent square).
 *
 * CDN base: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
 */

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const SKILL_ICON_MAP: Record<string, string | null> = {
  // ── Languages ──
  Python: `${DEVICON_BASE}/python/python-original.svg`,
  TypeScript: `${DEVICON_BASE}/typescript/typescript-original.svg`,
  Dart: `${DEVICON_BASE}/dart/dart-original.svg`,
  JavaScript: `${DEVICON_BASE}/javascript/javascript-original.svg`,
  "C++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  Java: `${DEVICON_BASE}/java/java-original.svg`,
  SQL: `${DEVICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
  Bash: `${DEVICON_BASE}/bash/bash-original.svg`,

  // ── Frameworks ──
  "Next.js": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  React: `${DEVICON_BASE}/react/react-original.svg`,
  Flutter: `${DEVICON_BASE}/flutter/flutter-original.svg`,
  FastAPI: `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  Flask: `${DEVICON_BASE}/flask/flask-original.svg`,
  Express: `${DEVICON_BASE}/express/express-original.svg`,
  Django: `${DEVICON_BASE}/django/django-plain.svg`,
  "Django REST Framework": `${DEVICON_BASE}/djangorest/djangorest-original.svg`,
  LangChain: null, // no devicon entry

  // ── AI/ML ──
  "RAG Pipelines": null,
  pgvector: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  "Prompt Engineering": null,
  "Exa Search": null,
  "OpenAI API": null,
  "Hugging Face": null,

  // ── DevTools ──
  Git: `${DEVICON_BASE}/git/git-original.svg`,
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  Linux: `${DEVICON_BASE}/linux/linux-original.svg`,
  Supabase: `${DEVICON_BASE}/supabase/supabase-original.svg`,
  Firebase: `${DEVICON_BASE}/firebase/firebase-original.svg`,
  Vercel: `${DEVICON_BASE}/vercel/vercel-original.svg`,
  "VS Code": `${DEVICON_BASE}/vscode/vscode-original.svg`,
  Figma: `${DEVICON_BASE}/figma/figma-original.svg`,
  Postman: `${DEVICON_BASE}/postman/postman-original.svg`,
  "GitHub Actions": `${DEVICON_BASE}/githubactions/githubactions-original.svg`,

  // ── Design ──
  Photoshop: `${DEVICON_BASE}/photoshop/photoshop-original.svg`,
  Illustrator: `${DEVICON_BASE}/illustrator/illustrator-plain.svg`,
  "Fusion 360": null, // no devicon entry — uses custom SVG fallback

  // ── Hardware ──
  "Raspberry Pi": `${DEVICON_BASE}/raspberrypi/raspberrypi-original.svg`,
  FPGA: null,
  LoRaWAN: null,
  Arduino: `${DEVICON_BASE}/arduino/arduino-original.svg`,
  MQTT: null,
  "Aircrack-ng": null,
};

/** Tech stack icons for project cards — same CDN */
export const TECH_ICON_MAP: Record<string, string | null> = {
  ...SKILL_ICON_MAP,
  ARB: null,
  CLI: null,
  "pub.dev": `${DEVICON_BASE}/dart/dart-original.svg`,
  Exa: null,
  WebSockets: null,
  Electron: `${DEVICON_BASE}/electron/electron-original.svg`,
  "Raspberry Pi": `${DEVICON_BASE}/raspberrypi/raspberrypi-original.svg`,
  "Aircrack-ng": null,
  MQTT: null,
  "Framer Motion": null,
  Tailwind: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  TailwindCSS: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  "Tailwind CSS": `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  Node: `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  "Node.js": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  MongoDB: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  PostgreSQL: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  Redis: `${DEVICON_BASE}/redis/redis-original.svg`,
  Keras: `${DEVICON_BASE}/keras/keras-original.svg`,
  TensorFlow: `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  PyTorch: `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  AWS: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "Hugging Face": null,
  "OpenAI API": null,
  "Next.js 14": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  "Lucide React": null,
  "scikit-learn": null,
  OpenRouter: null,
};
