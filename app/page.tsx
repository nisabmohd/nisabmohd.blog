import Articles from "@/components/articles";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
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
