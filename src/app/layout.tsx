import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const font = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
});

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
        className={`${font.className} dark:bg-neutral-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="max-w-[900px] mx-auto sm:px-8 px-5 py-4 pb-8 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
