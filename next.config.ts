import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/throwback",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
