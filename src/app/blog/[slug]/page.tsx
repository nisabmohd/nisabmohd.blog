import MarkdownSlider from "@/components/md-prev-next";
import { readMDX } from "@/lib/md";
import { notFound } from "next/navigation";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const md = await readMDX(slug);
  if (!md) return notFound();

  return (
    <div className="flex flex-col items-center">
      <div className="prose prose-md font-mono dark:prose-invert prose-slate prose-code:text-[14px] prose-code:bg-zinc-900 prose-pre:bg-zinc-900 max-[500px]:max-w-xs max-w-sm sm:max-w-prose">
        <h1>{md.current.frontmatter.title}</h1>
        {md.current.content}
        <MarkdownSlider previous={md.previous} next={md.next} />
      </div>
    </div>
  );
}
