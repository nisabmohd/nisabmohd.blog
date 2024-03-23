import { MDXFrontmatter } from "@/lib/markdown";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default async function Blog({ slug, title, published }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <h3 className="sm:mb-1 mb-0.5">{title}</h3>
      <span className="text-[15px] text-muted-foreground">
        {new Date(published).toDateString()}
      </span>
    </Link>
  );
}
