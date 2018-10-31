import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import InfoBar from './header/InfoBar'
import Banner from './header/Banner'
import Navigator from './header/Navigator'
import Logo from "../gadget/Logo";
import { menus } from 'Utils/systemMenus'

@withRouter
@inject('store')
@observer
export default class Header extends Component {

  render() {
    const navMenus = []
    Object.entries(menus).map(([key, value]) => {
      navMenus.push(value)
    });

    return (
      <div className="hl-header">
        <Logo />
        <Navigator menus={navMenus.slice()} />
        <Banner />
        <InfoBar />
      </div>
    )
  }
}
