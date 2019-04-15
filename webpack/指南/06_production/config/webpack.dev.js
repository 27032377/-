const merge = require('webpack-merge');
const base = require('./webpack.base.js');

process.env.NODE_ENV = 'development';

module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/',
        port: 3000,
        inline: true,
        progress: true,
        open: true,
        proxy: {}
    },
    mode: 'development'
})