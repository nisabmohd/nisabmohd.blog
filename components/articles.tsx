import Link from "next/link";
import { getAllBlogs } from "@/lib/markdown";

export default async function Articles() {
  const blogs = await getAllBlogs();
  return (
    <>
      <ul className="flex flex-col gap-1.5">
        {blogs.map((blog) => (
          <li key={blog.frontmatter.slug}>
            <Link className="link" href={`/${blog.frontmatter.slug}`}>
              {blog.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
