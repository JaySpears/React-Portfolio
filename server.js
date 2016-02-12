var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
});



server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
});
