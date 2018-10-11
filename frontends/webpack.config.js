const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        index: './src/js/index.js',
        finances: './src/js/finances/base.js'
    },

    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle-[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',  // 首页
            hash: true,
            chunks: ['index'],
            template: './src/html/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'finances/base.html',  // 财务管理系统框架
            hash: true,
            chunks: ['finances'],
            template: './src/html/finances/base.html'
        })
    ]
}