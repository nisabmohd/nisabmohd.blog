import Link from "next/link";
import Articles from "~/components/articles";

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
    url: "https://www.linkedin.com/in/mohd-nisab-725148197/",
  },
  {
    name: "bsky",
    url: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold font-mono tracking-tighter dark:text-neutral-300 text-neutral-700">
        nisabmohd
      </h2>

      <div className="flex items-center gap-3 -mt-1">
        {socials.map((social) => (
          <Link
            key={social.url}
            className="hover:underline underline-offset-2 hover:dark:text-neutral-200 hover:text-neutral-800"
            href={social.url}
          >
            {social.name}
          </Link>
        ))}
      </div>

      <div className="flex mt-3 flex-col gap-5 prose dark:prose-invert prose-p:m-0 prose-sm min-w-full dark:text-neutral-300 text-neutral-700">
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
        <h2 className="text-xl font-semibold font-mono tracking-tighter dark:text-neutral-300 text-neutral-700">
          articles
        </h2>
        <Articles />
      </div>
    </div>
  );
}
