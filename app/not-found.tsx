import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-2xl">404 | Not Found</h1>
      <Link className="underline underline-offset-2" href="/">
        Go to homepage
      </Link>
    </div>
  );
}
