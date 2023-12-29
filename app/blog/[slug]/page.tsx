import Author from "@/components/author";
import Comments from "@/components/giscus";
import Header from "@/components/header";
import { getAllMetaData, readBlogMDX } from "@/lib/markdown";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await getAllMetaData("blog", {
    page: 1,
    count: Infinity,
  });
  return data.map((item) => {
    return {
      slug: item.slug,
    };
  });
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const md = await readBlogMDX(slug);
  if (!md) return null;
  return {
    title: md.current.frontmatter.title,
    description: md.current.frontmatter.description,
  };
}

const repo = process.env.REPO_NAME as `${string}/${string}`;
const repoId = process.env.REPO_ID!;
const category = process.env.CATEGORY!;
const categoryId = process.env.CATEGORY_ID!;

export default async function ReadPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await readBlogMDX(slug);
  if (data?.current == null) return notFound();

  return (
    <div>
      <Header
        top={new Date(data.current.frontmatter.published).toDateString()}
        sm={true}
        title={data.current.frontmatter.title}
      />
      <div className="flex md:flex-row flex-col-reverse items-start md:gap-6 gap-4">
        <div className="md:w-[260px] md:min-w-[220px] w-full text-muted-foreground pr-4">
          <div className="author  border-b-[1px] py-6 flex sm:flex-col flex-row sm:gap-3 gap-8 flex-wrap sm:border-t-0 sm:mt-0 mt-8 border-t-[1px]">
            {data.current.frontmatter.author.map((author) => (
              <Author key={author.username} {...author} />
            ))}
          </div>
          <div className="tags py-6 border-b-[1px]">
            <h5 className="font-semibold text-[14.5px]">Tags</h5>
            <div className="flex flex-row flex-wrap gap-2">
              {data.current.frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  className="text-blue-500 capitalize text-[14.5px]"
                  href={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="paginate py-6 flex flex-col gap-5">
            {data.next && (
              <div>
                <h5 className="font-semibold text-[14.5px]">
                  Previous Article
                </h5>
                <Link
                  href={`/blog/${data.next.slug}`}
                  className="text-blue-500 text-[14.5px]"
                >
                  {data.next.title}
                </Link>
              </div>
            )}

            {data.previous && (
              <div>
                <h5 className="font-semibold text-[14.5px]">Next Article</h5>
                <Link
                  href={`/blog/${data.previous.slug}`}
                  className="text-blue-500 text-[14.5px]"
                >
                  {data.previous.title}
                </Link>
              </div>
            )}
          </div>
          <div className="mt-10">
            <Link href="/blog/page/1">
              <span className="flex flex-row items-center gap-2 text-blue-500 ">
                <MoveLeftIcon className="w-4 h-4" /> Back to blog page
              </span>
            </Link>
          </div>
        </div>
        <div className="prose dark:prose-invert prose-neutral py-8 prose-code:text-[13.5px] dark:prose-code:text-zinc-200 prose-code:text-zinc-800 dark:prose-code:bg-zinc-900 dark:prose-pre:bg-zinc-900 prose-code:bg-zinc-50 prose-pre:bg-zinc-50 prose-pre:font-mono max-[650px]:max-w-[100%] pl-1">
          {data.current.content}
          <div className="border-t-[1px] -mt-5 pt-10 max-w-full">
            <Comments
              category={category}
              categoryId={categoryId}
              repo={repo}
              repoId={repoId}
              key={slug}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
