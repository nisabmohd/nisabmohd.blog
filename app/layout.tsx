import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";
import "./globals.css";

const fontSpace = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description:
    "Step into my digital world at Nisab's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
  metadataBase: new URL("https://nisabmohd.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${fontSpace.variable} ${GeistMono.variable} font-space bg-neutral-50 dark:bg-neutral-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[600px] mx-auto sm:px-0 px-4">
            <Navbar />
            <div className="flex flex-col gap-7 py-7 min-h-[82vh]">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
