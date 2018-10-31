import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class HlRoute extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Route {...this.props} />
  }
}
