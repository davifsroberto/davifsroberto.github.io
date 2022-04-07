/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '/',
  assetPrefix: '/',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
