import { MDXFrontmatter } from "@/lib/markdown";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default async function Blog({
  slug,
  title,
  published,
  description,
}: BlogCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-muted-foreground text-sm whitespace-nowrap">
        {formatDate(new Date(published))}
      </div>
      <Link
        href={`/blog/${slug}`}
        className="mb-[0.15rem] text-[16.5px] decoration-muted-foreground hover:underline underline-offset-4 mt-0.5"
      >
        {title}
      </Link>
      <div className="text-[14.75px] text-muted-foreground">{description}</div>
    </div>
  );
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}
