import { getAllBlogTags } from "@/lib/markdown";
import Anchor from "./anchor";

const MAP: { title: string; count: number }[] = [];

export default async function BlogIndex() {
  const data = await getAllBlogTags();

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-lg min-w-[260px] hidden md:flex flex-col">
      <div className=" flex flex-col gap-3">
        {data.map((item) => (
          <Anchor
            href={`/tags/${item.title}`}
            className="text-[15px]"
            key={item.title}
            activeClassName="text-blue-500"
          >
            <span className="capitalize">{item.title}</span>
            <span className="ml-1">({item.count})</span>
          </Anchor>
        ))}
      </div>
    </div>
  );
}
