const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
