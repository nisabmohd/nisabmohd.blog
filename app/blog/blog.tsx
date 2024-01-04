import { MDXFrontmatter } from "@/lib/markdown";
import Link from "next/link";
type BlogCardProps = MDXFrontmatter;

export default async function Blog({ slug, title, published }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <h3 className="text-[16.5px]">{title}</h3>
      <span className="text-[15px] text-muted-foreground">
        {new Date(published).toDateString()}
      </span>
    </Link>
  );
}
