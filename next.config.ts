import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/throwback" : "",
  assetPrefix: isProd ? "/throwback" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/throwback" : "",
  },
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

export default nextConfig;
