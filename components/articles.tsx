import Link from "next/link";
import { getAllBlogs } from "~/lib/markdown";

export default async function Articles() {
  const blogs = await getAllBlogs();
  return (
    <>
      <ul className="flex flex-col gap-1.5">
        {blogs.map((blog) => (
          <Link
            key={blog.frontmatter.slug}
            className="link"
            href={`/${blog.frontmatter.slug}`}
          >
            {blog.frontmatter.title}
          </Link>
        ))}
      </ul>
    </>
  );
}
