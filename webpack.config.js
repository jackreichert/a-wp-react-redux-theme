const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoPrefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist') + '/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass!postcss?sourceMap')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css", {allChunks: true})
    ],
    postcss: [autoPrefixer({browsers: ['last 3 versions']})]
};
