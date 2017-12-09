const path = require('path');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'app');
const entry = path.resolve(__dirname, 'app', 'index.js');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    entry,
  ],
  output: {
    path: buildPath,
    filename: 'reduceToSingleDigit.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'reduceToSingleDigit',
  },
  externals: {
    immutable: {
      commonjs: 'immutable',
      commonjs2: 'immutable',
      amd: 'immutable',
      root: 'Immutable',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  resolve: {
    alias: { // can do import Main from Components/Main/; instead of full path
      App: path.resolve(__dirname, 'app'),
      Utils: path.resolve(__dirname, 'app', 'utils'),
    },
    extensions: ['.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['env', 'stage-1'],
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
