var path = require('path');
var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/index.js'),
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=25000'
      }
    ],
  },
  mode: 'development',
  devServer: {
    port: 8080, // 设置监听端口（默认的就是8080）
    hot: true,
    inline: true,
    publicPath: '/',
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true // 不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
  }
}