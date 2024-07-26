import { AlertCircleIcon } from "lucide-react";
import { PropsWithChildren } from "react";

export function Note({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-neutral-900 bg-stone-50 rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-col items-start gap-2 border">
      <div className="flex items-center gap-2">
        <AlertCircleIcon className="min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px]" />
        <p className="text-sm font-semibold">Note</p>
      </div>
      <span className="text-[14.5px]">{children}</span>
    </div>
  );
}
