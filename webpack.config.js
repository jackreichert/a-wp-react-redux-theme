const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-2', 'react', 'minify']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => ([
                                require('autoprefixer')({
                                    browsers: ['last 2 versions', 'ie > 8'],
                                }),
                            ])
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css", {allChunks: true})
    ]
};
