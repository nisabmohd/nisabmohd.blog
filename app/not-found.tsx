import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh]">
      <h1 className="font-semibold text-2xl mb-8">404 | Not Found</h1>
      <div className="prose dark:prose-invert text-inherit">
        <Link href="/">Go to homepage</Link>
      </div>
    </div>
  );
}
