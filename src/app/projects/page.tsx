import Pagination from "@/components/pagination";
import ProjectCard from "@/components/project-card";
import { getAllMetaData } from "@/lib/md";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd | Projects",
  description: "Explore a collection of my personal projects.",
};
export default async function Projects({
  searchParams: { page = "1" },
}: {
  searchParams: { page?: string };
}) {
  const projectsMetadata = await getAllMetaData({ filepath: "/project" });
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">Projects</h1>
        <p className="text-muted-foreground">
          Explore a collection of my personal projects.
        </p>
      </div>
      <div className="flex flex-col gap-16 mt-8 mb-16">
        {projectsMetadata.data.map((metadata) => (
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
      <Pagination
        currentPage={parseInt(page)}
        totalPages={projectsMetadata.totalPages}
        baseUrl="/blog"
      />
    </div>
  );
}
