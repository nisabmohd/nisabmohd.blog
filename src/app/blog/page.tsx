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
      (item) =>
        item.description.toLowerCase().includes(key.toLowerCase()) ||
        item.title.toLowerCase().includes(key.toLowerCase())
    );
  }
  return (
    <div className="flex flex-col gap-4 pt-2">
      <h1 className="text-2xl font-semibold mt-3 -mb-2">Blog</h1>
      <p className="text-md dark:text-neutral-400 text-neutral-500">
        Explore a collection of Nisab blogs.
      </p>
      <SearchBar />
      <div className="grid gap-10 sm:grid-cols-2 pt-4 mb-8">
        {metadatas.map(({ description, slug, title, image, published }) => (
          <BlogCard
            key={slug}
            slug={slug}
            description={description}
            title={title}
            image={image}
            date={published}
          />
        ))}
      </div>
    </div>
  );
}
