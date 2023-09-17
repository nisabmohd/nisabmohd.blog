import { incrementViews, readMDX } from "@/lib/markdown";
import NotFound from "./not-found";
import { Circle, Clock, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

async function getMarkdown(slug: string) {
  return await readMDX(slug);
}

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

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
  incrementViews();
  // TODO:count time to read

  return (
    <div
      className={`m-auto prose prose-md dark:prose-invert prose-neutral prose-code:dark:bg-neutral-950 prose-pre:dark:bg-neutral-950 prose-code:bg-slate-50  prose-pre:bg-slate-50 prose-code:text-black prose-code:dark:text-neutral-200 prose-pre:rounded-md max-w-none prose-img:m-auto mt-5 pb-6 prose-pre:border-[1px] prose-pre:border-gray-100 dark:prose-pre:border-stone-900 prose-code:${poppins.style.fontFamily}`}
    >
      <h1>{result.frontmatter.title}</h1>
      <div className="flex flex-row  justify-between items-center gap-2 text-sm mb-10 dark:text-neutral-300 text-neutral-700">
        <div className="left-side">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/76525761?v=4"
              alt="nisabmohd"
              width={32}
              height={32}
            />

            <span className="text-[12.5px]">
              {result.frontmatter.author} /{" "}
              {new Date(result.frontmatter.published).toDateString()}
            </span>
          </div>
        </div>
        {/* <div className="right-side flex flex-row gap-3 items-center text-[12.5px]">
          <div className="flex flex-row items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
          <Circle className="w-1 h-1" />
          <span>{result.frontmatter.views} views</span>
        </div> */}
      </div>
      {result.content}
      <Link
        href="/blog"
        className=" mt-14 flex flex-row items-center justify-center pt-5 gap-1 text-sm"
      >
        <ChevronLeft className="w-4 h-4" /> <span>See all posts</span>
      </Link>
    </div>
  );
}
