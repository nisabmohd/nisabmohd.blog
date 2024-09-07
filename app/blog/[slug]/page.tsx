import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { getAllBlogs, getBlogFromSlug } from "~/lib/markdown";
import { formatDate } from "~/lib/util";

export default async function BlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res = await getBlogFromSlug(slug);
  if (!res) notFound();
  const { content } = res;
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-extrabold">{res.frontmatter.title}</h2>
        <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">
          {formatDate(res.frontmatter.published)}
        </p>
      </div>
      <Typography>{content}</Typography>
    </>
  );
}

function Typography({ children }: PropsWithChildren) {
  return (
    <div className="text-inherit prose prose-neutral dark:prose-invert  dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-pre:font-code prose-code:font-code prose-headings:font-medium underline-offset-2 prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-black prose-code:p-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-img:rounded-md prose-img:border prose-pre:border dark:prose-pre:border-neutral-800 dark:prose-img:border-neutral-800">
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

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogFromSlug(slug);
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
