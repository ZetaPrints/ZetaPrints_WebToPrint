/* globals module, require, __dirname */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './JavaScripts/src/includes.js',
    output: {
        filename: 'webtoprint.js',
        path: path.resolve(__dirname, 'skin/frontend/base/default/webtoprint/js'),

        // libraryTarget: "var",
        library: "WebToPrint",
        // library: "[name]",
        libraryTarget: 'var',
        umdNamedDefine: true
    },
    resolve: {
        modules: [
            path.join(__dirname, "JavaScripts/src/library"),
            "node_modules"
        ]
    },
    devtool: "cheap-module-source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": 'jquery',
            "jQuery": 'jquery',
            "window.jQuery": 'jquery',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "JavaScripts/public"),
        compress: true,
        port: 9000,
        publicPath: '/dist/',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "X-Frame-Options": "*",
        },
        proxy: {
            "/web-to-print": {
                changeOrigin: true,
                target: "https://stage.shop.philatelie.li"
            },
        }
    }
};
