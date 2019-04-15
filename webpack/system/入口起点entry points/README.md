# 入口起点(entry points)

## 单个入口语法

用法：entry: string | Array< string >

*webpack.config.js*

```
const config = {
    entry: './path/to/file.js'
};

module.exports = config;
```
entry 属性的单个入口语法，是下面的简写：

```
const config = {
    entry: {
        main: './path/to/file.js'
    }
}
```

> 当向entry属性传入[文件路径(file path)数组]将创建‘多个主入口(multi-main-entry)’。当想要多个依赖文件一起注入，并且将它们的依赖导向(graph)到一个‘chunk’时，传入数组的方式就很有用。

## 对象语法

用法：entry: {[entryChunkName: string]: string | Array< string >}

*webpack.config.js*

```
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
}
```
*对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。*

> ‘可扩展的webpack配置’是指，可重用并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具(如 webpack-merge)将它们合并。

- 从表面上看，这告诉我们webpack从app.js和vendors.js开始创建依赖图。这些依赖图是彼此完全分离、相互独立的。

- 为了支持提供更佳vendor分离能力的DllPlugin，考虑移除该场景。

## 多页面应用程序

*webpack.config.js*

```
const config = {
    entry: {
        pageOne: './src/pageOne/index.js',
        pagTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
}
```

- webpack需要分3个独立分离的依赖图

- 在多页面中，每当页面跳转时，服务器将为你获取一个新的HTML文档。页面重新加载新文档，并且资源被重新下载

- 使用CommonsChunkPlugin为每个页面的应用程序共享代码创建bundle。由于入口起点增多，多页面能够复用入口起点之间的大量代码/模块。