import { OctagonAlertIcon } from "lucide-react";
import { PropsWithChildren } from "react";

export function Note({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-neutral-900 bg-stone-50 rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-row items-center gap-4 border">
      <OctagonAlertIcon className="min-w-[18px] min-h-[18px] max-w-[20px] max-h-[20px]" />
      <span className="text-[14.5px]">{children}</span>
    </div>
  );
}
