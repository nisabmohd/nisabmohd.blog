import { getAllBlogs } from "@/lib/markdown";
import Blog from "./blog";

export default async function Blogs({ limit }: { limit?: number }) {
  let blogs = await getAllBlogs();
  if (limit) blogs = blogs.slice(0, limit);

  return (
    <div className="flex flex-col gap-5">
      {blogs.map((blog) => (
        <Blog key={blog.frontmatter.slug} {...blog.frontmatter} />
      ))}
    </div>
  );
}
