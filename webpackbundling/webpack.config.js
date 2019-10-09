const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    mainTs:'./src/main.ts',
    mainHtml:'./src/index.html'
  },
  resolve: {
    extensions: ['.ts', '.js']
},

  module: {
    rules :[
      {
        test: /\.ts$/,
        use: ['ts-loader','angular2-template-loader']
      },
      {
        test: /\.(html|css)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({  template: './src/index.html' , filename: './index.html' }),
    new MiniCssExtractplugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
  })
  ],
  devServer: {
    historyApiFallback: true
}
}
