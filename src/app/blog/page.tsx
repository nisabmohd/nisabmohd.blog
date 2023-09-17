import BlogCard from "@/components/blog-card";
import type { Metadata } from "next";
import { getAllMetaData } from "@/lib/markdown";
import SearchBar from "@/components/search";

export const metadata: Metadata = {
  title: "All blogs",
  description: "List of all blogs from Nisab Mohd",
};

export default async function page({
  searchParams: { key },
}: {
  searchParams: { key: string };
}) {
  let metadatas = await getAllMetaData();
  if (key) {
    metadatas = metadatas.filter(
      (item) => item.description.includes(key) || item.title.includes(key)
    );
  }
  return (
    <div className="flex flex-col gap-4 pt-2">
      <h1 className="text-xl font-semibold mt-3 mb-2">All blogs</h1>
      <SearchBar />
      <div className="flex flex-col gap-8 pt-2">
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
