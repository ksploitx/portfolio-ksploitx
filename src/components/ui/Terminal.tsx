"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

interface TerminalLine {
  type: "input" | "output" | "system";
  content: string;
}

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOOT_LINES = [
  "Initializing secure connection...",
  "Loading system modules...",
  "Authentication bypassed.",
  'Welcome, operator. Type \'help\' to begin.',
];

/* ── Box-drawing helpers (guarantees alignment) ────── */
const HELP_W = 43; // inner width for single-line box
const INFO_W = 38; // inner width for double-line box

function sRow(text: string) {
  return "\u2502" + ("  " + text).padEnd(HELP_W) + "\u2502";
}
function dRow(text: string, prefix = "  ") {
  return prefix + "\u2551" + ("  " + text).padEnd(INFO_W) + "\u2551";
}

function processCommand(input: string): string[] {
  const cmd = input.trim().toLowerCase();

  if (cmd === "help") {
    return [
      "\u250c" + "\u2500".repeat(HELP_W) + "\u2510",
      sRow("AVAILABLE COMMANDS"),
      "\u251c" + "\u2500".repeat(HELP_W) + "\u2524",
      sRow("help       - Show this help menu"),
      sRow("whoami     - Operator identity"),
      sRow("projects   - List deployed systems"),
      sRow("skills     - Display skill matrix"),
      sRow("contact    - Communication channels"),
      sRow("status     - Current system status"),
      sRow("clear      - Clear terminal output"),
      sRow("exit/quit  - Close terminal"),
      "\u2514" + "\u2500".repeat(HELP_W) + "\u2518",
    ];
  }

  if (cmd === "whoami") {
    return [
      "",
      "  \u2554" + "\u2550".repeat(INFO_W) + "\u2557",
      dRow("OPERATOR: Khushneet Singh"),
      dRow("ALIAS:    KSPLOITX"),
      "  \u2560" + "\u2550".repeat(INFO_W) + "\u2563",
      dRow("ROLE: Full-Stack Developer"),
      dRow("      AI Engineer / Security"),
      dRow("FOCUS: Building systems that think"),
      dRow("STACK: Python / TypeScript / Dart"),
      dRow("BASE: Bhopal, India"),
      "  \u255a" + "\u2550".repeat(INFO_W) + "\u255d",
      "",
    ];
  }

  if (cmd === "projects") {
    const lines = ["", "  ── DEPLOYED SYSTEMS ──", ""];
    projects.forEach((p, i) => {
      lines.push(`  [${i + 1}] ${p.codename} — ${p.description.slice(0, 70)}...`);
      if (p.githubUrl) lines.push(`      └─ ${p.githubUrl}`);
      lines.push("");
    });
    return lines;
  }

  if (cmd === "skills") {
    const lines = ["", "  ── SKILL MATRIX ──", ""];
    skills.forEach((cat) => {
      lines.push(`  ${cat.icon} ${cat.category.toUpperCase()}`);
      lines.push(`    ${cat.skills.join(" · ")}`);
      lines.push("");
    });
    return lines;
  }

  if (cmd === "contact") {
    return [
      "",
      "  ── COMMUNICATION CHANNELS ──",
      "",
      "  ✉  Email:    khushneetsingh@proton.me",
      "  ◉  GitHub:   github.com/ksploitx",
      "  ◈  LinkedIn: linkedin.com/in/khushneet-singh",
      "",
    ];
  }

  if (cmd === "status") {
    return [
      "",
      "  OPEN_TO_OPPORTUNITIES: TRUE",
      "  LOCATION: BHOPAL, IN",
      "  SYSTEMS: ALL_OPERATIONAL",
      `  UPTIME: ${Math.floor(Math.random() * 9000 + 1000)} hours`,
      "",
    ];
  }

  if (cmd === "sudo hire khushneet") {
    return [
      "",
      "  ██████████████████████████████████████",
      "  █                                    █",
      "  █   ACCESS GRANTED.                  █",
      "  █   Wise choice, operator.           █",
      "  █                                    █",
      "  ██████████████████████████████████████",
      "",
    ];
  }

  if (cmd === "clear" || cmd === "exit" || cmd === "quit") {
    return [];
  }

  return [`  command not found: ${input.trim()}. Try 'help'.`];
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  // Boot sequence
  useEffect(() => {
    if (!isOpen) {
      setLines([]);
      setBooted(false);
      setInput("");
      return;
    }

    let cancelled = false;
    const bootLines: TerminalLine[] = [];

    const runBoot = async () => {
      for (let i = 0; i < BOOT_LINES.length; i++) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 80));
        bootLines.push({ type: "system", content: BOOT_LINES[i] });
        setLines([...bootLines]);
      }
      setBooted(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    };

    runBoot();
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || !input.trim()) return;

    const cmd = input.trim().toLowerCase();

    if (cmd === "exit" || cmd === "quit") {
      onClose();
      return;
    }

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: `> ${input}` },
    ];

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const output = processCommand(input);
    output.forEach((line) => {
      newLines.push({ type: "output", content: line });
    });

    setLines(newLines);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-12 lg:inset-20 bg-[#0a0a0a] border border-accent/30 z-[101] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-accent/20 bg-[#0d0d0d]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 bg-accent/80 inline-block" />
                </div>
                <span className="font-mono text-xs text-accent/70">
                  KSPLOITX_TERMINAL v1.0.0
                </span>
              </div>
              <span className="font-mono text-xs text-muted">
                [ESC to exit]
              </span>
            </div>

            {/* Output */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto overflow-x-auto p-4 font-mono text-sm leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`whitespace-pre ${
                    line.type === "system"
                      ? "text-accent/60"
                      : line.type === "input"
                        ? "text-accent glow-green"
                        : "text-foreground/80"
                  }`}
                >
                  {line.content}
                </div>
              ))}
            </div>

            {/* Input */}
            {booted && (
              <div className="flex items-center px-4 py-3 border-t border-accent/20 bg-[#0d0d0d]">
                <span className="font-mono text-accent glow-green mr-2">
                  &gt;
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleSubmit}
                  className="flex-1 bg-transparent font-mono text-sm text-accent outline-none caret-accent"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="w-2 h-4 bg-accent animate-blink ml-1" />
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
