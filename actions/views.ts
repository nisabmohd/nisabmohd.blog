"use server";

import prisma from "@/prisma/client";

export async function incrementViews(slug: string) {
  await prisma.blog.update({
    where: {
      slug,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
}
