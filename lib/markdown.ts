import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { components } from "~/components/markdown-custom";
import { visit } from "unist-util-visit";

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
            rehypePlugins: [
              preProcess,
              rehypeCodeTitles,
              rehypePrism,
              postProcess,
            ],
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

// for copying the code in pre
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};
