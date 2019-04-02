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