"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const Comments = ({
  category,
  categoryId,
  repo,
  repoId,
}: {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}) => {
  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
      strict="1"
    />
  );
};

export default Comments;
