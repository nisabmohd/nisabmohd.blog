import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex justify-center items-center min-h-[50vh]">
      <div className="flex sm:flex-row flex-col sm:items-center gap-8">
        <div className="font-extrabold sm:text-8xl text-6xl sm:px-0 px-5">
          404
        </div>
        <div className="flex flex-col gap-3 items-start max-w-[480px]">
          <h3 className="font-bold text-2xl px-5">
            Sorry we couldn&apos;t find this page.
          </h3>
          <p className="border-l-2 py-2 px-5">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/" className={cn(buttonVariants(), "mx-5")}>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
