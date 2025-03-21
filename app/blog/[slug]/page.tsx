import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache, PropsWithChildren } from "react";
import { getAllBlogs, getBlogFromSlug } from "~/lib/markdown";

const getBlogFromSlugCache = cache(getBlogFromSlug);

export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const { slug } = params;

  const res = await getBlogFromSlugCache(slug);
  if (!res) notFound();
  const { content } = res;
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold font-mono tracking-tighter dark:text-neutral-300 text-neutral-700">
          {res.frontmatter.title}
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400 -mt-1 lowercase">
          {new Date(res.frontmatter.published).toDateString()}
        </p>
      </div>
      <Typography>{content}</Typography>
    </>
  );
}

function Typography({ children }: PropsWithChildren) {
  return (
    <div className="text-inherit dark:text-neutral-300 prose-headings:font-mono prose-headings:font-semibold prose-headings:dark:text-neutral-300 prose-headings:text-neutral-700 text-neutral-700 prose prose-sm  prose-neutral dark:prose-invert dark:prose-pre:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-950 prose-pre:prose-code:bg-neutral-50 prose-pre:bg-neutral-50 prose-pre:font-mono prose-code:font-mono prose-code:font-thin  prose-code:text-xs underline-offset-2 prose-code:leading-[1.4rem] dark:prose-code:text-neutral-300 prose-code:text-neutral-700 prose-code:py-[0.0991rem] prose-code:px-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-img:rounded-md prose-pre:border dark:prose-pre:border-neutral-800  min-w-full prose-img:mx-auto mt-7 prose-strong:text-inherit">
      {children}
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.frontmatter.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

  const blog = await getBlogFromSlugCache(slug);
  if (!blog) return {};
  const ogImage = `https://nisabmohd.vercel.app/og?title=${encodeURIComponent(
    blog.frontmatter.title
  )}`;
  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
    openGraph: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      type: "article",
      publishedTime: new Date(blog.frontmatter.published).toDateString(),
      url: `https://nisabmohd.vercel.app/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      images: [ogImage],
    },
  };
}
