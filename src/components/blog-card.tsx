import Link from "next/link";
import Chip from "./chip";

type BlogCardProps = {
  date: number;
  title: string;
  description?: string;
  tags: string[];
  slug: string;
};

export default function BlogCard({
  date,
  tags,
  title,
  description,
  slug,
}: BlogCardProps) {
  return (
    <article className="flex flex-col gap-1">
      <span className="text-muted-foreground text-[12.2px]">
        {new Date(date).toDateString()}
      </span>
      <Link href={`/blog/${slug}`} className="text-xl  ">
        {title}
      </Link>
      <div className="flex flex-row gap-x-4 gap-y-2 my-2 flex-wrap">
        {tags.map((tag) => (
          <Chip href={tag} key={tag}>
            {tag}
          </Chip>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </article>
  );
}
