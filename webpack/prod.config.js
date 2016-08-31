var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

var config = {
  entry: './src/smooth-jumper',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: process.env.NODE_ENV === 'production' ? 'smooth-jumper.min.js' : 'smooth-jumper.js',
    libraryTarget: 'umd',
    library: 'smoothJump'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../src')
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

module.exports = config;
