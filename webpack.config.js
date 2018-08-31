var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    mode: "none",
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        chunkFilename: "[id].[hash].bundle.js",
        path: __dirname + `/public/`,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    devtool: "none",
    performance: {
        hints: false
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loaders: [ 'style-loader', 'css-loader', 'less-loader' ] },
            { test: /\.css$/, loaders: [ 'style-loader', 'css-loader'] },
            { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=1024000' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],

    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        disableHostCheck: true
    }
};