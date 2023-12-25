"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { MDXFrontmatter } from "@/lib/markdown";
import Link from "next/link";
export default function Search({ search }: { search: MDXFrontmatter[] }) {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(false);
  const result = query
    ? search.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()))
    : search;

  return (
    <>
      <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <SearchIcon className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pr-8 flex flex-row items-center gap-5">
              <Input
                placeholder="Search blogs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </DialogTitle>
          </DialogHeader>
          <div className="-mx-6">
            <h4 className="px-8 uppercase text-blue-500 mb-4 mt-3 text-sm font-semibold">
              Blogs
            </h4>
            <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto">
              {result.length == 0 && (
                <span className="text-center my-5">
                  No results for your search...
                </span>
              )}
              {result.map((item) => (
                <Link
                  onClick={() => setOpen(false)}
                  href={`/blog/${item.slug}`}
                  className="flex flex-col items-start hover:bg-blue-500 px-8 py-2 hover:text-white"
                  key={item.slug}
                >
                  <span className="text-xs font-medium">
                    {new Date(item.published).toDateString()}
                  </span>
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
