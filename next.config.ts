import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  // Add this line to correctly handle asset paths on GitHub Pages.
  basePath: '/aidantanwebportfolio', 

  // If you're using the next/image component, ensure this line is also present
  // to make it work with static exports.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;