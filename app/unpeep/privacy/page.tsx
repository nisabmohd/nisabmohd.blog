import type { Metadata } from "next";
import { PrivacyPage } from "@/components/app-page";
import { appIconUrl } from "@/lib/github";
import { unpeep } from "@/lib/apps";

// The policy text is PRIVACY.md in github.com/nisabmohd/unpeep, rebuilt at most once an hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Unpeep privacy policy",
  description: "How Unpeep: Hidden Camera Finder, by mid apps, handles your data: it never sends it anywhere.",
  icons: { icon: appIconUrl(unpeep.repo) },
  openGraph: { title: "Unpeep privacy policy", url: "/unpeep/privacy", type: "article" },
};

export default function UnpeepPrivacy() {
  return <PrivacyPage app={unpeep} name="Unpeep" />;
}
