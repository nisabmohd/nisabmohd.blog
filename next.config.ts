import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent folder makes Next guess the wrong workspace root.
  turbopack: { root: __dirname },
};

export default nextConfig;
