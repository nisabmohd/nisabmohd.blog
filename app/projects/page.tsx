import Header from "@/components/header";
import ProjectCard from "@/components/project-card";
import { MDXProjectFrontmatter, getAllMetaData } from "@/lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd | Projects",
  description: "Explore a collection of my personal projects.",
};

export default async function ProjectPage() {
  const { data } = await getAllMetaData<MDXProjectFrontmatter>("project", {
    page: 1,
    count: Infinity,
  });

  return (
    <div>
      <Header
        title="Projects"
        description="Explore a collection of my personal projects."
      />
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 pt-6">
        {data.map((item) => (
          <ProjectCard {...item} key={item.githubUrl} />
        ))}
      </div>
    </div>
  );
}
