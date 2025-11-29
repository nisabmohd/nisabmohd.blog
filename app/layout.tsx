import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Link from "next/link";

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

const socials = [
  {
    name: "twitter",
    url: "https://twitter.com/MohdNisab",
  },
  {
    name: "github",
    url: "https://github.com/nisabmohd",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nisabmohd/",
  },
  {
    name: "bluesky",
    url: "https://bsky.app/profile/nisabmohd.bsky.social",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${fontOne.variable} ${fontTwo.variable} font-sans dark:bg-[#030303] text-inherit bg-white antialiased px-2 py-4 sm:py-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[700px] mx-auto px-4 text-[15.5px]">
            <div className="py-7 min-h-[83vh]">
              <nav className="h-16">
                <Link
                  href="/"
                  className="link heading text  dark:!text-white !text-black"
                >
                  Nisab Mohd
                </Link>
                <div className="flex items-center gap-3 mt-1">
                  {socials.map((social) => (
                    <Link key={social.url} className="link" href={social.url}>
                      {social.name}
                    </Link>
                  ))}
                </div>
              </nav>
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
