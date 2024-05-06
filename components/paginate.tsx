import { getPrevNextBlog } from "@/lib/markdown";
import Link from "next/link";

export default async function Paginate({ slug }: { slug: string }) {
  const { next, prev } = await getPrevNextBlog(slug);
  return (
    <div className="flex flex-col gap-7 mt-3">
      {prev && (
        <div>
          <h3 className="font-semibold text-sm">Previous Article</h3>
          <Link
            className="text-sm underline underline-offset-4"
            href={`/blog/${prev.slug}`}
          >
            {prev.title}
          </Link>
        </div>
      )}
      {next && (
        <div>
          <h3 className="font-semibold text-sm">Next Article</h3>
          <Link
            className="text-sm underline underline-offset-4"
            href={`/blog/${next.slug}`}
          >
            {next.title}
          </Link>
        </div>
      )}
    </div>
  );
}
