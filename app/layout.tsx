import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description:
    "Step into my digital world at Nisab's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-body max-w-[600px] dark:bg-[#111010] bg-white dark:text-stone-200 text-black mx-auto sm:px-0 px-6"
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mb-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
