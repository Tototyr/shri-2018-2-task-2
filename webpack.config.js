const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    contentBase: "./dist",
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
	        "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};