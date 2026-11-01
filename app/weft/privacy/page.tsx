import type { Metadata } from "next";
import { PrivacyPage } from "@/components/app-page";
import { weft } from "@/lib/apps";

// The policy text is PRIVACY.md in github.com/nisabmohd/weft, rebuilt at most once an hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Weft privacy policy",
  description: "How Weft: Habit Tracker, by mid apps, handles your data, including the optional Google Drive backup.",
  icons: { icon: weft.icon },
  openGraph: { title: "Weft privacy policy", url: "/weft/privacy", type: "article" },
};

export default function WeftPrivacy() {
  return <PrivacyPage app={weft} name="Weft" />;
}
