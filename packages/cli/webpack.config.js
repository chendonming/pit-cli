const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './src/index.js',
    server: './src/server.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [nodeExternals({
    allowlist: ['express', 'cors', 'commander']
  })],
  mode: 'production',
  resolve: {
    extensions: ['.js']
  }
};
