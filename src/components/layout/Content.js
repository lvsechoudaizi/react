import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return <div className="layout-content">{this.props.children}</div>
  }
}
