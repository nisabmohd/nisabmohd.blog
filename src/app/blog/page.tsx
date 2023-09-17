import BlogCard from "@/components/blog-card";
import type { Metadata } from "next";
import { getAllMetaData } from "@/lib/markdown";
import SearchBar from "@/components/search";

export const metadata: Metadata = {
  title: "All blogs",
  description: "List of all blogs from Nisab Mohd",
};

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div className="flex flex-col gap-4 pt-2">
      <SearchBar />
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
