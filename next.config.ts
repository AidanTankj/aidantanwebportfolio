import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'export', 
    images: {
    unoptimized: true, // This disables the server-side image optimizer
  },
};

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aidantanwebportfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/aidantanwebportfolio' : '',
}
export default nextConfig;
