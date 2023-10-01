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
      <span className="text-sm text-muted-foreground">
        {new Date(date).toDateString()}
      </span>
      <Link href={`/blog/${slug}`} className="text-2xl  ">
        {title}
      </Link>
      <div className=" flex flex-row gap-4 my-2">
        {tags.map((tag) => (
          <Chip href={tag} key={tag}>
            {tag}
          </Chip>
        ))}
      </div>
      <p className="text-muted-foreground">{description}</p>
    </article>
  );
}
