import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type ArticleProps = {
  timestamp: number;
  title: string;
  tags: string[];
  description: string;
  slug: string;
};

export function Article({
  description,
  slug,
  tags,
  timestamp,
  title,
}: ArticleProps) {
  return (
    <div className="flex md:flex-row flex-col items-start md:gap-6 gap-2 py-10 border-b-[1px]">
      <div className="md:w-[260px] md:min-w-[220px] font-medium text-muted-foreground">
        {new Date(timestamp).toDateString()}
      </div>
      <div>
        <Link href={`/blog/${slug}`} className="font-bold text-2xl">
          {title}
        </Link>
        <div className="flex flex-row flex-wrap gap-3 mt-1">
          {tags.map((tag) => (
            <Link
              className="text-blue-500 text-nowrap capitalize text-[15px]"
              key={tag}
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <p className="my-4 leading-7 text-muted-foreground">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "-ml-4 text-blue-500 text-[15px]"
          )}
        >
          Read more <MoveRightIcon className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export function SmallArticle({
  description,
  slug,
  tags,
  timestamp,
  title,
}: ArticleProps) {
  return (
    <div className="flex flex-col items-start py-10 gap-4 border-b-[1px]">
      <div className="w-[260px] font-medium text-muted-foreground">
        {new Date(timestamp).toDateString()}
      </div>
      <div>
        <Link href={`/blog/${slug}`} className="font-bold text-2xl">
          {title}
        </Link>
        <div className="flex flex-wrap flex-row gap-3 mt-1">
          {tags.map((tag) => (
            <Link
              className="text-blue-500 capitalize text-nowrap text-[15px]"
              key={tag}
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <p className="my-4 leading-7 text-muted-foreground">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "-ml-4 text-blue-500 text-[15px]"
          )}
        >
          Read more <MoveRightIcon className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
