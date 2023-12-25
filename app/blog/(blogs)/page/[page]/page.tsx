import { SmallArticle } from "@/components/article";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAllMetaData } from "@/lib/markdown";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BlogPageParamsType = {
  params: {
    page: string;
  };
};

export async function generateStaticParams() {
  const { totalPages } = await getAllMetaData("blog", {
    page: 1,
    count: 5,
  });
  return new Array(totalPages).fill(1).map((e, i) => {
    return {
      page: (e * (i + 1)).toString(),
    };
  });
}

export default async function BlogPage({
  params: { page },
}: BlogPageParamsType) {
  console.log("called");
  const currentPageNo = parseInt(page);
  const { data, totalPages } = await getAllMetaData("blog", {
    page: currentPageNo,
    count: 5,
  });
  return (
    <div className="flex flex-col items-start -mt-6">
      <div className="flex flex-col w-[100%]">
        {data.map((metadata) => (
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
      <div className="flex flex-row items-center justify-center ml-auto mt-6">
        {currentPageNo == 1 ? (
          <Button variant="link" disabled>
            Previous
          </Button>
        ) : (
          <Link
            href={`/blog/page/${currentPageNo - 1}`}
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Previous
          </Link>
        )}
        <span>
          {currentPageNo} of {totalPages}
        </span>

        {currentPageNo == totalPages ? (
          <Button variant="link" disabled>
            Next
          </Button>
        ) : (
          <Link
            href={`/blog/page/${currentPageNo + 1}`}
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
