# 插件(plugins)

插件目的在于解决loader无法实现的其他事。

## 剖析

webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。

*ConsoleLogOnBuildWebpackPlugin.js*

```
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply (compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log('webpack 构建过程开始！');
        });
    }
}
```

## 用法

由于插件可以携带参数/选项，在webpack配置中，向 plugin 属性传入 new 实例

## 配置

*webpack.config.js*

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './path/entry/file.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({template: './src/index.html'})
    ]
}

module.exports = config;
```