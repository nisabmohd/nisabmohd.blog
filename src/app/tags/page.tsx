import Chip from "@/components/chip";
import { getAllTags } from "@/lib/md";

export default async function page() {
  const tagMap = await getAllTags();
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <h1 className="text-3xl mb-8">Tags</h1>
      <div className="flex flex-row flex-wrap gap-5">
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
