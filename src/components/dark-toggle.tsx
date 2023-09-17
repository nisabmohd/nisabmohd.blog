"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeMode() {
  const [dark, setDark] = useState(() => {
    if (!window) return false;
    console.log(localStorage.getItem("mode"), "Nisab");
    const preferDarkMode = localStorage.getItem("mode") ?? "false";
    if (preferDarkMode == "true")
      document.getElementById("body-theme")?.classList.add("dark");
    return preferDarkMode == "false" ? false : true;
  });
  function toggle() {
    localStorage.setItem("mode", JSON.stringify(!dark));
    setDark((prev) => !prev);
    document.getElementById("body-theme")?.classList.toggle("dark");
  }
  return (
    <Button variant="ghost" onClick={toggle} size="icon">
      {!dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </Button>
  );
}
