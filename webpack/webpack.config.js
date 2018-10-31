/* eslint-disable */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')

const proxy = '192.168.32.104'

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  devtool: 'cheap-module-eval-source-map',
  entry: [
    "@babel/polyfill",
    // 'webpack-dev-server/client?http://localhost:9090',
    // 'webpack/hot/only-dev-server',
    config.dev.entry.app,
  ],
  output: {
    path: config.dev.output.path,
    publicPath: config.dev.output.publicPath,
    filename: 'app.[hash].js',
    chunkFilename: '[name].[chunkhash:4].chunk.js',
  },
  // 在使用import时 可以直接通过别名引入
  resolve: {
    alias: {
      moment$: 'moment/moment.js',
      Styles: config.dev.styleRoot,
      Utils: config.dev.utilRoot,
      Components$: config.dev.componentRoot,
    },
  },
  performance: {
    hints: false,
  },
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    publicPath: '/',
    contentBase: config.root,
    port: config.dev.devServer.port,
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: `http://${proxy}:41000`,
        changeOrigin: true,
      },
      '/res': {
        target: `http://${proxy}:41000`,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less|css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: config.modifyVars,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.dev.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: config.dev.entry.html,
      chunksSortMode: 'none',
    }),
  ],
}
