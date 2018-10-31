import React, { PureComponent } from 'react'
import { Badge, Icon, Menu, Dropdown } from 'antd'
import PropTypes from 'prop-types'

export default class InfoBar extends PureComponent {
  renderLeft = () => {
    const menu = (
      <Menu>
        <Menu.Item>
          <a>注销</a>
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} placement="bottomRight">
        <a className="ant-dropdown-link" href="#">
          <img src="/static/img/avatar.png" />
          <span className="username-box">admin</span>
          <Icon type="down" />
        </a>
      </Dropdown>
    )
  }

  renderRight = () => (
    <div className="hl-message">
      <div className="msg-icon" title="未读消息">
        <img src="/static/img/message.png" />
        <Badge count={1} />
      </div>
      <div className="check-icon" title="未批审核">
        <img src="/static/img/check.png" />
        <Badge count={2} />
      </div>
    </div>
  )

  render() {
    return (
      <div className="infobar">
        {this.renderRight()}
        <div className="hl-avatar">{this.renderLeft()}</div>
      </div>
    )
  }
}
