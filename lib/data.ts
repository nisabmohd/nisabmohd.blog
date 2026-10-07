// Site content. Everything shown on the home page that isn't an article lives here.

export const site = {
  name: "Nisab Mohd",
  url: "https://nisabmohd.vercel.app",
  domain: "nisabmohd.vercel.app",
  tagline:
    "Full-stack engineer building with AI. I make products that feel fast and look quiet.",
  shortTagline: "Full-stack engineer building with AI.",
  description:
    "Full-stack engineer building with AI. Projects, experience and writing on React, Next.js, TypeScript and more.",
  status: "Currently building Sprout",
  ogTags: ["React", "Next.js", "Node.js", "Android", "AI"],
};

export const socials = [
  { name: "GitHub", url: "https://github.com/nisabmohd" },
  { name: "X", url: "https://x.com/MohdNisab" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nisabmohd/" },
  { name: "Résumé", url: "https://drive.google.com/file/d/1qFDL9Ye15ChlmuKzAGpW2i7kuDT0KKSg/view?usp=sharing" },
];

export type ProjectLink = {
  kind: "playstore" | "github" | "website";
  label: string;
  url?: string;
  /** Not released yet: rendered as a non-clickable "Soon" pill. */
  soon?: boolean;
};

export type Project = {
  id: "nisab" | "sprout" | "ariadocs";
  name: string;
  stat: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  palette: string;
};

export const projects: Project[] = [
  {
    id: "nisab",
    name: "Nisab",
    stat: "Android",
    description:
      "A Quran app for reading and listening, with translations and a clean, distraction-free reader. Built with Material 3, with no ads.",
    tags: ["Kotlin", "Material 3", "Audio", "No ads"],
    links: [
      { kind: "playstore", label: "Play Store", soon: true },
    ],
    palette: "Nisab · Quran app",
  },
  {
    id: "sprout",
    name: "Sprout",
    stat: "Android · <3 MB",
    description:
      "A small, open-source habit tracker. Works offline with no account, with heatmaps, streaks, a journal and home-screen widgets.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "GPL-3.0"],
    links: [
      { kind: "playstore", label: "Play Store", soon: true },
      {
        kind: "github",
        label: "GitHub",
        url: "https://github.com/nisabmohd/sprout-habit-tracker",
      },
    ],
    palette: "Sprout · Habit tracker",
  },
  {
    id: "ariadocs",
    name: "AriaDocs",
    stat: "★ 400+",
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
