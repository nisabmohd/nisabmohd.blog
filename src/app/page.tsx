import BlogCard from "@/components/blog-card";
import { getAllMetaData } from "@/lib/markdown";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const metadatas = (await getAllMetaData()).slice(0, 5);
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-2xl mb-1">Latest</h1>
        <p className="text-muted-foreground text-base">
          Explore a latest collection of my personal blogs here.
        </p>
      </div>
      <div className="flex flex-col sm:gap-16 gap-10 mt-8">
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
      <Link
        href="/blog"
        className="text-right flex flex-row items-center gap-2 text-muted-foreground mt-10 text-sm"
      >
        All Posts <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
