import { PropsWithChildren } from "react";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import { ComponentProps } from "react";
import Link from "next/link";

function Highlight({ children }: { children: string }) {
  return (
    <span className="dark:bg-zinc-900 dark:text-zinc-200 bg-zinc-200 text-zinc-700 px-2 rounded-md text-sm py-1 whitespace-nowrap">
      {children}
    </span>
  );
}

function NoWrap({ children }: PropsWithChildren) {
  return <span className="whitespace-nowrap">{children}</span>;
}

function Note({ children }: PropsWithChildren) {
  return (
    <div className="border-[1px] rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-row items-start gap-3">
      <InfoIcon className="min-w-[18px] min-h-[18px] max-w-[19px] max-h-[19px]" />
      <span className="text-sm text-muted-foreground">{children}</span>
    </div>
  );
}

function Snippet({ children }: { children: string }) {
  return (
    <code className="dark:bg-zinc-900 font-mono dark:text-zinc-400 bg-zinc-200 text-zinc-700 px-2 rounded-md text-sm py-1 whitespace-nowrap font-medium before:hidden after:hidden">
      {children}
    </code>
  );
}

type StaticImgProps = ComponentProps<typeof Image>;

function StaticImg(props: StaticImgProps) {
  return (
    <div className="relative w-full min-h-[400px] max-h-[450px] mb-16 -mt-2">
      <Image className="rounded-xl" {...props} alt="" fill />
    </div>
  );
}

function HTMLTag({ children }: { children: string }) {
  return (
    <span className="dark:bg-zinc-800 bg-zinc-200 px-2 rounded-md text-sm py-1  mx-[2px] font-normal font-mono">
      {"<"}
      {children}
      {">"}
    </span>
  );
}

export const components = {
  Highlight,
  HTMLTag,
  StaticImg,
  Snippet,
  Note,
  NoWrap,
  Link,
};