import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeletonCard() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="w-[16%] h-[20px] rounded-sm" />
      <Skeleton className="w-[85%] h-[40px] rounded-sm  mt-2" />
      <div className="flex flex-row items-center gap-4 my-2">
        <Skeleton className="w-[60px] h-[20px] rounded-sm" />
        <Skeleton className="w-[55px] h-[20px] rounded-sm" />
        <Skeleton className="w-[55px] h-[20px] rounded-sm" />
      </div>
      <Skeleton className="w-[98%] h-[20px] rounded-sm" />
      <Skeleton className="w-[65%] h-[20px] rounded-sm mt-1" />
    </div>
  );
}
