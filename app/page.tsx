import Link from "next/link";
import Articles from "@/components/articles";

const socials = [
  {
    name: "twitter",
    url: "https://twitter.com/MohdNisab",
  },
  {
    name: "github",
    url: "https://github.com/nisabmohd",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nisabmohd/",
  },
  {
    name: "bluesky",
    url: "https://bsky.app/profile/nisabmohd.bsky.social",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="heading text">Nisab Mohd</h2>

      <div className="flex items-center gap-3 -mt-1">
        {socials.map((social) => (
          <Link key={social.url} className="link" href={social.url}>
            {social.name}
          </Link>
        ))}
      </div>

      <div className="flex mt-3 flex-col !gap-5 prose dark:prose-invert leading-normal prose-p:my-0 text">
        <p>
          I&apos;m a passionate{" "}
          <span className="font-semibold">software engineer</span> skilled in
          Java, JavaScript, React, Next.js, and Node.js. My love for data
          structures matches my caffeine addiction. I thrive on daily
          challenges, transforming complexity into efficient code. From creating
          stunning UIs to optimizing backend systems, I constantly innovate and
          improve. Coding is my passion, fueled by coffee and a drive to solve
          problems, debug bugs, and build new features.
        </p>
        <p>
          When I&apos;m not busy brewing the perfect cup of coffee, you can find
          me buried under a pile of half-finished projects and coding
          experiments. Developing for fun and caffeine-fueled creativity—because
          who needs sleep when you have endless ideas and espresso?
        </p>
      </div>

      <div className="flex flex-col gap-5 my-6">
        <h2 className="text heading">Articles</h2>
        <Articles />
      </div>
    </div>
  );
}
