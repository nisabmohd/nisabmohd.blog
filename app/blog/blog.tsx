import { MDXFrontmatter } from "@/lib/markdown";
import Link from "next/link";
import { Suspense } from "react";
import Views from "./views";

type BlogCardProps = MDXFrontmatter;

export default async function Blog({ slug, title }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <h3 className="text-[16px]">{title}</h3>
      <Suspense fallback={<span className="invisible">views</span>}>
        <Views slug={slug} />
      </Suspense>
    </Link>
  );
}
