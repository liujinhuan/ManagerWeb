## 基于react的项目搭建

bogon:~ gl177$ node -v
v8.11.2
bogon:~ gl177$ npm -v
6.1.0


+ npm install --save react - 安装React.
+ npm install --save react-dom 安装React Dom,这个包是用来处理virtual DOM。这里提一下用React Native的话，这里就是安装react-native。
+ npm install --save-dev webpack - 安装Webpack, 现在最流行的模块打包工具.
+ npm install --save-dev webpack-dev-server - webpack官网出的一个小型express服务器，主要特性是支持热加载.


+ 创建index.html和index.js
+ 创建webpack.config.js

新建命令行窗口全局安装webpack
+ sudo npm install webpack -g
+ webpack --version
<!-- yes (安装webpack-cli) -->
+ sudo npm install webpack-cli -g 必须全局安装 
https://blog.csdn.net/qq_33323251/article/details/80453692
否则汇报如下错误
```
{ Error: Cannot find module 'webpack-cli'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at runCommand.then (/usr/local/lib/node_modules/webpack/bin/we
bpack.js:142:5)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
 code: 'MODULE_NOT_FOUND' }
 ```

ERROR in Entry module not found: Error: Can't resolve 'babel-loader' in '/Users/gl177/Documents/BBH/Github/ManagerWeb'

 如上错误需要安装babel：
 + npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save

+ Error: Cannot find module '@babel/core'
https://blog.csdn.net/weixin_43086811/article/details/82154795
    版本不匹配：npm i babel-loader@7.1.5 -D

+ webpack --config webpack/webpack.config.js

双击dist目录下的index.html能看到页面正常显示

+ 提取.babelrc文件
+ npm install html-webpack-plugin --save-dev

+ npm install react-hot-loader --save-dev
+ npm install babel-polyfill --save

+ npm install babel-preset-stage-1 --save　

+ npm install eslint eslint-loader --save-dev
+ npm install babel-eslint --save-dev
+ npm install eslint-config-airbnb --save-dev
+ npm install eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev


+ 新增app.css在app.js中引用，执行npm start 
ERROR in ./src/App.js
Module not found: Error: Can't resolve 'App.css' in '/Users/gl177/Documents/BBH/Github/ManagerWeb/src'

添加loader
+ npm install style-loader css-loader --save-dev
style-loader 用于将css插入到html中
css-loader 用于解析css

+ 添加页面基本逻辑

+ 添加请求接口、不用isomorphic-fetch的话、也可以用jQuery ajax
npm install --save isomorphic-fetch

fetch的promise还是要看看

+ npm install url-loader --save-dev
+ npm install --save-dev mini-css-extract-plugin 拆出css文件为独立的文件

__DEV__?'style-loader':MiniCssExtractPlugin.loader,
// 这里要区分环境的、不区分环境的话，开发环境下的热更新就失效了。也就是说，当你修改了一个样式文件，不手动刷新的情况下，页面是不会自动变化的了。用style-loader才行

所以安装cross-env
+ npm install cross-env --save-dev
+ "start": "cross-env NODE_ENV=development node bin/dev-server",
+ npm start  然后再试试修改css文件的热更新--ok了

+ new MiniCssExtractPlugin({
            filename: "css/[name]_[hash:8].css",
            chunkFilename: "[id].css"
        }), 单独的文件提取出来，需要指定fileName、不用的话 打包不到css里面

+ 图片打包
+ npm i file-loader url-loader --save-dev


+ 引用了scss后
+ npm install postcss-loader node-sass sass-loader --save-dev 这里安装的会比较慢
+ npm install autoprefixer --save-dev

+ resolve . extensions 能够在用户引入的时候不带扩展
<!-- extensions: ['.js', '.scss'], -->


 + "postcss-loader", 添加样式的前缀


## 遇到的问题：
+ 同名的css打包到同一个文件中，后面的把前面的覆盖了
+ 图片并没有单独出一个文件


## 可参考的地址
https://blog.csdn.net/DeepLies/article/details/79005507



1025 
拉个新分支做下面的的事情？？？
添加react-router、redux、多页打包再看看、还有热加载 能不能不用react-hot-loader



接入路由

+ npm install react-router-dom --save

接入redux

+ npm install --save redux
+ npm install --save react-redux