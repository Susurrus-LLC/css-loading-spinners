const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    https: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    hot: true
  }
})
