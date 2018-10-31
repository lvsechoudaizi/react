import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Logo extends Component {
  constructor(props) {
    super(props)
  }

  handleClickLogo = () => {
    const url = '/'
    this.props.history.push(url)
  }

  render() {
    return (
      <div className="hl-logo" onClick={this.handleClickLogo}>
        <img src="/static/img/logo.jpg" alt="" />
        <span>线索云平台</span>
      </div>
    )
  }
}
