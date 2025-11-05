import type { NextConfig } from "next";

const repoName = process.env.NEXT_PUBLIC_REPO_NAME ?? "TriangleDemo";
const isProduction = process.env.NODE_ENV === "production";
const forcedBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

const basePath =
  forcedBasePath ?? (isProduction && repoName ? `/${repoName}` : "");

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
