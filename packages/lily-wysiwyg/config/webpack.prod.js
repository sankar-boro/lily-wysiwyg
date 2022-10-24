const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const precss = require('precss');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'lily-wysiwyg.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer, precss],
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer, precss],
      },
    })
  ],
}