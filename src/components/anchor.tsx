"use client";

import { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AnchorPros = ComponentProps<typeof Link> & { absolute?: boolean };

export default function Anchor({
  href,
  className,
  absolute,
  children,
  ...props
}: AnchorPros) {
  const path = usePathname();
  const match = absolute
    ? path.split("/")[1] == href.toString().split("/")[1]
    : path == href.toString();

  return (
    <Link
      href={href}
      className={`${className} ${match ? "text-blue-400" : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
