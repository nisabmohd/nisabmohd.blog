import { buttonVariants } from "@/components/ui/button";
import { AtSignIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="text-2xl mb-5 font-medium">
          Hey, I&apos;m Nisab Mohd 👋
        </div>
        <div className="flex sm:flex-row flex-col items-start gap-8 mt-9">
          <div className="flex flex-col items-center flex-[1]">
            <Image
              src="/profile.png"
              width={180}
              height={100}
              alt="profile"
              className="rounded-full mt-1.5"
            />
            <p className="text- text-center mt-3 text-muted-foreground font-semibold">
              Software Engineer.
            </p>
            <div className="flex flex-row items-center">
              <Link
                href="https://github.com/nisabmohd"
                className={buttonVariants({ variant: "link" })}
              >
                <AtSignIcon className="mr-1 w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="https://twitter.com/MohdNisab"
                className={buttonVariants({
                  variant: "link",
                  className: "-ml-3",
                })}
              >
                <AtSignIcon className="mr-1 w-4 h-4" /> Twitter
              </Link>
            </div>
          </div>
          <div className="flex-[3]">
            <p className="text-inherit prose dark:prose-invert prose-p:m-0">
              I am a software engineer with a strong background in full-stack
              development and data structures. I am a passionate and highly
              skilled software engineer with a robust foundation in full-stack
              development and a deep understanding of data structures. My
              journey in the world of technology has been marked by a relentless
              pursuit of knowledge and a commitment to delivering innovative
              solutions. With expertise in a wide range of technologies,
              including Java, JavaScript, React, Next.js, and Node.js.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <p className="text-inherit prose dark:prose-invert prose-p:m-0">
          I am well-equipped to tackle complex projects and create seamless,
          user-centric experiences. Whether its designing elegant user
          interfaces, optimizing backend processes, or crafting efficient
          algorithms, I thrive on turning challenges into opportunities for
          growth and innovation.
        </p>
        <p className="text-inherit prose dark:prose-invert prose-p:m-0">
          {" "}
          I am dedicated to staying at the forefront of the ever-evolving tech
          landscape and leveraging my skills to make a meaningful impact in the
          software development field.
        </p>
      </div>
    </div>
  );
}
