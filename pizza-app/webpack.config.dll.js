const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    vendor: [path.join(__dirname, 'vendor.js')],
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'vendor', '[name]-manifest.json'),
      name: '[name]',
    }),
  ],
};
