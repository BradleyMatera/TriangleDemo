import type { NextConfig } from "next";

const repoName = "leaf-js";
const isProduction = process.env.NODE_ENV === "production";
const forcedBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

const basePath = forcedBasePath ?? (isProduction ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath
};

export default nextConfig;
