const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  //entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.js')
  ],

  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: 'app.[hash].js',
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    })
  ]
}