import { MDXFrontmatter } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default function Blog({ title, slug, published }: BlogCardProps) {
  return (
    <Link
      className="flex sm:flex-row flex-col sm:items-center sm:gap-5"
      href={`/blog/${slug}`}
    >
      <span className="text-muted-foreground">
        {formatDate(new Date(published))}
      </span>
      <p>{title}</p>
    </Link>
  );
}
