'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    angular2: [
      'zone.js',
      'reflect-metadata',
      'rtts_assert/rtts_assert',

      'angular2/angular2',
      'angular2/router'
    ],
    styles: [
      './src/styles/styles'
    ],
    app: [
      './src/app/bootstrap'
    ]
  },

  output: {
    path: path.join(__dirname, 'public', '__build__'),
    filename: '[name].js',
    // filename: '[name].[hash].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: __dirname,
    extensions: [
      '',
      '.ts',
      '.js',
      '.json',
      '.webpack.js',
      '.web.js',
      '.scss'
    ],
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      'app': 'src/app'
    }
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.ts$/,
        loader: 'typescript-simple'
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'ENV': {
        'type': JSON.stringify('development'),
        'debug': true
      }
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("styles.css")
  ],

  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: 'public',
    publicPath: '/__build__',
    port: 9000
  },

  debug: true,
  cache: true,

  context: __dirname,

  stats: {
    colors: true,
    reasons: true
  }
};
