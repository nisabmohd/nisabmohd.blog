import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description:
    "Step into my digital world at Nisab's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
};

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const jetbrainsFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSpaceGrotesk.variable} ${jetbrainsFont.variable}`}
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
