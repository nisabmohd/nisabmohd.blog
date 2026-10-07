import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf">
      <span className="count">404</span>
      <h1>This page doesn&apos;t exist</h1>
      <p className="bio">It may have moved, or the link is mistyped.</p>
      <Link href="/" className="back">
        <span>←</span> Back home
      </Link>
    </main>
  );
}
