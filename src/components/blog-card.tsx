import Link from "next/link";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function BlogCard({
  description,
  title,
  slug,
  views,
}: {
  title: string;
  description: string;
  slug: string;
  views: number;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-row items-center justify-between"
    >
      <div>
        <h3 className="text-md font-bold text-neutral-800 dark:text-slate-200">
          {title}
        </h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
      <div className="dark:text-slate-300 text-slate-600 text-sm font-light flex flex-row items-center gap-1">
        <span>{numberWithCommas(views)} </span>
        <span>views</span>
      </div>
    </Link>
  );
}
