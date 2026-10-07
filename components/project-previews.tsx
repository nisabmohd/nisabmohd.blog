import type { Project } from "@/lib/data";
import QuranPlayer from "./quran-player";

function NisabPreview() {
  return (
    <div className="quran">
      <div className="q-top">
        <span>
          <b>Al-Fatihah</b> · 1:1
        </span>
        <span>Juz 1</span>
      </div>
      <div className="ayah" lang="ar">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <div className="q-trans">
        In the name of Allah, the Most Gracious, the Most Merciful.
      </div>
      <QuranPlayer />
    </div>
  );
}

// Seeded so the heatmap looks the same on every render.
function heatmapLevels(cols = 26, rows = 7) {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const total = cols * rows;
  return Array.from({ length: total }, (_, i) => {
    const r = rnd();
    const recent = i > total - 13;
    return recent ? 2 + Math.floor(rnd() * 3) : r < 0.3 ? 0 : 1 + Math.floor(rnd() * 4);
  });
}

function SproutPreview() {
  return (
    <div className="habit">
      <div className="habit-top">
        <span>
          <b>Read 20 pages</b>
        </span>
        <span className="streak">12 day streak</span>
      </div>
      <div className="heat" role="img" aria-label="Sample 26-week habit heatmap">
        {heatmapLevels().map((l, i) => (
          <span key={i} className="cell" data-l={l} />
        ))}
      </div>
    </div>
  );
}

function AriaDocsPreview() {
  return (
    <div className="docs" aria-hidden="true">
      <div className="docs-side">
        <span>Introduction</span>
        <span>Installation</span>
        <span>Components</span>
        <span className="grp">API</span>
        <span>
          <i className="m m-get">GET</i>/users
        </span>
        <span className="on">
          <i className="m m-post">POST</i>/users
        </span>
        <span>
          <i className="m m-get">GET</i>/users/{"{id}"}
        </span>
      </div>
      <div className="docs-main">
        <span className="h">
          <i className="m m-post">POST</i> /users
        </span>
        <span className="bar" style={{ width: "88%" }} />
        <span className="bar" style={{ width: "64%" }} />
        <div className="docs-code">
          {"{\n  "}
          <span className="k">&quot;name&quot;</span>
          {': "string",\n  '}
          <span className="k">&quot;email&quot;</span>
          {': "string"\n}'}
        </div>
      </div>
    </div>
  );
}

export const previews: Record<Project["id"], () => React.JSX.Element> = {
  nisab: NisabPreview,
  sprout: SproutPreview,
  ariadocs: AriaDocsPreview,
};
