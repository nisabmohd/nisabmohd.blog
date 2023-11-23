import { PropsWithChildren } from "react";
export default function LanguageChip({ children }: PropsWithChildren) {
  return (
    <span className="text-blue-400 capitalize text-[12.2px]">{children}</span>
  );
}
