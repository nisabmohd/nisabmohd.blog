import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20">
      <Link href="/" className="font-extrabold">
        @nisabmohd
      </Link>
      <div className="flex items-center gap-3.5 text-neutral-800 dark:text-neutral-100">
        <Link href="/blog">blog</Link>
        <Link
          target="_blank"
          href="https://github.com/nisabmohd?tab=repositories"
        >
          projects
        </Link>
      </div>
    </nav>
  );
}
