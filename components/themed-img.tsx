"use client";

import { useTheme } from "next-themes";
import { components } from "./markdown";
import { useEffect, useState } from "react";

export default function ThemedImage({
  filename,
  height,
  width,
}: {
  filename: string;
  width?: number;
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const [imagePath, setImagePath] = useState<string>();

  useEffect(() => {
    if (!resolvedTheme || resolved theme == "system") return;
    const exactFileName = `/(${resolvedTheme})${filename}`;
    setImagePath(exactFileName);
  }, [resolvedTheme, filename]);

  if (!imagePath) return null;
  return (
    <components.StaticImg
      src={imagePath}
      alt="img"
      width={width ?? 400}
      height={height ?? 400}
    />
  );
}
