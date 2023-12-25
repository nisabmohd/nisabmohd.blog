import Header from "@/components/header";
import { getAllBlogTags } from "@/lib/markdown";
import Link from "next/link";

export default async function TagsIndexPage() {
  const data = await getAllBlogTags();

  return (
    <div>
      <Header
        title="All Tags"
        description="Explore a collection of my personal blogs by tags."
      />
      <div className="flex flex-row flex-wrap items-center gap-5 mt-8">
        {data.map((item) => (
          <Link
            href={`/tags/${item.title}`}
            className=" text-[15px]"
            key={item.title}
          >
            <span className="text-blue-500 capitalize text-nowrap">
              {item.title}
            </span>
            <span className="text-muted-foreground ml-1">({item.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
