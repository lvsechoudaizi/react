/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Entry } from './components/components'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route path="/" component={Entry} />
      </Switch>
    )
  }
}
