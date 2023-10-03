import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const font = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Nisab Mohd | Blog",
  description:
    "Explore a collection of personal blogs chronicling my coding journey and experiences, filled with insights, challenges, and solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} dark:bg-zinc-950 dark:text-slate-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="max-w-[1028px] mx-auto px-8 py-2 pb-8 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
