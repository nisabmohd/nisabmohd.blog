import ProjectCard from "@/components/project-card";
import { getAllMetaData } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd | Projects",
  description: "Explore a collection of my personal projects.",
};
export default async function Projects() {
  const projectsMetadata = await getAllMetaData({ filepath: "/project" });
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-2xl mb-1">Projects</h1>
        <p className="text-muted-foreground text-sm">
          Explore a collection of my personal projects.
        </p>
      </div>
      <div className="flex flex-col gap-16 mt-8 mb-16">
        {projectsMetadata.map((metadata) => (
          <ProjectCard
            key={metadata.slug}
            date={metadata.published}
            title={metadata.title}
            description={metadata.description}
            languages={metadata.tags ?? []}
            slug={metadata.slug}
            githubUrl={metadata.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
