"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  inActiveClassName?: string;
  absoluteUrl?: boolean;
};

export default function Anchor({
  className,
  href,
  children,
  activeClassName = "",
  inActiveClassName = "",
  absoluteUrl = false,
  ...rest
}: AnchorProps) {
  const path = usePathname();

  let isActive = path.toString() == href.toString();
  if (absoluteUrl) {
    isActive = path.split("/")[1] == href.toString().split("/")[1];
  }

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? activeClassName : inActiveClassName
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
}
