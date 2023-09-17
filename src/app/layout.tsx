import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nisab/blogs",
  description:
    "Welcome to Nisab Mohd's blog. Explore a collection of personal blogs chronicling my coding journey and experiences, filled with insights, challenges, and solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} dark:bg-neutral-900 dark:text-neutral-50 text-zinc-800  h-screen`}
      >
        <nav className="border-b-[1px] dark:border-neutral-700 border-neutral-300 sticky top-0 dark:bg-neutral-900 dark:text-neutral-50 bg-white">
          <Navbar />
        </nav>

        <main className="py-5 w-[32%] max-[1200px]:w-[85%] max-[500px]:w-[91%] m-auto">
          {children}
        </main>
        <footer className="w-[32%] max-[1200px]:w-[85%] max-[500px]:w-[91%] m-auto text-center text-sm dark:text-slate-300 py-4 border-t-[1px] dark:border-neutral-700 border-neutral-300 mt-2 text-slate-800">
          © {new Date().getFullYear()} Nisab Mohd, Inc. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
