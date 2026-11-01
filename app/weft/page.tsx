import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader, DeveloperRow, Screens, midApps } from "@/components/app-page";
import { weft } from "@/lib/apps";

const description =
  "Weft is a small, open-source habit tracker for Android by mid apps. Your habits and notes stay on your phone: no account, no ads, no tracking.";

export const metadata: Metadata = {
  title: weft.title,
  description,
  icons: { icon: weft.icon },
  openGraph: { title: weft.title, description, url: "/weft", type: "website" },
};

export default function WeftPage() {
  return (
    <main>
      <AppHeader app={weft} back={{ href: "/#projects", label: "All projects" }} />
      <article className="prose">
        <p>
          <strong>Weft</strong> is a small habit tracker for Android, made by{" "}
          {midApps.name}. Check off your habits, log part of a day, and keep a
          short note. Everything stays on your phone. The app is about 3 MB
          and works without an account or an internet connection. Weft was
          called Sprout until November 2026.
        </p>

        <Screens
          shots={[
            { src: "/weft/today.webp", alt: "Today: each habit as a card, with a score for the day" },
            { src: "/weft/journal.webp", alt: "Journal: notes grouped by day" },
            { src: "/weft/insights.webp", alt: "Insights: scores by day and by habit" },
          ]}
        />

        <h2>What it does</h2>
        <ul>
          <li>
            Each day, every habit is Done, Partial or Skipped. Swipe right for
            Done, left for Skip, or press and hold to log an amount, like 15 of
            20 pages.
          </li>
          <li>See your week at a glance, or the last 26 weeks as a heatmap, with streaks.</li>
          <li>Keep a Journal: a short note for any habit and day.</li>
          <li>Insights for any dates: scores by weekday and by habit.</li>
          <li>Reminders, four home-screen widgets, light and dark themes, five fonts and seven languages.</li>
          <li>Export to a JSON or CSV file, and optional backup to your own Google Drive.</li>
        </ul>

        <h2>Your data</h2>
        <p>
          Weft has no account, no ads, no analytics and no server. Your habits,
          check-ins and notes are stored only on your phone.
        </p>
        <p>
          <strong>Google Drive backup</strong> is optional and off until you tap
          Connect Google Drive (Google Play and GitHub versions). Weft then asks
          Google for two things:
        </p>
        <ul>
          <li>
            <strong>Its own hidden folder in your Google Drive</strong> (
            <code>drive.appdata</code>), to keep your last 10 backups there.
            Weft can&apos;t see any other file in your Drive.
          </li>
          <li>
            <strong>Your email address</strong>, to show which account the
            backups go to.
          </li>
        </ul>
        <p>
          Backups go straight from your phone to your own Drive; {midApps.name}{" "}
          never receives them. You can disconnect, or delete the backups, at
          any time from Weft&apos;s Backup &amp; restore screen. The details
          are in the <Link href="/weft/privacy">privacy policy</Link>.
        </p>

        <h2>Free and open source</h2>
        <p>
          Weft is free under the GNU GPL v3. The code, issues and releases are
          on <a href="https://github.com/nisabmohd/weft">GitHub</a>, and the
          APK is on the{" "}
          <a href="https://github.com/nisabmohd/weft/releases/latest">releases page</a>.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, ideas or bugs: write to{" "}
          <a href={`mailto:${midApps.email}`}>{midApps.email}</a>, or{" "}
          <a href="https://github.com/nisabmohd/weft/issues">open an issue</a>.
        </p>
      </article>
      <DeveloperRow />
    </main>
  );
}
