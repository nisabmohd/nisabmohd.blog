import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd | Projects",
  description: "Explore a collection of my personal projects.",
};
export default function Projects() {
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">Projects</h1>
        <p className="text-muted-foreground">
          Explore a collection of my personal projects.
        </p>
      </div>
      <div className="mt-8 mb-16 ">No projects yet mentioned.</div>
    </div>
  );
}
