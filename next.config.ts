import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
