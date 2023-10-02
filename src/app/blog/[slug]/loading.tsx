import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="">
      <div className="prose prose-md font-mono dark:prose-invert prose-slate max-[500px]:max-w-[100%] max-w-sm sm:max-w-prose mx-auto">
        <Skeleton className="w-[80%] h-[40px] rounded-sm" />
        <Skeleton className="w-[40%] h-[20px] rounded-sm mt-2 " />
        <div className="border-b-2 mb-8 pb-8"></div>
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[40%] h-[20px] rounded-sm mt-2 " />
        <br />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[90%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[40%] h-[20px] rounded-sm mt-2 " />
        <br />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[100%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[80%] h-[20px] rounded-sm mt-2 " />
        <Skeleton className="w-[40%] h-[20px] rounded-sm mt-2 " />
      </div>
    </div>
  );
}
