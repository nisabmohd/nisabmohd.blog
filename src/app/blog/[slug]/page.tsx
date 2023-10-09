import MarkdownSlider from "@/components/md-prev-next";
import { getAllMetaData, readMDX } from "@/lib/md";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await getAllMetaData();

  return data.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const md = await readMDX(slug);
  if (!md) return null;
  return {
    title: md.current.frontmatter.title,
    description: md.current.frontmatter.description,
  };
}

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const md = await readMDX(slug);
  if (!md) return notFound();
  return (
    <div className="flex flex-col items-center">
      <div className="prose prose-md font-mono dark:prose-invert prose-slate prose-code:text-[14px] dark:prose-code:text-zinc-200 prose-code:text-zinc-800 dark:prose-code:bg-zinc-900 dark:prose-pre:bg-zinc-900 prose-code:bg-zinc-50 prose-pre:bg-zinc-50 max-[500px]:max-w-[100%] max-w-sm sm:max-w-[70%]">
        <div className="border-b-2 mb-8 pb-8">
          <h1 className="mb-1 font-normal text-3xl">
            {md.current.frontmatter.title}
          </h1>
          <span className="text-[14.8px] text-muted-foreground w-[100%] mx-auto">
            {md.current.timeToRead + " mins read"} -{" "}
            {md.current.frontmatter.author} -{" "}
            {new Date(md.current.frontmatter.published).toDateString()}
          </span>
        </div>

        {md.current.content}
        <MarkdownSlider previous={md.previous} next={md.next} />
      </div>
    </div>
  );
}
