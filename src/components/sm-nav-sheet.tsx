"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavItemsList } from "./navbar";
import { useState } from "react";
import Anchor from "./anchor";

export default function NavSheet() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={(val) => setOpen(val)}>
      <SheetTrigger>
        <Menu className="w-5 h-5 hidden max-[640px]:flex" />
      </SheetTrigger>
      <SheetContent className="pt-16 flex flex-col gap-6 items-center">
        {NavItemsList.map((item) => (
          <Anchor
            className="text-base"
            onClick={() => setOpen(false)}
            key={item.href}
            absolute={item.absolute}
            href={item.href}
          >
            {item.title}
          </Anchor>
        ))}
      </SheetContent>
    </Sheet>
  );
}
