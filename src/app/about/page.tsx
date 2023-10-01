import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl">About</h1>
        <p className="text-muted-foreground">Explore about me.</p>
      </div>
      <div className="mt-8 mb-16 flex flex-col gap-14 md:flex-row">
        <div className="flex flex-col gap-1 items-center min-w-[300px]">
          <Avatar className="w-60 h-60">
            <AvatarImage src="avatar.png" />
            <AvatarFallback>Nisab</AvatarFallback>
          </Avatar>

          <h2 className="text-3xl">Nisab Mohd</h2>
          <span className="text-center text-muted-foreground text-md mt-2">
            I am a software engineer with a strong background in full-stack
            development and data structures.
          </span>
          <div className="flex flex-row items-center gap-1 mt-2">
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://github.com/nisabmohd"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://www.linkedin.com/in/mohd-nisab-725148197/"
            >
              <Linkedin className="w-6 h-6" />
            </Link>

            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://twitter.com/MohdNisab"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            I am a passionate and highly skilled software engineer with a robust
            foundation in full-stack development and a deep understanding of
            data structures. My journey in the world of technology has been
            marked by a relentless pursuit of knowledge and a commitment to
            delivering innovative solutions. With expertise in a wide range of
            technologies, including Java, JavaScript, React, Next.js, and
            Node.js, I am well-equipped to tackle complex projects and create
            seamless, user-centric experiences. Whether its designing elegant
            user interfaces, optimizing backend processes, or crafting efficient
            algorithms, I thrive on turning challenges into opportunities for
            growth and innovation. I am dedicated to staying at the forefront of
            the ever-evolving tech landscape and leveraging my skills to make a
            meaningful impact in the software development field.
          </p>
          <p>
            In summary, my journey in software engineering is characterized by
            expertise, innovation, problem-solving, collaboration, and a
            relentless pursuit of knowledge. I look forward to leveraging these
            qualities to contribute to exciting and transformative projects,
            while also fostering growth within the broader tech community.
          </p>
        </div>
      </div>
    </div>
  );
}
