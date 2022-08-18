const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack for the NodeJS
  target: 'node',

  // Tell webpack the root file of our application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to exclude node libraries in server side bundle
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
