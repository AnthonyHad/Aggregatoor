/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.coingecko.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
