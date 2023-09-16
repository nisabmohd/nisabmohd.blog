import { getAllMetaData } from "@/lib/utils";
import Link from "next/link";

export default async function page() {
  const metadatas = await getAllMetaData();
  return (
    <div>
      {metadatas.map((frontmatter) => (
        <Link href={`/blog/${frontmatter.slug}`} key={frontmatter.slug}>
          {" "}
          {frontmatter.title}
        </Link>
      ))}
    </div>
  );
}
