import { MDXFrontmatter, getAllBlogs, getBlogFromSlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { Suspense, cache } from "react";
import Views from "./views";

const cachedGetMdx = cache(getBlogFromSlug);

type PageProps = {
  params: {
    slug: string;
  };
};

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
      <div className="prose dark:prose-invert prose-neutral py-8 dark:prose-code:text-zinc-200 prose-code:text-zinc-800 dark:prose-code:bg-stone-900 dark:prose-pre:bg-stone-900 prose-code:bg-zinc-50 prose-pre:bg-zinc-50 prose-pre:font-mono">
        {content}
      </div>
    </div>
  );
}

function FrontMatter({ published, title, slug }: MDXFrontmatter) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-semibold mb-2 sm:max-w-[70%] max-w-[99%]">
        {title}
      </h3>
      <div className="flex flex-row items-center justify-between">
        <p>{new Date(published).toDateString()}</p>
        <Suspense fallback={<span></span>}>
          <Views slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
