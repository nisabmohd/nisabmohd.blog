import BlogCard from "@/components/blog-card";
import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { getAllMetaData } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "All blogs",
  description: "List of all blogs from Nisab Mohd",
};

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div className="flex flex-col gap-4 pt-2">
      <input
        type="text"
        className="w-full bg-transparent"
        placeholder="search blog ..."
      />
      <div className="flex flex-col gap-6 pt-2">
        {metadatas.map(({ description, slug, title, views }) => (
          <BlogCard
            key={slug}
            slug={slug}
            description={description}
            title={title}
            views={views}
          />
        ))}
      </div>
    </div>
  );
}
