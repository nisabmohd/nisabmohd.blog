import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postTitle = searchParams.get("title") ?? "";

  const font = fetch(
    new URL("../../public/fonts/SpaceGrotesk-Regular.ttf", import.meta.url)
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
          backgroundImage: `url(https://nisabmohd.vercel.app/nisab-og.png)`,
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
      >
        <div
          style={{
            marginLeft: 95,
            marginTop: -55,
            marginRight: 30,
            display: "flex",
            fontSize: 45,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "#9CA3AF",
            lineHeight: "40px",
            fontWeight: "bolder",
          }}
        >
          Read This Blog :
        </div>
        <div
          style={{
            marginLeft: 95,
            marginTop: 20,
            marginRight: 95,
            display: "flex",
            fontSize: 45,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "60px",
            whiteSpace: "pre-wrap",
            fontWeight: "bolder",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1100,
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
