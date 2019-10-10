const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const path = require('path');
const helpers = require('./helpers.js');
const commonConfig = require('./webpack.config.common');
const webpackmerge = require('webpack-merge');


module.exports = webpackmerge(commonConfig,{
  mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true
    },
    module: {
      rules: [
          {
              test: /\.ts$/,
              loaders: [
                  {
                      loader: 'awesome-typescript-loader',
                      options: {
                          configFileName: helpers.root('tsconfig.json')
                      }
                  },
                  'angular2-template-loader',
                  'angular-router-loader'
              ],
              exclude: [/node_modules/]
          }
      ]
  },
  plugins: [
    new HtmlWebPackPlugin({  template: './src/index.html'}),
    new MiniCssExtractplugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
  })
  ],
  devServer: {
    historyApiFallback: true
}
}
)
