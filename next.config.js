/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '/davifsroberto.github.io',
  assetPrefix: '/davifsroberto.github.io',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
