"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme == "dark" ? (
        <Button onClick={() => setTheme("light")} variant="ghost" size="icon">
          <SunIcon className="w-5 h-5" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")} variant="ghost" size="icon">
          <MoonIcon className="w-5 h-5" />
        </Button>
      )}
    </>
  );
}
