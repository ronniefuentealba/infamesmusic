# Infames Music Label
This is a project...

# React + Webpack 4 + Babel 7 Setup

Make sure you have a recent version of [Node.js](https://nodejs.org/) installed.

## Initialize the project 

> npm init -y

## Module Builder Setup

> npm install --save-dev webpack webpack-dev-server webpack-cli

package.json

>...
>"scripts": {
>  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
>  ...
>},
>...

touch webpack.config.js

>module.exports = {
>  entry: './src/index.js',
>  output: {
>    path: __dirname + '/dist',
>    publicPath: '/',
>    filename: 'bundle.js'
>  },
>  devServer: {
>    contentBase: './dist'
>  }
>};

## Babel Setup

From root folder
>npm install --save-dev @babel/core @babel/preset-env

loader
>npm install --save-dev babel-loader

transform the React’s JSX syntax to vanilla JavaScript
>npm install --save-dev @babel/preset-react

touch .babelrc
>{
>  "presets": [
>    "@babel/preset-env"
>  ]
>}

webpack.config.js
>module: {
>    rules: [
>      {
>        test: /\.(js|jsx)$/,
>        exclude: /node_modules/,
>        use: ['babel-loader']
>      }
>    ]
>  },
>  resolve: {
>    extensions: ['*', '.js', '.jsx']
>  },

## So far the app shuld run with no problems

Try
> npm start

Project is running at [http://localhost:8080/](http://localhost:8080/)

