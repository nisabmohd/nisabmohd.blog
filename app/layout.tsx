import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { GeistMono } from "geist/font/mono";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description:
    "Step into my digital world at Nisab's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
};

const font = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-regular",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistMono.variable} ${font.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="font-regular max-w-[650px] mx-auto sm:px-0 px-6 tracking-wide bg-neutral-50 dark:bg-neutral-950/10"
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
