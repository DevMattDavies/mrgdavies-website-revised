/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["live.staticflickr.com"],
    loader: "default",
  },
};

module.exports = nextConfig;
