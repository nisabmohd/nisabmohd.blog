import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const font = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-main",
});

const codefont = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-code",
});

const metadata: Metadata = {
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${font.variable} ${codefont.variable} dark:bg-neutral-950 dark:text-slate-50`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="max-w-[750px] mx-auto sm:px-8 px-5 py-4 pb-8 min-h-[80vh] font-mono">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
