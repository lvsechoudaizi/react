import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './App'
import stores from './stores/stores'
import './styles/main.less'
import Loadable from './components/common/Loadable/Loadable'

const AsyncApp = Loadable({
  loader: () => import(/* webpackChunkName: "loadable-test" */ './App'),
})

moment.locale('zh-cn')

const renderApp = () => {
  render(
    <Provider store={stores}>
      <LocaleProvider locale={zhCN}>
        <Router>
          <AsyncApp />
        </Router>
      </LocaleProvider>
    </Provider>,
    document.getElementById('root')
  )
}

function run() {
  renderApp(App)
  if (module.hot) {
    module.hot.accept('./App', () => {
      renderApp(App)
    })
  }
}

run()
