var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: './App.js',
  module: {
    loaders: [
      {
        // look for js and jsx files
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        // transpile it with babel
        loader: 'babel-loader',
        // ignore node_modules
        query: {
          // look for es6 and react
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: './',
    filename: 'bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
