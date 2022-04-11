/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '/',
  pageExtensions: null,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.YOUR_USER_ID,
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
