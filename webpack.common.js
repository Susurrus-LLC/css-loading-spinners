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
      title: 'Production'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  rules: [
    {
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
