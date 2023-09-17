import BlogCard from "@/components/blog-card";
import { getAllMetaData } from "@/lib/utils";
import type { Metadata } from "next";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "All blogs",
  description: "List of all blogs from Nisab Mohd",
};

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div className="flex flex-col gap-4 pt-2">
      <Input className="h-11" placeholder="Search blog ..." />
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