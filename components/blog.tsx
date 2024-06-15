import { MDXFrontmatter } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default function Blog({ title, slug, published }: BlogCardProps) {
  return (
    <Link className="flex sm:flex-col flex-col gap-1" href={`/blog/${slug}`}>
      <p>{title}</p>
      <span className="font-sans text-muted-foreground text-[14.5px]">
        {formatDate(new Date(published))}
      </span>
    </Link>
  );
}
