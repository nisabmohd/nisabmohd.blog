import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisab Mohd",
  description:
    "Step into my digital world at Nisab's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
  metadataBase: new URL("https://nisabmohd.vercel.app/"),
  verification: {
    google: "FTrhj2zTINy-vnMsxA-8wy7poFXbSq2LuArgbuPLiGU",
  },
};

const fontOne = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-one",
  display: "swap",
  weight: "400",
});

const fontTwo = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-two",
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
        className={`${fontOne.variable} ${fontTwo.variable} font-sans dark:bg-[#0a0a0a] text bg-white antialiased px-4 py-5 sm:py-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[640px] mx-auto px-4 text-[15.5px]">
            <div className="py-7 min-h-[83vh]">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
