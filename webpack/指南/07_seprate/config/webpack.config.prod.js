const merge = require('webpack-merge');
const Uglify = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config.base.js');

process.env.NODE_ENV = 'production';
module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new Uglify()
    ]
})