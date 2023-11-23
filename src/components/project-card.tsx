import Link from "next/link";
import LanguageChip from "./language-chip";
import { ArrowUpRightIcon } from "lucide-react";

type ProjectCardProps = {
  date: number;
  title: string;
  description?: string;
  languages: string[];
  slug: string;
  githubUrl?: string;
};

export default function ProjectCard({
  date,
  languages,
  title,
  description,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-1">
      <span className="text-sm text-muted-foreground text-[12.2px]">
        {new Date(date).toDateString()}
      </span>
      <Link
        href={githubUrl!}
        className="text-xl flex flex-row items-center gap-2"
      >
        {title}{" "}
        <ArrowUpRightIcon className="text-muted-foreground w-4 h-4 -mt-3" />
      </Link>
      <div className="flex flex-row gap-x-4 gap-y-2 my-2 flex-wrap">
        {languages.map((tag) => (
          <LanguageChip key={tag}>{tag}</LanguageChip>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </article>
  );
}
