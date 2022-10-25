const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const precss = require('precss');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 2000,
    historyApiFallback: true
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'lily-wysiwyg.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('sankar'),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer, precss],
      },
    })
  ],
}