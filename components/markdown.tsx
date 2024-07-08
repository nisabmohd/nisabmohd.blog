import { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemedImage from "./themed-img";
import { Tweet } from "./tweet";
import { cn } from "@/lib/utils";
import { Note } from "./note";

function Img({ className, ...rest }: ComponentProps<typeof Image>) {
  return <Image className={cn(className, "rounded-lg")} {...rest} alt="img" />;
}

export const components = {
  Note,
  Link,
  Tweet,
  ThemedImage,
  Img,
};
