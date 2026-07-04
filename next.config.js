/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: __dirname,
  },
  pageExtensions: ['tsx', 'jsx'],
  env: {
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.YOUR_USER_ID,
  },
};

module.exports = nextConfig;
