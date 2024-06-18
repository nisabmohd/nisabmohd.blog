"use client";

import { useTheme } from "next-themes";
import { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";

type ThemedImgProps = ComponentProps<typeof Image>;

export default function ThemedImage({
  src,
  height,
  width,
  alt,
  ...rest
}: ThemedImgProps) {
  const { resolvedTheme } = useTheme();
  const [imagePath, setImagePath] = useState<string>();

  useEffect(() => {
    if (!resolvedTheme || resolvedTheme == "system") return;
    const exactFileName = `/(${resolvedTheme})${src}`;
    setImagePath(exactFileName);
  }, [resolvedTheme, src]);

  if (!imagePath) return null;
  return (
    <Image
      className="rounded-xl max-w-full mx-auto"
      src={imagePath}
      alt={alt}
      width={width ?? 400}
      height={height ?? 400}
      {...rest}
    />
  );
}
