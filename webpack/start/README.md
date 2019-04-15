# webpack for practise

## 准备

- npm int -y 生成package.json

- npm install webpack --save-dev 安装webpack本地依赖

- src/index.html 用于引入打包后的js文件(bundle.js)

- npm install webpack-dev-server 使用webpack构建本地服务器

## 正式使用

- webpack.config.js进行配置

- 配置完entry & output 终端输入命令webpack即可打包

## 更快捷的执行打包任务

- package.json中script中提供键值对"xx": "webpack"可以使用npm来打包

## webpack的强大功能

### 生成Source Maps(使调试更容易)

打包后的文件，是不容易找到出错了的地方，对应写的代码的位置的，source map就是解决这个问题的，提供一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，更容易调试

### 使用webpack构建本地服务器

这个本地服务器基于node.js构建，package.json的script中"xx": "webpack-dev-server --open"

### loaders

loaders需要单独安装并且需要在webpack.config.js中的modules关键字下进行配置，loaders的配置包括以下几个方面：

- test：一个用以匹配loaders所处理文件的拓展名的正则，required

- loader：loader的名称，required

- inclued/exclude：手动添加必须处理的文件(文件夹)或屏蔽不需要处理的文件(文件夹)

- query：为loaders提供额外的设置选项

### Babel 编译JavaScript的平台

Babel其实可以完全在webpack.config.js中进行配置，但是考虑到babel具有非常多的配置选项，在单一的webpack.config.js文件中进行配置往往使得这个文件显得太复杂。因此，将babel的配置放在一个单独名为'.babelrc'的配置文件中。webpack会自动调用.babelrc里的babel配置项。

### 一切皆模块

webpack把所有文件都当做模块来处理

#### Css

css-loader能够使用类似@import和URL(...)的方法实现require()的功能，style-loader将所有的计算后的样式加入页面中。

#### Css预处理器

css的处理平台-postCSS

- npm install postcss-loader autoprefixer --save-dev

### 插件(Plugins)

插件(Plugins)是用来拓展webpack功能的，它们会在整个构建过程中生效，执行相关的任务。