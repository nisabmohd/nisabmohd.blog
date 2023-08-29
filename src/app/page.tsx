import { readMDX } from "@/lib/utils";
import {} from "rehype-pretty-code";

async function getMarkdown() {
  return await readMDX();
}

export async function generateMetadata() {
  const { frontmatter } = await getMarkdown();
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function page() {
  const { content } = await getMarkdown();
  return (
    <div className="w-[35%] m-auto h-screen py-5 prose prose-sm prose-neutral max-[1020px]:w-[85%] max-[500px]:w-[95%]">
      {content}
    </div>
  );
}
