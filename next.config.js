const Dotenv = require("dotenv-webpack");
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');

module.exports = withFonts(withSass({
  enableSvg: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  }
}))