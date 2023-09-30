import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { MDXFrontmatter } from "@/lib/md";

export default function MarkdownSlider({
  next,
  previous,
}: {
  previous: MDXFrontmatter;
  next: MDXFrontmatter;
}) {
  return (
    <div className="pagination flex flex-row items-center justify-between w-full pt-5">
      <div>
        {previous && (
          <Link
            href={`/blog/${previous?.slug}`}
            className="flex flex-row items-center gap-2 no-underline"
          >
            <ChevronLeft className="w-4 h-4" />
            {previous?.title}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            className="flex flex-row items-center gap-2 no-underline"
            href={`/blog/${next?.slug}`}
          >
            {next?.title} <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
