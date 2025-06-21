import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
