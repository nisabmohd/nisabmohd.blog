import { SmallArticle } from "@/components/article";
import BlogIndex from "@/components/blog-index";
import Header from "@/components/header";
import { getAllBlogTags, getAllMetaData } from "@/lib/markdown";

function capitalizeFirstLetter(data: string) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export async function generateStaticParams() {
  const data = await getAllBlogTags();
  return data.map((o) => {
    return {
      tag: o.title,
    };
  });
}

export default async function page({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const { data } = await getAllMetaData("blog", {
    page: 1,
    count: Infinity,
    tag,
  });
  return (
    <div>
      <Header
        title={`Tag : ${capitalizeFirstLetter(tag)}`}
        description={`Explore a collection of my personal blogs by tag ${capitalizeFirstLetter(
          tag
        )}.`}
      />
      <div className="flex flex-row items-start gap-20 mt-8">
        <BlogIndex />
        <div className="flex flex-col items-start -mt-6">
          {data?.map((metadata) => (
            <SmallArticle
              key={metadata.slug}
              description={metadata.description}
              slug={metadata.slug}
              tags={metadata.tags}
              timestamp={metadata.published}
              title={metadata.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
