import { CommandIcon } from "lucide-react";
import ThemeMode from "./theme-toggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="h-24 flex flex-row items-center justify-between max-w-[1028px] mx-auto px-8 text-muted-foreground">
        <div className="flex flex-row items-center gap-2">
          <CommandIcon className="w-4 h-4" />
          Built by{" "}
          <Link
            className="font-semibold underline  underline-offset-2"
            href={process.env.GITHUB_USER_URL ?? ""}
          >
            nisabmohd
          </Link>
          . Hosted on{" "}
          <Link
            className="font-semibold underline underline-offset-2"
            href="https://vercel.com/"
          >
            Vercel
          </Link>
          .The source code is available on{" "}
          <Link
            className="font-semibold underline underline-offset-2"
            href={process.env.GITHUB_PROJECT_URL ?? ""}
          >
            GitHub
          </Link>
          .
        </div>
        <ThemeMode />
      </div>
    </footer>
  );
}
