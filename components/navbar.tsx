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
    <nav className="flex flex-row items-center justify-between mb-2">
      <div className="flex flex-row gap-5 items-center h-32">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
