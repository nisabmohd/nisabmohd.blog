import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent folder makes Next guess the wrong workspace root.
  turbopack: { root: __dirname },
  // App screenshots come straight from the apps' repos (their store listings).
  images: {
    remotePatterns: [{ protocol: "https", hostname: "raw.githubusercontent.com", pathname: "/nisabmohd/**" }],
  },
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
