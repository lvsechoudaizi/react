import React from 'react'
import { Spin, Icon } from 'antd'
import PropTypes from 'prop-types'

const Loading = props => {
  if (props.error) {
    return <h2 className="loadable-loading">加载错误!</h2>
  }
  if (props.timedOut) {
    return <h2 className="loadable-loading">加载中...</h2>
  }
  if (props.pastDelay) {
    return (
      <div className="loadable-loading">
        <Icon type="loading" style={{ fontSize: 36, color: '#fff' }} spin />
      </div>
    )
  }
  return null
}

Loading.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
}

export default Loading
