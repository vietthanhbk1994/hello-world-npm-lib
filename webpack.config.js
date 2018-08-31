const webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    mode: "none",
    entry: './src/index.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
};