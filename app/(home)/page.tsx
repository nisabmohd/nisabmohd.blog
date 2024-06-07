import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="text-2xl mb-5 font-medium">
          Hey, I&apos;m Nisab Mohd
        </div>
        <div className="flex sm:flex-col flex-col items-start gap-8 mt-9">
          <div className="flex sm:flex-row flex-col gap-5 items-center">
            <Image
              src="/profile-pic.png"
              width={170}
              height={170}
              alt="profile"
              className="rounded-full mt-1.5 dark:bg-neutral-900 bg-neutral-100"
            />
            <div className="flex flex-col">
              <p className="text- text-center  text-muted-foreground font-semibold">
                - Software Engineer.
              </p>
              <div className="flex flex-row items-center">
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
              </div>
            </div>
          </div>
          <div className="pr-2 pt-0.5">
            <p className="text-inherit prose dark:prose-invert prose-p:m-0">
              I&apos;m a full-stack developer mastering Java, JavaScript, React,
              Next.js, Node.js. My passion for data structures equals my
              caffeine addiction. Seeking fresh challenges daily, I transform
              complexity into elegant code. Whether crafting stunning UIs or
              fine-tuning robust systems, it&apos;s all in a day&apos;s work for
              this coding enthusiast who treats coffee as the ultimate fuel for
              the journey. Who needs sleep when there&apos;s always code to
              write, bugs to debug, and coffee to sip?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-7">
        <p className="text-inherit prose dark:prose-invert prose-p:m-0">
          I&apos;m ready to tackle tough projects and craft user-friendly
          experiences. Whether it&apos;s designing sleek interfaces, optimizing
          backend processes, or creating efficient algorithms, I enjoy turning
          challenges into opportunities for innovation. Keeping up with the
          latest tech trends? Absolutely. I&apos;m committed to staying ahead of
          the curve and making a difference in the software world.
        </p>
        <p className="text-inherit prose dark:prose-invert prose-p:m-0">
          When I&apos;m not busy brewing the perfect cup of coffee, you can find
          me buried under a pile of half-finished projects and coding
          experiments. Developing for fun and caffeine-fueled creativity—because
          who needs sleep when you have endless ideas and espresso?
        </p>
      </div>
    </div>
  );
}
