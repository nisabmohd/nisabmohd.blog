import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono, Amiri } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import CommandMenu from "@/components/command-menu";
import { Logo } from "@/components/icons";
import { getPosts } from "@/lib/posts";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.shortTagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  verification: {
    google: "FTrhj2zTINy-vnMsxA-8wy7poFXbSq2LuArgbuPLiGU",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getPosts();

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} ${amiri.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="page">
            <header className="nav">
              <div className="nav-left">
                <Link href="/" className="logo" aria-label={`${site.name}, home`}>
                  <Logo />
                </Link>
                <span className="status">
                  <span className="pulse" />
                  {site.status}
                </span>
              </div>
              <div className="nav-right">
                <CommandMenu
                  posts={posts.map(({ slug, title }) => ({ slug, title }))}
                />
                <ThemeToggle />
              </div>
            </header>

            {children}

            <footer className="site-footer">
              <span>
                © {new Date().getFullYear()} {site.name}
              </span>
              <span>
                Press <kbd>⌘K</kbd> to navigate
              </span>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
