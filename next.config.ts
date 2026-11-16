import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent folder makes Next guess the wrong workspace root.
  turbopack: { root: __dirname },
  // App screenshots come straight from the apps' repos (their store listings).
  images: {
    remotePatterns: [{ protocol: "https", hostname: "raw.githubusercontent.com", pathname: "/nisabmohd/**" }],
  },
  // Asusual was called Weft until November 2026: its old pages (store listings and the app's own
  // links pointed at them) go to the new ones.
  async redirects() {
    return [
      { source: "/weft", destination: "/asusual", permanent: true },
      { source: "/weft/privacy", destination: "/asusual/privacy", permanent: true },
    ];
  },
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
