import { BookTypeIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Search from "./search";
import Link from "next/link";
import NavSheet from "./navsheet";
import Anchor from "./anchor";

export default async function Navbar() {
  return (
    <nav className="flex justify-between items-center h-32 sm:px-0 px-5 top-0 sticky z-40 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="max-w-[1000px] mx-auto w-[100%] flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center gap-2">
          <BookTypeIcon className="h-10 w-10 mr-1" />
          <h3 className="font-semibold text-2xl">NisabBlog</h3>
        </Link>
        <div className="flex-row items-center gap-4 flex">
          <div className="tabs hidden sm:flex flex-row gap-5 items-center">
            {TABS.map((item) => (
              <Anchor
                activeClassName="text-blue-500"
                className="text-[15.5px] font-semibold"
                href={item.href}
                key={item.href}
                absoluteUrl={item.absolute}
              >
                {item.title}
              </Anchor>
            ))}
          </div>
          <div className="flex flex-row items-center gap-3">
            <Search />
            <ModeToggle />
            <NavSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}

export const TABS = [
  {
    title: "Blog",
    href: "/blog/page/1",
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
