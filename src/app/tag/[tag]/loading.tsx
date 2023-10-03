import BlogSkeletonCard from "@/components/blog-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <Skeleton className="w-[98%] sm:[28%] h-[38px] rounded-sm" />
      <Skeleton className="w-[68%] flex sm:hidden h-[38px] rounded-sm mt-2" />

      <Skeleton className="w-[99%] sm:w-[80%] h-[20px] rounded-sm mt-2" />
      <Skeleton className="w-[79%] sm:hidden h-[20px] rounded-sm mt-2" />

      <div className="border-b-2 mb-8 pb-8"></div>
      <div className="flex flex-col gap-16 pb-4">
        {Array.from([1, 2, 3, 4]).map((item) => (
          <BlogSkeletonCard key={item} />
        ))}
      </div>
    </div>
  );
}
