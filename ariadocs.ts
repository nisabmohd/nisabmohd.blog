import { createDocs } from "@ariadocs/mdx";
import {
  remarkGfm,
  rehypePrism,
  rehypeAutolinkHeadings,
  rehypeSlug,
  rehypeCodeTitles,
  rehypeCodeRaw,
} from "@ariadocs/mdx/plugins";
import { components } from "./components/markdown";

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

/**
 * Moves the `div.rehype-code-title` that rehype-code-titles inserts before a
 * <pre> onto the <pre> itself as `data-title`, so the code block can render it
 * in its own header bar.
 */
function rehypeCodeTitleToPre() {
  return (tree: HastNode) => {
    const walk = (node: HastNode) => {
      const kids = node.children;
      if (!kids) return;
      for (let i = 0; i < kids.length; i++) {
        const el = kids[i];
        const cls = el.properties?.className;
        if (
          el.tagName === "div" &&
          Array.isArray(cls) &&
          cls.includes("rehype-code-title")
        ) {
          let j = i + 1;
          while (kids[j]?.type === "text" && !kids[j].value?.trim()) j++;
          const pre = kids[j];
          if (pre?.tagName === "pre") {
            pre.properties = {
              ...pre.properties,
              dataTitle: el.children?.[0]?.value ?? "",
            };
            kids.splice(i, 1);
            i--;
            continue;
          }
        }
        walk(el);
      }
    };
    walk(tree);
  };
}

export const docs = createDocs({
  contentDir: "contents",
  rehypePlugins: [
    rehypeCodeRaw,
    rehypeCodeTitles,
    rehypeCodeTitleToPre,
    rehypePrism,
    rehypeSlug,
    rehypeAutolinkHeadings,
  ],
  remarkPlugins: [remarkGfm],
  components,
});

export type Fmt = {
  title: string;
  description: string;
  published: number;
};

export function getBlogSlugFromHref(href: string) {
  return href.split("/").filter(Boolean)[0];
}
