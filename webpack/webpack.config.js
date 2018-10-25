const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let __PROD__ =  process.env.NODE_ENV === 'production'
let __DEV__ = process.env.NODE_ENV === 'development'
let __TEST__ =  process.env.NODE_ENV === 'test'

function getEntries (globPath){
    const files = glob.sync(globPath)
    const entries = {}
  
    files.forEach(file => {
      const dirname = path.dirname(file).replace(/.(\/|\\\\)src(\/|\\\\)containers(\/|\\\\)(.*?)/, '')
  
      entries[dirname] = file
    })
    console.log(entries)
    return entries
  }

module.exports = {
    mode:'development',
    entry: [
        path.resolve(__dirname, '../src/index.js'),//指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    ], 
    // entry:getEntries('./src/containers/**/*.js'),
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'statics/js/[name]_[hash:8].js',  // 打包后文件
        // publicPath:'http://www.xhqb.com/'  // 在打包好的资源前面加前缀
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
                use: [
                    __DEV__?'style-loader': MiniCssExtractPlugin.loader,
                    // 这里要区分环境的、不区分环境的话，开发环境下的热更新就失效了。也就是说，当你修改了一个样式文件，不手动刷新的情况下，页面是不会自动变化的了。用style-loader才行
                    // MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "statics/css/[name]_[hash:8].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            inject: true,
            title: 'ManagerWeb'
        })
    ]
}

if(__DEV__){
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
}