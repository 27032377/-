const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        inline: true,
        progress: true,
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}