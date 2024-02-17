"use client";

import { useTheme } from "next-themes";
import { components } from "./markdown";
import { useEffect, useState } from "react";

export default function ThemedImage({
  filename,
  ext,
  height,
  width,
}: {
  filename: string;
  ext: string;
  width?: number;
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const [imagePath, setImagePath] = useState<string>();

  useEffect(() => {
    if (!resolvedTheme) return;
    const exactFileName = "/" + filename + "-" + resolvedTheme + "." + ext;
    setImagePath(exactFileName);
  }, [resolvedTheme, filename, ext]);

  if (!imagePath) return null;
  return (
    <components.StaticImg
      src={imagePath}
      alt="img"
      width={width ?? 400}
      height={height ?? 400}
      className="mx-auto"
    />
  );
}
