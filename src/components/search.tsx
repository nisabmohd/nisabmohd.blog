"use client";

import useDebounce from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const isInitialRender = useRef<boolean>(true);
  useDebounce(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    if (!key) return;
    router.push(`/blog?key=${key}`);
  }, [key]);
  return (
    <div className="input flex flex-row gap-3 items-center bg-inherit py-[8.5px] border-[1px] dark:border-neutral-700 border-neutral-300 rounded-md mb-[3.5px] px-3">
      <input
        value={key}
        onChange={(e) => setKey(e.target.value)}
        type="text"
        className="w-full bg-transparent outline-none text-sm"
        placeholder="Search blog ..."
      />
      <Search className="w-4 h-4" />
    </div>
  );
}
