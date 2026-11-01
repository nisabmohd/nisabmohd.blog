import Link from "next/link";
import { linkIcons } from "@/components/icons";
import type { ProjectLink } from "@/lib/data";
import { renderGithubMarkdown } from "@/lib/github";

// The page for one of my apps (e.g. /weft and /weft/privacy): a back link, the app's icon and
// name, "by mid apps" and a line of facts, its links as pills, then the text in the article style,
// and the mid apps developer row at the end. Store listings and Google's OAuth consent screen link
// here, so each app has a home page and a privacy policy on a domain I own.

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
  /** GitHub "owner/name"; its PRIVACY.md is the privacy page */
  repo: string;
  /** As in the store listing, e.g. "Weft: Habit Tracker" */
  title: string;
  icon: string;
  meta: string[];
  links: ProjectLink[];
};

export function AppHeader({
  app,
  heading,
  back,
}: {
  app: AppInfo;
  heading?: string;
  back: { href: string; label: string };
}) {
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
        <img className="app-icon" src={app.icon} alt={`${app.title} logo`} width={64} height={64} />
        <h1>{heading ?? app.title}</h1>
        <span className="app-by">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={midApps.mark} alt="" width={18} height={18} />
          by {midApps.name}
        </span>
        <div className="art-meta">
          {app.meta.map((m, i) => (
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

/** Phone screenshots, three to a row. `size` is the images' pixel size, for the aspect ratio. */
export function Screens({
  shots,
  size = [540, 1200],
}: {
  shots: { src: string; alt: string }[];
  size?: [number, number];
}) {
  return (
    <div className="app-shots">
      {shots.map((s) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={s.src} src={s.src} alt={s.alt} width={size[0]} height={size[1]} loading="lazy" />
      ))}
    </div>
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
