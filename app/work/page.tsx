import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nisab Mohd - Work",
  description: "Work page of Nisab",
};

export default function WorkPage() {
  return (
    <div>
      <h3 className="mb-10 text-[21px] font-medium">Work experiences</h3>
      <div>
        <div>
          <div>
            <h3 className="text-[18px] font-semibold">ValueLabs</h3>
            <span className="text-sm text-muted-foreground">
              Software Engineer, 2022 - Present
            </span>
            <p className="mt-5 prose dark:prose-invert">
              In my role, I&apos;ve introduced TypeScript to the project,
              enhancing code efficiency through problem-solving. I also play a
              key role in implementing new features or offerings. My primary
              tasks involve code refactoring and resolving complex issues,
              primarily using React and TypeScript. Additionally, I&apos;ve
              developed a comprehensive documentation website for the project
              using Next.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
