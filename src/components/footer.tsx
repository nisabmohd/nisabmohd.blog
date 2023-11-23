import { CommandIcon } from "lucide-react";
import ThemeMode from "./theme-toggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="h-24 flex flex-col items-center justify-between max-w-[900px] mx-auto px-8 text-muted-foreground sm:flex-row">
        <div className="flex flex-row items-center flex-wrap text-center justify-center sm:text-start gap-2 mb-8 sm:mb-0 text-sm">
          <CommandIcon className="w-4 h-4" />
          Built by{" "}
          <Link
            className="font-semibold underline  underline-offset-2 -mr-2"
            href={process.env.GITHUB_USER_URL ?? ""}
          >
            Nisab Mohd
          </Link>
          <div className="sm:flex hidden flex-row gap-2 flex-wrap">
            . Hosted on{" "}
            <Link
              className="font-semibold underline underline-offset-2 -mr-2"
              href="https://vercel.com/"
            >
              Vercel
            </Link>
            .<span>The source code is available on </span>
            <Link
              className="font-semibold underline underline-offset-2 -mr-2"
              href={process.env.GITHUB_PROJECT_URL ?? ""}
            >
              GitHub
            </Link>
            .
          </div>
        </div>
        <div className="pb-5 sm:pb-0 h-full flex items-center justify-between">
          <ThemeMode />
        </div>
      </div>
    </footer>
  );
}
