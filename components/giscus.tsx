"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Comments = ({
  repoId,
  repo,
  category,
  categoryId,
}: {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}) => {
  const { theme } = useTheme();
  const [showComments, setShowComments] = useState(false);
  if (!showComments)
    return (
      <div className="w-[full] -mt-4 text-center">
        <span className="cursor-pointer" onClick={() => setShowComments(true)}>
          Load comments
        </span>
      </div>
    );
  return (
    <div className="w-full">
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme={theme}
        lang="en"
        loading="lazy"
        strict="1"
        inputPosition="bottom"
      />
    </div>
  );
};

export default Comments;
