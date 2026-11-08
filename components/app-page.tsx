import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { linkIcons } from "@/components/icons";
import type { ProjectLink } from "@/lib/data";
import {
  appIconUrl,
  formatReleaseDate,
  formatSize,
  getReleases,
  getScreenshots,
  getShortDescription,
  renderGithubMarkdown,
} from "@/lib/github";

// The page for one of my apps (e.g. /weft and /weft/privacy): a back link, the app's icon and
// name, "by mid apps" and a line of facts, its links as pills, then the text in the article style,
// and the mid apps developer row at the end. Store listings and Google's OAuth consent screen link
// here, so each app has a home page and a privacy policy on a domain I own.
//
// The icon, version, size, screenshots, What's new and description come from the app's GitHub repo
// (its store listing and releases), so a release updates the page by itself.

/** My developer name on the stores and in the apps' About screens. */
export const midApps = {
  name: "mid apps",
  person: "Mohd. Nisab",
  email: "hello.midapps@gmail.com",
  mark: "/mid-apps.svg",
};

export type AppInfo = {
  /** URL segment: /{slug} and /{slug}/privacy */
  slug: string;
  /** GitHub "owner/name". Its store listing (icon, screenshots, notes), releases and PRIVACY.md feed the pages. */
  repo: string;
  /** As in the store listing, e.g. "Weft: Habit Tracker" */
  title: string;
  /** The logo's background colour; tints the What's new card */
  color: string;
  links: ProjectLink[];
};

/** Title, the store listing's one-line description and its icon, for an app page's metadata. */
export async function appMetadata(app: AppInfo): Promise<Metadata> {
  const description = await getShortDescription(app.repo);
  return {
    title: app.title,
    description,
    icons: { icon: appIconUrl(app.repo) },
    openGraph: { title: app.title, description, url: `/${app.slug}`, type: "website" },
  };
}

/** The latest release's version and download size, then the fixed facts. */
async function appFacts(app: AppInfo) {
  const [latest] = await getReleases(app.repo);
  return [
    "Android",
    latest && `v${latest.version}`,
    latest?.apkSize && formatSize(latest.apkSize),
    "Free and open source",
    "GPL-3.0",
  ].filter((m): m is string => Boolean(m));
}

export async function AppHeader({
  app,
  heading,
  back,
}: {
  app: AppInfo;
  heading?: string;
  back: { href: string; label: string };
}) {
  const facts = await appFacts(app);
  return (
    <>
      <Link href={back.href} className="back">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 8H3M7 4 3 8l4 4" />
        </svg>
        {back.label}
      </Link>
      <div className="art-head app-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="app-icon" src={appIconUrl(app.repo)} alt={`${app.title} logo`} width={64} height={64} />
        <h1>{heading ?? app.title}</h1>
        <span className="app-by">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={midApps.mark} alt="" width={18} height={18} />
          by {midApps.name}
        </span>
        <div className="art-meta">
          {facts.map((m, i) => (
            <span key={m}>
              {i > 0 && <span className="sep">·</span>}
              {m}
            </span>
          ))}
        </div>
        <span className="card-links">
          {app.links.map((l) => {
            const Icon = linkIcons[l.kind];
            return l.soon || !l.url ? (
              <span key={l.label} className="pill soon">
                <Icon />
                {l.label}
                <em>Soon</em>
              </span>
            ) : (
              <a key={l.label} className="pill" href={l.url}>
                <Icon />
                {l.label}
              </a>
            );
          })}
        </span>
      </div>
    </>
  );
}

/**
 * The store listing's phone screenshots, in a row that scrolls sideways with about three in view.
 * They're 1080 × 1920 PNGs on GitHub; next/image serves them resized.
 */
