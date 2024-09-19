import { ComponentProps } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { Tweet } from "./tweet";
import { Note } from "./note";
import AdaptiveImage from "./adaptive-image";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

function Image({
  src,
  alt = "alt",
  width = 650,
  height = 250,
  ...props
}: ComponentProps<"img">) {
  if (!src) return null;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width as Width}
      height={height as Height}
      quality={40}
      {...props}
    />
  );
}

function Link({ href, ...props }: ComponentProps<"a">) {
  if (!href) return null;
  return <NextLink href={href} {...props} />;
}

export const components = {
  Note,
  a: Link,
  Tweet,
  img: Image,
  AdaptiveImage,
};
