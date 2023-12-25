"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { TABS } from "./navbar";
import { useState } from "react";
import Anchor from "./anchor";

export default function NavSheet() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
        <SheetTrigger asChild>
          <Button className="sm:hidden flex" variant="ghost" size="icon">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="tabs flex flex-col gap-5 items-center mt-14">
            {TABS.map((item) => (
              <Anchor
                absoluteUrl={item.absolute}
                activeClassName="text-blue-500"
                onClick={() => setOpen(false)}
                className="font-medium text-xl"
                href={item.href}
                key={item.href}
              >
                {item.title}
              </Anchor>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
