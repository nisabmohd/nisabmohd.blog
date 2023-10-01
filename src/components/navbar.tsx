import { CommandIcon } from "lucide-react";
import Link from "next/link";
import Anchor from "./anchor";
import NavSheet from "./sm-nav-sheet";

export default function Navbar() {
  return (
    <nav className="top-0 sticky z-40 bg-inherit">
      <div className="h-24 flex flex-row items-center justify-between max-w-[1028px] mx-auto px-8">
        <Link href="/" className="logo flex flex-row items-center gap-3">
          <CommandIcon />
          <h1 className="text-xl">nisabmohd/blog</h1>
        </Link>
        <div className="tabs flex-row items-center gap-3 hidden sm:flex">
          {NavItemsList.map((item) => (
            <Anchor key={item.href} absolute={item.absolute} href={item.href}>
              {item.title}
            </Anchor>
          ))}
        </div>
        {/* sm devices navbar */}
        <div className="hidden max-[640px]:flex">
          <NavSheet />
        </div>
      </div>
    </nav>
  );
}

export const NavItemsList = [
  {
    title: "Blog",
    href: "/blog",
    absolute: true,
  },
  {
    title: "Tags",
    href: "/tags",
    absolute: true,
  },
  {
    title: "Projects",
    href: "/projects",
    absolute: false,
  },
  {
    title: "About",
    href: "/about",
    absolute: false,
  },
];
