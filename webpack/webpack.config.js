const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// let __PROD__ = process.env.NODE_ENV.trim() === 'production'
// let __DEV__ = process.env.NODE_ENV.trim() === 'development'
// let __TEST__ = process.env.NODE_ENV.trim() === 'test'


module.exports = {
    entry: [
        path.resolve(__dirname, '../src/index.js')//指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    ], 
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    module: {
        rules: [
            // {
            //     enforce: "pre",
            //     test: /\.(js|jsx)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            inject: true,
            title: 'MMMMMM'
        })
    ]
}

// if(__DEV__){
    module.exports.devtool = 'cheap-module-eval-source-map'
    module.exports.entry.unshift(
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/only-dev-server'
    )
    module.exports.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
// }