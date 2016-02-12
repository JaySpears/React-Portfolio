var path = require('path');
var webpack = require('webpack');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'app/index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    // Require the webpack and react-hot-loader plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new NyanProgressPlugin(),
        new ProgressBarPlugin() 
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    //Loaders for files.
    module: {
        loaders: [
            {
                //Test JSX files.
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            },
            {
                //Test JS files.
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app/')
            },
            {
                //Test SCSS files.
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                //Test images.
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }
        ]
    }
};
