import BlogCard from "@/components/blog-card";
import { getAllMetaData, getAllTags } from "@/lib/markdown";

function capitalizeFirstLetter(data: string) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export async function generateStaticParams() {
  const metas = (await getAllTags()).keys();
  return Array.from(metas).map((item) => ({
    tag: item,
  }));
}

export async function generateMetadata({
  params: { tag },
}: {
  params: { tag: string };
}) {
  return {
    title: "Nisab Mohd | Tags - " + capitalizeFirstLetter(tag),
    description:
      "Explore a collection of my personal blogs chronicling my coding journey and experiences by blog tag " +
      capitalizeFirstLetter(tag) +
      ".",
  };
}

export default async function TagSpecific({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const posts = await getAllMetaData({
    tag,
  });
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-2xl mb-1">
          {" "}
          Tag : <span className="capitalize text-muted-foreground">{tag}</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Explore a collection of my personal blogs chronicling my coding
          journey and experiences by blog tag{" "}
          <span className="font-semibold capitalize text-blue-400">{tag}</span>.
        </p>
      </div>
      <div className="flex flex-col gap-16 mt-8 mb-16">
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
