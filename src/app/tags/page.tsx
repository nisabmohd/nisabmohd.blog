import Chip from "@/components/chip";
import { getAllTags } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd | Tags",
  description:
    "Explore a collection of my personal blogs chronicling my coding journey and experiences by blog tags.",
};

export default async function page() {
  const tagMap = await getAllTags();
  return (
    <div className="flex flex-col">
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">All Tags</h1>
        <p className="text-muted-foreground">
          Explore a collection of my personal blogs chronicling my coding
          journey and experiences by blog tags.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-5 mt-8">
        {Array.from(tagMap.keys()).map((tag) => (
          <Chip key={tag} href={tag}>
            {tag}{" "}
            <span className="text-zinc-300">{"(" + tagMap.get(tag) + ")"}</span>
          </Chip>
        ))}
      </div>
    </div>
  );
}
