"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "./icons";

export function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  return () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
}

export default function ThemeToggle() {
  const toggle = useToggleTheme();
  return (
    <button className="icon-btn" type="button" onClick={toggle} aria-label="Toggle theme">
      <SunIcon />
    </button>
  );
}
