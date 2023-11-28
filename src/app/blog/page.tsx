import BlogCard from "@/components/blog-card";
import { getAllMetaData } from "@/lib/markdown";

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-2xl mb-1">All Blogs</h1>
        <p className="text-muted-foreground text-base">
          Explore a collection of all my blogs here.
        </p>
      </div>
      <div className="flex flex-col sm:gap-16 gap-10 mt-8 mb-16">
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
    </div>
  );
}
