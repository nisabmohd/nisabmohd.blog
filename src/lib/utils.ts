import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function readMDX() {
  const contentDir = path.join(process.cwd(), "src/content");
  const fileContent = await fs.readFile(contentDir + "/post.mdx", "utf8");
  const serialized = await serialize(fileContent, {
    parseFrontmatter: true,
  });
  const cleanedMarkdown = fileContent.replace(/---[\s\S]*?---/, "");
  const frontmatter = serialized.frontmatter as MDXFrontmatter;
  return { content: cleanedMarkdown, frontmatter };
}
