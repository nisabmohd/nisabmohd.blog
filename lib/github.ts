import { parseMdx } from "@ariadocs/mdx";
import { remarkGfm } from "@ariadocs/mdx/plugins";
import { components } from "@/components/markdown";

/** How often (seconds) pages built from a GitHub file are rebuilt. */
export const githubRevalidate = 3600;

/**
 * Fetches a Markdown file from a GitHub repo's default branch and renders it with the site's
 * prose components. The file's own `# Title` is dropped, because the page shows its own heading.
 * Throws if GitHub doesn't answer: at build time that fails the build, and on a background
 * rebuild Next keeps serving the last good version.
 */
export async function renderGithubMarkdown(repo: string, path: string) {
  const url = `https://raw.githubusercontent.com/${repo}/HEAD/${path}`;
  const res = await fetch(url, { next: { revalidate: githubRevalidate } });
  if (!res.ok) throw new Error(`${url}: ${res.status} ${res.statusText}`);
  const source = (await res.text()).replace(/^\s*# .*\n/, "");
  const { MDX } = await parseMdx({
    source,
    blockJs: true,
    remarkPlugins: [remarkGfm],
    components,
  });
  return MDX;
}
