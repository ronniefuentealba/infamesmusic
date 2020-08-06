const Dotenv = require("dotenv-webpack");
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  }
})