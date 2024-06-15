import Blogs from "@/components/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd - Blogs",
  description:
    "Explore a collection of personal blogs chronicling my coding journey and experiences, filled with insights, challenges, and solutions.",
};

export default function BlogIndexPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8">Explore My Blogs</h1>
      <Blogs />
    </div>
  );
}
