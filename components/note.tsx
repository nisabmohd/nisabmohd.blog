import { PropsWithChildren } from "react";

export function Note({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-100 rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-col items-start gap-2 border dark:border-neutral-800">
      <p className="text-sm font-semibold">Note</p>
      <span className="text-[14.5px]">{children}</span>
    </div>
  );
}
