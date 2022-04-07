/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: 'http://davifsroberto.github.io/',
  assetPrefix: 'http://davifsroberto.github.io/',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
