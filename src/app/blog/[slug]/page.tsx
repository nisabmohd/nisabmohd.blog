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
    <div className="m-auto prose prose-sm dark:prose-invert prose-neutral prose-code:dark:bg-neutral-950 prose-pre:dark:bg-neutral-950 prose-code:bg-slate-50  prose-pre:bg-slate-50 prose-code:text-black prose-code:dark:text-neutral-200 prose-pre:rounded-md max-w-none prose-img:m-auto mt-5 pb-6 prose-pre:border-[1px] prose-pre:border-gray-100 dark:prose-pre:border-stone-900">
      <h1>{result.frontmatter.title}</h1>
      {result.content}
    </div>
  );
}
