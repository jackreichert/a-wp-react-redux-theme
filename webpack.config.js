module.exports = {
  // start here
  entry: './src/app.js',
  // end here
  output: { path: './', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        // look for js and jsx files
        test: /.jsx?$/,
        // transpile it with babel
        loader: 'babel-loader',
        // ignore node_modules
        exclude: /node_modules/,
        query: {
          // look for es6 and react
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
