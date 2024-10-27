import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "~/lib/markdown";

export const metadata: Metadata = {
  title: "Blogs | Nisab Mohd",
  description:
    "Explore a collection of personal blogs chronicling my coding journey and experiences, filled with insights, challenges, and solutions.",
};

export default async function BlogMainPage() {
  const blogs = await getAllBlogs();
  return (
    <>
      <h2 className="text-2xl font-semibold">Explore My Blog</h2>
      <ul className="flex flex-col list-disc list sm:px-5 px-3.5 gap-3">
        {blogs.map((blog) => (
          <li
            className="marker:text-neutral-300 dark:marker:text-neutral-700 pl-2"
            key={blog.frontmatter.slug}
          >
            <Link
              className="underline underline-offset-2 font-normal"
              href={`/blog/${blog.frontmatter.slug}`}
            >
              {blog.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
