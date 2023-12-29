"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const Comments = (props: {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}) => {
  const [showComments, setShowComments] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Drawer open={drawerOpen} onOpenChange={(val) => setDrawerOpen(val)}>
        <DrawerTrigger className="sm:hidden flex -mb-10">
          Load comments
        </DrawerTrigger>
        <DrawerContent className="h-[500px]">
          <div className="mt-8 overflow-y-auto px-6 pb-8">
            <LoadGiscus {...props} />
          </div>
        </DrawerContent>
      </Drawer>

      {!showComments ? (
        <div className="w-[full] sm:flex hidden -mt-4 items-center justify-center">
          <span
            className="cursor-pointer text-center"
            onClick={() => setShowComments(true)}
          >
            Load comments
          </span>
        </div>
      ) : (
        <div className="w-full">
          <LoadGiscus {...props} />
        </div>
      )}
    </>
  );
};

function LoadGiscus({
  repoId,
  repo,
  category,
  categoryId,
}: {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}) {
  const { theme } = useTheme();
  return (
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
    />
  );
}

export default Comments;
