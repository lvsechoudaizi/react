import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { MainRouter } from '../components'
import Header from '../layout/Header'
import Content from '../layout/Content'
import Marquee from '../layout/Marquee'

@inject('store')
@observer
export default class Entry extends Component {
  render() {
    return (
      <div style={{ minWidth: '1600px' }}>
        <Header />
        <Marquee />
        <Content>
          <MainRouter />
        </Content>
      </div>
    )
  }
}
