var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: path.resolve(ROOT_PATH, 'app/index.js'),
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool:"inline-source-map",
    devServer: {
        hot: true,
        inline: true,
        progress:true,
        contentBase: path.join(__dirname, "app"),
        host:'localhost',
        port:'8090'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'app/index.html'
		})
	],
    resolve: {
        extensions: ['.css', '.js', '.jsx'],
    }
}