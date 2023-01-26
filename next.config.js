/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['prd.place', process.env.NEXT_PUBLIC_DOMAIN_URL],
  },
};

module.exports = nextConfig;
