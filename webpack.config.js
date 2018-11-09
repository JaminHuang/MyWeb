/**
 * 创建时间：2018年11月7日 14:33:08
 * 作者：JaminHuang
 * 描述：调试配置文件
 */
'use strict';
let path = require('path');
let webpack = require('webpack');

let config = {
    devtool: 'source-map',
    entry: {
        app: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './src/index']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        chunkFilename: '[id].chunk.js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style/useable', 'css']},
            {test: /\.(png|jpg|woff2|gif|woff|svg|eot|ttf)$/, loader: 'url-loader?limit=8192'},
            {test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src')}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': true
            }
        })
    ]
};
module.exports = config;