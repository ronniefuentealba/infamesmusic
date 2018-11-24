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

.babelrc
>touch .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
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
>        "./src/**/*"
>    ]
>}

>mkdir src/components

>touch src/hello.tsx

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

>touch ~rootproject/index.html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
    </head>
    <body>
        <div id="example"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

        <!-- Main -->
        <script src="./dist/bundle.js"></script>
    </body>
</html>

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
