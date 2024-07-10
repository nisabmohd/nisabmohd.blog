import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const url = new URL(decodeURIComponent(req.nextUrl.toString()));
  const searchParams = new URLSearchParams(url.search);
  const postTitle = searchParams.get("title");
  console.log(postTitle);

  const font = fetch(
    new URL("../../public/fonts/SpaceMono-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(https://nisabmohd.vercel.app/og-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
      >
        <div
          style={{
            marginLeft: 80,
            marginBottom: 125,
            marginRight: 20,
            display: "flex",
            fontSize: 65,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "black",
            lineHeight: "65px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Space Mono",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
