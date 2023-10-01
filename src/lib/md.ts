import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

export type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
  author: string;
  published: number;
  tags: string[];
};

const COUNT = 5;

type Pagination = {
  page?: number;
  tag?: string;
};

export async function getAllMetaData({ page = 1, tag = "" }: Pagination = {}) {
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
  const paginatedResult = {
    totalPages: Math.ceil((await result).length / COUNT),
    currentPage: page,
    data: (await result).slice((page - 1) * COUNT, page * COUNT),
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
