import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

// custom components imports
import Highlight from "@/components/md/highlight";
import HTMLTag from "@/components/md/tag";
import NoWrap from "@/components/md/no-wrap";
import Note from "@/components/md/note";
import Link from "next/link";

export type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
  author: string;
  published: number;
  tags: string[];
  githubUrl?: string;
};

const BASE_CONTENT_PATH = "src/content";

type Pagination = {
  tag?: string;
  filepath?: string;
};

const components = {
  Highlight,
  HTMLTag,
  NoWrap,
  Note,
  Link,
};

export async function getAllMetaData({
  filepath = "/blog",
  tag = "",
}: Pagination = {}) {
  const contentDir = path.join(process.cwd(), BASE_CONTENT_PATH + filepath);
  const files = await fs.readdir(contentDir);
  const result = Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(contentDir + `/${file}`, "utf8");
      const { frontmatter } = await compileMDX<MDXFrontmatter>({
        source: fileContent,
        options: {
          parseFrontmatter: true,
        },
        components,
      });
      return frontmatter;
    })
  );
  (await result).sort((a, b) => b.published - a.published);
  return tag
    ? (await result).filter((item) => item.tags.includes(tag))
    : result;
}

export async function getAllTags() {
  const metas = await getAllMetaData();
  const map = new Map<string, number>();
  metas
    .map((meta) => meta.tags)
    .flat()
    .forEach((item) => {
      map.set(item, (map.get(item) ?? 0) + 1);
    });
  return map;
}

export async function readMDX(slug: string) {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  const files = await fs.readdir(contentDir);
  type ResultType = Awaited<ReturnType<typeof compileMDX<MDXFrontmatter>>> & {
    timeToRead: number;
  };
  let result: Array<ResultType> = [];
  let found = false;
  for (let file of files) {
    if (found) break;
    const fileContent = await fs.readFile(contentDir + `/${file}`, "utf8");
    const parsed = await compileMDX<MDXFrontmatter>({
      source: fileContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypeCodeTitles, rehypePrism],
          remarkPlugins: [remarkGfm],
        },
      },
      components,
    });
    if (parsed.frontmatter.slug == slug) found = true;
    result.push({ ...parsed, timeToRead: estimateReadingTime(fileContent) });
  }

  const index = result.findIndex((item) => item.frontmatter.slug == slug);
  if (index == -1) return null;
  const previous = result[index + 1] ?? null;
  const current = result[index];
  const next = result[index - 1] ?? null;
  return { previous: previous?.frontmatter, current, next: next?.frontmatter };
}

function estimateReadingTime(text: string) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeMinutes;
}
