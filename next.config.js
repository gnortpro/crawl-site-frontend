/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg');
const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withReactSvg,
      {
        include: path.resolve(__dirname, 'src/assets'),
      },
    ],
  ],
  nextConfig
);
