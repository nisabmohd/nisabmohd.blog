import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    title: "GitHub",
    href: "https://github.com/nisabmohd",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/MohdNisab",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mohd-nisab-725148197/",
  },
];

export default function Footer() {
  return (
    <footer className="mt-14 mb-8 dark:text-neutral-300 text-neutral-700 flex flex-col gap-7">
      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((it) => (
          <Link
            key={it.href}
            className="flex items-center gap-1.5"
            href={it.href}
            target="_blank"
          >
            <MoveUpRightIcon className="w-4 h-4" /> {it.title}
          </Link>
        ))}
      </div>
      <p className="text-[15px]">© {new Date().getFullYear()} MIT Licensed</p>
    </footer>
  );
}
