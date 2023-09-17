import { Command } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-[95%] m-auto text-sm dark:text-slate-300 py-4 mt-2 text-slate-800 flex flex-row justify-center items-center gap-2 text-center">
      <Command className="w-4 h-4 max-[500px]:hidden" />
      <span>
        Built by{" "}
        <Link
          className="dark:text-slate-100 font-semibold"
          href="https://github.com/nisabmohd"
        >
          nisabmohd
        </Link>
        . Hosted on{" "}
        <Link
          href="https://vercel.com/dashboard"
          className="dark:text-slate-100 font-semibold"
        >
          Vercel
        </Link>
        .The source code is available on{" "}
        <Link
          className="dark:text-slate-100 font-semibold"
          href="https://github.com/nisabmohd/blogs"
        >
          GitHub
        </Link>
        .
      </span>
    </footer>
  );
}
