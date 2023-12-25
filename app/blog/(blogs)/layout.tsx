import BlogIndex from "@/components/blog-index";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function BlogIndexLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header
        title="All Blogs"
        description="Explore a collection of all my blogs here."
      />
      <div className="flex flex-row items-start gap-20 mt-8">
        <BlogIndex />
        <div>{children}</div>
      </div>
    </>
  );
}
