"use client";

import { Sun, Github, Twitter, Menu, Command, Linkedin } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading)
    return (
      <div className="w-[32%] max-[1200px]:w-[85%] max-[500px]:w-[91%] m-auto flex flex-row items-center justify-between h-16 py-2"></div>
    );

  return (
    <div className="w-[32%] max-[1200px]:w-[85%] max-[500px]:w-[91%] m-auto flex flex-row items-center justify-between h-16 py-2">
      <Sheet open={sheetOpen} onOpenChange={(val) => setSheetOpen(val)}>
        <SheetTrigger
          onClick={() => setSheetOpen(true)}
          className="min-[500px]:hidden max-[500px]:visible"
        >
          <div className="hamburger -ml-1 -mr-2 ">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent className="border-none" side={"left"}>
          <SheetHeader className="mt-5">
            <SheetTitle>
              <Link
                onClick={() => setSheetOpen(false)}
                href="/"
                className="font-semibold flex flex-row items-center gap-2 "
              >
                <Command className="w-[21px] h-[21px]" />
                <span className="text-[19px] dark:text-slate-200 text-slate-800">
                  nisab/blogs
                </span>
              </Link>
            </SheetTitle>
            <SheetDescription className="text-left">
              <div className="flex flex-col gap-7 text-sm mt-8">
                <Link onClick={() => setSheetOpen(false)} href={"/blog"}>
                  Blogs
                </Link>
                <Link onClick={() => setSheetOpen(false)} href={"/resume"}>
                  Resume
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="left flex flex-row items-center gap-7 dark:text-slate-300">
        <Link
          href="/"
          className="font-semibold flex flex-row items-center gap-2 max-[500px]:hidden"
        >
          <Command className="w-[21px] h-[21px]" />
          <span className="text-[19px] dark:text-slate-200 text-slate-800">
            nisab/blogs
          </span>
        </Link>
        <div className="flex flex-row gap-4 text-sm max-[500px]:hidden">
          <Link href={"/blog"}>Blogs</Link>
          <Link href={"/resume"}>Resume</Link>
        </div>
      </div>

      <div className="right flex flex-row gap-1 ">
        <Link
          href="https://github.com/nisabmohd"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://twitter.com/MohdNisab"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Twitter className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohd-nisab-725148197/"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Button variant="ghost" size="icon">
          <Sun className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
