# README

## 常见插件类 Plugins

*仅支持webpack3.0，用mini-css-extract-plugin替代，不需要style-loader，有冲突*

- extract-text-webpack-plugin 能够将css文件打包成一个单独文件(夹)

```
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './dist/css/[name].[hash].bundle.css'
        })
    ]
}
```

*更多参见 [npmjs]([github](https://www.npmjs.com/package/extract-text-webpack-plugin))*

- html-webpack-plugin

将原有的index.html替换生成新的index.html

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

## 安装

- 最好安装在本地，有利于项目更新

- 4.0 额外安装 webpack-cli