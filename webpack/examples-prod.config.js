var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

var config = {
  devtool: 'source-map',
  entry: './src/examples/index',
  output: {
    path: path.join(__dirname, '../examples'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
        include: path.resolve(__dirname, '../src/examples/scss')
      }
    ]
  },
  resolve: {
    alias: {
      'smooth-jumper': path.resolve(__dirname, '../src/smooth-jumper.js')
    }
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('../examples/style.css', {
      allChunks: true
    })
  ]
};

module.exports = config;
