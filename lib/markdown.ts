import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { AuthorProps as AuthorType } from "@/components/author";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

// custom components imports
import Highlight from "@/components/md/highlight";
import HTMLTag from "@/components/md/tag";
import NoWrap from "@/components/md/no-wrap";
import Note from "@/components/md/note";
import Link from "next/link";
import StaticImg from "@/components/md/static-img";
import Snippet from "@/components/md/snippet";

export type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
  author: AuthorType[];
  published: number;
  tags: string[];
};

export type MDXProjectFrontmatter = {
  title: string;
  description: string;
  published: number;
  tags: string[];
  githubUrl: string;
  imagePath?: string;
};

const BASE_CONTENT_PATH = "contents";

type Filters = {
  page: number;
  count: number;
  tag?: string;
};

const components = {
  Highlight,
  HTMLTag,
  NoWrap,
  Note,
  Link,
  StaticImg,
  Snippet,
};

function paginate<T>(array: T[], size: number, page: number) {
  return array.slice((page - 1) * size, page * size);
}

export async function getAllMetaData<T = MDXFrontmatter>(
  articleType: "blog" | "project",
  filters: Filters
) {
  const contentFolder = articleType == "blog" ? "/blogs" : "/projects";
  const contentDir = path.join(
    process.cwd(),
    BASE_CONTENT_PATH + contentFolder
  );
  const files = await fs.readdir(contentDir);
  const resultPromise = Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(contentDir + `/${file}`, "utf8");
      const { frontmatter } = await compileMDX<
        MDXFrontmatter | MDXProjectFrontmatter
      >({
        source: fileContent,
        options: {
          parseFrontmatter: true,
        },
        components,
      });
      return frontmatter;
    })
  );
  let result = await resultPromise;
  result.sort((a, b) => b.published - a.published);
  if (filters.tag) {
    result = result.filter((item) => item.tags.includes(filters.tag!));
  }
  const totalPages = Math.ceil(result.length / filters.count);
  result = paginate(result, filters.count, filters.page);
  return { data: result as T[], totalPages };
}

export async function readBlogMDX(slug: string) {
  const contentDir = path.join(process.cwd(), BASE_CONTENT_PATH, "/blogs");
  const files = await fs.readdir(contentDir);
  const resultPromise = Promise.all(
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
  const result = await resultPromise;
  const index = result
    .sort((a, b) => a.frontmatter.published - b.frontmatter.published)
    .findIndex((item) => item.frontmatter.slug == slug);
  if (index == -1) return null;
  const previous = result[index + 1] ?? null;
  const current = result[index];
  const next = result[index - 1] ?? null;
  return { previous: previous?.frontmatter, current, next: next?.frontmatter };
}

type Mapper = {
  title: string;
  count: number;
};

export async function getAllBlogTags() {
  const { data: metas } = await getAllMetaData("blog", {
    page: 1,
    count: Infinity,
  });
  const map = new Map<string, number>();
  metas
    .map((meta) => meta.tags)
    .flat()
    .forEach((item) => {
      map.set(item, (map.get(item) ?? 0) + 1);
    });
  const result: Mapper[] = [];
  map.forEach((v, k) => {
    result.push({
      title: k,
      count: v,
    });
  });
  return result;
}
