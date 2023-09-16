import Link from "next/link";

export default function BlogCard({
  description,
  title,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <div>
        <h3 className="text-md font-bold">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </Link>
  );
}
