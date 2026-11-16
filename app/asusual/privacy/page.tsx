import type { Metadata } from "next";
import { PrivacyPage } from "@/components/app-page";
import { appIconUrl } from "@/lib/github";
import { asusual } from "@/lib/apps";

// The policy text is PRIVACY.md in github.com/nisabmohd/asusual, rebuilt at most once an hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Asusual privacy policy",
  description: "How Asusual: Habit Tracker, by mid apps, handles your data, including the optional Google Drive backup.",
  icons: { icon: appIconUrl(asusual.repo) },
  openGraph: { title: "Asusual privacy policy", url: "/asusual/privacy", type: "article" },
};

export default function AsusualPrivacy() {
  return <PrivacyPage app={asusual} name="Asusual" />;
}
