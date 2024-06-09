import { PropsWithChildren } from "react";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import { ComponentProps } from "react";
import Link from "next/link";
import ThemedImage from "./themed-img";
import { CachedTweet } from "./tweet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Highlight({ children }: PropsWithChildren) {
  return (
    <span className="dark:bg-zinc-800 dark:text-zinc-300 bg-zinc-300/40 text-zinc-700 rounded-md px-2 py-1 whitespace-nowrap highlight-comp font-normal">
      {children}
    </span>
  );
}

function NoWrap({ children }: PropsWithChildren) {
  return <span className="whitespace-nowrap">{children}</span>;
}

function Note({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-neutral-900  bg-zinc-100 rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-row items-center gap-3">
      <InfoIcon className="min-w-[18px] min-h-[18px] max-w-[20px] max-h-[20px]" />
      <span className="text-[14.5px]">{children}</span>
    </div>
  );
}

function Snippet({ children }: { children: string }) {
  return (
    <Highlight>
      <code className="font-code whitespace-nowrap font-medium before:hidden bg-transparent after:hidden">
        {children}
      </code>
    </Highlight>
  );
}

type StaticImgProps = ComponentProps<typeof Image>;

function StaticImg(props: StaticImgProps) {
  return (
    <Image className="rounded-xl max-w-full mx-auto" {...props} alt="img" />
  );
}

function HTMLTag({ children }: { children: string }) {
  return (
    <span className="dark:bg-zinc-800 bg-zinc-200 px-2 rounded-md text-sm py-1 mx-[2px] font-normal font-code">
      {"<"}
      {children}
      {">"}
    </span>
  );
}

function Tweet({ id }: { id: string }) {
  return <CachedTweet id={id} />;
}

export const components = {
  Highlight,
  HTMLTag,
  StaticImg,
  Snippet,
  Note,
  NoWrap,
  Link,
  Tweet,
  ThemedImage,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
};
