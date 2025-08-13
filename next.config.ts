import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/aidantanwebportfolio',
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = { basePath: isProd ? '/aidantanwebportfolio' : '', assetPrefix: isProd ? '/aidantanwebportfolio/' : '', images: { unoptimized: true, }, };
  
// module.exports = nextConfig;