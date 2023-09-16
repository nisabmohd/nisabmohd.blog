import BlogCard from "@/components/blog-card";
import { getAllMetaData } from "@/lib/utils";
import Link from "next/link";

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div className="flex flex-col gap-6">
      {metadatas.map(({ description, slug, title }) => (
        <BlogCard
          key={slug}
          slug={slug}
          description={description}
          title={title}
        />
      ))}
    </div>
  );
}
