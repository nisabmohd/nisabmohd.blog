import Link from "next/link";
import { getAllBlogs } from "~/lib/markdown";

export default async function Articles() {
  const blogs = await getAllBlogs();
  return (
    <>
      <ul className="flex flex-col list-disc list gap-1.5 prose dark:prose-invert prose-sm">
        {blogs.map((blog) => (
          <Link
            key={blog.frontmatter.slug}
            className="dark:text-neutral-300 text-neutral-700 no-underline"
            href={`/blog/${blog.frontmatter.slug}`}
          >
            {blog.frontmatter.title}
          </Link>
        ))}
      </ul>
    </>
  );
}
