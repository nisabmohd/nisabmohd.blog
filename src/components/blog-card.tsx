import Link from "next/link";
import { Avatar } from "./ui/avatar";
import Image from "next/image";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function BlogCard({
  description,
  title,
  slug,
  image,
  date,
}: // views,
{
  title: string;
  description: string;
  slug: string;
  image: string;
  date: number;
  // views: number;
}) {
  return (
    <Link href={`/blog/${slug}`} className="flex items-start flex-col">
      <Image
        src={image}
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors"
        alt="blog1"
      />
      <div className="mt-3">
        <h3 className="text-md font-bold text-neutral-800 dark:text-slate-200">
          {title}
        </h3>
        <p className="text-sm dark:text-neutral-400 text-neutral-500 mt-[3.15px]">
          {description}
        </p>
        <p className="text-xs dark:text-neutral-400 text-neutral-500 mt-[3.5px]">
          {new Date(date).toDateString()}
        </p>
      </div>
    </Link>
  );
}
