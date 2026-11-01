import type { AppInfo } from "@/components/app-page";

// My apps' pages (/{slug} and /{slug}/privacy). The privacy page renders PRIVACY.md from the
// app's GitHub repo, so the policy is edited there.

export const weft: AppInfo = {
  slug: "weft",
  repo: "nisabmohd/weft",
  title: "Weft: Habit Tracker",
  icon: "/weft/icon.svg",
  meta: ["Android", "Free and open source", "GPL-3.0"],
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
  icon: "/burrow/icon.svg",
  meta: ["Android", "Free and open source", "GPL-3.0"],
  links: [
    { kind: "playstore", label: "Play Store", soon: true },
    { kind: "github", label: "GitHub", url: "https://github.com/nisabmohd/burrow" },
    { kind: "website", label: "Privacy policy", url: "/burrow/privacy" },
  ],
};
