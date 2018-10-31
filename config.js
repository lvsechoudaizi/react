const path = require('path')

module.exports = {
  build: {
    env: {
      NODE_ENV: 'production',
      CLIENT: true,
      SERVER: false,
    },
    entry: {
      app: path.resolve(__dirname, './src/index'),
      vendor: [
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router-dom',
        'mobx',
        'mobx-react',
      ],
      html: path.resolve(__dirname, './index.html'),
      srcRoot: path.resolve(__dirname, './src'),
      staticRoot: path.resolve(__dirname, './static'),
      styleRoot: path.resolve(__dirname, './src/styles'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      staticRoot: path.resolve(__dirname, './dist/static'),
      publicPath: '/',
    },
    plugins: {
      CopyWebpackPlugin: [
        {
          from: path.resolve(__dirname, './static'),
          to: path.resolve(__dirname, './dist/static'),
          ignore: ['html/loading/*.*', 'html/login/*.*'],
        },
      ],
      ReactLoadablePlugin: {
        filename: path.resolve(__dirname, './dist/react-loadable.json'),
      },
    },
  },
  dev: {
    styleRoot: path.resolve(__dirname, './src/styles'),
    utilRoot: path.resolve(__dirname, './src/utils'),
    componentRoot: path.resolve(__dirname, './src/components/components.js'),
    env: {
      NODE_ENV: 'development',
      PRODUCTION_ENV: 'production',
      CLIENT: true,
      SERVER: false,
    },
    devServer: {
      port: 8080,
    },
    entry: {
      app: path.resolve(__dirname, './src/index'),
      ssrApp: path.resolve(__dirname, './src/server/index'),
      html: path.resolve(__dirname, './index.html'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
  },
  root: path.resolve(__dirname),
  modifyVars: {
    'icon-url': "'/static/antd/iconfont/iconfont'",
    '@border-radius-base': '2px',
    '@form-item-margin-bottom': '12px',
  },
}
