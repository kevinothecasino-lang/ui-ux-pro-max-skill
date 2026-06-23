import type { NextConfig } from "next";

// Static export is opt-in via NEXT_EXPORT so local `dev`/`start` stay normal.
// The GitHub Pages workflow sets NEXT_EXPORT=true and PAGES_BASE_PATH=/<repo>.
const isExport = process.env.NEXT_EXPORT === "true";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" } : {}),
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
