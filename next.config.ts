import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Custom domain: goldenlandscapingvaldosta.com (no basePath needed)
  allowedDevOrigins: ["192.168.1.211"],
};

export default nextConfig;
