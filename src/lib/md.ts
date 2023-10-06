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

export type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
  author: string;
  published: number;
  tags: string[];
};

export const COUNT = 1;

type Pagination = {
  page?: number;
  tag?: string;
  count?: number;
};

const components = {
  Highlight,
  HTMLTag,
  NoWrap,
};

export async function getAllMetaData({
  page = 1,
  tag = "",
  count,
}: Pagination = {}) {
  const contentDir = path.join(process.cwd(), "src/content/blog");
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

  if (tag) {
    const tagRes = (await result).filter((meta) => meta.tags.includes(tag));
    return {
      totalPages: Math.ceil(tagRes.length / COUNT),
      currentPage: page,
      data: tagRes.slice((page - 1) * COUNT, page * COUNT),
    };
  }
  const total = Math.ceil((await result).length / COUNT);
  const internalCount = count ?? total;
  const paginatedResult = {
    totalPages: total,
    currentPage: page,
    data: (await result).slice(
      (page - 1) * internalCount,
      page * internalCount
    ),
  };
  return paginatedResult;
}

export async function getAllTags() {
  const metas = (await getAllMetaData()).data;
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
  const result = Promise.all(
    files.map(async (file) => {
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
      return parsed;
    })
  );
  const index = (await result)
    .sort((a, b) => a.frontmatter.published - b.frontmatter.published)
    .findIndex((item) => item.frontmatter.slug == slug);
  if (index == -1) return null;
  const previous = (await result)[index + 1] ?? null;
  const current = (await result)[index];
  const next = (await result)[index - 1] ?? null;
  return { previous: previous?.frontmatter, current, next: next?.frontmatter };
}

function estimateReadingTime(text: string) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeMinutes;
}
