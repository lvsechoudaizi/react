import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { MainRouter } from 'Components'
import Header from '../layout/Header'
import Content from '../layout/Content'

@inject('store')
@observer
export default class Entry extends Component {
  render() {
    return (
      <div style={{ minWidth: '1600px' }}>
        <Header />
        <Content>
          <MainRouter />
        </Content>
      </div>
    )
  }
}
