import { ComponentProps } from "react";
import Image from "next/image";

type ThemedImgProps = ComponentProps<typeof Image>;

export default function ThemedImage({
  src,
  height,
  width,
  alt,
  ...rest
}: ThemedImgProps) {
  return (
    <>
      <Image
        className="rounded-xl max-w-full mx-auto dark:hidden block"
        src={`/(light)${src}`}
        alt={alt}
        width={width ?? 400}
        height={height ?? 400}
        {...rest}
      />
      <Image
        className="rounded-xl max-w-full mx-auto dark:block hidden"
        src={`/(dark)${src}`}
        alt={alt}
        width={width ?? 400}
        height={height ?? 400}
        {...rest}
      />
    </>
  );
}
