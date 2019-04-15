const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

process.env.NODE_ENV = 'development';

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        inline: true,
        port: 3001,
        progress: true,
        open: true,
        contentBase: '/',
        proxy: {}
    }
})