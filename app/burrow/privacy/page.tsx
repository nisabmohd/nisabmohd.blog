import type { Metadata } from "next";
import { PrivacyPage } from "@/components/app-page";
import { burrow } from "@/lib/apps";

// The policy text is PRIVACY.md in github.com/nisabmohd/burrow, rebuilt at most once an hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Burrow privacy policy",
  description: "How Burrow: Expense Tracker, by mid apps, handles your data: it never sends it anywhere.",
  icons: { icon: burrow.icon },
  openGraph: { title: "Burrow privacy policy", url: "/burrow/privacy", type: "article" },
};

export default function BurrowPrivacy() {
  return <PrivacyPage app={burrow} name="Burrow" />;
}
