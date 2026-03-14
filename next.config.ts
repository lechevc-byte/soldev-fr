import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "ik.imagekit.io" },
      { hostname: "media.licdn.com" },
    ],
  },
};

export default nextConfig;
