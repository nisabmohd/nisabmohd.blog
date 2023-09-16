import { readMDX } from "@/lib/utils";
import NotFound from "./not-found";

async function getMarkdown(slug: string) {
  return await readMDX(slug);
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const result = await getMarkdown(slug);
  if (!result) return null;
  const { frontmatter } = result;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const result = await getMarkdown(slug);
  if (!result) return NotFound();

  return (
    <div className="m-auto prose prose-sm dark:prose-invert prose-neutral prose-code:dark:bg-neutral-950 prose-pre:dark:bg-neutral-950   prose-code:bg-neutral-900 prose-pre:bg-neutral-900 prose-pre:rounded-md prose-headings:dark:text-neutral-50 prose-p:dark:text-neutral-100 prose-li:dark:text-neutral-100 prose-ol:dark:text-neutral-100 prose-strong:dark:text-neutral-100 prose-a:dark:text-neutral-100 max-w-none prose-img:m-auto mt-5 pb-6">
      <h1>{result.frontmatter.title}</h1>
      {result.content}
    </div>
  );
}
