import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd | Projects",
  description: "Explore a collection of my personal projects.",
};

export default function ProjectPage() {
  return (
    <div>
      <Header
        title="Projects"
        description="Explore a collection of my personal projects."
      />
      <div>No projects mentioned yet.</div>
    </div>
  );
}

//TODO: