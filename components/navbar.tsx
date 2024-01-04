import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blogs",
    href: "/blog",
  },
  {
    title: "Work",
    href: "/work",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-7 items-center h-32">
        {NAV_ITEMS.map((item) => (
          <Link
            className={cn(buttonVariants({ variant: "link" }), "m-0 p-0")}
            key={item.href}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
