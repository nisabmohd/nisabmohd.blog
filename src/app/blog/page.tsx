import BlogCard from "@/components/blog-card";
import { getAllMetaData } from "@/lib/md";

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div className="flex flex-col gap-16">
      {metadatas.map((metadata) => (
        <BlogCard
          key={metadata.slug}
          date={metadata.published}
          title={metadata.title}
          description={metadata.description}
          tags={metadata.tags ?? []}
          slug={metadata.slug}
        />
      ))}
    </div>
  );
}
