import { MDXFrontmatter } from "@/lib/markdown";
import Link from "next/link";
import prisma from "@/prisma/client";
import { Suspense } from "react";

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

async function Views({ slug }: Pick<BlogCardProps, "slug">) {
  const blog = await prisma.blog.findUnique({ where: { slug } });
  return (
    <span className="text-muted-foreground text-[14.5px]">
      {blog?.views ?? 0} views
    </span>
  );
}
