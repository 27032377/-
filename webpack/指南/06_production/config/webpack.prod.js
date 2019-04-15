const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.base.js');

process.env.NODE_ENV = 'production';

module.exports = merge(base, {
    plugins: [
        new UglifyJsPlugin()
    ],
    mode: 'production'
})