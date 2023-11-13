const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      typedRoutes: true,
   },
   reactStrictMode: false,
   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig);
