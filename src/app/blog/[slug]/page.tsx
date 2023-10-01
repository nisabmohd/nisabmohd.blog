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
      <div className="prose prose-md font-mono dark:prose-invert prose-slate prose-code:text-[14px] dark:prose-code:text-zinc-200 prose-code:text-zinc-800 dark:prose-code:bg-zinc-900 dark:prose-pre:bg-zinc-900 prose-code:bg-zinc-50 prose-pre:bg-zinc-50 max-[500px]:max-w-xs max-w-sm sm:max-w-prose">
        <div className="border-b-2 mb-8 pb-8">
          <h1 className="mb-1 font-normal text-3xl">
            {md.current.frontmatter.title}
          </h1>
          <span className=" text-muted-foreground w-[100%] mx-auto">
            {new Date(md.current.frontmatter.published).toDateString()} -{" "}
            {md.current.frontmatter.author}
          </span>
        </div>

        {md.current.content}
        <MarkdownSlider previous={md.previous} next={md.next} />
      </div>
    </div>
  );
}
