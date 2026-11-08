import type { AppInfo } from "@/components/app-page";

// My apps' pages (/{slug} and /{slug}/privacy). Everything the repo already has comes from GitHub:
// the store listing's icon, screenshots, description and release notes, the latest release's
// version and size, and PRIVACY.md for the privacy page.

export const weft: AppInfo = {
  slug: "weft",
  repo: "nisabmohd/weft",
  title: "Weft: Habit Tracker",
  color: "#2A6F52",
  links: [
    {
      kind: "playstore",
      label: "Play Store",
      url: "https://play.google.com/store/apps/details?id=app.sprout.habits",
    },
    { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/weft" },
    { kind: "website", label: "Privacy policy", url: "/weft/privacy" },
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
