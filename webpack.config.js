require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV !== 'production';

console.log('process.env', process.env.TOKEN);

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  // console.log('devMode:', devMode);
  // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  // console.log('Production: ', env.production); // true

  return {
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hotOnly: true,
    },
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    node: {
      fs: 'empty',
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '/dist'),
      publicPath: '/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        favicon: './src/images/favicon.ico',
        filename: './index.html',
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        // filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
        filename: '[name].[hash].css',
        // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
      new webpack.DefinePlugin({
        TOKEN: process.env.TOKEN,
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
  };
};
