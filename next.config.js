const nextConfig = {};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add file-loader to handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'file-loader',
    });

    return config;
  },
};
