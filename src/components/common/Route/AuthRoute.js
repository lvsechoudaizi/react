import React, { PureComponent } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { LINK } from 'Utils/constants'

/**
 * 权限路由
 * 限制用户的路由访问权限
 */

@inject(({ store }) => ({ store: store.appStore }))
@withRouter
export default class AuthRoute extends PureComponent {
  static propTypes = {
    auth: PropTypes.string,
  }

  checkIsLogin() {
    const { isLogin } = this.props.store
    return isLogin
  }

  checkHasAuth() {
    const { auth } = this.props
    if (auth) {
      return this.props.store.hasAuth(auth)
    }
    return true
  }

  render() {
    const from = this.props.location.pathname
    if (!this.checkIsLogin()) {
      return (
        <Redirect
          to={{
            pathname: LINK.LOGIN,
            state: { from },
          }}
        />
      )
    }

    if (!this.checkHasAuth()) {
      const { action } = this.props.history
      if (action === 'PUSH') {
        this.props.history.goBack()
      } else if (action === 'POP') {
        const { match } = this.props
        this.props.history.push(match.path)
      }
      return null
    }

    return <Route {...this.props} />
  }
}
