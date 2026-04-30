import { TimelineItem } from "@/types";

export const timeline: TimelineItem[] = [
  {
    id: "education-btech",
    type: "education",
    title: "B.Tech CSE — Cyber Security",
    subtitle: "LNCTS Bhopal",
    date: "2022 — May 2026",
    description:
      "Bachelor of Technology in Computer Science & Engineering with specialization in Cyber Security. GPA: 6.80. Focused on network security, cryptography, and secure system design.",
    images: ["/placeholders/education-banner.jpeg"],
    imageLayout: "banner",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/khushneet-singh/", icon: "linkedin" },
      { label: "GitHub", url: "https://github.com/ksploitx", icon: "github" },
      { label: "Twitter", url: "https://twitter.com/ksploitx", icon: "twitter" }
    ]
  },
  {
    id: "achievement-sih",
    type: "achievement",
    title: "SIH 2024 — Grand Finalist",
    subtitle: "Smart India Hackathon",
    date: "Dec 2024",
    description:
      "Built a tourist kiosk application using Electron + React with offline-first architecture. Implemented MQTT/REST synchronization for real-time data sync across distributed kiosks.",
    images: [
      "/placeholders/sih-1.jpg",
      "/placeholders/sih-2.jpg",
      "/placeholders/sih-3.jpg"
    ],
    imageLayout: "scattered",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/khushneet-singh_sih2024-innovation-smarttourism-ugcPost-7275235205689266176-4FQ_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_BGkB3AgW7RqovAgPfSbe9HAutCzcvLQ", icon: "linkedin" }
    ]
  },
  {
    id: "achievement-amd",
    type: "achievement",
    title: "AMD Slingshot",
    subtitle: "AMD Innovation Program",
    date: "2024",
    description:
      "Selected for AMD Slingshot program — a platform empowering student innovators to build and showcase cutting-edge technology projects with AMD hardware acceleration.",
    images: [
      "/placeholders/amd-1.jpg",
      "/placeholders/amd-2.jpg",
      "/placeholders/amd-3.jpg"
    ],
    imageLayout: "scattered",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/khushneet-singh_amdslingshot-hack2skill-amd-ugcPost-7449770131397877760-FN2J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_BGkB3AgW7RqovAgPfSbe9HAutCzcvLQ", icon: "linkedin" },
      { label: "GitHub", url: "https://github.com/mro-nerd/SolveIt", icon: "github" }
    ]
  },
  {
    id: "experience-aicte",
    type: "experience",
    title: "Chief Mentor",
    subtitle: "AICTE IDEA Lab",
    date: "Jan 2023 — Mar 2024",
    description:
      "Led a team of 20+ student innovators at the AICTE IDEA Lab. Mentored projects spanning IoT, AI/ML, and embedded systems. Organized workshops and hackathons fostering hands-on engineering culture.",
    images: [
      "/placeholders/aicte-1.jpg",
      "/placeholders/aicte-2.jpg",
      "/placeholders/aicte-3.jpg",
      "/placeholders/aicte-4.jpg"
    ],
    imageLayout: "scattered",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/khushneet-singh_iot-innovation-education-ugcPost-7196949657548161024-Xjmf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_BGkB3AgW7RqovAgPfSbe9HAutCzcvLQ", icon: "linkedin" }
    ]
  },
  {
    id: "research-gunshot",
    type: "research",
    title: "AI-Enhanced Gunshot Detection",
    subtitle: "FPGA + LoRaWAN Research Paper",
    date: "2024",
    description:
      "Co-authored research on an FPGA-based gunshot detection system using AI audio classification and LoRaWAN for long-range alert transmission. Focused on real-time edge inference for public safety applications.",
    images: [
      "/placeholders/research-cert.jpg",
      "/placeholders/research-paper.png"
    ],
    imageLayout: "stacked",
    links: [
      { label: "View Paper", url: "https://drive.google.com/file/d/15cxBEyVHpIcFsSsw1yxudnPI_EkajQc_/view", icon: "document" }
    ]
  }
];
