import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "node:module": false,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "0xgzfewyp7.ufs.sh"
      },
    ],
  },

};

export default nextConfig;
