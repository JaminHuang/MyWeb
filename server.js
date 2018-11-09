/*
* 创建时间：2018年11月7日 14:31:23
* 作者：JaminHuang
* 描述：主服务文件
* */
'use strict';
let open = require('open');
let webpack =require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.js');

let compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    filename: "index.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    headers: {"X-Custom-Header": "yes"},
    stats: {colors: true}
});

server.listen(3000, function (err, result) {
    if (err)console.log(err);
    open('http://localhost:3000');
});