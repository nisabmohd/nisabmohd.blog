import type { AppInfo } from "@/components/app-page";

// My apps' pages (/{slug} and /{slug}/privacy). Everything the repo already has comes from GitHub:
// the store listing's icon, screenshots, description and release notes, the latest release's
// version and size, and PRIVACY.md for the privacy page.

// Called Weft until November 2026 (and Sprout before that); /weft redirects here (next.config.ts).
export const asusual: AppInfo = {
  slug: "asusual",
  repo: "nisabmohd/asusual",
  title: "Asusual: Habit Tracker",
  color: "#2B6F52",
  links: [
    {
      kind: "playstore",
      label: "Play Store",
      url: "https://play.google.com/store/apps/details?id=app.sprout.habits",
    },
    { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/asusual" },
    { kind: "website", label: "Privacy policy", url: "/asusual/privacy" },
  ],
};

export const burrow: AppInfo = {
  slug: "burrow",
  repo: "nisabmohd/burrow",
  title: "Burrow: Expense Tracker",
  color: "#A3294A",
  links: [
    { kind: "playstore", label: "Play Store", soon: true },
    { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/burrow" },
    { kind: "website", label: "Privacy policy", url: "/burrow/privacy" },
  ],
};

export const unpeep: AppInfo = {
  slug: "unpeep",
  repo: "nisabmohd/unpeep",
  title: "Unpeep: Hidden Camera Finder",
  color: "#173782",
  links: [
    { kind: "playstore", label: "Play Store", soon: true },
    { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/unpeep" },
    { kind: "website", label: "Privacy policy", url: "/unpeep/privacy" },
  ],
};
