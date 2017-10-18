const path = require('path');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, 'dist');

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

module.exports = serverConfig;
