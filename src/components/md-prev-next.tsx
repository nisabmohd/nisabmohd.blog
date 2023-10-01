import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { MDXFrontmatter } from "@/lib/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MarkdownSlider({
  next,
  previous,
}: {
  previous: MDXFrontmatter;
  next: MDXFrontmatter;
}) {
  return (
    <TooltipProvider>
      <div className="pagination flex flex-col sm:flex-row items-center justify-between w-full pt-5">
        <div className="sm:max-w-[50%] w-fit">
          {previous && (
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={`/blog/${previous?.slug}`}
                  className="flex flex-row items-center justify-center gap-2 no-underline"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {previous.title.length
                    ? previous.title.slice(0, 30) + "..."
                    : previous.title}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-light">{previous.title}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className="sm:max-w-[50%] w-fit">
          {next && (
            <Tooltip>
              <TooltipTrigger>
                <Link
                  className="flex flex-row items-center gap-2 no-underline"
                  href={`/blog/${next?.slug}`}
                >
                  {next.title.length > 40
                    ? next.title.slice(0, 30) + "..."
                    : next.title}{" "}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-light">{next.title}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
