import BlogCard from "@/components/blog-card";
import Pagination from "@/components/pagination";
import { COUNT, getAllMetaData } from "@/lib/md";

export default async function page({
  searchParams: { page = "1" },
}: {
  searchParams: { page?: string };
}) {
  const metadatas = await getAllMetaData({
    page: parseInt(page),
    count: COUNT,
  });
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">All Blogs</h1>
        <p className="text-muted-foreground">
          Explore a collection of personal blogs chronicling my coding journey
          and experiences, challenges, and solutions.
        </p>
      </div>
      <div className="flex flex-col gap-16 mt-8 mb-16">
        {metadatas.data.map((metadata) => (
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
      <Pagination
        currentPage={parseInt(page)}
        totalPages={metadatas.totalPages}
        baseUrl="/blog"
      />
    </div>
  );
}
