var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'cheap-eval-source-map', //提示报错的具体位置信息
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        compress: true,
        port: 9000,
        open: true,
        hot: true
    }
}