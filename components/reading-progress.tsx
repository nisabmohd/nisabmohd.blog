"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0;
      if (bar.current) bar.current.style.width = `${pct}%`;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="progress" ref={bar} aria-hidden="true" />;
}
