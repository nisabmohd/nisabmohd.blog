import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 mb-8 dark:text-neutral-300 text-neutral-700 flex flex-col gap-7">
      <div className="flex items-center gap-5">
        <Link
          className="flex items-center gap-1.5"
          href="https://github.com/nisabmohd"
        >
          <MoveUpRightIcon className="w-4 h-4" /> GitHub
        </Link>
        <Link
          className="flex items-center gap-1.5"
          href="https://twitter.com/MohdNisab"
        >
          <MoveUpRightIcon className="w-4 h-4" /> Twitter
        </Link>
        <Link
          className="flex items-center gap-1.5"
          href="https://www.linkedin.com/in/mohd-nisab-725148197/"
        >
          <MoveUpRightIcon className="w-4 h-4" /> Linkedin
        </Link>
      </div>
      <p className="text-[15px]">© 2024 MIT Licensed</p>
    </footer>
  );
}
