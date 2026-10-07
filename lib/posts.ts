import { cache } from "react";
import { docs, Fmt, getBlogSlugFromHref } from "@/ariadocs";

export type Post = {
  slug: string;
  title: string;
  description: string;
  published: Date;
  readMinutes: number;
};

function readingTime(raw: string) {
  const body = raw.replace(/^---[\s\S]*?---/, "").replace(/```[\s\S]*?```/g, " ");
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const getPost = cache(async (slug: string): Promise<Post> => {
  const [fmt, raw] = await Promise.all([
    docs.getFrontmatter<Fmt>({ slug }),
    docs.read({ slug }),
  ]);
  return {
    slug,
    title: fmt.title,
    description: fmt.description,
    published: new Date(Number(fmt.published)),
    readMinutes: readingTime(raw),
  };
});

export const getPosts = cache(async (): Promise<Post[]> => {
  const paths = await docs.getPagePaths();
  const posts = await Promise.all(
    paths.map((href) => getPost(getBlogSlugFromHref(href))),
  );
  return posts.sort((a, b) => b.published.getTime() - a.published.getTime());
});

export function formatDate(date: Date, withYear = true) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    ...(withYear && { year: "numeric" }),
    timeZone: "UTC",
  });
}
