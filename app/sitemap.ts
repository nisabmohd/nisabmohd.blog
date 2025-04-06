import type { MetadataRoute } from "next";
import { getAllBlogs } from "~/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs();

  const blogSitemaps: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `https://nisabmohd.vercel.app/${blog.frontmatter.slug}`,
    lastModified: new Date(blog.frontmatter.published),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://nisabmohd.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    ...blogSitemaps,
  ];
}
