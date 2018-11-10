const path = require('path')
const webpack = require('webpack')
const BabelMinify = require('babel-minify-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new BabelMinify(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      meta: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        author: 'Ian A. Cook',
        description: 'A set of pure CSS loading spinners.'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
