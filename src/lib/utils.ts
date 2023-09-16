import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
  author: string;
  published: number;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function getTheme() {
  const themeDir = path.join(process.cwd(), "src/lib");
  return await fs.readFile(themeDir + `/theme.json`, "utf8");
}

export async function getAllMetaData() {
  "use server";
  const contentDir = path.join(process.cwd(), "src/content");
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
  return result;
}

export async function readMDX(slug: string) {
  const theme = await getTheme();
  const contentDir = path.join(process.cwd(), "src/content");
  const files = await fs.readdir(contentDir);
  const result = Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(contentDir + `/${file}`, "utf8");
      const parsed = await compileMDX<MDXFrontmatter>({
        source: fileContent,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  keepBackground: false,
                  theme: JSON.parse(theme),
                },
              ],
            ],
            remarkPlugins: [remarkGfm],
          },
        },
      });
      return parsed;
    })
  );
  return (await result).find((item) => item.frontmatter.slug == slug);
}
