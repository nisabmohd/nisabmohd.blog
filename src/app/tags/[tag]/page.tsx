import BlogCard from "@/components/blog-card";
import { getTagPosts } from "@/lib/md";

export default async function TagSpecific({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const posts = await getTagPosts(tag);
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">
          {" "}
          Tag : <span className="capitalize text-muted-foreground">{tag}</span>
        </h1>
        <p className="text-muted-foreground">
          Explore a collection of personal blogs chronicling my coding journey
          and experiences, challenges, and solutions.
        </p>
      </div>
      <div className="flex flex-col gap-16 mt-8">
        {posts.map((metadata) => (
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
