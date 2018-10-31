import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

@withRouter
export default class Navigator extends Component {
  static propTypes = {
    menus: PropTypes.array,
  }

  static defaultProps = {
    menus: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      activeItemKey: this.pathNameKey(),
    }
  }

  pathNameKey = () => {
    let path = this.props.history.location.pathname
    const endIndex = path.indexOf('/', 1)
    if (endIndex !== -1) {
      path = path.substring(0, endIndex)
    }
    if (path === '/home') {
      path = '/'
    }
    return path
  }

  handleMenuClick = e => {
    const { key } = e
    if (key) {
      this.props.history.push(key)
    }
    this.setState({
      activeItemKey: key,
    })
  }

  renderMenuItem = items =>
    items.map(item => <Menu.Item key={item.url}>{item.nodeName}</Menu.Item>)

  render() {
    return (
      <div className="hl-navigator">
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[this.state.activeItemKey]}
          mode="horizontal"
        >
          {this.renderMenuItem(this.props.menus)}
        </Menu>
      </div>
    )
  }
}
