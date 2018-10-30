import React from 'react'
import { render } from 'react-dom'
// import { hot } from 'react-hot-loader'
import 'babel-polyfill'
import App from './App'

const renderDom = Component => {
  render(<Component />, document.getElementById('app'))
}
renderDom(App)

if (module.hot) {
  console.log(11)
  module.hot.accept('./App', () => {
    /* const App = require('./app').default */
    renderDom(App)
  })
}
