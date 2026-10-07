"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useToggleTheme } from "./theme-toggle";
import { projects, socials } from "@/lib/data";

type Command = { title: string; kind: string; run: () => void };

export default function CommandMenu({
  posts,
}: {
  posts: { slug: string; title: string }[];
}) {
  const router = useRouter();
  const toggleTheme = useToggleTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () => router.push(`/#${id}`);
    const ext = (url: string) => () => window.open(url, "_blank", "noopener");
    return [
      { title: "Projects", kind: "Go to", run: go("projects") },
      ...projects.map((p) => ({
        title: p.palette,
        kind: "Project",
        run: (() => {
          const url = p.links.find((l) => l.url && !l.soon)?.url;
          return url ? ext(url) : go("projects");
        })(),
      })),
      { title: "Experience", kind: "Go to", run: go("experience") },
      { title: "Writing", kind: "Go to", run: go("writing") },
      ...posts.map((p) => ({
        title: p.title,
        kind: "Article",
        run: () => router.push(`/${p.slug}`),
      })),
      { title: "Toggle theme", kind: "Action", run: toggleTheme },
      ...socials
        .filter((s) => s.url.startsWith("http"))
        .map((s) => ({ title: s.name, kind: "Link", run: ext(s.url) })),
    ];
  }, [posts, router, toggleTheme]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return commands.filter((c) => c.title.toLowerCase().includes(term));
  }, [commands, query]);

  const show = useCallback(() => {
    setQuery("");
    setSel(0);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);
  const run = (i: number) => {
    const c = filtered[i];
    close();
    c?.run();
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else show();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, show, close]);

  useEffect(() => {
    listRef.current?.children[sel]?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  function onInputKey(e: React.KeyboardEvent) {
    const n = Math.max(1, filtered.length);
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => (s + 1) % n);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => (s - 1 + n) % n);
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(sel);
    }
  }

  return (
    <>
      <button className="kbd-btn" type="button" onClick={show}>
        <span className="lbl">Search</span>
        <kbd>⌘K</kbd>
      </button>
      {open && (
        <div
          className="scrim"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="palette" role="dialog" aria-label="Command menu">
            <input
              autoFocus
              type="text"
              placeholder="Type a command or search…"
              autoComplete="off"
              aria-label="Search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSel(0);
              }}
              onKeyDown={onInputKey}
            />
            {filtered.length ? (
              <ul ref={listRef} role="listbox">
                {filtered.map((c, i) => (
                  <li
                    key={c.kind + c.title}
                    role="option"
                    aria-selected={i === sel}
                    onMouseEnter={() => setSel(i)}
                    onClick={() => run(i)}
                  >
                    <span>{c.title}</span>
                    <small>{c.kind}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty">No results for “{query.trim()}”</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
