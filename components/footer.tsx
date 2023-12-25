import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center h-24">
      <div className="max-w-[1000px] mx-auto text-muted-foreground text-center sm:px-0 px-5 py-5">
        Built by{" "}
        <Link className="font-semibold" href="/about">
          Nisab Mohd
        </Link>
        . The source code is available on{" "}
        <Link
          className="font-semibold"
          href="https://github.com/nisabmohd/Personal-Blog"
        >
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
}
