import { CommandIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-0 sticky z-40 bg-inherit">
      <div className="h-24 flex flex-row items-center justify-between max-w-[1028px] mx-auto px-8">
        <Link href="/" className="logo flex flex-row items-center gap-3">
          <CommandIcon />
          <h1 className="text-xl">nisabmohd/blog</h1>
        </Link>
        <div className="tabs flex flex-row items-center gap-3">
          <Link href="/blog">Blog</Link>
          <Link href="/tags">Tags</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
