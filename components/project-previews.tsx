import type { Project } from "@/lib/data";

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

function BurrowPreview() {
  return (
    <div className="spend" aria-hidden="true">
      <span className="spend-label">Safe to spend today</span>
      <span className="spend-amt">₹1,240</span>
      <span className="spend-bar">
        <i className="spent" style={{ width: "52%" }} />
        <i className="bills" style={{ width: "18%" }} />
      </span>
      <span className="spend-legend">
        <span>Spent ₹18.2k</span>
        <span>Bills ₹6.3k</span>
        <span>Left ₹10.5k</span>
      </span>
      <span className="txn">
        <span>Swiggy</span>
        <small>from SMS</small>
        <b>−₹349</b>
      </span>
      <span className="txn">
        <span>Electricity</span>
        <small>bill paid</small>
        <b>−₹1,180</b>
      </span>
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
  sprout: SproutPreview,
  burrow: BurrowPreview,
  ariadocs: AriaDocsPreview,
};
