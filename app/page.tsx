import Blog from "@/components/blog";
import Blogs from "@/components/blogs";

export default function Home() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8">Hey, I&apos;m Nisab Mohd</h1>
      <div className=" prose dark:prose-invert text-inherit">
        <p>
          I&apos;m a full-stack developer mastering Java, JavaScript, React,
          Next.js, Node.js. My passion for data structures equals my caffeine
          addiction. Seeking fresh challenges daily, I transform complexity into
          elegant code. Whether crafting stunning UIs or fine-tuning robust
          systems, it&apos;s all in a day&apos;s work for this coding enthusiast
          who treats coffee as the ultimate fuel for the journey. Who needs
          sleep when there&apos;s always code to write, bugs to debug, and
          coffee to sip?
        </p>
        <p>
          When I&apos;m not busy brewing the perfect cup of coffee, you can find
          me buried under a pile of half-finished projects and coding
          experiments. Developing for fun and caffeine-fueled creativity—because
          who needs sleep when you have endless ideas and espresso?
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <h2 className="font-semibold text-lg mb-4">Recent Blogs</h2>
        <Blogs limit={3} />
      </div>
    </div>
  );
}
