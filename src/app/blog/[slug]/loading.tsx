import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2 w-[32%] max-[1200px]:w-[85%] max-[500px]:w-[91%] m-auto h-screen py-5 ">
      <Skeleton className="w-[80%] h-[40px] rounded-md mb-8" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-[90%] h-[20px] rounded-md" />
      <Skeleton className="w-[75%] h-[20px] rounded-md" />
      <br />
      <Skeleton className="w-[75%] h-[30px] rounded-md mb-3" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-[90%] h-[20px] rounded-md" />
      <Skeleton className="w-[75%] h-[20px] rounded-md" />
      <br />
      <Skeleton className="w-[75%] h-[30px] rounded-md mb-3" />
      <Skeleton className="w-full h-[20px] rounded-md" />
      <Skeleton className="w-[75%] h-[20px] rounded-md" />
      <br />
      <Skeleton className="w-full h-[90px] rounded-md" />
    </div>
  );
}
