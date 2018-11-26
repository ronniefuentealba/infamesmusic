const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = __dirname + '/app';
const DIST_DIR = __dirname + '/dist';

module.exports = {
  mode: 'development',
  entry: [SRC_DIR + '/index.tsx'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      favicon: SRC_DIR + '/img/favicon.ico',
      filename: './index.html'
    }),
    new ExtractTextPlugin('css/style.[hash].css')
  ],
  module: {
    rules: [{
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              context: '',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [".scss", ".css", ".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'js/bundle.[hash].js'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    contentBase: DIST_DIR,
    hot: true
  }
};