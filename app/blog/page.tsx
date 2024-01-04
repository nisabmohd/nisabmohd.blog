import { getAllBlogs } from "@/lib/markdown";
import Blog from "./blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd - Blog",
  description:
    "Explore a collection of personal blogs chronicling my coding journey and experiences, filled with insights, challenges, and solutions.",
};

export default async function BlogIndexPage() {
  const blogs = await getAllBlogs();
  return (
    <div className="flex flex-col gap-5">
      {blogs.map(({ frontmatter }) => (
        <Blog key={frontmatter.slug} {...frontmatter} />
      ))}
    </div>
  );
}
