import Blogs from "@/components/blogs";

export default function Home() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8">Hey, I&apos;m Nisab Mohd</h1>
      <div className=" prose dark:prose-invert text-inherit">
        <p>
          I&apos;m a passionate software engineer skilled in Java, JavaScript,
          React, Next.js, and Node.js. My love for data structures matches my
          caffeine addiction. I thrive on daily challenges, transforming
          complexity into efficient code. From creating stunning UIs to
          optimizing backend systems, I constantly innovate and improve. Coding
          is my passion, fueled by coffee and a drive to solve problems, debug
          bugs, and build new features.
        </p>

        <p>
          When I&apos;m not busy brewing the perfect cup of coffee, you can find
          me buried under a pile of half-finished projects and coding
          experiments. Developing for fun and caffeine-fueled creativity—because
          who needs sleep when you have endless ideas and espresso?
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <h2 className="font-semibold text-lg mb-5">Recent Blogs</h2>
        <Blogs limit={3} />
      </div>
    </div>
  );
}
