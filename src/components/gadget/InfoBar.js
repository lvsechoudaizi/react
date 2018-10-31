import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class InfoBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, subTitle, backgroundColor } = this.props
    return (
      <div className="info-bar" style={{ backgroundColor }}>
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>
    )
  }
}
