import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/aidantanwebportfolio',

  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.rxresu.me',
        pathname: '**', // This is a wildcard that allows all paths from this hostname
      },

  {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '**', // This is a wildcard that allows all paths from this hostname
      },
    ],
  },

};

export default nextConfig;