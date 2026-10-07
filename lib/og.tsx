import { ImageResponse } from "next/og";
import { site } from "./data";

export const ogSize = { width: 1200, height: 630 };

const c = {
  bg: "#0a0a0b",
  fg: "#ededef",
  muted: "#a3a5ac",
  subtle: "#8c8e95",
  faint: "#56585f",
  line: "#232428",
  accent: "#4cc27a",
};

// Fetches only the glyphs needed from Google Fonts. Falls back to the default font if offline.
async function loadFont(family: string, weight: 400 | 500 | 600, text: string) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!src) return null;
    return { name: family, data: await (await fetch(src)).arrayBuffer(), weight } as const;
  } catch {
    return null;
  }
}

export function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect width="64" height="64" rx="15" fill="#141517" />
      <path d="M21 45V27M21 35c0-5.2 4-9 9.5-9S40 29.8 40 35v10" stroke="#ffffff" strokeWidth="6.5" fill="none" strokeLinecap="round" />
      <circle cx="49" cy="43" r="4.5" fill="#4cc27a" />
    </svg>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: c.bg,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,.07) 1px, transparent 0), radial-gradient(ellipse 60% 70% at 85% 110%, rgba(76,194,122,.18), transparent 70%)`,
        backgroundSize: "28px 28px, 100% 100%",
        color: c.fg,
        fontFamily: "Geist",
      }}
    >
      {children}
    </div>
  );
}

function Top({ path }: { path?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Geist Mono", fontSize: 26, color: c.subtle }}>
      <div style={{ width: 17, height: 17, borderRadius: 999, background: c.accent, boxShadow: "0 0 0 7px rgba(76,194,122,.18)" }} />
      <span>{site.domain}</span>
      {path && <span style={{ color: c.faint }}>{path}</span>}
    </div>
  );
}

async function render(node: React.ReactElement, text: string) {
  const fonts = (
    await Promise.all([
      loadFont("Geist", 500, text),
      loadFont("Geist", 600, text),
      loadFont("Geist Mono", 400, text),
    ])
  ).filter((f) => f !== null);
  return new ImageResponse(node, { ...ogSize, fonts });
}

export function homeImage() {
  const text = site.name + site.shortTagline + site.domain + site.ogTags.join("");
  return render(
    <Frame>
      <Top />
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 120, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>{site.name}</div>
        <div style={{ fontSize: 38, fontWeight: 500, color: c.muted, letterSpacing: "-0.01em" }}>{site.shortTagline}</div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {site.ogTags.map((t) => (
          <span key={t} style={{ fontFamily: "Geist Mono", fontSize: 23, color: c.muted, border: "1px solid #2a2b2f", borderRadius: 10, padding: "6px 16px", background: "rgba(255,255,255,.02)" }}>
            {t}
          </span>
        ))}
      </div>
    </Frame>,
    text,
  );
}

export function postImage({ title, meta }: { title: string; meta?: string }) {
  const t = title.length > 110 ? title.slice(0, 107).trimEnd() + "…" : title || "Untitled";
  const text = t + site.name + site.domain + "/ writing" + (meta ?? "");
  return render(
    <Frame>
      <Top path="/ writing" />
      <div style={{ display: "flex", fontSize: t.length > 60 ? 58 : 74, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
        {t}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 30, borderTop: `1px solid ${c.line}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 17, fontSize: 29, fontWeight: 500 }}>
          <Mark size={44} />
          {site.name}
        </div>
        {meta && <span style={{ fontFamily: "Geist Mono", fontSize: 24, color: c.subtle }}>{meta}</span>}
      </div>
    </Frame>,
    text,
  );
}
