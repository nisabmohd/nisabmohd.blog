import { MDXFrontmatter, getAllBlogs, getBlogFromSlug } from "@/lib/markdown";
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
    <div>
      <FrontMatter {...frontmatter} />
      <div className="prose dark:text-neutral-300 dark:prose-invert prose-neutral py-8 dark:prose-code:text-zinc-50/95 prose-code:text-[#354150] dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutal-100 prose-pre:bg-neutral-100 prose-pre:font-code prose-headings:font-medium underline-offset-2 prose-blockquote:font-thin">
        {content}
      </div>
    </div>
  );
}

function FrontMatter({ published, title, description }: MDXFrontmatter) {
  return (
    <div className="flex flex-col">
      <p className="text-muted-foreground text-[15px]">
        {formatDateToReadableString(new Date(published))}
      </p>
      <h3 className="text-2xl mt-1 font-medium mb-2">{title}</h3>
    </div>
  );
}

function formatDateToReadableString(date: Date): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[date.getMonth()];
  const dayNumber = date.getDate();
  const yearNumber = date.getFullYear();

  return `${monthName} ${dayNumber}, ${yearNumber}`;
}
