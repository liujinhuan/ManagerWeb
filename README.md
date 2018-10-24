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

+ 添加页面基本逻辑

+ 添加请求接口、不用isomorphic-fetch的话、也可以用jQuery ajax
npm install --save isomorphic-fetch

fetch的promise还是要看看



1025 
拉个新分支做下面的的事情？？？
添加react-router、redux、多页打包再看看、还有热加载 能不能不用react-hot-loader