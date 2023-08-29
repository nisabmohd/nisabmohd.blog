import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const options = {
  theme: "material-theme-darker",
  keepBackground: false,
};

export async function readMDX() {
  const contentDir = path.join(process.cwd(), "src/content");
  const fileContent = await fs.readFile(contentDir + "/post.mdx", "utf8");
  return await compileMDX<MDXFrontmatter>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, options]],
      },
    },
  });
}
