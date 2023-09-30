import BlogCard from "@/components/blog-card";
import { getAllMetaData } from "@/lib/md";

export default async function Home() {
  const metadatas = await getAllMetaData();

  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">Latest</h1>
        <p className="text-muted-foreground">
          Explore a collection of personal blogs chronicling my coding journey
          and experiences, challenges, and solutions.
        </p>
      </div>
      <div className="flex flex-col gap-12 mt-8">
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
