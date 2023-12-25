"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme == "dark" ? (
        <Button onClick={() => setTheme("light")} variant="ghost" size="icon">
          <SunIcon className="h-6 w-6" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")} variant="ghost" size="icon">
          <MoonIcon className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
