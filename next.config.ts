import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server to serve its client runtime/HMR assets when the app is
  // opened via loopback hosts (e.g. 127.0.0.1). Without this, Next.js 16 blocks
  // cross-origin dev-resource requests, the page never hydrates, and forms fall
  // back to native submits. See allowedDevOrigins in the Next.js docs.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
