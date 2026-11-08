import Link from "next/link";
import { experience, projects, site, socials, type Project } from "@/lib/data";
import { formatSize, getReleases, getStars } from "@/lib/github";
import { formatDate, getPosts, Post } from "@/lib/posts";
import { linkIcons } from "@/components/icons";
import { previews } from "@/components/project-previews";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A project's stat from GitHub: "Android · v1.6.1 · 3.3 MB" or "★ 414". Falls back to the written
 * one if GitHub doesn't answer, so the home page never fails on it.
 */
async function liveStat(p: Project) {
  try {
    if (p.live && "release" in p.live) {
      const [latest] = await getReleases(p.live.release);
      if (latest) {
        return [p.stat, `v${latest.version}`, latest.apkSize && formatSize(latest.apkSize)]
          .filter(Boolean)
          .join(" · ");
      }
    }
    if (p.live && "stars" in p.live) return `★ ${await getStars(p.live.stars)}`;
  } catch {}
  return p.stat;
}

export default async function Home() {
  const [posts, stats] = await Promise.all([getPosts(), Promise.all(projects.map(liveStat))]);
  const byYear = posts.reduce<[number, Post[]][]>((acc, post) => {
    const year = post.published.getUTCFullYear();
    const group = acc.at(-1);
    if (group?.[0] === year) group[1].push(post);
    else acc.push([year, [post]]);
    return acc;
  }, []);

  return (
    <main>
      <div className="hero">
        <div className="intro">
          <h1 className="hello">{site.name}</h1>
          <span className="tagline">{site.tagline}</span>
        </div>
        <p className="bio">
          I work mostly in <b>TypeScript</b>, <b>React</b> and <b>Next.js</b>,
          build backends with <b>Node.js</b> and <b>Java</b>, and ship{" "}
          <b>Android</b> apps in Kotlin now and then. <b>AI</b> is part of how I
          work every day, from agents that help me write and review code to AI
          features inside the products I build.
        </p>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.name}
              className="link"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>

      <div className="sections">
        <section id="projects">
          <div className="sec-head">
            <h2 className="label">Projects</h2>
            <a
              className="see-more"
              href="https://github.com/nisabmohd?tab=repositories"
            >
              More on GitHub <span className="arr">↗</span>
            </a>
          </div>
          <div className="projects">
            {projects.map((p, i) => {
              const Preview = previews[p.id];
              return (
                <div key={p.id} className="card">
                  <div className="preview">
                    <Preview />
                  </div>
                  <div className="card-body">
                    <span className="card-title">
                      {p.name} <span className="stat">{stats[i]}</span>
                    </span>
                    <span className="card-desc">{p.description}</span>
                    <span className="chips">
                      {p.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="card-links">
                      {p.links.map((l) => {
                        const Icon = linkIcons[l.kind];
                        return l.soon || !l.url ? (
                          <span key={l.label} className="pill soon">
                            <Icon />
                            {l.label}
                            <em>Soon</em>
                          </span>
                        ) : (
                          <a key={l.url} className="pill" href={l.url}>
                            <Icon />
                            {l.label}
                          </a>
                        );
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="experience">
          <div className="sec-head">
            <h2 className="label">Experience</h2>
            <span className="count">{pad(experience.length)}</span>
          </div>
          <ol className="timeline">
            {experience.map((job) => (
              <li
                key={job.company + job.period}
                className={job.current ? "job now" : "job"}
              >
                <span className="dot" />
                <div className="job-main">
                  <span className="job-title">{job.company}</span>
                  <span className="job-role">{job.role}</span>
                  {job.description && (
                    <span className="job-desc">{job.description}</span>
                  )}
                  {job.stack && (
                    <span className="stack-row">
                      {job.stack.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </span>
                  )}
                </div>
                <span className="period">{job.period}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="writing">
          <div className="sec-head">
            <h2 className="label">Writing</h2>
            <span className="count">{pad(posts.length)}</span>
          </div>
          <div className="years">
            {byYear.map(([year, items]) => (
              <div key={year} className="year">
                <span className="year-label">{year}</span>
                <ul className="posts">
                  {items.map((post) => (
                    <li key={post.slug}>
                      <Link className="post" href={`/${post.slug}`}>
                        <span className="post-title">{post.title}</span>
                        <span className="post-meta">
                          {formatDate(post.published, false)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
