import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nisab Mohd | About",
  description: "Explore about me.",
};

export default function AboutPage() {
  return (
    <div>
      <Header title="About" description="Explore about me." />
      <div className="flex sm:flex-row flex-col items-start gap-6 py-5">
        <div className="sm:w-[27%] flex flex-col items-center">
          <Avatar className="w-52 h-52">
            <AvatarImage src="https://avatars.githubusercontent.com/u/76525761?v=4" />
            <AvatarFallback>NISAB</AvatarFallback>
          </Avatar>
          <h3 className="text-2xl mt-5 font-bold">Nisab Mohd</h3>
          <span className="text-muted-foreground text-center mt-1">
            I am a software engineer with a strong background in full-stack
            development and data structures.
          </span>
          <div className="flex flex-row gap-1 items-center mt-2">
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://github.com/nisabmohd"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://www.linkedin.com/in/mohd-nisab-725148197/"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://twitter.com/MohdNisab"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="sm:w-[65%] ml-auto px-5 flex flex-col gap-4">
          <p>
            I am a passionate and highly skilled software engineer with a robust
            foundation in full-stack development and a deep understanding of
            data structures. My journey in the world of technology has been
            marked by a relentless pursuit of knowledge and a commitment to
            delivering innovative solutions. With expertise in a wide range of
            technologies, including Java, JavaScript, React, Next.js, and
            Node.js.
          </p>
          <p>
            I am well-equipped to tackle complex projects and create seamless,
            user-centric experiences. Whether its designing elegant user
            interfaces, optimizing backend processes, or crafting efficient
            algorithms, I thrive on turning challenges into opportunities for
            growth and innovation.
          </p>
          <p>
            I am dedicated to staying at the forefront of the ever-evolving tech
            landscape and leveraging my skills to make a meaningful impact in
            the software development field.
          </p>
        </div>
      </div>
    </div>
  );
}
