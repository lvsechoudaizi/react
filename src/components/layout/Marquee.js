import React, { Component } from 'react'
import { Button } from 'antd'

export default class Marquee extends Component {
  render() {
    return (
      <div className="hl-marquee">
        <p>系统</p>
        <marquee>
          arquee标签并不是W3C官方推荐的标签，但是这个标签在各个浏览器中都非常支持。
        </marquee>
        <Button>刷新</Button>
      </div>
    )
  }
}
