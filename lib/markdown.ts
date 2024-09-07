import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { components } from "~/components/markdown";

export type MDXFrontmatter = {
  title: string;
  slug: string;
  published: number;
  description: string;
};

const BASE_CONTENT_PATH = "content";

export async function getAllBlogs() {
  const contentDir = path.join(process.cwd(), BASE_CONTENT_PATH);
  const files = await fs.readdir(contentDir);
  const resultPromise = Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(contentDir + `/${file}`, "utf8");
      return await compileMDX<MDXFrontmatter>({
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
    })
  );
  const result = await resultPromise;
  result.sort((a, b) => b.frontmatter.published - a.frontmatter.published);
  return result;
}

export async function getBlogFromSlug(slug: string) {
  const allBlogs = await getAllBlogs();
  return allBlogs.find((blog) => blog.frontmatter.slug == slug);
}
