import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="w-[160px] h-[20px] rounded-sm" />
      <Skeleton className="sm:w-[85%] w-[98%] h-[38px] rounded-sm  mt-2" />
      <Skeleton className="sm:hidden w-[68%] h-[38px] rounded-sm  mt-2" />

      <div className="flex flex-row items-center gap-4 my-2">
        <Skeleton className="w-[60px] h-[20px] rounded-sm" />
        <Skeleton className="w-[55px] h-[20px] rounded-sm" />
        <Skeleton className="w-[55px] h-[20px] rounded-sm" />
      </div>
      <Skeleton className="w-[98%] h-[20px] rounded-sm" />
      <Skeleton className="sm:w-[65%] w-[85%] h-[20px] rounded-sm mt-1" />
    </div>
  );
}
