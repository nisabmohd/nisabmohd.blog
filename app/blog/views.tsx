"use client";

import { getViews } from "@/actions/views";
import { useEffect, useState } from "react";

export default function Views({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | undefined>(undefined);
  useEffect(() => {
    const handleViews = async () => {
      const currentViews = await getViews(slug);
      setViews(currentViews);
    };
    handleViews();
  }, [slug]);
  if (views == undefined) return <span className="invisible">...</span>;
  return (
    <span className="text-muted-foreground text-[14.5px]">{views} views</span>
  );
}
