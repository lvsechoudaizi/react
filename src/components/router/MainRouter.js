import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../main/home/Home'
import clueManege from '../main/manage/ClueManage'

export default class MainRouter extends Component {
  render() {
    return [
      <Route path="/" component={Home} key="home" />,
      <Route path="/clue" component={clueManege} key="manage" />,
    ]
  }
}
