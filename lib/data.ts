// Site content. Everything shown on the home page that isn't an article lives here.

export const site = {
  name: "Nisab Mohd",
  url: "https://nisabmohd.com",
  domain: "nisabmohd.com",
  tagline:
    "Full-stack engineer building with AI. I make products that feel fast and look quiet.",
  shortTagline: "Full-stack engineer building with AI.",
  description:
    "Full-stack engineer building with AI. Projects, experience and writing on React, Next.js, TypeScript and more.",
  status: "Currently building Burrow",
  ogTags: ["React", "Next.js", "Node.js", "Android", "AI"],
};

export const socials = [
  { name: "GitHub", url: "https://github.com/nisabmohd" },
  { name: "X", url: "https://x.com/MohdNisab" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nisabmohd/" },
  { name: "Résumé", url: "https://drive.google.com/file/d/1Isd8OhDX00_eMq_903WOUaPoKLDQsVS-/view?usp=sharing" },
];

export type ProjectLink = {
  kind: "playstore" | "github" | "website";
  label: string;
  url?: string;
  /** Not released yet: rendered as a non-clickable "Soon" pill. */
  soon?: boolean;
};

export type Project = {
  id: "unpeep" | "asusual" | "burrow" | "ariadocs";
  name: string;
  /** Shown when GitHub can't be reached; otherwise `live` builds it. */
  stat: string;
  /** Builds the stat from GitHub: the latest release's version and APK size, or the star count. */
  live?: { release: string } | { stars: string };
  description: string;
  tags: string[];
  links: ProjectLink[];
  palette: string;
};

export const projects: Project[] = [
  {
    id: "unpeep",
    name: "Unpeep",
    stat: "Android",
    live: { release: "nisabmohd/unpeep" },
    description:
      "Checks a hotel room, a rental or a trial room for hidden cameras and trackers: the Wi-Fi, setup hotspots, Bluetooth, lens and infrared finders, and a magnet check. It says plainly what it checked and what it couldn't.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "GPL-3.0"],
    links: [
      { kind: "playstore", label: "Play Store", soon: true },
      { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/unpeep" },
      { kind: "website", label: "About & privacy", url: "/unpeep" },
    ],
    palette: "Unpeep · Hidden camera finder",
  },
  {
    id: "burrow",
    name: "Burrow",
    stat: "Android",
    live: { release: "nisabmohd/burrow" },
    description:
      "A private expense tracker that records payments by itself from bank SMS and payment notifications, and shows what is safe to spend today. Bills, budgets, goals and cards, with no account and no analytics.",
    tags: ["Kotlin", "Jetpack Compose", "Material You", "GPL-3.0"],
    links: [
      { kind: "playstore", label: "Play Store", soon: true },
      { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/burrow" },
      { kind: "website", label: "About & privacy", url: "/burrow" },
    ],
    palette: "Burrow · Expense tracker",
  },
  {
    id: "asusual",
    name: "Asusual",
    stat: "Android",
    live: { release: "nisabmohd/asusual" },
    description:
      "A small, open-source habit tracker by mid apps (formerly Weft, and Sprout before that). Swipe to check off, log part of a day, keep a journal, and set alarms that ring until you answer. Works offline, with no account.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "GPL-3.0"],
    links: [
      {
        kind: "playstore",
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=app.sprout.habits",
      },
      {
        kind: "github",
        label: "GitHub",
        url: "https://github.com/nisabmohd/asusual",
      },
      { kind: "website", label: "About & privacy", url: "/asusual" },
    ],
    palette: "Asusual · Habit tracker",
  },
  {
    id: "ariadocs",
    name: "AriaDocs",
    stat: "★ 400+",
    live: { stars: "nisabmohd/Aria-Docs" },
    description:
      "Build docs sites and API references from MDX and OpenAPI, with shadcn-style components. Works with Next.js, React Router and TanStack Start.",
    tags: ["React", "MDX", "OpenAPI", "MIT"],
    links: [
      { kind: "website", label: "Website", url: "https://ariadocs.vercel.app" },
      { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/Aria-Docs" },
    ],
    palette: "AriaDocs · Docs toolkit",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  description?: string;
  stack?: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    company: "Juspay",
    role: "Software Engineer",
    period: "Jun 2025 — Now",
    description:
      "Building web and mobile apps on the frontend, from architecture to shipped product.",
    stack: ["React", "TypeScript", "Next.js", "Android", "AI"],
    current: true,
  },
  {
    company: "ValueLabs",
    role: "Software Engineer",
    period: "Dec 2022 — Feb 2025",
    description:
      "Full-stack engineering across frontend and backend, from UIs to scalable REST APIs.",
    stack: ["React", "TypeScript", "Node.js", "Java", "Spring Boot"],
  },
];
