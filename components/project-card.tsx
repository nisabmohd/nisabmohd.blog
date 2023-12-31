import { MDXProjectFrontmatter } from "@/lib/markdown";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProjectCard({
  description,
  githubUrl,
  tags,
  title,
  imagePath,
}: MDXProjectFrontmatter) {
  return (
    <div className="border-[1px] p-4 rounded-md mx-auto">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Avatar className="w-56 h-56 mx-auto rounded-none my-5">
        <AvatarImage src={imagePath} />
        <AvatarFallback className=" rounded-none">CN</AvatarFallback>
      </Avatar>

      <p className="text-muted-foreground my-3 text-sm">{description}</p>
      <div className="flex flex-row flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            className="bg-neutral-700 text-white text-xs px-3 py-1 rounded-full"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={githubUrl}
        className="flex flex-row items-center gap-1  text-blue-500 text-[13px] mt-5"
      >
        Learn More <ExternalLinkIcon className="w-3 h-3" />
      </Link>
    </div>
  );
}
