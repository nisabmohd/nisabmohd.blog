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
      src={src as string}
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
  return <div className="callout">{children}</div>;
}

export function Pre({
  children,
  raw,
  className,
  "data-title": title,
  ...rest
}: ComponentProps<"pre"> & { raw?: string; "data-title"?: string }) {
  const lang = className
    ?.split(" ")
    .find((c) => c.startsWith("language-"))
    ?.slice("language-".length);
  return (
    <div className="codeblock">
      <div className="codebar">
        <span>{title || lang || "code"}</span>
        {raw && <Copy content={raw} />}
      </div>
      <pre className={className} {...rest}>
        {children}
      </pre>
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
