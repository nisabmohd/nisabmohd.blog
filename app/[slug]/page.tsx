import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docs, getBlogSlugFromHref } from "@/ariadocs";
import ReadingProgress from "@/components/reading-progress";
import { formatDate, getPost } from "@/lib/posts";
import { site } from "@/lib/data";

export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  let page;
  try {
    const [{ MDX }, post] = await Promise.all([
      docs.parse({ slug }),
      getPost(slug),
    ]);
    page = { MDX, post };
  } catch {
    notFound();
  }
  const { MDX, post } = page;

  return (
    <main>
      <ReadingProgress />
      <Link href="/#writing" className="back">
        <span>←</span> All writing
      </Link>
      <div className="art-head">
        <h1>{post.title}</h1>
        <div className="art-meta">
          <span>{formatDate(post.published)}</span>
          <span>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
      </div>
      <article className="prose">{MDX}</article>
    </main>
  );
}

export async function generateStaticParams() {
  const paths = await docs.getPagePaths();
  return paths.map((it) => ({ slug: getBlogSlugFromHref(it) }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const post = await getPost(slug);
    const og = new URLSearchParams({
      title: post.title,
      date: formatDate(post.published),
      read: `${post.readMinutes} min read`,
    });
    const ogImage = `${site.url}/og?${og}`;
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.published.toISOString(),
        url: `${site.url}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [ogImage],
      },
    };
  } catch {
    return {
      title: "Not found",
    };
  }
}
