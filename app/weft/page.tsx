import Link from "next/link";
import {
  AppHeader,
  DeveloperRow,
  Highlights,
  Screens,
  WhatsNew,
  appMetadata,
  midApps,
} from "@/components/app-page";
import { weft } from "@/lib/apps";

// The icon, facts, screenshots, What's new and description come from github.com/nisabmohd/weft,
// rebuilt at most once an hour. The intro, highlights and feature list are written here.
export const revalidate = 3600;

export const generateMetadata = () => appMetadata(weft);

export default function WeftPage() {
  return (
    <main>
      <AppHeader app={weft} back={{ href: "/#projects", label: "All projects" }} />
      <article className="prose">
        <p>
          <strong>Weft</strong> is a habit tracker for Android, made by{" "}
          {midApps.name}. Check off habits with a swipe, log part of a day when
          you only got halfway, and write a line about how it went. It works
          offline and doesn&apos;t need an account. Weft was called Sprout
          until November 2026.
        </p>

        <Screens app={weft} />

        <Highlights
          app={weft}
          items={[
            {
              icon: "partial",
              title: "Half a day still counts",
              text: "Read 15 of 20 pages? Log 15. Days you mark Skip are left out of your score, so one bad day doesn't sink the week.",
            },
            {
              icon: "alarm",
              title: "Alarms you answer",
              text: "A reminder can ring full screen, even on the lock screen, until you slide it done, log an amount or skip.",
            },
            {
              icon: "note",
              title: "A journal tied to your habits",
              text: "Every note belongs to a habit and a day. Writing suggestions come from your own notes, worked out on the phone.",
            },
            {
              icon: "shield",
              title: "Nothing to sign up for",
              text: "No account, no ads, no analytics. The F‑Droid version has no internet permission at all.",
            },
          ]}
        />

        <WhatsNew app={weft} />

        <h2>Everything it does</h2>

        <h3>Checking off habits</h3>
        <ul>
          <li>Each day, a habit is Done, Partial or Skipped. Swipe right for Done, left to skip, or tap the circle.</li>
          <li>Press and hold to log an amount, like 15 of 20 pages or 30 of 45 minutes, and add a note in the same sheet.</li>
          <li>Every change can be undone, and swiping the other way clears a swipe.</li>
          <li>
            A habit is a simple check-off, or measured in any unit: pages,
            steps, minutes, hours. You set how far each step moves.
          </li>
          <li>Pick the days a habit is due, one of 29 icons and a colour. Reorder, archive or delete habits in Manage habits.</li>
          <li>The first time you open Weft, you try every gesture on a practice card and start from five suggested habits or your own.</li>
        </ul>

        <h3>Seeing your progress</h3>
        <ul>
          <li>The Habits tab shows this week for every habit, or the last 26 weeks as a heatmap with current and best streaks.</li>
          <li>Each habit has its own page: days done this month, best streak, its notes, and a month calendar where you can fix any past day.</li>
          <li>
            Insights covers any dates, for all habits or the ones you pick: your
            average score, done and partial counts, a bar for each weekday, and
            every habit ranked by score or by streak.
          </li>
          <li>A Patterns card names your best weekday and the habit that slipped most.</li>
        </ul>

        <h3>Journal</h3>
        <ul>
          <li>A note belongs to a habit and a day. The Journal lists them newest first, filtered by habit or dates.</li>
          <li>
            While you write, Weft suggests a way to start that fits the day, the
            rest of a sentence you&apos;ve written before, and similar notes.
            It works from a fixed list of phrases and your own notes, on the
            phone. You can turn it off or clear what it learned.
          </li>
          <li>A habit can ask for a note when you skip it, and at 9 PM Weft reminds you about any you haven&apos;t written.</li>
          <li>Press and hold a note to edit, share or delete it.</li>
        </ul>

        <h3>Reminders</h3>
        <ul>
          <li>One reminder per habit on its days, as a quiet notification or a full-screen alarm.</li>
          <li>
            The alarm uses your alarm sound and vibration, and the power or a
            volume button silences it. Left alone, it stops after 10 minutes
            and leaves a &quot;missed&quot; notification.
          </li>
          <li>A habit you&apos;ve already done or skipped doesn&apos;t ring, and logging it anywhere stops its alarm.</li>
        </ul>

        <h3>On your home screen</h3>
        <ul>
          <li>
            Four widgets: Today (a progress ring, with circles to mark habits
            done), This week, a slim Today strip and Streak. They follow your
            wallpaper colours and dark mode.
          </li>
          <li>Press and hold the app icon for Add note and New habit.</li>
        </ul>

        <h3>Backup</h3>
        <ul>
          <li>Export everything, settings included, to a JSON file and import it again, or export a CSV for a spreadsheet.</li>
          <li>
            Back up to your own Google Drive by hand, or every night while
            charging, weekly or monthly, on Wi-Fi only if you like. Restore any
            of the last 10 backups.
          </li>
        </ul>

        <h3>Make it yours</h3>
        <ul>
          <li>Light or dark, colours from your wallpaper or one of seven accent colours.</li>
          <li>Five fonts, including Atkinson Hyperlegible for easy reading, and a text size.</li>
          <li>English, Hindi, Spanish, German, French, Portuguese (Brazil) and Japanese, set apart from your phone&apos;s language.</li>
          <li>The first day of the week and a default reminder time.</li>
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
          on <a href="https://github.com/nisabmohd/weft">GitHub</a>. Besides
          Google Play, the{" "}
          <a href="https://github.com/nisabmohd/weft/releases/latest">releases page</a>{" "}
          has an APK that updates itself, and a version with no Google code
          and no network access for F-Droid and Obtainium. It runs on Android
          8.0 and later.
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
