import { InfoIcon } from "lucide-react";
import { PropsWithChildren } from "react";

export default function Note({ children }: PropsWithChildren) {
  return (
    <div className="border-[1px] rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-row items-start gap-3">
      <InfoIcon className="w-[18px] h-[18px]" />
      <span className="text-sm text-muted-foreground">{children}</span>
    </div>
  );
}
