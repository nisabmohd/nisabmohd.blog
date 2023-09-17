import { Command } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-[95%] m-auto text-sm dark:text-slate-300 py-4 mt-2 text-slate-800 flex flex-row justify-center items-center gap-2">
      <Command className="w-4 h-4" />
      <span>
        Built by{" "}
        <Link
          className="text-slate-100 font-semibold"
          href="https://github.com/nisabmohd"
        >
          nisabmohd
        </Link>
        . Hosted on{" "}
        <Link
          href="https://vercel.com/dashboard"
          className="text-slate-100 font-semibold"
        >
          Vercel
        </Link>
        .The source code is available on{" "}
        <Link
          className="text-slate-100 font-semibold"
          href="https://github.com/nisabmohd/blogs"
        >
          GitHub
        </Link>
        .
      </span>
    </footer>
  );
}
