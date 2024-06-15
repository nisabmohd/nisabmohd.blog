import { MDXFrontmatter, getAllBlogs, getBlogFromSlug } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { cache } from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const cachedGetMdx = cache(getBlogFromSlug);

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
}) {
  const blog = await cachedGetMdx(slug);
  if (!blog) return null;
  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
  };
}

export default async function SpecificBlogPage({
  params: { slug },
}: PageProps) {
  const blog = await cachedGetMdx(slug);
  if (!blog) return notFound();
  const { frontmatter, content } = blog;
  return (
    <div className="text-sm">
      <FrontMatter {...frontmatter} />
      <div className="text-inherit prose prose-neutral dark:prose-invert pt-8 dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-stone-50 prose-pre:bg-stone-50 prose-pre:font-mono prose-headings:font-medium underline-offset-2 prose-code:text-sm prose-code:gap-1 dark:prose-code:text-white prose-code:text-black prose-pre:border ">
        {content}
      </div>
    </div>
  );
}

function FrontMatter({ published, title }: MDXFrontmatter) {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p className="font-sans text-muted-foreground text-[15px]">
        {formatDate(new Date(published))}
      </p>
    </div>
  );
}
