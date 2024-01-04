"use client";

import { getViews, incrementViews } from "@/actions/views";
import { useEffect, useState } from "react";

export default function Views({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | undefined>(undefined);
  useEffect(() => {
    const handleViews = async () => {
      const currentViews = await getViews(slug);
      setViews(currentViews);
      await incrementViews(slug);
    };
    handleViews();
  }, [slug]);
  if (views == undefined) return <span className="invisible">...</span>;
  return <span className="text-sm text-muted-foreground">{views} views</span>;
}
