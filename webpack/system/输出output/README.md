# 输出(output)

配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。

## 用法(usage)

在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象：

- filename 用于输出文件的文件名

- 目标输出目录 path 的绝对路径

*webpack.config.js*

```
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/public/assets'
    }
};
```
> 此配置将一个单独的bundle.js文件输出到 /home/public/assets 目录中

## 多个入口起点

如果配置创建了多个单独的‘chunk’(例如多入口)，则应该使用占位符来确保每个文件具有唯一的名称

```
// 写入到硬盘：./dist/app.js , ./dist/search.js
const config = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}
```

## 高级进阶

以下是使用 CDN 和资源 hash 的复杂实例

```
output: {
    path: 'home/cdn/assets/[hash]',
    publicPath: 'http://cdn.example.com/assets/[hash]/'
}
```