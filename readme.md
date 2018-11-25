# Infames Music Label
This is a project...

# React + Webpack 4 + Babel 7 Setup

Make sure you have a recent version of [Node.js](https://nodejs.org/) installed.

## Initialize the project 

> npm init -y

## Module Builder Setup

> npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin html-loader

package.json

>...
>"scripts": {
>  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
>  ...
>},
>...

touch webpack.config.js

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = __dirname + '/app';
const DIST_DIR = __dirname + '/dist';

module.exports = {
  entry: [
    SRC_DIR + '/index.html',
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000
  }
};

## Babel Setup

From root folder
>npm install --save-dev @babel/core @babel/preset-env

loader
>npm install --save-dev babel-loader

>npm install --save-dev @babel/preset-react

.babelrc
>touch .babelrc
{
  "presets": ["@babel/react", "@babel/typescript", ["@babel/env", { "modules": false }]]
}


webpack.config.js
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

### So far the app shuld run with no problems

Try
> npm start

Project is running at [http://localhost:8080/](http://localhost:8080/)

## SASS
Sass compiler installation

[https://www.codementor.io/valentinrad/roll-your-own-tiny-react-environment-using-webpack-babel-and-sass-ei70wyhjl](https://www.codementor.io/valentinrad/roll-your-own-tiny-react-environment-using-webpack-babel-and-sass-ei70wyhjl)


From root folder
>npm install --save-dev mini-css-extract-plugin css-loader sass-loader node-sass postcss-loader 

New rule to webpack.config.js
{
  test: /\.(scss|sass|css)$/,
  exclude: /node_modules/,
  loaders: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
      }
    },
  'sass-loader',
  ]
},

Add new pluging in webpack.config.js

new MiniCssExtractPlugin({
  filename: devMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
})

>md styles styles/partials

>touch styles/partials/_base.scss styles/partials/_mixins.scss styles/partials/_variables.scss styles/main.scss

### Minimizing for Production
run

>npm i -D uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin

webpack.config.js

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
}

## React Setup

>npm install --save react react-dom @types/react @types/react-dom

development-time dependencies on awesome-typescript-loader and source-map-loader.

>npm install --save-dev typescript awesome-typescript-loader source-map-loader

touch tsconfig.json

>{
>    "compilerOptions": {
>        "outDir": "./dist/",
>        "sourceMap": true,
>        "noImplicitAny": true,
>        "module": "commonjs",
>        "target": "es5",
>        "jsx": "react"
>    },
>    "include": [
>        "./app/**/*"
>    ]
>}

>mkdir app/components

>touch app/hello.tsx

import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

>touch index.tsx

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

webpack.config.js
{
  ...
   // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
    ...
}

## React hot Module 
>npm install --save-dev react-hot-loader

You have to add some more configuration to your Webpack configuration file.

webpack.config.js

const webpack = require('webpack');

plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dist',
    hot: true
  }

>npm i --save-dev @types/webpack-env

## ESLINT

[http://www.zsoltnagy.eu/use-eslint-like-a-pro-with-es6-and-react/](http://www.zsoltnagy.eu/use-eslint-like-a-pro-with-es6-and-react/)

>npm install eslint eslint-plugin-react eslint-watch --save-dev

The file .eslintrc is a JSON file responsible for configuring your individual linting rules. 

{
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
        "mocha":   true
    },   
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended"
    ],    
    "rules": {
    }
}
 

###Linting in the console
We have already installed the eslint-watch npm module. It’s time to use it.

Add "lint" and "lint:watch" to your package.json:
 
  "scripts": {
    "build": "webpack -d && cp app/index.html dist/index.html && webpack-dev-server --hot --inline --colors --progress --content-base app/",
    "build-prod": "webpack -p && cp app/index.html dist/index.html",
    "lint": "esw webpack.config.* app tools --color",
    "lint:watch": "npm run lint -- --watch"
  },

>npm install npm-run-all --save-dev

"build": "webpack -d && cp app/index.html dist/index.html && webpack-dev-server --hot --inline --colors --progress --content-base app/",
    "build-prod": "webpack -p && cp app/index.html dist/index.html",
    "lint": "esw webpack.config.* app tools --color",
    "lint:watch": "npm run lint -- --watch",
    "start": "npm-run-all --parallel build lint:watch"

Run the app
>npm start

### Jest

Let's install dependencies

>npm install --save-dev jest @types/jest ts-jest babel-jest react-test-renderer

Add to the scripts on package.json
>"test": "jest"

Enzyme however requires a separate installation, so run:

>npm i --save-dev enzyme enzyme-adapter-react-16 

npm i  @types/enzyme enzyme-to-json -D

npm i -D @types/enzyme-adapter-react-16

npm install @types/react-test-renderer

## Lazy Images

[lazy-image-loading-in-react-the-full-breakdown](https://medium.com/@rossbulat/lazy-image-loading-in-react-the-full-breakdown-4026619de2df)

>npm install --save react-lazy-load