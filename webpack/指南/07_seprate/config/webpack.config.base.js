const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlguin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rule: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlguin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].[hash].js'
        })
    ]
}