import Image from "next/image";
import { ComponentProps } from "react";

type AdaptiveImageProps = Exclude<ComponentProps<typeof Image>, "src"> & {
  src: {
    light: string;
    dark: string;
  };
};

export default function AdaptiveImage({
  src: { dark, light },
  alt = "themed-img",
  width = 600,
  height = 400,
  ...rest
}: AdaptiveImageProps) {
  return (
    <>
      <Image
        className="dark:hidden block"
        src={light}
        alt={alt}
        width={width}
        height={height}
        {...rest}
      />
      <Image
        className="dark:block hidden"
        src={dark}
        alt={alt}
        width={width}
        height={height}
        {...rest}
      />
    </>
  );
}
