import type { AppInfo } from "@/components/app-page";

// My apps' pages (/{slug} and /{slug}/privacy). The privacy text itself is in each app's
// privacy page; keep it in sync with PRIVACY.md in the app's repo.

export const weft: AppInfo = {
  slug: "weft",
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
