import { ComponentProps, PropsWithChildren } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { Tweet } from "./tweet";
import Copy from "./copy";

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

type AdaptiveImageProps = Exclude<ComponentProps<typeof NextImage>, "src"> & {
  src: {
    light: string;
    dark: string;
  };
};

function AdaptiveImage({
  src: { dark, light },
  alt = "themed-img",
  width = 600,
  height = 400,
  ...rest
}: AdaptiveImageProps) {
  return (
    <>
      <NextImage
        className="dark:hidden block"
        src={light}
        alt={alt}
        width={width}
        height={height}
        {...rest}
      />
      <NextImage
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

export function Note({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-neutral-900 bg-stone-50 rounded-md px-3 py-4 h-fit prose-p:m-0 my-6 flex flex-col items-start gap-2 border dark:border-stone-800">
      <p className="text-sm font-medium font-mono">Note : </p>
      <span className="text-[13.5px]">{children}</span>
    </div>
  );
}

export function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-5 relative">
      <div className="absolute top-2.5 right-2.5 z-10">
        <Copy content={raw!} />
      </div>
      <div className="relative">
        <pre {...rest}>{children}</pre>
      </div>
    </div>
  );
}

export const components = {
  Note,
  a: Link,
  Tweet,
  img: Image,
  AdaptiveImage,
  pre: Pre,
};
