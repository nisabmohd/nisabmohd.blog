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
import { burrow } from "@/lib/apps";

// The icon, facts, screenshots, What's new and description come from github.com/nisabmohd/burrow,
// rebuilt at most once an hour. The intro, highlights and feature list are written here.
export const revalidate = 3600;

export const generateMetadata = () => appMetadata(burrow);

export default function BurrowPage() {
  return (
    <main>
      <AppHeader app={burrow} back={{ href: "/#projects", label: "All projects" }} />
      <article className="prose">
        <p>
          <strong>Burrow</strong> is a private expense tracker for Android, made
          by {midApps.name}. Pay the way you always do: Burrow records the
          payment from your bank&apos;s message, reminds you of bills and shows
          what is left of your month. It works without an account, and your
          data stays on your phone.
        </p>

        <Screens app={burrow} />

        <Highlights
          app={burrow}
          items={[
            {
              icon: "message",
              title: "Payments record themselves",
              text: "Burrow reads bank SMS and payment app notifications. One tap on its notification saves the payment with its category.",
            },
            {
              icon: "bank",
              title: "Works with any bank",
              text: "Rules for the big banks in India, the UAE and the UK are built in. For any other bank, teach it a message once by tapping the amount.",
            },
            {
              icon: "wallet",
              title: "Safe to spend today",
              text: "Today shows what is left of your monthly budget, and how much you can spend today after the bills still due.",
            },
            {
              icon: "shield",
              title: "Your money stays on your phone",
              text: "No account, no ads, no analytics. One-time passwords and offers are skipped, and message text is deleted after 30 days.",
            },
          ]}
        />

        <WhatsNew app={burrow} />

        <h2>Everything it does</h2>

        <h3>Recording payments</h3>
        <ul>
          <li>
            When a bank SMS or payment app notification comes in, Burrow shows
            the payment with two likely categories. Tap one to save it, or Edit
            to change it first. It can also save payments by itself.
          </li>
          <li>
            It learns the category you pick most for each payee, and words in
            the message help too: &quot;petrol&quot;, &quot;medicines&quot;,
            &quot;Swiggy&quot;.
          </li>
          <li>Rename a payee once (&quot;thirdwave@okicici&quot; to &quot;Third Wave Coffee&quot;) and later payments use that name.</li>
          <li>A payment that matches a bill due in the next few days marks that bill paid.</li>
          <li>The same payment from an SMS and an app notification is saved once.</li>
          <li>
            Payments you didn&apos;t answer wait in To review. Messages it
            couldn&apos;t read wait in their own list, where you teach each
            format once by tapping the amount, the payee and the account.
          </li>
          <li>Rules read any language and number format. Share yours as a file, or import packs other people made.</li>
          <li>
            Adding by hand is quick too: favourites like &quot;₹20 Chai&quot;
            save in one tap, recent payments fill the form, and there&apos;s a
            Quick Settings tile and app icon shortcuts.
          </li>
        </ul>

        <h3>Today</h3>
        <ul>
          <li>What is left of your monthly budget, how much is safe to spend today, and the bills coming up this week.</li>
          <li>Cards you can reorder or hide: this week&apos;s spending, the next bill, net worth, top category, a goal, money in and out.</li>
          <li>Home screen widgets for what&apos;s left and safe to spend, Add expense and Next bill.</li>
          <li>A Sunday review: the week&apos;s spending, payments to check and the bills ahead, in about 30 seconds.</li>
        </ul>

        <h3>Bills, budgets and goals</h3>
        <ul>
          <li>
            Bills, subscriptions and EMIs in one Coming up list, grouped into
            overdue, this week, this month and later. Swipe right to mark one
            paid, left to skip it.
          </li>
          <li>Bills repeat weekly, monthly or yearly, with a reminder at the time you choose.</li>
          <li>Payments dated ahead are added on their day, with a notification.</li>
          <li>A monthly budget and one per category, with alerts at 80% and 100%. Your month can start on payday.</li>
          <li>Goals with a target and a date; add money as you save.</li>
        </ul>

        <h3>Accounts</h3>
        <ul>
          <li>Bank accounts, credit cards, cash and wallets, loans and savings, with your net worth.</li>
          <li>
            Credit cards show the statement and due date. Pay the statement
            amount or everything since, and cards on one credit line can share
            a limit.
          </li>
          <li>Loans show what is left to pay and the next EMIs. Fixed deposits remind you a week before they mature.</li>
          <li>Keep track of money you lent or borrowed.</li>
        </ul>

        <h3>Looking back</h3>
        <ul>
          <li>
            Insights for any dates: spending against the period before, your
            average a day, the biggest payment, spending by category, busiest
            day, no-spend days, top payees and a month heatmap.
          </li>
          <li>Search every payment and filter by account, category or dates.</li>
          <li>Split a payment across categories, add a refund, attach a receipt, add notes and tags.</li>
          <li>Import from Cashew, Walnut, Money Manager or any spreadsheet, and check everything before it is saved. Export a CSV any time.</li>
        </ul>

        <h3>Make it yours</h3>
        <ul>
          <li>Lock the app with a PIN or fingerprint, and hide amounts on screen.</li>
          <li>Your currency, number and date format, plus other currencies at exchange rates you set.</li>
          <li>Light or dark, colours from your wallpaper, four fonts and a text size.</li>
          <li>English, Hindi, Spanish, German, French, Portuguese (Brazil) and Japanese.</li>
        </ul>

        <h2>Your data</h2>
        <p>
          Burrow has no account, no ads and no analytics. It reads only
          messages from banks and notifications from payment apps, skips
          one-time passwords and offers, and deletes message text after 30
          days; the payment itself stays. Everything is processed and stored on
          your phone.
        </p>
        <p>
          The F‑Droid version has no internet permission at all. The Google
          Play and GitHub versions go online only for Google Drive backup, if
          you turn it on, and the GitHub version also checks GitHub for
          updates.
        </p>
        <p>
          Backups are encrypted with a password you choose and saved to a
          folder you pick or your own Google Drive. The details are in the{" "}
          <Link href="/burrow/privacy">privacy policy</Link>.
        </p>

        <h2>Free and open source</h2>
        <p>
          Burrow is free under the GNU GPL v3. The code, issues and releases
          are on <a href="https://github.com/nisabmohd/burrow">GitHub</a>, and
          it runs on Android 8.0 and later. It is coming to Google Play soon.
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
