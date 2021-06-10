const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.tsx'],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: `[name].bundle.js?v=${pkg.version}`,
    publicPath: '/',
  },
  stats: { warnings: false },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|eot)$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/images/',
              publicPath: './static/images',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    open: true,
    useLocalIp: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor/vendor-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './build/vendor.js'),
    }),
  ],
};
