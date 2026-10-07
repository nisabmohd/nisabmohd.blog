import { NextRequest } from "next/server";
import { postImage } from "@/lib/og";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const meta = [searchParams.get("date"), searchParams.get("read")]
    .filter(Boolean)
    .join(" · ");
  return postImage({
    title: searchParams.get("title") ?? "",
    meta: meta || undefined,
  });
}
