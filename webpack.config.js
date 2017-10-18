const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const ASSETS_DIR = `${BUILD_DIR}/assets`;

const plugins = [
  new webpack.optimize.CommonsChunkPlugin(
    { name: 'vendor', minChunks: Infinity }
  ),
  new HtmlWebpackPlugin(
    {
      filename: '../index.html',
      template: `${APP_DIR}/index.html`
    }
  )
];

const config = {
  entry: {
    vendor: [
      'react', 'react-dom'
    ],
    app: APP_DIR + '/browser.js'
  },
  output: {
    path: ASSETS_DIR,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins
};

const serverConfig = {
  entry: './src/server.js',
  output: {
    path: BUILD_DIR,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = [serverConfig, config];
