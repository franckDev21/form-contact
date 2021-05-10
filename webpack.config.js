const path    = require('path')
const webpack = require('webpack')

module.exports = {
    entry: path.resolve('assets/index.js'),
    watch: true,
    output: {
        path: path.resolve('./dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:['babel-loader']
            }
        ]
    },
    mode:'development'
}