export async function Screens({ app }: { app: AppInfo }) {
  const shots = await getScreenshots(app.repo);
  if (!shots.length) return null;
  const name = app.title.split(":")[0];
  return (
    <div className="app-shots" tabIndex={0} aria-label="Screenshots, scroll sideways for more">
      {shots.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${name} screenshot ${i + 1} of ${shots.length}`}
          width={1080}
          height={1920}
          sizes="(max-width: 600px) 44vw, 200px"
          priority={i < 3}
        />
      ))}
    </div>
  );
}

/** Line icons for the highlights, drawn on a 24 px grid. */
const highlightIcons = {
  partial: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" stroke="none" />
    </>
  ),
  alarm: (
    <>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 9.5V13l2.2 2M4.5 4.5 2.5 6.5M19.5 4.5l2 2" />
    </>
  ),
  note: (
    <>
      <path d="M6 3.5h8.5L18 7v13.5H6z" />
      <path d="M9 11.5h6M9 15h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5.5 6v5.5c0 4 2.8 7.3 6.5 8.8 3.7-1.5 6.5-4.8 6.5-8.8V6z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  message: (
    <>
      <path d="M4 5h16v11H9.5L5 19.5V16H4z" />
      <path d="M8 10.5h8" />
    </>
  ),
  bank: <path d="M3.5 9 12 4.5 20.5 9M6 10.5v7M10 10.5v7M14 10.5v7M18 10.5v7M3.5 20h17" />,
  wallet: (
    <>
      <path d="M4 7.5h14.5a1.5 1.5 0 0 1 1.5 1.5v9.5a1.5 1.5 0 0 1-1.5 1.5H4z" />
      <path d="M4 7.5V6a1.5 1.5 0 0 1 1.5-1.5H16v3" />
      <circle cx="16" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
};

/** What sets the app apart: icon rows in the app's colour, two across on wide screens. */
export function Highlights({
  app,
  items,
}: {
  app: AppInfo;
  items: { icon: keyof typeof highlightIcons; title: string; text: string }[];
}) {
  return (
    <ul className="app-highlights" style={{ "--app": app.color } as React.CSSProperties}>
      {items.map((h) => (
        <li key={h.title} className="hl">
          <span className="hl-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {highlightIcons[h.icon]}
            </svg>
          </span>
          <strong>{h.title}</strong>
          <span className="hl-text">{h.text}</span>
        </li>
      ))}
    </ul>
  );
}

/** Text with `code` spans, as release notes write file names. */
function withCode(text: string) {
  return text.split(/`([^`]+)`/).map((part, i) => (i % 2 ? <code key={i}>{part}</code> : part));
}

/**
 * The latest release from GitHub and the others in its minor version (1.6.1 and 1.6.0), each with
 * its store notes, so the card follows every release without editing this site.
 */
export async function WhatsNew({ app }: { app: AppInfo }) {
  const releases = await getReleases(app.repo);
  if (!releases.length) return null;
  const minor = releases[0].version.split(".").slice(0, 2).join(".");
  return (
    <section
      className="whats-new"
      aria-labelledby="whats-new"
      style={{ "--app": app.color } as React.CSSProperties}
    >
      <div className="wn-top">
        <span className="wn-tag">New</span>
        <h2 id="whats-new">What&apos;s new in {releases.length > 1 ? minor : releases[0].version}</h2>
      </div>
      {releases.map((r) => (
        <div key={r.version} className="wn-release">
          <a className="wn-date" href={r.url}>
            {r.version} · {formatReleaseDate(r.date)}
          </a>
          <ul>
            {r.notes.map((n, i) => (
              <li key={i}>{withCode(n)}</li>
            ))}
          </ul>
        </div>
      ))}
      <a className="wn-more" href={`https://github.com/${app.repo}/releases`}>
        All releases
      </a>
    </section>
  );
}

/** The developer row at the end of an app's pages: the mid apps mark, the name and the contact. */
export function DeveloperRow() {
  return (
    <a className="dev-row" href={`mailto:${midApps.email}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={midApps.mark} alt="mid apps logo" width={44} height={44} />
      <span className="dev-text">
        <span className="dev-name">{midApps.name}</span>
        <span className="dev-line">
          {midApps.person} · {midApps.email}
        </span>
      </span>
    </a>
  );
}

/**
 * An app's privacy page: this site's header and developer row around PRIVACY.md from the app's
 * GitHub repo, so the policy is edited in one place.
 */
export async function PrivacyPage({ app, name }: { app: AppInfo; name: string }) {
  const policy = await renderGithubMarkdown(app.repo, "PRIVACY.md");
  return (
    <main>
      <AppHeader app={app} heading={`${name} privacy policy`} back={{ href: `/${app.slug}`, label: name }} />
      <article className="prose">{policy}</article>
      <DeveloperRow />
    </main>
  );
}
