import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-20 flex items-center justify-between text-sm text-neutral-800 dark:text-neutral-200">
      <p>Nisab Mohd © 2024</p>
      <div className="flex items-center gap-2 underline underline-offset-2">
        <Link href="https://github.com/nisabmohd">GitHub</Link>
        <Link href="https://twitter.com/MohdNisab">Twitter</Link>
        <Link href="https://www.linkedin.com/in/mohd-nisab-725148197/">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
