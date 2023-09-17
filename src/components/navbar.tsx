import { Sun, Github, Twitter, Linkedin, Shell, Command } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-[38%] max-[1200px]:w-[85%] max-[500px]:w-[91%] m-auto  flex flex-row items-center justify-between h-14">
      <div className="left flex flex-row items-center gap-7 dark:text-slate-300">
        <Link
          href="/"
          className="font-semibold flex flex-row items-center gap-2"
        >
          <Command className="w-[21px] h-[21px]" />
          <span className="text-[19px] dark:text-slate-200 text-slate-800">
            nisab/blogs
          </span>
        </Link>
        <div className="flex flex-row gap-4 text-sm">
          <Link href={"/blog"}>Blogs</Link>
          <Link href={"/resume"}>Resume</Link>
        </div>
      </div>

      <div className="right flex flex-row gap-1">
        <Link
          href="https://github.com/nisabmohd"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohd-nisab-725148197/"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://twitter.com/MohdNisab"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Twitter className="w-5 h-5" />
        </Link>

        <Button variant="ghost" size="icon">
          <Sun className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
