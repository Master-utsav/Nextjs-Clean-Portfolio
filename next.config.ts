import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    remotePatterns : [{ protocol: "https", hostname: "res.cloudinary.com" }],
    domains: ["res.cloudinary.com", "vercel.com", "nextjs.org"],
  },
};

export default nextConfig;
