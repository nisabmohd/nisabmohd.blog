import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/navbar";
import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description: "Nisab Mohd blogs website",
};

const OutFit_Font = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${OutFit_Font.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans max-w-[600px] dark:bg-[#111010] bg-white dark:text-stone-200 text-black mx-auto sm:px-0 px-6"
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
