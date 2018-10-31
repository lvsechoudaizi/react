import React, { Component } from 'react'
import { Button, Popconfirm, Spin, Icon } from 'antd'
import PropTypes from 'prop-types'
import { classnames } from 'Utils/classnames'
import './index.less'

// 将button之间添加间隔
const HlButtonGroup = ({ style, className, children }) => (
  <div
    className={classnames({
      'hl-buttongroup': true,
      [className]: className,
    })}
    style={style || null}
  >
    {React.Children.toArray(children).map(child => {
      const cls = child.props.className
      return React.cloneElement(child, {
        className: `${cls || ''} hl-buttongroup-button`,
      })
    })}
  </div>
)

export default class HlButton extends Component {
  static HlButtonGroup = HlButtonGroup

  static propTypes = {
    type: PropTypes.oneOf(['default', 'hollowOut', 'ghost']), // 实心 / 空心
    color: PropTypes.oneOf([
      'blue',
      'yellow',
      'orange',
      'red',
      'black',
      'green',
      'purple',
      'gray',
    ]),
    popConfirm: PropTypes.object,
    formButton: PropTypes.bool, // 表单按钮 点击后进入提交状态,无法再次点击 需要点击事件返回promise
  }

  static defaultProps = {
    type: 'default',
    color: 'blue',
    className: '',
    formButton: false,
  }

  state = {
    uploading: false,
  }

  calcButtonType = (type, color) => {
    if (type === 'default') {
      return `hl-button-${color}`
    }
    if (type === 'hollowOut') {
      return `hl-button-o-${color}`
    }
  }

  handleFormButtonClick = () => {
    this.setState({
      uploading: true,
    })

    this.props.onClick().finally(() => {
      this.setState({
        uploading: false,
      })
    })
  }

  wrapPopConfirm = button => {
    const { popConfirm } = this.props
    return <Popconfirm {...popConfirm}>{button}</Popconfirm>
  }

  wrapFormButton = button => (
    <Spin
      spinning={this.state.uploading}
      indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
    >
      {React.cloneElement(button, {
        onClick: this.handleFormButtonClick,
      })}
    </Spin>
  )

  render() {
    const {
      type,
      color,
      className,
      popConfirm,
      formButton,
      children,
      ...restProps
    } = this.props
    const buttonClass = this.calcButtonType(type, color)

    let button = (
      <Button className={`${buttonClass} ${className}`} {...restProps}>
        {children}
      </Button>
    )

    if (popConfirm) {
      button = this.wrapPopConfirm(button)
    }

    if (formButton) {
      button = this.wrapFormButton(button)
    }

    return button
  }
}
