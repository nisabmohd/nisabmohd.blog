import { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tweet } from "./tweet";
import { Note } from "./note";
import AdaptiveImage from "./adaptive-image";

function Img({ ...rest }: ComponentProps<typeof Image>) {
  return <Image {...rest} alt="img" />;
}

export const components = {
  Note,
  Link,
  Tweet,
  Img,
  AdaptiveImage,
};
