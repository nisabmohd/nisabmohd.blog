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
  search?: string;
  page?: number;
  tag?: string;
};

export async function getAllMetaData({
  page = 1,
  search = "",
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
      });
      return frontmatter;
    })
  );
  (await result).sort((a, b) => b.published - a.published);
  return result;
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

export async function getTagPosts(tag: string) {
  const metas = await getAllMetaData();
  return metas.filter((meta) => meta.tags.includes(tag));
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
  const index = (await result).findIndex(
    (item) => item.frontmatter.slug == slug
  );
  if (index == -1) return null;
  const previous = (await result)[index - 1] ?? null;
  const current = (await result)[index];
  const next = (await result)[index + 1] ?? null;
  return { previous: previous?.frontmatter, current, next: next?.frontmatter };
}
