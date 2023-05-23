const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const devConfig = require('./webpack.dev')

module.exports = {
  ...devConfig,
  mode: 'production',
  output: {
    path: __dirname + '/build',
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
}
