const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = Path.resolve(__dirname, '..', 'ccbums')

module.exports = {
    mode: 'production',

    entry: {
        index: './src/js/index.js',
        finances: './src/js/finances/base.js'
    },

    output: {
        path: dist,
        publicPath: '/',
        filename: 'static/js/[name]-bundle-[hash:8].js'
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
        new HtmlWebpackPlugin({
            filename: 'templates/index.html',  // 首页
            hash: true,
            chunks: ['index'],
            template: './src/html/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'templates/finances/base.html',  // 财务管理系统框架
            hash: true,
            chunks: ['finances'],
            template: './src/html/finances/base.html'
        })
    ]
}