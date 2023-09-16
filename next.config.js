/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    outputFileTracingIncludes: {
      "/blog/[slug]": ["node_modules/shiki/**/*"],
    },
  },
};

module.exports = nextConfig;
