# 指南

## 安装

- 推荐本地安装，更容易升级项目

- 4.0还需额外安装 webpack-cli

```
"script": {
    "build": "webpack --config webpack.config.js"
}
```

## 01_simple

不需要webpack.config.js，终端通过 *npx webpack* 及可完成打包，默认在dist文件夹下生成 main.js

## 02_config

引入了webpack.config.js

## 03_assets

- css-loader、style-loader可以import '*/css'，在index.html的head的style标签中添加了import的css样式。

- image-webpack-loader，url-loader、file-loader可以接收并加载任何文件，如图片、字体等，然后将其输出到构建目录。

## 04_manage_output

- 当entry中有多个入口时，会生成多个打包后的文件

- html-webpack-plugin 会在dist生成一个index.html

## 05_development

- devtool可以映射源码，能够帮助定位错误

- CLI中可以配置webpack-dev-server，如果想要更灵活，可以CLI中"webpack-dev-server --config 配置文件的路径"

## 06_production

> 开发环境(development)和生成环境(production)的构建目标差异很大。在开发环境中个，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module repalcement)的能力的source map和localhost server。而在生产环境中，我们的目标则转向于关注更小bundle，更轻量的source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，建议为每个环境写*彼此独立的webpack*配置。

> 为了遵循不重复原则，保留一个*通用*配置。为了将这些配置合并在一起，使用一个名为*webpack-merge*的工具。通过*通用*配置，不需要在特定环境中配置重复代码。

*babel-loader 7+ 对应 bable-core 6+，babel-loader 8+ 对应 babel-core 7+，目前建议使用前者，安装 babel-preset-env 并在 .babelrc 的 presets 选项中配置*

- babel-loader

编译js文件，babel-loader 8+/7+ 搭配 babel-core 7+/6+，推荐前者

- mini-css-extract-plugin

能够将css文件单独打包成一个块/文件/文件夹，推荐使用，因为extract-text-webpack-plugin在webpack4+中不在更新维护，mini-css-extract-plugin与style-loader有冲突，不需要使用style-loader

```
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader'
            ]
        },{
            test: /.\js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: './css/[name].[hash].css'
    })
]
```