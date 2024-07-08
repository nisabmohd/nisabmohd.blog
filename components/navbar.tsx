import Link from "next/link";

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center">
      <div className="flex flex-row gap-5 items-center h-28">
        {NAV_ITEMS.map((item) => (
          <Link
            className="font-medium text-[15.45px]"
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
