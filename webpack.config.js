/*
    ./webpack.config.js

    An entry point and output is require to get a running instance of webpack.

    entry: the entry file where the bundler starts the bundling process.

    output: where the bundled js code will be saved.

    loaders: transformations that are applied on a file in our app. Needed since the browser
             needs to be able to interpret and run JSX code (for React) and ES6 code. 
             babel-loader will transpile every file with a .js or .jsx extension excluding
             files in node_modules.
*/
const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}