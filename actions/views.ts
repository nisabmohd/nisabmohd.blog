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

export async function getViews(slug: string) {
  const blog = await prisma.blog.findUnique({ where: { slug } });
  return blog?.views;
}
