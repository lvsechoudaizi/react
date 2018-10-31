/* eslint-disable */
import Loadable from './common/Loadable/Loadable'

/** components */
import AuthRoute from './common/Route/AuthRoute'
import HlButton from './common/Button/HlButton'

const Entry = Loadable({
  loader: () =>
    import(/* webpackChunkName: "router-entry" */ '../components/main/Entry'),
})

const MainRouter = Loadable({
  loader: () =>
    import(/* webpackChunkName: "router-main" */ '../components/router/MainRouter'),
})

export {
  AuthRoute,
  Entry,
  MainRouter,
  HlButton,
}
