import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader, DeveloperRow, midApps } from "@/components/app-page";
import { weft } from "@/lib/apps";

// Same text as PRIVACY.md in github.com/nisabmohd/weft; change both together.

export const metadata: Metadata = {
  title: "Weft privacy policy",
  description: "How Weft: Habit Tracker, by mid apps, handles your data, including the optional Google Drive backup.",
  icons: { icon: weft.icon },
  openGraph: { title: "Weft privacy policy", url: "/weft/privacy", type: "article" },
};

export default function WeftPrivacy() {
  return (
    <main>
      <AppHeader app={weft} heading="Weft privacy policy" back={{ href: "/weft", label: "Weft" }} />
      <article className="prose">
        <p>
          <em>Last updated: 1 November 2026</em>
        </p>
        <p>
          Weft (called Sprout before November 2026) is an open-source habit
          tracker for Android, published by {midApps.person} under the developer
          name <strong>{midApps.name}</strong> (&quot;we&quot;). This policy
          covers the Weft app from Google Play, GitHub Releases and F-Droid.
        </p>

        <h2>What Weft stores</h2>
        <p>
          Your habits, check-ins, notes and settings are stored on your device,
          in the app&apos;s private storage. We don&apos;t run a server and
          never receive this data. In the Google Play and GitHub builds you can
          also choose to keep backups in your own Google Drive (see below).
        </p>

        <h2>What Weft collects and shares</h2>
        <p>
          We collect nothing: Weft has no account, no ads, no analytics and no
          crash reporting, and it doesn&apos;t share data with anyone. The only
          data that leaves your phone is the optional Google Drive backup,
          which goes to your own Google account (Google Play&apos;s Data safety
          section lists it as collected, optional and not shared).
        </p>
        <ul>
          <li>The F-Droid build doesn&apos;t connect to the internet and contains no Google code.</li>
          <li>
            The Google Play build connects to the internet only for Google Drive
            backup, once you connect it (see below). Checking for updates and
            the &quot;Rate on Play Store&quot; card go through the Google Play
            app on your phone, not through Weft.
          </li>
          <li>
            The GitHub build connects to GitHub (<code>api.github.com</code> and
            GitHub&apos;s download servers) to check for a new version of Weft
            and download it; that request contains no personal data. It also
            connects to Google for Google Drive backup, once you connect it.
          </li>
        </ul>

        <h2>Permissions</h2>
        <ul>
          <li><strong>Notifications</strong>: to show the habit reminders you set.</li>
          <li><strong>Alarms &amp; reminders</strong> (exact alarms): optional, so reminders arrive on time.</li>
          <li><strong>Run at startup</strong>: to set your reminders again after the phone restarts.</li>
        </ul>

        <h2>Backups and exports</h2>
        <ul>
          <li>
            <strong>Export</strong> writes a JSON or CSV file wherever you
            choose, using Android&apos;s file picker. What happens to that file
            afterwards is up to you.
          </li>
          <li>
            <strong>Google Drive backup</strong> (Google Play and GitHub builds,
            off until you tap Connect): you pick a Google account and allow Weft
            to use its own hidden folder in that account&apos;s Drive (the{" "}
            <code>drive.appdata</code> permission) and to read the
            account&apos;s email address, which Weft shows on its Backup &amp;
            restore screen. Weft can only see the files it made there, not the
            rest of your Drive. Each backup is the same data as a JSON export
            (your habits, check-ins, notes and settings), compressed, plus your
            phone&apos;s name and the number of habits, so you can tell backups
            apart when restoring. Backups go straight from your phone to your
            Drive, when you tap &quot;Back up now&quot; or on the schedule you
            choose (overnight while charging, on Wi-Fi only unless you turn that
            off). Weft keeps the latest 10 and deletes older ones. Google stores
            them under your Google account and Google&apos;s privacy policy; we
            never receive them.
            <ul>
              <li>
                Weft uses the Google account access only to keep and restore
                these backups and to show the account&apos;s email address. It
                doesn&apos;t use it for ads, doesn&apos;t sell it or share it
                with anyone, and no person reads it. Weft&apos;s use and
                transfer of information received from Google APIs adheres to
                the{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </li>
              <li>
                <strong>Disconnect</strong> stops backups and removes
                Weft&apos;s access to your account; the backups stay in your
                Drive. <strong>Delete backups from Drive</strong> deletes them.
                You can also delete them in Google Drive (Settings → Manage apps
                → Weft → Delete hidden app data) and remove Weft&apos;s access in
                your Google account&apos;s security settings.
              </li>
            </ul>
          </li>
          <li>
            <strong>Android backup</strong>: if your phone&apos;s backup is
            turned on, Android may include Weft&apos;s data in your device
            backup. Google runs that backup under your Google account and its
            own privacy policy. Weft never sees it.
          </li>
        </ul>

        <h2>Deleting your data</h2>
        <p>
          Uninstall Weft, or clear its storage in Android Settings → Apps → Weft
          → Storage. If you used Google Drive backup, also use &quot;Delete
          backups from Drive&quot; (or delete Weft&apos;s hidden data in Google
          Drive) as described above. Because we hold no copy, there is nothing
          for us to delete on our side.
        </p>

        <h2>Children</h2>
        <p>Weft isn&apos;t directed at children under 13 and collects no data from anyone.</p>

        <h2>Changes</h2>
        <p>If this policy changes, the new version is published at this address with a new date.</p>

        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${midApps.email}`}>{midApps.email}</a>, or open
          an issue at{" "}
          <a href="https://github.com/nisabmohd/weft/issues">github.com/nisabmohd/weft/issues</a>.
          See also the <Link href="/weft">Weft page</Link>.
        </p>
      </article>
      <DeveloperRow />
    </main>
  );
}
