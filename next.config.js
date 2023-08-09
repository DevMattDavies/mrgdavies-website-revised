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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/",
          outputPath: "static",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
