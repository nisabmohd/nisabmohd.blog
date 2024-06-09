import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="text-2xl mb-5 mx-auto font-medium">
          Hey, I&apos;m Nisab Mohd
        </div>
        <div className="flex sm:flex-col flex-col items-start gap-8 mt-8">
          {/* <Image
            src="/profile-pic.png"
            width={140}
            height={170}
            alt="profile"
            className="rounded-full mt-1.5 dark:bg-neutral-900 bg-neutral-100"
          /> */}
          <div className="flex flex-col">
            <p className="text- text-center  text-muted-foreground font-semibold flex items-start gap-2">
              <span> — </span>
              <span>Software Engineer.</span>
            </p>
          </div>
          <div className="pr-2 pt-0.5">
            <p className="text-inherit prose dark:prose-invert prose-p:m-0 flex items-start gap-2">
              <span> — </span>
              <span>
                I&apos;m a full-stack developer mastering Java, JavaScript,
                React, Next.js, Node.js. My passion for data structures equals
                my caffeine addiction. Seeking fresh challenges daily, I
                transform complexity into elegant code. Whether crafting
                stunning UIs or fine-tuning robust systems, it&apos;s all in a
                day&apos;s work for this coding enthusiast who treats coffee as
                the ultimate fuel for the journey. Who needs sleep when
                there&apos;s always code to write, bugs to debug, and coffee to
                sip?
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-7">
        <p className="text-inherit prose dark:prose-invert prose-p:m-0 flex items-start gap-2">
          <span> — </span>{" "}
          <span>
            When I&apos;m not busy brewing the perfect cup of coffee, you can
            find me buried under a pile of half-finished projects and coding
            experiments. Developing for fun and caffeine-fueled
            creativity—because who needs sleep when you have endless ideas and
            espresso?
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center -ml-4 mt-9">
        <Link
          href="https://github.com/nisabmohd"
          className={buttonVariants({ variant: "link" })}
        >
          <GithubIcon className="mr-1 w-4 h-4" />
          GitHub
        </Link>
        <Link
          href="https://twitter.com/MohdNisab"
          className={buttonVariants({
            variant: "link",
            className: "-ml-3",
          })}
        >
          <TwitterIcon className="mr-1 w-4 h-4" /> Twitter
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohd-nisab-725148197/"
          className={buttonVariants({
            variant: "link",
            className: "-ml-3",
          })}
        >
          <LinkedinIcon className="mr-1 w-4 h-4" /> LinkedIn
        </Link>
      </div>
    </div>
  );
}
