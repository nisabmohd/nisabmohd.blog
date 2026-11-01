import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader, DeveloperRow, Screens, midApps } from "@/components/app-page";
import { burrow } from "@/lib/apps";

const description =
  "Burrow is a private, open-source expense tracker for Android by mid apps. It records payments by itself from bank messages, and never sends your data anywhere.";

export const metadata: Metadata = {
  title: burrow.title,
  description,
  icons: { icon: burrow.icon },
  openGraph: { title: burrow.title, description, url: "/burrow", type: "website" },
};

export default function BurrowPage() {
  return (
    <main>
      <AppHeader app={burrow} back={{ href: "/#projects", label: "All projects" }} />
      <article className="prose">
        <p>
          <strong>Burrow</strong> is a private expense tracker for Android, made
          by {midApps.name}. Pay the way you always do: Burrow records the
          payment from your bank&apos;s message, reminds you of bills and shows
          what is left of your month. It works without an account and never
          sends your data anywhere.
        </p>

        <Screens
          size={[540, 960]}
          shots={[
            { src: "/burrow/today.webp", alt: "Today: what is left of the monthly budget, bills coming up and spending this week" },
            { src: "/burrow/capture.webp", alt: "A payment found in a bank message, saved with one tap on a category" },
            { src: "/burrow/activity.webp", alt: "Activity: every payment, with search and a chart of the last 14 days" },
          ]}
        />

        <h2>What it does</h2>
        <ul>
          <li>
            When your bank or payment app tells you about a payment, one tap
            saves it with the right category. Burrow learns the category you
            usually pick for each payee.
          </li>
          <li>Message rules work for any bank, region and language; teach a new format by tapping the amount.</li>
          <li>One calm Today screen: what is left of your monthly budget, and how much you can spend a day.</li>
          <li>Bills, subscriptions and EMIs with reminders before they are due; payments that match a bill mark it paid.</li>
          <li>Budgets, goals, accounts, cards, loans and deposits, with net worth.</li>
          <li>Insights: spending by category, busiest days and a month heatmap.</li>
          <li>Your currency and number format, light and dark themes, four fonts, English and Hindi.</li>
        </ul>

        <h2>Your data</h2>
        <p>
          Burrow has no account, no sync, no ads and no analytics. The Google
          Play and F-Droid builds have no internet permission at all.
          Everything, including the bank messages it reads, is processed and
          stored on your phone.
        </p>
        <p>
          Backups are encrypted with a password you choose and saved to a
          folder you pick, and you can lock the app with a PIN or fingerprint.
          The details are in the <Link href="/burrow/privacy">privacy policy</Link>.
        </p>

        <h2>Free and open source</h2>
        <p>
          Burrow is free under the GNU GPL v3. The code, issues and releases
          are on <a href="https://github.com/nisabmohd/burrow">GitHub</a>. It is
          coming to Google Play soon.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, ideas or bugs: write to{" "}
          <a href={`mailto:${midApps.email}`}>{midApps.email}</a>, or{" "}
          <a href="https://github.com/nisabmohd/burrow/issues">open an issue</a>.
        </p>
      </article>
      <DeveloperRow />
    </main>
  );
}
