/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '/',
  images: {
    loader: 'akamai',
    path: '',
  },
  pageExtensions: null,

  env: {
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.YOUR_USER_ID,
  },
};

module.exports = nextConfig;
