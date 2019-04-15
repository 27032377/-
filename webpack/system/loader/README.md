# loader

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或‘加载’模块时预处理文件。loader 可以将文件从不同的语言转换为 JavaScript，或将内敛图像转换为 data URL。

## 使用loader

在应用程序中，有三种使用 loader 的方式：

- 配置(推荐)：在 webpack.config.js 文件中指定 loader

- 内联：在每个 import 语句中显示指定 loader

- CLI：在 shell 命令中指定它们

### 配置

module.rules 允许在 webpack 配置中指定多个 loader

```
module: {
    rules: [
        test: /\.css$/,
        use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    ]
}
```

## loader特性

- loader支持链式传递。能够对资源使用流水线。一组链式的loader将按照相反的顺序执行。loader链中的第一个loader返回值给下一个loader。在最后一个loader，返回webpack所预期的JavaScript。

- loader可以是同步的，也可以是异步的。

- loader运行在node.js中，并且能够执行任何可能的操作。

- loader接收查询参数。用于对loader传递配置。

- loader能够使用options对象进行配置。

- 除了使用package.json常见的main属性，还可以将普通的npm模块导出为loader，做法是在package.json里定义一个loader字段。

- 插件plugin可以为loader带来更多特性。

- loader能够产生额外的任意文件。