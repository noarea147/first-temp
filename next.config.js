/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSITE_ID: process.env.ID,
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
