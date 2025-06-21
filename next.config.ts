import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/FERI-PORTOFOLIO",
  assetPrefix: "/FERI-PORTOFOLIO/",
  env: {
    NEXT_PUBLIC_BASE_PATH: '/FERI-PORTOFOLIO',
  },
};

export default nextConfig;
