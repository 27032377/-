module.exports = {
    entry: __dirname + "/src/main.js", // 唯一入口文件
    output: {
        path: __dirname + "/public", // 打包后的文件存放路径
        filename: "bundle.js" // 打包后输出文件的文件名
    },
    devtool: 'eval-source-map', // 提供对应编译源文件
    devServer: {
        /**
         * 默认webpack-dev-server会为根文件夹提供本地服务
         * 如果想为另一个目录下的文件提供本地服务器
         * 应该在这里设置起所在目录
         */
        contentBase: './public',
        // 设置默认监听端口，如果省略，默认为8080
        port: '8080',
        // 当源文件改变时会自动刷线页面
        inline: true,
        // 在开发SPA时有用，它依赖于H5 history API
        // 如果设置为true，所有的跳转将指向index.html
        historyApiFallback: true
    }
}