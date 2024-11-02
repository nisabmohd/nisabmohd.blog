import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description:
    "Step into my digital world at Nisab's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
  metadataBase: new URL("https://nisabmohd.vercel.app/"),
};

const spaceFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${spaceFont.variable} ${GeistMono.variable} font-sans bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[700px] mx-auto sm:px-0 px-4">
            <Navbar />
            <div className="flex flex-col gap-7 py-7 min-h-[83vh]">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
