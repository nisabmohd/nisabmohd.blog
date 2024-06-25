import { MDXFrontmatter } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default function Blog({ title, slug, published }: BlogCardProps) {
  return (
    <Link className="flex flex-col gap-0.5" href={`/blog/${slug}`}>
      <span>{title}</span>
      <span className="text-muted-foreground text-[14.5px] w-[100px]">
        {formatDate(new Date(published))}
      </span>
    </Link>
  );
}
