import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-20 flex items-center justify-between sm:text-[14.5px] text-[14px] text-neutral-800 dark:text-neutral-100">
      <p>Nisab Mohd © 2024</p>
      <div className="flex items-center gap-2">
        <Link href="https://github.com/nisabmohd">github</Link>
        <Link href="https://twitter.com/MohdNisab">twitter</Link>
        <Link href="https://www.linkedin.com/in/mohd-nisab-725148197/">
          linkedin
        </Link>
      </div>
    </footer>
  );
}
