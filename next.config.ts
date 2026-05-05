import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Custom domain: goldenlandscapingvaldosta.com (no basePath needed)
};

export default nextConfig;
