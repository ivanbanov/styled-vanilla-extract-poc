const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devConfig = require('./webpack.dev')

module.exports = {
  ...devConfig,
  mode: 'production',
  output: {
    path: __dirname + '/build',
  },
}
