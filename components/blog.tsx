import { MDXFrontmatter } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default function Blog({ title, slug, published }: BlogCardProps) {
  return (
    <Link
      className="flex flex-wrap sm:flex-row flex-col sm:items-center gap-1 sm:gap-2.5"
      href={`/blog/${slug}`}
    >
      <span className="font-sans text-muted-foreground text-[14.5px] w-[100px]">
        {formatDate(new Date(published))}
      </span>
      <span>{title}</span>
    </Link>
  );
}
