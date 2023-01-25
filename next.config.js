/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['prd.place', process.env.API_URL],
  },
};

module.exports = nextConfig;
