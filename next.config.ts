import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
      allowedOrigins: ["http://localhost:3000"], // ! UPDATE once deployed to include domain.
    },
  },
};

export default nextConfig;
