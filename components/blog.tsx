import { MDXFrontmatter } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default function Blog({ title, slug, published }: BlogCardProps) {
  return (
    <Link className="flex sm:flex-col flex-col gap-0.5" href={`/blog/${slug}`}>
      <p>{title}</p>
      <span className="text-muted-foreground text-[15px]">
        {formatDate(new Date(published))}
      </span>
    </Link>
  );
}
