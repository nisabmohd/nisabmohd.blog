import { parseMdx } from "@ariadocs/mdx";
import { remarkGfm } from "@ariadocs/mdx/plugins";
import { components } from "@/components/markdown";

/** How often (seconds) pages built from GitHub data are rebuilt. */
export const githubRevalidate = 3600;

/** Raises the API's hourly limit from 60 to 5,000 when set (no scopes needed). */
const apiHeaders: HeadersInit | undefined = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : undefined;

/** A file in a repo at a branch, tag or "HEAD" (the default branch). */
export const rawUrl = (repo: string, ref: string, path: string) =>
  `https://raw.githubusercontent.com/${repo}/${ref}/${path}`;

/**
 * Fetches a URL, cached for `githubRevalidate`. Throws if GitHub doesn't answer: at build time
 * that fails the build, and on a background rebuild Next keeps serving the last good version.
 * With `optional`, a 404 returns null instead (for files that only some versions have).
 */
async function get(url: string, opts: { optional?: boolean } = {}) {
  const res = await fetch(url, {
    headers: url.startsWith("https://api.github.com") ? apiHeaders : undefined,
    next: { revalidate: githubRevalidate },
  });
  if (opts.optional && res.status === 404) return null;
  if (!res.ok) throw new Error(`${url}: ${res.status} ${res.statusText}`);
  return res;
}

/**
 * Fetches a Markdown file from a GitHub repo's default branch and renders it with the site's
 * prose components. The file's own `# Title` is dropped, because the page shows its own heading.
 */
export async function renderGithubMarkdown(repo: string, path: string) {
  const res = (await get(rawUrl(repo, "HEAD", path)))!;
  const source = (await res.text()).replace(/^\s*# .*\n/, "");
  const { MDX } = await parseMdx({
    source,
    blockJs: true,
    remarkPlugins: [remarkGfm],
    components,
  });
  return MDX;
}

// ── Android apps: store listing files (fastlane) and GitHub releases ──

/** Where the apps keep their store listing: text, icon, screenshots and per-version notes. */
const LISTING = "fastlane/metadata/android/en-US";

export type Release = {
  /** "1.6.1", from the tag "v1.6.1" */
  version: string;
  date: Date;
  url: string;
  /** Size in bytes of the APK most people download (the GitHub build) */
  apkSize?: number;
  /** One line per change */
  notes: string[];
};

type GithubRelease = {
  tag_name: string;
  published_at: string;
  html_url: string;
  body: string | null;
  draft: boolean;
  prerelease: boolean;
  assets: { name: string; size: number }[];
};

/** Bullet lines ("- ", "* " or "• ") of a changelog, without the bullets. */
function bullets(text: string) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^[-*•]\s+/.test(l))
    .map((l) => l.replace(/^[-*•]\s+/, ""));
}

/**
 * A release's notes. Prefers the short, plain store notes for that version
 * (`changelogs/<versionCode>.txt`, the Play Store's "What's new"); falls back to the bullet lines
 * of the GitHub release text when the version has none.
 */
async function releaseNotes(repo: string, r: GithubRelease) {
  const gradle = await get(rawUrl(repo, r.tag_name, "app/build.gradle.kts"), { optional: true });
  const code = gradle && (await gradle.text()).match(/versionCode\s*=\s*(\d+)/)?.[1];
  if (code) {
    const store = await get(rawUrl(repo, r.tag_name, `${LISTING}/changelogs/${code}.txt`), {
      optional: true,
    });
    if (store) {
      const lines = bullets(await store.text());
      if (lines.length) return lines;
    }
  }
  return bullets(r.body ?? "");
}

/**
 * The latest release and the others in its minor version (1.6.1 and 1.6.0), newest first, so a
 * fix release doesn't hide what the minor version added.
 */
export async function getReleases(repo: string): Promise<Release[]> {
  const res = (await get(`https://api.github.com/repos/${repo}/releases?per_page=10`))!;
  const all = ((await res.json()) as GithubRelease[]).filter((r) => !r.draft && !r.prerelease);
  if (!all.length) return [];
  const minor = (tag: string) => tag.replace(/^v/, "").split(".").slice(0, 2).join(".");
  const group = all.filter((r) => minor(r.tag_name) === minor(all[0].tag_name));
  return Promise.all(
    group.map(async (r) => {
      const apk =
        r.assets.find((a) => a.name.endsWith("-github.apk")) ??
        r.assets.find((a) => a.name.endsWith(".apk"));
      return {
        version: r.tag_name.replace(/^v/, ""),
        date: new Date(r.published_at),
        url: r.html_url,
        apkSize: apk?.size,
        notes: await releaseNotes(repo, r),
      };
    }),
  );
}

/** The phone screenshots from the store listing on the default branch, in order. */
export async function getScreenshots(repo: string) {
  const dir = `${LISTING}/images/phoneScreenshots`;
  const res = (await get(`https://api.github.com/repos/${repo}/contents/${dir}?ref=HEAD`))!;
  const files = ((await res.json()) as { name: string; type: string }[])
    .filter((f) => f.type === "file" && /\.(png|jpe?g|webp)$/i.test(f.name))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  return files.map((f) => rawUrl(repo, "HEAD", `${dir}/${f.name}`));
}

/** The store listing's one-line description. */
export async function getShortDescription(repo: string) {
  const res = (await get(rawUrl(repo, "HEAD", `${LISTING}/short_description.txt`)))!;
  return (await res.text()).trim();
}

/** The store listing's 512 px icon (square; the page rounds its corners). */
export const appIconUrl = (repo: string) => rawUrl(repo, "HEAD", `${LISTING}/images/icon.png`);

/** A repo's star count. */
export async function getStars(repo: string) {
  const res = (await get(`https://api.github.com/repos/${repo}`))!;
  return ((await res.json()) as { stargazers_count: number }).stargazers_count;
}

/** "3.3 MB" */
export const formatSize = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

/** "8 Nov 2026" */
export const formatReleaseDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
