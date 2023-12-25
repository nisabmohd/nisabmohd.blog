import { Article } from "@/components/article";
import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import { getAllMetaData } from "@/lib/markdown";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { data } = await getAllMetaData("blog", { page: 1, count: 5 });
  return (
    <div>
      <Header
        title="Latest"
        description="Explore a latest collection of my personal blogs here."
      />
      <div className="flex flex-col">
        {data.map((metadata) => (
          <Article
            key={metadata.slug}
            description={metadata.description}
            slug={metadata.slug}
            tags={metadata.tags}
            timestamp={metadata.published}
            title={metadata.title}
          />
        ))}
      </div>
      <div className="mt-4 flex items-end justify-end">
        <Link
          href={`/blog/page/1`}
          className={cn(buttonVariants({ variant: "link" }))}
        >
          All Blogs <MoveRightIcon className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
