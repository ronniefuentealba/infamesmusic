const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = {
  entry: [SRC_DIR + '/index.tsx'],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      },
      // {
      //   test: /\.(scss|sass|css)$/,
      //   exclude: /node_modules/,
      //   loaders: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoaders: 1,
      //         localIdentName: '[local]___[hash:base64:5]'
      //       }
      //     },
      //   'sass-loader',
      //   ]
      // },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      filename: './index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true
  }
};
